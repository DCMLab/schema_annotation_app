(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            ))
  
(defn schema-annotation-app []
  [:div
   [:h1 "Schema Annotation"]
   [vrv/verovio-example]
   ])

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (reload))

(init!)

(js/console.log "Hello!")
