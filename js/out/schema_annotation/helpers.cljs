(ns schema-annotation.helpers
  (:require [clojure.string :as str]
            [intervals.core :as i]
            [intervals.spelled :as spelled]))

(def xml-test "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>
<!DOCTYPE score-partwise PUBLIC
    \"-//Recordare//DTD MusicXML 3.1 Partwise//EN\"
    \"http://www.musicxml.org/dtds/partwise.dtd\">
<score-partwise version=\"3.1\">
  <part-list>
    <score-part id=\"P1\">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id=\"P1\">
    <measure number=\"1\">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
</score-partwise>")

;; js/html utilities
;;;;;;;;;;;;;;;;;;;;

(defn make-js-link
  "Creates an event handler for <a> elements that prevents the href from being followed."
  [f]
  (fn [e]
    (.preventDefault e)
    (f)
    false))

;; input type=file utilities
;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn get-file [file-input]
  (-> file-input .-files (aget 0)))

(defn get-filename [file-input]
  (when file-input
    (let [res (-> file-input .-value (str/split #"(\\|/)") last)]
      res)))

(defn load-from-file!
  ([atom file]
   (load-from-file! atom file (fn [atm fl] fl)))
  ([atom file f]
   (let [reader (new js/FileReader)]
     (set! (.-onload reader)
           (fn [e]
             (swap! atom f (.. e -target -result))))
     (.readAsText reader file))))

;; schemata
;;;;;;;;;;;

(defn map-schema
  "Maps a function over a schema or schema instance."
  [f schema]
  (vec (for [stage schema]
           (vec (for [note stage]
                  (f note))))))

(defn lookup-schema
  "Substitutes note IDs in `schema` by actual notes taken from `notes`.
  Sorts each stage by pitch.
  Returns `nil` if an ID cannot be found in `note`."
  [schema notes]
  (let [mapped (map-schema #(assoc (notes %) :id %) schema)]
    (when-not (some #(some (comp nil? :pitch) %) mapped)
      (mapv #(vec (sort-by :pitch %)) mapped))))

(defn schema-ids
  "Replaces the notes in `schema` with their IDs."
  [schema]
  (map-schema :id schema))

(defn rel-schema
  "Converts `schema` from note to interval representation."
  [schema]
  (let [ref (first (remove nil? (map #(get-in % [0 :pitch]) schema)))]
    (if ref
      (map-schema #(i/ic (i/p-p (:pitch %) ref)) schema)
      schema)))

(defn mark-implicit [prev-stage stage]
  (if prev-stage
    ;; make note optional if it stays wrt the previous stages
    (mapv (fn [note prev] {:int note :opt (= note prev)}) stage prev-stage)
    (mapv (fn [note] {:int note :opt false}) stage)))

(defn match-schema
  "Tries to match `instance` to `pattern`.
  Returns a list of stages which contains for each stage one of the following return values:
  `true`, if the stage matches;
  `:toofew`, if the stage has too few notes;
  `:toomany`, if the stage has too many notes;
  `:mismatch`, if the stage does not match the pattern."
  [instance pattern]
  ;; find out which notes may be implicit (because present/held over from the previous stage)
  (let [pattern-imp (mapv mark-implicit (cons nil pattern) pattern)]
    ;; try to match using backtracking
    (letfn [(find-issues [inst-stage pattern-stage]
              (let [nexti (first inst-stage)
                    nextp (first pattern-stage)
                    resti (rest inst-stage)
                    restp (rest pattern-stage)]
                (cond
                  (and (nil? nexti) (nil? nextp)) ;; nothing left?
                  true ;; match!
                  (and (some? nexti) (nil? nextp)) ;; notes left in instance but not in pattern?
                  :toomany ;; too many notes in instance
                  (some? nextp) ;; notes left in pattern?
                  (let [direct-matching (when (= nexti (:int nextp))
                                          (find-issues resti restp))]
                    (if (:opt nextp) ;; -> pattern note optional?
                      ;; opt? either match directly or skip
                      (if (true? direct-matching)
                        true
                        (find-issues inst-stage restp))
                       ;; not opt? must match directly
                      (or direct-matching (if (nil? nexti) :toofew :mismatch)))))))]
      (map (fn [inst-stage pattern-stage]
             (if (empty? inst-stage)
               :toofew ;; empty stage would break the check
               (find-issues inst-stage pattern-stage)))
           instance pattern-imp))))

(defn match-to-error-msg
  "Returns a string describing the results of matching a schema to a pattern per stage."
  [stages]
  (some identity
   (map-indexed (fn [i err]
                  (when-not (true? err)
                    (str "stage " (inc i) " "
                         (case err
                           true nil
                           :toomany "has too many notes"
                           :toofew "has too few notes"
                           :mismatch "doesn't match"
                           "has an unknown problem"))))
                stages)))

(defn stages-separate?
  "Returns true iff there exists a choice of onsets and offsets
  such that the stages of `schema` do not overlap."
  [schema]
  ;; inner recursion function that implements backtracking
  (letfn [(no-overlap? [lower stage-off notes stages]
            (if (empty? notes)
              ;; stage completed
              (if (empty? stages)
                ;; done: found a valid choice of notes
                true
                ;; proceed to next stage
                (no-overlap? stage-off stage-off (first stages) (rest stages)))
              ;; stage incomplete: proceed with notes in stage
              (let [note (first notes)
                    rest-notes (rest notes)]
                ;;(pr "Note " (:onset note) (:offset note))
                ;; test all onset-offset options for the current note
                (some true? (for [[on off] (map vector (:onset note) (:offset note))
                                  :when (>= on lower)]
                              (do
                                ;;(pr "Selecting for " (:pitch note) ": " on " " off)
                                (no-overlap? lower (max stage-off off) rest-notes stages)))))))]
    (let [lower0 (reduce min (map #(reduce min (:onset %)) (first schema)))]
      (no-overlap? lower0 lower0 nil schema))))

(defn potential-overlap?
  "Checks if the stages in `schema` overlap
  according to the first onset-offset pair for each note."
  [schema]
  (letfn [(overlap? [lower stages]
            (if (empty? stages)
              false
              (let [stage (first stages)
                    rest-stages (rest stages)
                    stage-on (reduce min (map #(first (:onset %)) stage))
                    stage-off (reduce max (map #(first (:offset %)) stage))]
                (if (> lower stage-on)
                  true
                  (overlap? stage-off rest-stages)))))]
    (overlap? nil schema)))

(defn normalize-pattern
  "Normalizes `pattern` as relative to the first bass pitch."
  [pattern]
  (let [ref (get-in pattern [0 0])]
    (map-schema #(i/i- % ref) pattern)))

(defn parse-pattern
  "Parses and normalizes `pattern` represented in interval notation."
  [pattern]
  (normalize-pattern (map-schema spelled/parse-sic pattern)))

(def test-schema [["n1" "n2"] ["n3" "n4"]])

(def test-notes
  (let [notes {"n1" {:pitch "G4" :onset [0] :offset [1]}
               "n2" {:pitch "C#4" :onset [0.5] :offset [1]}
               "n3" {:pitch "D4" :onset [1] :offset [2]}
               "n4" {:pitch "F4" :onset [1] :offset [2]}}]
    (into {} (for [[k v] notes] [k (update v :pitch spelled/parse-spelled-p)]))))

(defn poly-str
  "Converts a polygram of note ids into a string representation"
  [poly]
  (str/join ";" (map #(str/join "," %) poly)))

(defn parse-poly
  "Converts a string representation of a polygram as ids into a polygram"
  [polystr]
  (let [poly (mapv
              #(mapv str/trim (str/split % #","))
              (str/split polystr #";"))]
    (if (empty? (str/trim polystr))
      nil
      poly)))
