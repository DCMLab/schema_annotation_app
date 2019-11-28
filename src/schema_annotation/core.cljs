(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]))

(defonce state (r/atom {:score-xml ""
                        :instances (sorted-map)
                        :piece ""
                        :schema ""}))

(defn load-suggestions! [state json-string]
  (let [json (.parse js/JSON json-string)
        groups (aget json "groups")
        piece (aget json "piece")
        schema (aget json "schema")]
    ;;(pr (aget json "piece"))
    ;;(pr (first groups))
    ;;(sorted-map)
    (assoc state
           :piece piece
           :schema schema
           :instances
           (into (sorted-map)
                 (for [[i alternatives] (map-indexed vector groups)]
                   {i (annotate/new-automatic-instance (js->clj alternatives))})))))

(defn download-annotations! [state]
  (pr (:piece @state))
  (let [inst (:instances @state)
        annots (vec (map annotate/get-stages (vals inst)))
        piece (:piece @state)
        schema (:schema @state)
        out {:instances annots
             :piece piece
             :schema schema}
        ;;json (js/JSON.stringify (clj->js out))
        ]
    (h/download-as-json! out (str piece "_" schema ".json"))
    ;;(pr json)
    ))

(defn file-io-comp [score state]
  
  ;; local state: refs to file inputs (normal clojure atoms!)
  (let [node-score (atom nil)
        node-suggest (atom nil)
        fn-score (r/atom nil)
        fn-suggest (r/atom nil)]
    
    ;; render function
    (fn [score state]
      [:div
       [:form.pure-form
        [:legend "Input / Output"]]

       [:div.pure-g
        ;; score file input

        [:label.pure-button.pure-u-1-5
         (or @fn-score "Select Score")
         [:input.file-input
          {:type "file"
           :accept ".xml,.musicxml"
           :multiple false
           :ref #(reset! node-score %)
           :on-change #(reset! fn-score (h/get-filename (.-target %)))
           #_(fn [ev]
               )}]]
        
        ;; suggestion file input
        
        [:label.pure-button.pure-u-1-5
         (or @fn-suggest "Select Suggestions")
         [:input.file-input
          {:type "file"
           :accept ".json"
           :multiple false
           :ref #(reset! node-suggest %)
           :on-change #(reset! fn-suggest (h/get-filename (.-target %)))
           #_(fn [ev]
             (let [files (.. ev -target -files)]
               (h/load-from-file! state (aget files 0) load-suggestions!)))}]]
        
        [:a.pure-button.pure-button-primary.pure-u-1-5
         {:on-click (fn []
                      (h/load-from-file! score (h/get-file @node-score))
                      (h/load-from-file! state (h/get-file @node-suggest) load-suggestions!))}
         "Load Files"]
        
        [:div.pure-u-1-5]
        
        [:a.pure-button.pure-u-1-5
         {:on-click #(download-annotations! state)}
         "Download Annotations"]]
       ])))

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:instances])]
    (fn []
      [:div
       ;; (str @instances)
       [:h1 "Schema Annotation"]
       
       [file-io-comp score state]
    
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
