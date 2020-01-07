(ns schema-annotation.io
  (:require [schema-annotation.annotate :as annotate]
            [intervals.core :as i]
            [intervals.spelled :as isp]))

;; parsing loaded files
;;;;;;;;;;;;;;;;;;;;;;;

(defn parse-groups [json-groups]
  (into (sorted-map)
        (for [[i alternatives] (map-indexed vector json-groups)]
          {i (annotate/new-automatic-instance (js->clj alternatives))})))

(defn load-suggestions! [state json-string]
  (let [json (.parse js/JSON json-string)
        groups (aget json "groups")
        piece (aget json "piece")
        schema (aget json "schema")]
    (assoc state
           :piece piece
           :schema schema
           :instances (parse-groups groups))))

(defn parse-notes [json-string]
  (letfn [(parse-frac [obj]
            (/ (js/parseInt (aget obj "n"))
               (js/parseInt (aget obj "d"))))
          
          (add-note [note-map note]
            (let [id (aget note "id")
                  on (parse-frac (aget note "on"))
                  off (parse-frac (aget note "off"))
                  pitch (isp/parse-spelled-p (aget note "p"))]
              (if (contains? note-map id)
                (update note-map id (partial merge-with conj) {:onset on :offset off})
                (assoc note-map id {:onset [on] :offset [off] :pitch pitch}))))]
    
    (let [json (.parse js/JSON json-string)]
      (reduce add-note {} json))))

(defn load-notes! [state json-string]
  (assoc state :notes (parse-notes json-string)))

;; download
;;;;;;;;;;;

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

(defn download-annotations! [state]
  (let [inst (:instances state)
        annots (vec (map annotate/get-stages (vals inst)))
        piece (:piece state)
        schema (:schema state)
        out {:instances annots
             :piece piece
             :schema schema}]
    (download-as-json! out (str piece "_" schema ".json"))))
