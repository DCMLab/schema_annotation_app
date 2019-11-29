(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]
            [markdown-to-hiccup.core :as md]))

(defonce state (r/atom {:score-xml ""
                        :instances (sorted-map)
                        :piece ""
                        :schema ""}))

;; manual component
;;;;;;;;;;;;;;;;;;;

(def manual-text (md/component (md/md->hiccup "
1. Select a score (musicxml) and an annotation file (groups/<schema>),
   then click on \"Load Files\".
2. Select an instance from the list.
3. For each instance, either select one of the suggested \"automatic\" alternatives,
   or switch to a \"manual\" instance and edit each stage of the preselected match.
4. You can delete clearly invalid instances,
   and add new instances where no suggestion exists.
5. When you are happy with your annotations, click on \"Download Annotations\"

Shortcuts:
- `left`/`right` for turning pages.
- `shift-left`/`-right` for selecting alternative suggestions
- `1`...`9` for selecting / deselecting a stage.
")))

(defn manual-comp []
  (let [visible (r/atom true)]
    (fn []
      [:div
       (when @visible
         [:div
          [:h2 "Manual"]
          manual-text
          ])
       
       [:a.hide-show
        {:href "javascript:void(0)"
         :on-click #(swap! visible not)}
        (if @visible "Hide Manual" "Show Manual")]])))

;; file IO component
;;;;;;;;;;;;;;;;;;;;

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
  
  ;; local state:
  ;; - refs to file inputs (normal clojure atoms!)
  ;; - file names
  ;; - visibility
  (let [node-score (atom nil)
        node-suggest (atom nil)
        fn-score (r/atom nil)
        fn-suggest (r/atom nil)
        visible (r/atom true)]
    
    ;; render function
    (fn [score state]
      [:div
       (when @visible
         [:div.pure-g
          [:h2.pure-u-1 "Input / Output"]
          
          [:div.pure-button-group.pure-u-1.pure-u-md-3-5
           ;; score file input
           [:label.pure-button.pure-u-1-2.pure-u-sm-1-3
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
           [:label.pure-button.pure-u-1-2.pure-u-sm-1-3
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
           
           [:a.pure-button.pure-button-primary.pure-u-1.pure-u-sm-1-3
            {:on-click (fn []
                         (h/load-from-file! score (h/get-file @node-score))
                         (h/load-from-file! state (h/get-file @node-suggest) load-suggestions!))}
            "Load Files"]]
          
          [:div.pure-u-1.pure-u-md-1-5.placeholder]
          
          [:a.pure-button.pure-u-1.pure-u-md-1-5
           {:on-click #(download-annotations! state)}
           "Download Annotations"]])
       
       [:a.hide-show
        {:href "javascript:void(0)"
         :on-click #(swap! visible not)}
        (if @visible "Hide IO" "Show IO")]])))

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:instances])]
    (fn []
      [:div
       ;; (str @instances)
       [:h1 "Schema Annotation"]
       
       [manual-comp]
       
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
