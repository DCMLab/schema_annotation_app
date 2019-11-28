(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]))

(defonce state (r/atom {:score-xml ""
                        :instances (sorted-map)}))

(defn create-suggestions [json-string]
  (let [json (.parse js/JSON json-string)
        groups (aget json "groups")]
    (pr (aget json "piece"))
    ;;(pr (first groups))
    ;;(sorted-map)
    (into (sorted-map)
          (for [[i alternatives] (map-indexed vector groups)]
            {i (annotate/new-automatic-instance (js->clj alternatives))}))))

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:instances])]
    (fn []
      [:div
       ;; (str @instances)
       [:h1 "Schema Annotation"]
       
       ;; score file input
       [:input
        {:type "file"
         :accept ".xml,.musicxml"
         :multiple false
         :on-change (fn [ev]
                      (let [files (.. ev -target -files)]
                        (h/load-from-file! score (aget files 0))))}]
       
       ;; suggestion file input
       [:input
        {:type "file"
         :accept ".json"
         :multiple false
         :on-change (fn [ev]
                      (let [files (.. ev -target -files)]
                        (h/load-from-file! instances (aget files 0) create-suggestions)))}]
       ;; TODO: pattern is a placeholder, should be nested list
       [annotate/annotation-comp [1 2 3 4 5 6 7 8 9] @score instances]
       ;; [vrv/verovio-example-comp]
       [kb/keyboard-listener]
       ])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (reload))

(init!)
