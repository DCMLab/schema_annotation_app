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
  (let [ref (get-in schema [0 0 :pitch])]
    (map-schema #(i/ic (i/p-p (:pitch %) ref)) schema)))

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
