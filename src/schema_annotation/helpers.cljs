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

;; others
;;;;;;;;;

(defn download-as-json! [value filename]
  (let [blob (js/Blob. #js [(.stringify js/JSON (clj->js value))]
                       #js {:type "application/json"})
        link (.createElement js/document "a")
        url (.createObjectURL js/URL blob)]
    (set! (.-href link) url)
    (set! (.-download link) filename)
    (.appendChild (.-body js/document) link)
    (.click link)
    (.removeChild (.-body js/document) link)
    (.revokeObjectURL js/URL url)))

;; schemata
;;;;;;;;;;;

(defn map-schema [f schema]
  (vec (for [stage schema]
           (vec (for [note stage]
                  (f note))))))

(defn rel-schema [schema]
  (let [ref ((schema 0) 0)]
    (map-schema #(i/i- % ref) schema)))

(defn parse-pattern [pattern]
  (rel-schema (map-schema spelled/parse-sic pattern)))
