(ns schema-annotation.annotate
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom]
            [schema-annotation.verovio :as vrv]
            [schema-annotation.helpers :as h]
            [reagent-keybindings.keyboard :as kb]
            [clojure.string :as str]))

;; instances
;;;;;;;;;;;;

(defn new-manual-instance [pattern]
  {:auto false
   :alts nil
   :alt nil
   :stages (vec (repeat (count pattern) []))
   :checked false})

(defn new-known-manual-instance [stages]
  {:auto false
   :alts nil
   :alt nil
   :stages stages
   :checked false})

(defn new-automatic-instance [alts]
  {:auto true
   :alts alts
   :alt 0
   :stages nil
   :checked false})

(defn make-manual [inst]
  (let [stages (if (or (nil? (:alts inst)) (nil? (:alt inst)))
                 (:stages inst)
                 (get (:alts inst) (:alt inst)))]
    (assoc inst
           :stages stages
           :auto false)))

(defn make-automatic [inst]
  (assoc inst :auto true))

(defn get-stages [inst]
  (if (:auto inst)
    (get (:alts inst) (:alt inst))
    (:stages inst)))

(defn set-stages [inst stages]
  (if (:auto inst)
    inst
    (assoc inst :stages stages)))

(defn stages-cursor [instance]
  (r/cursor
   (fn
     ([k] (get-stages @instance))
     ([k v] (swap! instance set-stages v)))
   []))

(defn validate-instance [pattern notelist instance]
  (when instance
    (if (empty? (first instance))
      "first stage is empty"
      (let [instance-notes (h/lookup-schema instance notelist)
            instance-rel (h/rel-schema instance-notes)
            match-results (h/match-schema instance-rel pattern)]
        (cond
          (not instance-notes)
          "invalid note selected (e.g. after a tie)"
          (some empty? instance)
          "contains empty stages"
          (not= (count pattern) (count instance))
          "wrong number of stages (internal error)"
          (not-every? true? match-results) ;; selection doesn't match?
          (h/match-to-error-msg match-results) ;; show the appropriate error message
          (not (h/stages-separate? instance-notes))
          "stages overlap"
          (h/potential-overlap? instance-notes)
          "stages potentially overlap (check manually)"
          :else nil)))))

;; inner annotation component
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn current-instance-cursor [active-instance instances]
  (r/cursor
   (fn ([k]
        (let [ai @active-instance
              ins @instances]
          (get ins ai)))
     ([k value]
      (swap! instances
             (fn [ins]
               (let [ai @active-instance]
                 (if (nil? ai)
                   ins
                   (assoc ins ai value)))))))
   []))

(defn toggle-active-instance! [active-instance i]
  (swap! active-instance #(if (= % i) nil i)))

(defn toggle-instance-checked! [instances active-instance]
  (swap! instances update-in [active-instance :checked] not))

(defn current-stage-cursor [active-stage stages]
  (r/cursor
   (fn ([k]
        (let [as @active-stage
              sts @stages]
          (if (or (nil? as) (< as 0) (>= as (count sts)))
            #{}
            (set (nth sts as)))))
     ([k value]
      (swap! stages
             (fn [sts]
               (let [as @active-stage] 
                 (if (or (nil? as) (< as 0) (>= as (count sts)))
                   sts
                   ;;TODO: proper sorting
                   (assoc sts as (vec value))))))))
   []))

(defn set-alt [instance alt]
  (assoc instance
         :alt (min (max 0 alt) (dec (count (:alts instance))))))

(defn prev-alt [instance]
  (set-alt instance (dec (:alt instance))))

(defn next-alt [instance]
  (set-alt instance (inc (:alt instance))))

(defn annotation-inner [pattern notes piece-xml active-instance instances]
  ;; local state / variables
  (let [active-stage (r/atom nil)
        quick-notes (r/atom nil) ;; notes that are quickly entered by id's
        jump (r/atom nil)
        jump-candidate (r/atom nil)
        options {}]
    
    ;; make sure that verovio jumps whenever jump-candidate changes
    (ratom/run! 
     (reset! jump @jump-candidate))
    
    ;; render function
    (fn [pattern notes piece-xml active-instance instances]
      
      ;; local state
      (let [current-instance (current-instance-cursor active-instance instances)
            stages (stages-cursor current-instance)
            selected (current-stage-cursor active-stage stages)
            allow-select (ratom/reaction
                          (let [sts @stages
                                as @active-stage]
                            (not (or (:auto @current-instance)
                                     (nil? sts) (nil? as)
                                     (< as 0) (>= as (count sts))))))
            highlighted (ratom/reaction
                         (let [sts @stages
                               as @active-stage
                               qn @quick-notes]
                           (if (not (nil? qn))
                             qn
                             (if (nil? sts)
                               []
                               (vec (for [[i stage] (map-indexed vector sts)]
                                      (if (= i as) [] stage)))))))]
        
        ;; jump to highlights / selection, but only if they changed!
        (let [to (or (get @stages @active-stage)
                     (vec (flatten @highlighted)))]
          (when (not= to @jump-candidate)
            (reset! jump-candidate to)))
        
        ;; helper functions on local state
        ;; TODO: take out of here and pass locals as args
        (letfn [(unset-stage! []
                  (reset! active-stage nil))
                
                (set-stage! [stagei]
                  (let [inst @current-instance]
                    (when-not (nil? inst)
                      (reset! active-stage stagei))))]
          
          (let [as @active-stage
                enabled-class (if (nil? @current-instance) " pure-button-disabled" "")]
            [:div.pure-g
             ;; quick note selection
             [:div.pure-form.pure-u-1
              [:legend "Quick Notes"]
              [:input.pure-u-1.pure-u-md-4-5
               {:type "text"
                :value (h/poly-str @quick-notes)
                :on-change (fn [ev]
                             (let [poly (h/parse-poly (-> ev .-target .-value))]
                               (reset! quick-notes poly)))}]
              [:a.pure-button.pure-u-1.pure-u-md-1-5
               {:on-click #(reset! quick-notes nil)}
               "Clear"]]
             
             ;; instance selection
             [:div.pure-form.pure-u-1.pure-u-lg-2-5
              [:legend "Instance "
               [:span.validation-error
                (when-not (:auto @current-instance)
                  (validate-instance pattern notes (:stages @current-instance)))]]
              (let [insts @instances
                    ai @active-instance
                    inst (get insts ai)
                    ks (to-array (keys insts))
                    key-i (let [i (.indexOf ks ai)] (if (= -1 i) nil i))
                    prev-key (or (when key-i (get ks (dec key-i))) (last ks))
                    next-key (or (when key-i (get ks (inc key-i))) (first ks))
                    go-prev-instance #(toggle-active-instance! active-instance prev-key)
                    go-next-instance #(toggle-active-instance! active-instance next-key)]
                [:div.pure-button-group.pure-u-1.pure-u-sm-1-2
                 [:a.pure-button
                  {:class (when-not prev-key "pure-button-disabled")
                   :on-click go-prev-instance}
                  ^{:key ai} [kb/kb-action "shift-up" go-prev-instance]
                  "<"]
                 [:select.instance-select
                  {:value (or ai :none)
                   :on-change #(let [key (-> % .-target .-value js/parseInt)]
                                 (if (js/Number.isNaN key)
                                   (toggle-active-instance! active-instance nil)
                                   (toggle-active-instance! active-instance key)))}
                  [:option
                   {:key "none" :value :none}
                   "none"]
                  (doall (for [[k v] insts]
                           [:option
                            {:key k :value k}
                            (inc k)]))]
                 [:a.pure-button
                  {:class (when-not next-key "pure-button-disabled")
                   :on-click go-next-instance}
                  ^{:key ai} [kb/kb-action "shift-down" go-next-instance]
                  ">"]
                 
                 [:a.pure-button
                  {:class (str (when (nil? inst) "pure-button-disabled ")
                               (when (:checked inst) "pure-button-active button-checked"))
                   :on-click #(toggle-instance-checked! instances ai)}
                  ^{:key ai} [kb/kb-action "enter" #(toggle-instance-checked! instances ai)]
                  "✔"]])
              
              [:div.pure-u-1.pure-u-sm-1-2
               (if (:auto @current-instance)
                 [:a.pure-button.pure-u-1.pure-u-lg-23-24
                  {:class enabled-class
                   :on-click #(swap! current-instance make-manual)}
                  "Make Manual"]
                 
                 [:a.pure-button.pure-u-1.pure-u-lg-23-24
                  {:class (if (nil? (:alts @current-instance)) "pure-button-disabled")
                   :on-click #(swap! current-instance make-automatic)}
                  "Make Automatic"]
                 )]]

             
             ;; automatic or manual instance?
             (if (:auto @current-instance)
               
               ;; automatic instance interface
               [:form.pure-form.pure-u-1.pure-u-lg-3-5
                [:legend "Suggestion"]
                (let [inst @current-instance
                      alt (:alt inst)
                      nalts (count (:alts inst))]
                  [:div.automatic
                   [:div.pure-button-group
                    (let [go-prev #(swap! current-instance prev-alt)]
                      [:a.pure-button
                       {:class (if (or (nil? alt) (<= alt 0)) "pure-button-disabled" "")
                        :on-click go-prev}
                       [kb/kb-action "shift-left" go-prev]
                       "<"])
                    (let [go-next #(swap! current-instance next-alt)]
                      [:a.pure-button
                       {:class (if (or (nil? alt) (>= alt (dec nalts)))
                                 "pure-button-disabled" "")
                        :on-click go-next}
                       [kb/kb-action "shift-right" go-next]
                       ">"])]
                   [:label
                    {:for "suggestion"}
                    " " (inc alt) " / " nalts]
                   [:input
                    {:id "suggestion"
                     :type "range"
                     :min 1
                     :max nalts
                     :value (inc alt)
                     :on-change (fn [ev]
                                  (let [new-alt (-> ev .-target .-valueAsNumber)]
                                    (swap! current-instance set-alt (dec new-alt))))}]
                   ])]
               
               ;; manual instance interface
               [:form.pure-form.pure-u-1.pure-u-lg-3-5
                [:legend "Stage"]
                [:div.pure-button-group
                 {:role "toolbar"}
                 (doall
                  (for [i (range (count pattern))]
                    (let [sel-class (if (= i as)
                                      "vrv-selected pure-button-active"
                                      (str " vrv-highlighted-" (mod i 9)))
                          click (fn []
                                  (if (= i @active-stage) (unset-stage!) (set-stage! i)))]
                      [:a.pure-button
                       {:key i
                        :class (str sel-class " " enabled-class)
                        :on-click click}
                       [kb/kb-action (str (inc i)) click]
                       (inc i)])))]])
                          
             ;; score (verovio)
             [:div.pure-u-1
              [vrv/verovio-comp piece-xml selected allow-select
               highlighted jump options]]]))))))

;; outer annotation component
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn annotation-comp [pattern notes piece-xml instances]
  ;; local state /variables
  (let [active-instance (r/atom nil)]
    
    ;; render function
    (fn [pattern notes piece-xml instances]
      ;; helper functions on local state
      (letfn [(add-instance! []
                (swap! instances
                       (fn [ins]
                         (let [i (inc (reduce max -1 (keys ins)))]
                           (reset! active-instance i)
                           (assoc ins i (new-manual-instance pattern))))))
              
              (delete-instance! [i]
                (swap! instances dissoc i))]
        [:div.annotations
         [:h2 "Annotations"]
         
         ;; [:p (str @current-instance)]
         ;; [:p (str @active-instance)]
         ;; [:p (str @instances)]
         
         ;; inner annotation component
         [annotation-inner pattern notes piece-xml active-instance instances]
         
         ;; instance header
         [:form.pure-form.pure-g
          [:div.pure-u-1.pure-u-sm-4-5
           [:legend "Instances"]]
          [:a.pure-button.button-primary.pure-u-1.pure-u-sm-1-5
           {:on-click #(add-instance!)}
           "New Instance"]]
         
         ;; instance list
         (let [ai @active-instance]
           [:ol.instance-list
            (doall
             (for [[i ins] @instances]
               [:li
                {:key i
                 :class (str (when (= i ai) "instance-selected ")
                             (when (:checked ins) "instance-checked")
                             )}
                [:div.pure-g.instance
                 [:div.pure-u-1.pure-u-md-5-8
                  [:div.instance-name
                   (str "Instance " (inc i)) " "
                   (if (:auto ins) "(automatic)" "(manual)") " "
                   [:span.validation-error
                    (when-not (:auto ins)
                      (validate-instance pattern notes (:stages ins)))]]]
                 [:div.pure-u-1.pure-u-md-3-8
                  [:div.pure-u-1-3
                   [:a.pure-button.pure-u-23-24
                    {:on-click #(toggle-active-instance! active-instance i)
                     :class (when (= i ai) "button-selected pure-button-active")}
                    (if (= i ai) "Deselect" "Select")]]
                  [:div.pure-u-1-3
                   [:a.pure-button.pure-u-23-24
                    {:class (when (:checked ins) "pure-button-active button-checked")
                     :on-click #(toggle-instance-checked! instances i)}
                    "Checked"
                    ]]
                  [:div.pure-u-1-3
                   (when (= i ai)
                     [:a.pure-button.button-danger.pure-u-23-24
                      {:on-click #(delete-instance! i)}
                      "Delete"])]]]]))])]))))
