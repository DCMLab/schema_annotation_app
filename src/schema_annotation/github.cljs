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

(defn load-gh-files! [state corpus piece schema]
  (pr "load")
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
                                          (io/parse-groups (get result :groups))))
             :error-handler (fn [{:keys [status status-text]}]
                              (js/console.log
                               "Couldn't load suggestions for " piece " (" schema ").")
                              (swap! state assoc :instances {}))
             :response-format :json
             :keywords? true})
  (ajax/GET (str gh-data-url corpus "/notelist/" piece ".json")
            {:handler #(swap! state assoc :notes (io/parse-notes %))}))

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
                 :checked @show-unsuggested
                 :on-click #(swap! show-unsuggested not)}]
               " show missing)"]
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
               {:on-click (fn []
                            (load-gh-files! state crp pc scm)
                            (reset! visible false))}
               "Load Piece"]]]
            
            [:div.pure-g
             [:div.pure-u-md-3-4]
             [:a.pure-button.pure-u-1.pure-u-md-1-4
              {:on-click #(io/download-annotations! @state)}
              "Download Annotations"]]
             
            ;; [:p "corpus: " crp]
            ;; [:p "piece: " pc]
            ;; [:p "schema: " scm]
            ])
         
         [:a.hide-show
          {:href "javascript:void(0)"
           :on-click #(swap! visible not)}
          (if @visible "Hide IO" "Show IO")]]))))
