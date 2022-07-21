(ns schema-annotation.github
  (:require [schema-annotation.helpers :as h]
            [schema-annotation.io :as io]
            [reagent.core :as r]
            [ajax.core :as ajax]
            ))

;; github IO component
;;;;;;;;;;;;;;;;;;;;;;

(defn gh-data-url [{user :user 
                    repo :repo
                    branch :branch}
                   & path
                   ]
  (str "https://api.github.com/repos/" user "/" repo "/contents/data/" (apply str path) "?ref=" branch))

(defn api-headers [token]
  {"Authorization" (str "token " token)
   "Accept" "application/vnd.github.v3.raw"})

(defn corpora-index [json]
  (let [res (mapv #(:name %) (filter #(= (:type %) "dir") json))]
    res))

(defn gql-query [{user :user repo :repo branch :branch}]
  (str "{
  repository(name: \"" repo "\", owner: \"" user"\") {
    object(expression: \"" branch ":data/\") {
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
}"))

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

(defn fetch-gh-data! [state repo token gh-corpus gh-piece gh-schema]
  (ajax/GET (gh-data-url repo "lexicon.json")
            {:handler (fn [result]
                        (swap! state assoc :lexicon result)
                        (reset! gh-schema (first result)))
             :response-format :json
             :format :json
             :headers (api-headers token)
             :keywords? false})
  (ajax/POST "https://api.github.com/graphql"
             {:handler (fn [result]
                         (let [[corpora pieces suggested] (parse-gh-data result)]
                           (pr pieces)
                           (swap! state assoc
                                  :corpora corpora
                                  :pieces pieces
                                  :suggested suggested)
                           (reset! gh-corpus (first corpora))
                           (reset! gh-piece (first (get pieces @gh-corpus)))))
              :response-format :json
              :keywords? true
              :format :json
              :headers {"Authorization" (str "token " token)}
              :params {:query (gql-query repo)}})
  nil)

(defn load-piece! [state repo token corpus piece]
  (swap! state assoc
         :corpus corpus
         :piece piece
         :notes nil
         :score-xml nil
         :instances nil
         :loading true)
  (ajax/GET (gh-data-url repo corpus "/musicxml/" piece ".xml")
            {:handler #(swap! state assoc
                              :score-xml %)
             :headers (api-headers token)})
  (ajax/GET (gh-data-url repo corpus "/notelist/" piece ".json")
            {:handler #(swap! state assoc :notes (io/parse-notes %))
             :headers (api-headers token)}))

(defn load-suggestions! [state repo token replace]
  (let [st @state
        corpus (:corpus st)
        piece (:piece st)
        schema (:schema st)]
    (ajax/GET (gh-data-url repo corpus "/groups/" schema "/" piece "_" schema ".json")
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
               :headers (api-headers token)
               :keywords? true})))

(defn load-annotations! [state repo token replace]
  (let [st @state
        corpus (:corpus st)
        piece (:piece st)
        schema (:schema st)]
    (ajax/GET (gh-data-url repo corpus "/annotations/" schema "/" piece "_" schema ".json")
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
               :headers (api-headers token)
               :keywords? true})))

(defn set-schema! [state schema]
  (swap! state assoc :schema schema))

(defn github-io-comp [state]
  (let [st @state
        visible (r/atom true)
        gh-token (r/atom nil)
        gh-repo (r/atom {:user "DCMLab" :repo "schema_annotation_data" :branch "master"})
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
            [:form.pure-form.pure-g
             ;; prevent submission of this form
             {:on-submit (fn [e] (.preventDefault e) false)}
             
             ;; zeroth row: setting token and repo
             
             [:fieldset.pure-u-1
              [:legend "Source Repository"]
              
              [:label.pure-u-1-4 "Owner"
               [:input.pure-u-23-24 {:type "text"
                                     :placeholder "user or organization"
                                     :value (:user @gh-repo)
                                     :on-change #(swap! gh-repo assoc :user (.. % -target -value))}]]
              
              [:label.pure-u-1-4 "Repository Name"
               [:input.pure-u-23-24 {:type "text"
                                     :placeholder "repo"
                                     :value (:repo @gh-repo)
                                     :on-change #(swap! gh-repo assoc :repo (.. % -target -value))}]]
              
              [:label.pure-u-1-4 "Branch"
               [:input.pure-u-23-24 {:type "text"
                                     :placeholder "branch"
                                     :value (:branch @gh-repo)
                                     :on-change #(swap! gh-repo assoc :branch (.. % -target -value))}]]
              
              [:label.pure-u-1-4
               "GitHub "
               [:a {:href "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
                    :target "_blank"
                    }
                "Access Token"]
               [:input.pure-u-1 {:type "text"
                                     :placeholder "ghp_..."
                                     :value @gh-token
                                     :on-change (fn [ev] (reset! gh-token (.. ev -target -value)))}]]
              
              [:a.pure-button
               {:on-click (fn []
                            (fetch-gh-data! state @gh-repo @gh-token corpus piece schema))
                :disabled (empty? @gh-token)
                }
               "Set Repo"]
              
              ]
             
             ;; first row: loading a piece
             
             (when corpora
               [:fieldset.pure-u-1
                [:legend "Corpus and Piece"]
                [:label.pure-u-1.pure-u-md-1-4
                 "Corpus"
                 [:select.pure-u-1.pure-u-md-23-24
                  {:value (or crp "")
                   :on-change #(let [key (.. % -target -value)]
                                 (reset! corpus key))}
                  (doall (for [c corpora]
                           [:option
                            {:key c :value c}
                            c]))]]
                [:label.pure-u-1.pure-u-md-1-4
                 "Piece"
                 [:select.pure-u-1.pure-u-md-23-24
                  {:value (or pc "")
                   :on-change #(reset! piece (.. % -target -value))}
                  (doall (for [p pieces]
                           [:option
                            {:key p :value p}
                            p]))]]
                
                [:label.pure-u-1.pure-u-md-1-4
                 [:br]
                 [:a.pure-button.button-primary
                  {:on-click (fn []
                               (load-piece! state @gh-repo @gh-token crp pc))}
                  "Load Piece"]]])
                          
             ;; second row: selecting a schema
             
             (when (not-empty schemas)
               [:fieldset.pure-u-1
                [:legend "Schema Type"]
                [:label.pure-u-1.pure-u-md-1-4
                 ;;"Schema"
                 [:select.pure-u-1.pure-u-md-23-24
                  {:value (or scm "")
                   :on-change #(reset! schema (.. % -target -value))}
                  (doall (for [s schemas]
                           [:option
                            {:key s :value s}
                            s]))]]
                
                [:label.pure-u-1.pure-u-md-1-4
                 [:a.pure-button.button-primary
                  {:on-click (fn []
                               (swap! state assoc :schema @schema))}
                  "Set Schema"]]
                
                [:label.pure-u-1.pure-u-md-1-4
                 [:div.form-text
                  "Current Schema: "
                  (:schema st)]]])
            
             ;; third row: loading instances
             
             (when (and pc scm)
               [:div.pure-u-1
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
                                    (load-suggestions! state @gh-repo @gh-token true)
                                    (reset! load-open nil))}
                       "Replace Other Instances"]
                      [:a.pure-button.pure-u-1
                       {:on-click (fn []
                                    (load-suggestions! state @gh-repo @gh-token false)
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
                                    (load-annotations! state @gh-repo @gh-token true)
                                    (reset! load-open nil))}
                       "Replace Other Instances"]
                      [:a.pure-button.pure-u-1
                       {:on-click (fn []
                                    (load-annotations! state @gh-repo @gh-token false)
                                    (reset! load-open nil))}
                       "Add To Instances"]
                      [:a.pure-button.pure-u-1
                       {:on-click #(reset! load-open nil)}
                       "Cancel"]])])])]
            ])
         
         [:a.hide-show
          {:href "#0"
           :on-click (h/make-js-link #(swap! visible not))}
          (if @visible "Hide file selection" "Show file selection")]]))))
