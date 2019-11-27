(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.manual :as manual]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]))

(defonce state (r/atom {:score-xml ""
                        :manual-inst (sorted-map)}))

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:manual-inst])]
    (fn []
      [:div
       (str @instances)
       [:h1 "Schema Annotation"]
       [:input
        {:type "file"
         :accept ".xml,.musicxml"
         :multiple false
         :on-change (fn [ev]
                      (let [files (.. ev -target -files)]
                        (h/load-from-file! score (aget files 0))))}]
       [manual/manual-annotation-comp [1 2 3 4 5 6 7 8 9] @score instances]
       ;; [vrv/verovio-example-comp]
       [kb/keyboard-listener]
       ])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (reload))

(init!)
