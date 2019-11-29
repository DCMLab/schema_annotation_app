(ns schema-annotation.annotate
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom]
            [schema-annotation.verovio :as vrv]
            [reagent-keybindings.keyboard :as kb]))

;; instances
;;;;;;;;;;;;

(defn new-manual-instance [pattern]
  {:auto false
   :alts nil
   :alt nil
   :stages (vec (repeat (count pattern) []))})

(defn new-automatic-instance [alts]
  {:auto true
   :alts alts
   :alt 0
   :stages nil ;;(get alts 0)
   })

(defn make-manual [inst]
  (let [stages (if (or (nil? (:alts inst)) (nil? (:alt inst)))
                 (:stages inst)
                 (get (:alts inst) (:alt inst)))]
    (assoc inst
           :stages stages
           :auto false)))

(defn make-automatic [inst]
  (assoc inst :auto true)
  #_(let [alt (or (:alt inst 0))
        alts (:alts inst)]
    (if (nil? alts)
      inst
      (assoc inst
             :auto true
             :alt alt
             :stages (get alts alt)))))

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

;; inner annotation component
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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

(defn annotation-inner [pattern piece-xml current-instance]
  ;; local state / variables
  (let [active-stage (r/atom nil)
        ;; def-controls (assoc vrv/verovio-controls :data piece-xml :allow-select false)
        page (r/atom 1)
        pages (r/atom 0)
        jump (r/atom nil)
        jump-candidate (r/atom nil)
        options {}]
    
    ;; make sure that verovio jumps whenever jump-candidate changes
    (ratom/run! (reset! jump @jump-candidate))
    
    ;; render function
    (fn [pattern piece-xml current-instance]
      
      ;; local state
      (let [stages (stages-cursor current-instance)
            selected (current-stage-cursor active-stage stages)
            allow-select (ratom/reaction
                          (let [sts @stages
                                as @active-stage]
                            (not (or (:auto @current-instance)
                                     (nil? sts) (nil? as)
                                     (< as 0) (>= as (count sts))))))
            highlighted (ratom/reaction
                         (let [sts @stages
                               as @active-stage]
                           (if (nil? sts)
                             []
                             (vec (for [[i stage] (map-indexed vector sts)]
                                    (if (= i as) [] stage))))))]
        
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
             (if (:auto @current-instance)
               
               ;; automatic instance interface
               [:form.pure-form.pure-u-1.pure-u-md-3-4
                [:legend "Suggestion"]
                [:div.pure-u-1.pure-u-sm-3-4
                 (let [inst @current-instance
                       alt (:alt inst)
                       nalts (count (:alts inst))]
                   [:div.automatic
                    [:div.pure-u-1-4.pure-button-group
                     (let [go-prev #(swap! current-instance prev-alt)]
                       [:a.pure-button
                        {:class (if (or (nil? alt) (<= alt 0)) "pure-button-disabled" "")
                         :on-click go-prev}
                        [kb/kb-action "shift-left" go-prev]
                        "<<"])
                     (let [go-next #(swap! current-instance next-alt)]
                       [:a.pure-button
                        {:class (if (or (nil? alt) (>= alt (dec nalts)))
                                  "pure-button-disabled" "")
                         :on-click go-next}
                        [kb/kb-action "shift-right" go-next]
                        ">>"])]
                    [:label.pure-u-3-4
                     [:div.pure-u-1-4 (inc alt) " / " nalts]
                     [:div.pure-u-3-4
                      [:input.pure-u-11-12
                       {:type "range"
                        :min 1
                        :max nalts
                        :value (inc alt)
                        :on-change (fn [ev]
                                     (let [new-alt (-> ev .-target .-valueAsNumber)]
                                       (swap! current-instance set-alt (dec new-alt))))}]]]
                    ])]
                [:div.pure-u-1.pure-u-sm-1-4
                 [:a.pure-button.pure-u-1.pure-u-sm-23-24
                  {:class enabled-class
                   :on-click #(swap! current-instance make-manual)}
                  "Make Manual"]]]
               
               ;; manual instance interface
               [:form.pure-form.pure-u-1.pure-u-md-3-4
                ;; TODO: deselect all button
                [:legend "Stage"]
                [:div.pure-button-group.pure-u-1.pure-u-sm-3-4
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
                       (inc i)])))]
                [:div.pure-u-1.pure-u-sm-1-4
                 [:a.pure-button.pure-u-23-24
                  {:class (if (nil? (:alts @current-instance)) "pure-button-disabled")
                   :on-click #(swap! current-instance make-automatic)}
                  "Make Automatic"]]])
             
             ;; page selection
             [:form.pure-form.pure-u-1.pure-u-md-1-4
              [:legend "Page"]
              [:div
               [:a.pure-button
                {:disabled (<= @page 1)
                 :on-click #(swap! page vrv/prev-page @pages)}
                [kb/kb-action "left" #(swap! page vrv/prev-page @pages)]
                "<<"]
               " " @page " / " @pages " "
               [:a.pure-button
                {:disabled (>= @page @pages)
                 :on-click #(swap! page vrv/next-page @pages)}
                [kb/kb-action "right" #(swap! page vrv/next-page @pages)]
                ">>"]]]
             
             ;; score (verovio)
             ;; TODO: jump
             [:div.pure-u-1
              [vrv/verovio-comp piece-xml selected allow-select
               highlighted page pages jump options]]]))))))

;; outer annotation component
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

(defn validate-instance [pattern instance]
  (cond
    (some empty instance) "contains empty stages"
    ;; TODO: validate against actual pattern
    :else ""))

(defn annotation-comp [pattern piece-xml instances]
  ;; local state /variables
  (let [active-instance (r/atom nil)]
    
    ;; render function
    (fn [pattern piece-xml instances]
      (let [ai @active-instance
            current-instance (current-instance-cursor active-instance instances)]
    
        ;; helper functions on local state
        (letfn [(toggle-instance! [i]
                  (swap! active-instance #(if (= % i) nil i)))
                
                (add-instance! []              
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
           [annotation-inner pattern piece-xml current-instance]
           
           ;; instance header
           [:form.pure-form.pure-g
            [:div.pure-u-1.pure-u-sm-4-5
             [:legend "Instances"]]
            [:a.pure-button.pure-button-primary.pure-u-1.pure-u-sm-1-5
             {:on-click #(add-instance!)}
             "New Instance"]]
           
           ;; instance list
           [:ol
            (doall
             (for [[i ins] @instances]
               [:li
                {:key i
                 :class (if (= i ai) "manual-instance-selected" "")}
                [:div.pure-g.instance
                 [:div.pure-u-1.pure-u-md-3-4
                  [:div.instance-name
                   (str "Instance " (inc i)) " "
                   (if (:auto ins) "(automatic)" "(manual)") " "
                   [:span.validation-error
                    (validate-instance pattern ins)]]]
                 [:div.pure-u-1.pure-u-md-1-4
                  [:div.pure-u-1-2
                   [:a.pure-button.pure-u-23-24
                    {:on-click #(toggle-instance! i)
                     :class (if (= i ai) "pure-button-primary pure-button-active" "")}
                    "Select"]]
                  [:div.pure-u-1-2
                   (when (= i ai)
                     [:a.pure-button.button-danger.pure-u-23-24
                      {:on-click #(delete-instance! i)}
                      "Delete"])]]]]))]])))))
