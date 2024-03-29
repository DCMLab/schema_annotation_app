(ns ^:figwheel-hooks schema-annotation.core
  (:require [clojure.set :as set]
            [reagent.core :as r]
            [schema-annotation.helpers :as h]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.io :as io]
            [schema-annotation.fileio :as fio]
            [schema-annotation.github :as gh]
            [reagent-keybindings.keyboard :as kb]
            [markdown-to-hiccup.core :as md]
            [ajax.core :as ajax]
            [intervals.spelled :as i]))

(defonce state (r/atom {:score-xml nil ;; ""
                        :notes nil ;; {}
                        :instances nil ;;(sorted-map)
                        :lexicon nil ;; {}
                        :schema nil ;; ""
                        :corpora nil ;; []
                        :pieces nil ;; {}
                        :corpus nil ;; ""
                        :piece nil ;; ""
                        :suggested nil ;; []
                        :loading false
                        }))

;; manual component
;;;;;;;;;;;;;;;;;;;

(def manual-text (md/component (md/md->hiccup "
1. Select a corpus and a piece, then click on \"Load Piece\".
1. Select a schema variant from the list, then click \"Set Schema\".
1. (optional) Load precomputed suggestions or existing annotations
   for the selected schema and piece.
1. Create a new schema instance or select an existing instance from the list.
   - For precomputed suggestions, select one of the suggested \"automatic\" alternatives.
   - For \"manual\" instance, edit each stage by selecting notes directly.
1. When you are done with an instance, you can mark it as \"checked\".
   This is just a help for you to keep track of your work.
1. You can delete clearly invalid instances,
   and add new instances where no suggestion exists.
1. When you are happy with your annotations, click on \"Download Annotations\"

Shortcuts:
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

(defn download-comp [state]
  [:div.pure-g
   [:a.pure-button.button-primary.pure-u-1.pure-u-md-1-4
    {:on-click #(io/download-annotations! @state)}
    "Download Annotations"]])

;; main app component
;;;;;;;;;;;;;;;;;;;;;

(defn schema-annotation-app []
  (let [score (r/cursor state [:score-xml])
        instances (r/cursor state [:instances])]
    (fn []
      [:div
       [:h1 "Schema Annotation"]
       
       [manual-comp]
       
       ;;[file-io-comp score state]
       [gh/github-io-comp state]
       
       (when (:loading @state)
         [:div.loading])
       
       (let [lexicon (:lexicon @state)
             schema (:schema @state)
             notes (:notes @state)]
         (when (and @score notes)
           (swap! state assoc :loading false)
           (let [pattern (h/parse-pattern (get lexicon schema))]
             (if pattern
               [:div
                [annotate/annotation-comp pattern notes @score instances]
                [download-comp state]]
               (js/alert (str "Schema " (:schema @state) " not found in the lexicon! Please report this to the developers."))))))
       [kb/keyboard-listener]])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (gh/fetch-gh-data! state)
  (reload))

(init!)
