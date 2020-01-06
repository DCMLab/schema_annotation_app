(ns ^:figwheel-hooks schema-annotation.core
  (:require [clojure.set :as set]
            [reagent.core :as r]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.annotate :as annotate]
            [schema-annotation.helpers :as h]
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

;; file IO component
;;;;;;;;;;;;;;;;;;;;

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


;; github IO component
;;;;;;;;;;;;;;;;;;;;;;

(defn corpora-index [json]
  (let [res (mapv #(:name %) (filter #(= (:type %) "dir") json))]
    res))

(def gql-query "{
  repository(name: \"schema_annotation_data\", owner: \"DCMLab\") {
    object(expression: \"master:data/\") {
      ... on Tree {
        entries {
          name
          type
          object {
            ... on Tree {
              entries {
                name
                object {
                  ... on Tree {
                    entries {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}")

(def gh-token "88bc5d8a160f6e0025f791c98a92c9320907172f")
(def gh-data-url "https://raw.githubusercontent.com/DCMLab/schema_annotation_data/master/data/")

(defn parse-gh-data [result]
  (let [entries (-> result :data :repository :object :entries)
        corpora (filter #(= (:type %) "tree") entries)
        corpora-names (mapv :name corpora)
        pieces (into {} (for [crp corpora]
                          (let [crp-name (:name crp)
                                subdirs (-> crp :object :entries)
                                xmldir (first (filter #(= (:name %) "musicxml") subdirs))
                                names (map :name (-> xmldir :object :entries))
                                pieces (mapv #(subs % 0 (- (count %) 4)) names)]
                            [crp-name pieces])))
        suggestions (into {} (for [crp corpora]
                               (let [crp-name (:name crp)
                                     subdirs (-> crp :object :entries)
                                     groupdir (first (filter #(= (:name %) "groups") subdirs))
                                     suggs (mapv :name (-> groupdir :object :entries))]
                                 [crp-name suggs])))]
    [corpora-names pieces suggestions]))

(defn fetch-gh-data! [state]
  (ajax/POST "https://api.github.com/graphql"
             {:handler (fn [result]
                         (let [[corpora pieces suggested] (parse-gh-data result)]
                           (swap! state assoc
                                  :corpora corpora
                                  :pieces pieces
                                  :suggested suggested)))
              :response-format :json
              :keywords? true
              :format :json
              :headers {"Authorization" (str "token " gh-token)}
              :params {:query gql-query}})
  nil)

(defn load-gh-files! [state corpus piece schema]
  (swap! state assoc
         :piece piece
         :schema schema
         :notes nil
         :score-xml nil
         :instances nil
         :loading true)
  (ajax/GET (str gh-data-url corpus "/musicxml/" piece ".xml")
            {:handler #(swap! state assoc :score-xml %)})
  (ajax/GET (str gh-data-url corpus "/groups/" schema "/" piece "_" schema ".json")
            {:handler (fn [result] (swap! state assoc :instances
                                          (parse-groups (get result :groups))))
             :error-handler (fn [{:keys [status status-text]}]
                              (js/console.log
                               "Couldn't load suggestions for " piece " (" schema ").")
                              (swap! state assoc :instances {})
                              )
             :response-format :json
             :keywords? true})
  (ajax/GET (str gh-data-url corpus "/notelist/" piece ".json")
            {:handler #(swap! state load-notes! %)}))

(defn github-io-comp [state]
  (let [st @state
        visible (r/atom true)
        corpus (r/atom (first (:corpora st)))
        ;; a-pieces (r/atom nil)
        piece (r/atom nil)
        schema (r/atom nil)
        show-unsuggested (r/atom false)]
    
    (fn [state]
      (let [st @state
            corpora (:corpora st)
            s-pieces (:pieces st)
            crp @corpus
            pieces (get s-pieces crp)
            pc @piece
            schemas (sort (if @show-unsuggested
                            (keys (:lexicon st))
                            (get (:suggested st) crp)))
            scm @schema]
        (when-not crp
          (reset! corpus (first corpora)))
        ;; (when-not pieces
        ;;   (reset! a-pieces (get s-pieces crp)))
        (when-not pc
          (reset! piece (first pieces)))
        (when (or (not scm) (not (some #{scm} schemas)))
          (reset! schema (first schemas)))
        
        [:div.gh-input
         (when @visible
           [:div
            [:h2 "Input / Output"]
            [:form.pure-form.pure-form-stacked.pure-g
             [:label.pure-u-1.pure-u-md-1-4
              "Corpus"
              [:select.pure-u-1.pure-u-md-23-24
               {:value crp
                :on-change #(let [key (.. % -target -value)]
                              (reset! corpus key))}
               (doall (for [c corpora]
                        [:option
                         {:key c :value c}
                         c]))]]
             [:label.pure-u-1.pure-u-md-1-4
              "Piece"
              [:select.pure-u-1.pure-u-md-23-24
               {:value pc
                :on-change #(reset! piece (.. % -target -value))}
               (doall (for [p pieces]
                        [:option
                         {:key p :value p}
                         p]))]]
             [:label.pure-u-1.pure-u-md-1-4
              "Schema"
              [:span
               {:style {:float "right"}}
               " ("
               [:input
                {:type "checkbox"
                 :checked (when @show-unsuggested "checked")
                 :on-click #(swap! show-unsuggested not)}]
               " show missing)"
               ]
              [:select.pure-u-1.pure-u-md-23-24
               {:value scm
                :on-change #(reset! schema (.. % -target -value))}
               (doall (for [s schemas]
                        [:option
                         {:key s :value s}
                         s]))]]
             
             [:div.pure-u-1.pure-u-md-1-4
              [:div.load-padder]
              [:a.pure-u-1.pure-button.vrv-selected
               {:on-click #(load-gh-files! state crp pc scm)}
               "Load Piece"]]]
             
            
            
            [:div.pure-g
             [:div.pure-u-md-3-4]
             [:a.pure-button.pure-u-1.pure-u-md-1-4
              {:on-click #(download-annotations! state)}
              "Download Annotations"]]
             
            ;; [:p "corpus: " crp]
            ;; [:p "piece: " pc]
            ;; [:p "schema: " scm]
            ])
         
         [:a.hide-show
          {:href "javascript:void(0)"
           :on-click #(swap! visible not)}
          (if @visible "Hide IO" "Show IO")]]))))

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
       [github-io-comp state]

       (when (:loading state)
         "Loading...")

       (let [lexicon (:lexicon @state)
             schema (:schema @state)
             notes (:notes @state)]
         (when (and @score notes @instances lexicon schema)
           (swap! state assoc :loading false)
           (let [pattern (h/parse-pattern (get lexicon schema))]
             (if pattern
               (js/alert (str "Schema " (:schema @state) " not found in the lexicon! Please report this to the developers."))))))
       [kb/keyboard-listener]
       ])))

(defn ^:after-load reload []
  (r/render [schema-annotation-app]
            (.getElementById js/document "app")))

(defn init! []
  (ajax/GET (str gh-data-url "lexicon.json")
            {:handler (fn [result] (swap! state assoc :lexicon result))
             :response-format :json
             :format :json
             :keywords? false})
  (fetch-gh-data! state)
  (reload))

(init!)
