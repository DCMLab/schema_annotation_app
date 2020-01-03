(ns ^:figwheel-hooks schema-annotation.core
  (:require [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]
            [markdown-to-hiccup.core :as md]
            [ajax.core :as ajax]
            [intervals.spelled :as i]))

(defonce state (r/atom {:score-xml ""
                        :instances (sorted-map)
                        :piece ""
                        :schema nil
                        :notes {}
                        :lexicon nil
                        :corpora nil
                        :pieces nil}))

;; manual component
;;;;;;;;;;;;;;;;;;;

(def manual-text (md/component (md/md->hiccup "
1. Select a score (`musicxml`) and an annotation file (`groups/<schema>`),
   then click on \"Load Files\".
1. Select an instance from the list.
1. For each instance, either select one of the suggested \"automatic\" alternatives,
   or switch to a \"manual\" instance and edit each stage of the preselected match.
1. When you are done with an instance, you can mark it as \"checked\".
   This is just a help for you to keep track of your work.
1. You can delete clearly invalid instances,
   and add new instances where no suggestion exists.
1. When you are happy with your annotations, click on \"Download Annotations\"

Shortcuts:
- `left`/`right` for turning pages.
- `shift-left`/`-right` for selecting alternative suggestions
- `1`...`9` for selecting / deselecting a stage.
- `shift-up`/`-down` for selecting the previous / next instance.
- `enter` for (un)checking the current instance.
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
    (assoc state
           :piece piece
           :schema schema
           :instances
           (into (sorted-map)
                 (for [[i alternatives] (map-indexed vector groups)]
                   {i (annotate/new-automatic-instance (js->clj alternatives))})))))

(defn load-notes! [state json-string]
  (letfn [(parse-frac [obj]
            (/ (js/parseInt (aget obj "n"))
               (js/parseInt (aget obj "d"))))
          
          (add-note [note-map note]
            (let [id (aget note "id")
                  on (parse-frac (aget note "on"))
                  off (parse-frac (aget note "off"))
                  pitch (i/parse-spelled-p (aget note "p"))]
              (if (contains? note-map id)
                (update note-map id (partial merge-with conj) {:onset on :offset off})
                (assoc note-map id {:onset [on] :offset [off] :pitch pitch}))))]
    
    (let [json (.parse js/JSON json-string)
          notes (reduce add-note {} json)]
      (pr (notes "note0"))
      (assoc state :notes notes))))

(defn download-annotations! [state]
  (let [inst (:instances @state)
        annots (vec (map annotate/get-stages (vals inst)))
        piece (:piece @state)
        schema (:schema @state)
        out {:instances annots
             :piece piece
             :schema schema}]
    (h/download-as-json! out (str piece "_" schema ".json"))))

(defn file-io-comp [score state]
  
  ;; local state:
  ;; - refs to file inputs (normal clojure atoms!)
  ;; - file names
  ;; - visibility
  (let [node-score (atom nil)
        node-suggest (atom nil)
        node-notes (atom nil)
        fn-score (r/atom nil)
        fn-suggest (r/atom nil)
        fn-notes (r/atom nil)
        visible (r/atom true)]
    
    ;; render function
    (fn [score state]
      [:div
       (when @visible
         [:div.pure-g
          [:h2.pure-u-1 "Input / Output"]
          
          [:div.pure-button-group.pure-u-1.pure-u-md-4-5
           ;; score file input
           [:label.pure-button.pure-u-1.pure-u-sm-1-4
            (or @fn-score "Select Score")
            [:input.file-input
             {:type "file"
              :accept ".xml,.musicxml"
              :multiple false
              :ref #(reset! node-score %)
              :on-change #(reset! fn-score (h/get-filename (.-target %)))}]]
           
           ;; suggestion file input
           [:label.pure-button.pure-u-1.pure-u-sm-1-4
            (or @fn-suggest "Select Suggestions")
            [:input.file-input
             {:type "file"
              :accept ".json"
              :multiple false
              :ref #(reset! node-suggest %)
              :on-change #(reset! fn-suggest (h/get-filename (.-target %)))}]]

           [:label.pure-button.pure-u-1.pure-u-sm-1-4
            (or @fn-notes "Select Note File")
            [:input.file-input
             {:type "file"
              :accept ".json"
              :multiple false
              :ref #(reset! node-notes %)
              :on-change #(reset! fn-notes (h/get-filename (.-target %)))}]]
           
           [:a.pure-button.button-primary.pure-u-1.pure-u-sm-1-4
            {:on-click (fn []
                         (h/load-from-file! score (h/get-file @node-score))
                         (h/load-from-file! state (h/get-file @node-suggest) load-suggestions!)
                         (h/load-from-file! state (h/get-file @node-notes) load-notes!))}
            "Load Files"]]
          
          ;;[:div.pure-u-1.pure-u-md-1-5.placeholder]
          
          [:a.pure-button.pure-u-1.pure-u-md-1-5
           {:on-click #(download-annotations! state)}
           "Download Annotations"]])
       
       [:a.hide-show
        {:href "javascript:void(0)"
         :on-click #(swap! visible not)}
        (if @visible "Hide IO" "Show IO")]])))

;; main app component
;;;;;;;;;;;;;;;;;;;;;

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:instances])]
    (fn []
      [:div
       [:h1 "Schema Annotation"]
       
       [manual-comp]
       
       [file-io-comp score state]

       (let [lexicon (:lexicon @state)
             schema (:schema @state)]
         (when (and  lexicon schema)
           (let [pattern (h/parse-pattern (get lexicon schema))]
             (if pattern
               [annotate/annotation-comp pattern @score instances]
               (js/alert (str "Schema " (:schema @state) " not found in the lexicon! Please report this to the developers."))))))
       [kb/keyboard-listener]
       ])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (ajax/GET "https://raw.githubusercontent.com/DCMLab/schema_annotation_data/master/data/lexicon.json"
            {:handler (fn [result] (swap! state assoc :lexicon result))
             :response-format :json
             :format :json
             :keywords? false})
  (reload))

(init!)
