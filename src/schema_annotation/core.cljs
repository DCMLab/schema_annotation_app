(ns ^:figwheel-hooks schema-annotation.core
  (:require [clojure.set :as set]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["react-dom/client" :as react-client]
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

(defonce app-root (react-client/createRoot (.getElementById js/document "app")))

;; manual component
;;;;;;;;;;;;;;;;;;;

(def manual-text (md/component (md/md->hiccup "
This tool helps you to create annotations of schema instances.
It can load music files as well as existing annotations or precomputed instance suggestions
from a prepared corpus that is stored on GitHub (like [this one](https://github.com/DCMLab/schema_annotation_data)).
To use this tool, you need a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
that is used to access the GitHub API, query the corpus repository, and load the files.
If the repository that you want to use is public, you can generate a token without any scopes
(providing read-only access to public information).
If you use a private repository, add the `repo` scope,
which will add read/write access to private repositories (but this app never writes any data to GitHub directly).
When using your own dataset, the corpus repository should have a `data` directory
with the same [directory structure](https://github.com/DCMLab/schema_annotation_data/blob/master/doc/Internal.md#data-files-data)
as the example repository.

To create annotations, follow these steps:

1. Select a repository (by owner, repo name, and branch) and enter your GH access token (see above).
   Always use the default branch (usually `master`/`main`).
   Click on \"Set Repo\" to load the schema lexicon and corpus data from the repository.
1. Select a (sub)corpus and a piece, then click on \"Load Piece\".
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
1. When you are happy with your annotations, click on \"Download Annotations\".
   The resulting JSON file needs to be committed to the repo manually.

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
        {:href "#0"
         :on-click (h/make-js-link #(swap! visible not))}
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
  (.render app-root (r/as-element [schema-annotation-app])))
               

(defn init! []
  (reload))

(init!)
