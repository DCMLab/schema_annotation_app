(ns schema-annotation.github
  (:require [schema-annotation.helpers :as h]
            [schema-annotation.io :as io]
            [reagent.core :as r]
            [ajax.core :as ajax]))

;; github IO component
;;;;;;;;;;;;;;;;;;;;;;

(def gh-token "88bc5d8a160f6e0025f791c98a92c9320907172f")
(def gh-data-url "https://raw.githubusercontent.com/DCMLab/schema_annotation_data/master/data/")

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
  (ajax/GET (str gh-data-url "lexicon.json")
            {:handler (fn [result] (swap! state assoc :lexicon result))
             :response-format :json
             :format :json
             :keywords? false})
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

(defn load-piece! [state corpus piece]
  (swap! state assoc
         :corpus corpus
         :piece piece
         :notes nil
         :score-xml nil
         :instances nil
         :loading true)
  (ajax/GET (str gh-data-url corpus "/musicxml/" piece ".xml")
            {:handler #(swap! state assoc
                              :score-xml %)})
  (ajax/GET (str gh-data-url corpus "/notelist/" piece ".json")
            {:handler #(swap! state assoc :notes (io/parse-notes %))}))

(defn load-suggestions! [state replace]
  (let [st @state
        corpus (:corpus st)
        piece (:piece st)
        schema (:schema st)]
    (ajax/GET (str gh-data-url corpus "/groups/" schema "/" piece "_" schema ".json")
              {:handler (fn [result]
                          (swap! state
                                 (fn [st] 
                                   (let [max-old (reduce max (keys (:instances st)))
                                         offset (if (and max-old (not replace))
                                                  (inc max-old) 0)
                                         new-instances (io/parse-groups (get result :groups)
                                                                        offset)]
                                     (if replace
                                       (assoc st :instances new-instances)
                                       (update st :instances concat new-instances))))))
               :error-handler (fn [{:keys [status status-text]}]
                                (let [msg (str "Couldn't load suggestions for "
                                               piece " (" schema ").")]
                                  (js/console.log msg)
                                  (js/alert msg)))
               :response-format :json
               :keywords? true})))

(defn load-annotations! [state replace]
  (let [st @state
        corpus (:corpus st)
        piece (:piece st)
        schema (:schema st)]
    (ajax/GET (str gh-data-url corpus "/annotations/" schema "/" piece "_" schema ".json")
              {:handler (fn [result]
                          (swap! state
                                 (fn [st] 
                                   (let [max-old (reduce max (keys (:instances st)))
                                         offset (if (and max-old (not replace))
                                                  (inc max-old) 0)
                                         new-instances (io/parse-instances
                                                        (get result :instances)
                                                        offset)]
                                     (if replace
                                       (assoc st :instances new-instances)
                                       (update st :instances concat new-instances))))))
               :error-handler (fn [{:keys [status status-text]}]
                                (let [msg (str "Couldn't load annotations for "
                                               piece " (" schema ").")]
                                  (js/console.log msg)
                                  (js/alert msg)))
               :response-format :json
               :keywords? true})))

(defn set-schema! [state schema]
  (swap! state assoc :schema schema))

(defn github-io-comp [state]
  (let [st @state
        visible (r/atom true)
        corpus (r/atom (first (:corpora st)))
        ;; a-pieces (r/atom nil)
        piece (r/atom nil)
        schema (r/atom nil)
        load-open (r/atom nil) ;; nil, :suggestions, :annot-gh, :annot-up
        ;;show-unsuggested (r/atom false)
        ]
    
    (fn [state]
      (let [st @state
            corpora (:corpora st)
            s-pieces (:pieces st)
            crp @corpus
            pieces (get s-pieces crp)
            pc @piece
            schemas (sort (keys (:lexicon st)))
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
            [:div.pure-g
             
             ;; first row: loading a piece
             
             [:form.pure-form.pure-form-stacked.pure-u-1.pure-u-md-1-2
              [:label.pure-u-1.pure-u-md-1-2
               "Corpus"
               [:select.pure-u-1.pure-u-md-23-24
                {:value crp
                 :on-change #(let [key (.. % -target -value)]
                               (reset! corpus key))}
                (doall (for [c corpora]
                         [:option
                          {:key c :value c}
                          c]))]]
              [:label.pure-u-1.pure-u-md-1-2
               "Piece"
               [:select.pure-u-1.pure-u-md-23-24
                {:value pc
                 :on-change #(reset! piece (.. % -target -value))}
                (doall (for [p pieces]
                         [:option
                          {:key p :value p}
                          p]))]]
              
              [:a.pure-button.button-primary
               {:on-click (fn []
                            (load-piece! state crp pc))}
               "Load Piece"]]
                          
             ;; second row: selecting a schema
             
             [:form.pure-form.pure-form-stacked.pure-u-1.pure-u-md-1-2
              [:label.pure-u-1.pure-u-md-1-2
               "Schema"
               [:select.pure-u-1.pure-u-md-23-24
                {:value scm
                 :on-change #(reset! schema (.. % -target -value))}
                (doall (for [s schemas]
                         [:option
                          {:key s :value s}
                          s]))]]
              
              [:label.pure-u-1.pure-u-md-1-2
               [:div.form-text
                "Current Schema: "
                (:schema st)]]
              
              [:div.pure-u-1.pure-u-md-1-2
               [:a.pure-button.button-primary
                {:on-click (fn []
                             (swap! state assoc :schema @schema))}
                "Set Schema"]]]
            
             ;; third row: loading instances
             
             [:form.pure-form.pure-u-1
              [:legend "Existing Instances"]
              
              ;; 3.1: precomputed suggestions
              (let [c (:corpus st)
                    s (:schema st)
                    p (:piece st)
                    in (some #{s} (get-in st [:suggested c]))
                    disabled (not (and p c s in))
                    open (= @load-open :suggestions)]
                [:div.pure-u-1.pure-u-md-1-4
                 [:a.pure-u-1.pure-u-md-23-24.pure-button.button-primary
                  {:disabled disabled
                   :class (if open "pure-button-active" "")
                   :on-click #(swap! load-open (fn [lo] (if open nil :suggestions)))}
                  "Load Suggestions"]
                 (when (and (not disabled) open)
                   [:div.pure-u-1.pure-u-md-23-24.pure-group
                    [:a.pure-button.pure-u-1
                     {:on-click (fn []
                                  (load-suggestions! state true)
                                  (reset! load-open nil))}
                     "Replace Other Instances"]
                    [:a.pure-button.pure-u-1
                     {:on-click (fn []
                                  (load-suggestions! state false)
                                  (reset! load-open nil))}
                     "Add To Instances"]
                    [:a.pure-button.pure-u-1
                     {:on-click #(reset! load-open nil)}
                     "Cancel"]])])

              ;; 3.2 annotations from github
              (let [c (:corpus st)
                    s (:schema st)
                    p (:piece st)
                    in (some #{c} (get-in st [:annotated c s]))
                    disabled (not (and p c s)) ;; TODO: check if annotation actually exists
                    open (= @load-open :annot-gh)]
                [:div.pure-u-1.pure-u-md-1-4
                 [:a.pure-u-1.pure-u-md-23-24.pure-button.button-primary
                  {:disabled disabled
                   :class (if open "pure-button-active" "")
                   :on-click #(swap! load-open (fn [lo] (if open nil :annot-gh)))}
                  "Load Annotations (GitHub)"]
                 (when (and (not disabled) open)
                   [:div.pure-u-1.pure-u-md-23-24.pure-group
                    [:a.pure-button.pure-u-1
                     {:on-click (fn []
                                  (load-annotations! state true)
                                  (reset! load-open nil))}
                     "Replace Other Instances"]
                    [:a.pure-button.pure-u-1
                     {:on-click (fn []
                                  (load-annotations! state false)
                                  (reset! load-open nil))}
                     "Add To Instances"]
                    [:a.pure-button.pure-u-1
                     {:on-click #(reset! load-open nil)}
                     "Cancel"]])])]]
            ])
         
         [:a.hide-show
          {:href "javascript:void(0)"
           :on-click #(swap! visible not)}
          (if @visible "Hide file selection" "Show file selection")]]))))
