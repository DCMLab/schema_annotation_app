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
                        :piece nil ;; ""
                        :suggested nil ;; []
                        :loading false
                        }))

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
         (when (and @score notes @instances lexicon schema)
           (swap! state assoc :loading false)
           (let [pattern (h/parse-pattern (get lexicon schema))]
             (if pattern
               [annotate/annotation-comp pattern notes @score instances]
               (js/alert (str "Schema " (:schema @state) " not found in the lexicon! Please report this to the developers."))))))
       [kb/keyboard-listener]])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (gh/fetch-gh-data! state)
  (reload))

(init!)
