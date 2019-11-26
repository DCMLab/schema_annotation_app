(ns schema-annotation.manual
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom]
            [schema-annotation.verovio :as vrv]))

(defn make-current-stage [active-stage stages]
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

(defn manual-annotation-inner [pattern piece-xml current-instance]
  ;; local state / variables
  (let [active-stage (r/atom nil)
        selected (make-current-stage active-stage current-instance)
        def-controls (assoc vrv/verovio-controls :data piece-xml :allow-select false)
        page (r/atom 1)
        controls (ratom/reaction
                  (let [inst @current-instance
                        as @active-stage]
                    (assoc def-controls
                           :page @page
                           :allow-select (not (or (nil? inst) (nil? as)
                                                  (< as 0) (>= as (count inst))))
                           :highlighted
                           (if (nil? inst)
                             []
                             (vec (for [[i stage] (map-indexed vector inst)]
                                    (if (= i as) [] stage)))))))
        pages (r/atom 0)
        options {}]
    
    ;; helper functions on local state
    (letfn [(unset-stage! []
              (reset! active-stage nil))

            (set-stage! [stagei]
              (let [inst @current-instance]
                (when-not (nil? inst)
                  (reset! active-stage stagei))))]
      
      ;; render function
      (fn [pattern piece-xml current-instance]
        (let [as @active-stage]
          [:div.pure-g
           [:form.pure-form.pure-u-1.pure-u-md-3-4
            ;; TODO: deselect all button
            [:legend "Stage"]
            [:div.pure-button-group {:role "toolbar"}
             (doall
              (for [i (range (count pattern))]
                (let [sel-class (if (= i as)
                                  "vrv-selected pure-button-active"
                                  (str " vrv-highlighted-" (mod i 9)))
                      enabled-class (if (nil? @current-instance) " pure-button-disabled" "")]
                  [:a.pure-button
                   {:key i
                    :class (str sel-class " " enabled-class)
                       :on-click #(if (= i as)
                                    (unset-stage!)
                                    (set-stage! i))}
                   (inc i)])))]]
           [:form.pure-form.pure-u-1.pure-u-md-1-4
            {:on-submit (fn [] false)}
            ;; TODO: (de)activate page buttons based on page / number of pages
            [:legend "Page"]
            [:div
             [:a.pure-button
              {:disabled (<= (:page @controls) 1)
               :on-click #(swap! page vrv/prev-page @pages)}
              "<<"]
             " " @page " / " @pages " "
             [:a.pure-button
              {:disabled (>= (:page @controls) @pages)
               :on-click #(swap! page vrv/next-page @pages)}
              ">>"]]]
           [:div.pure-u-1
            [vrv/verovio-comp piece-xml controls selected pages options]]])))))

(defn empty-instance [pattern]
  (vec (repeat (count pattern) [])))

(defn make-current-instance [active-instance instances]
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

(defn manual-annotation-comp [pattern piece-xml instances]
  ;; local state /variables
  (let [active-instance (r/atom nil)
        current-instance (make-current-instance active-instance instances)]
    
    ;; helper functions on local state
    (letfn [(toggle-instance! [i]
              (swap! active-instance #(if (= % i) nil i)))
            
            (add-instance! []              
              (swap! instances
                     (fn [ins]
                       (let [i (inc (reduce max -1 (keys ins)))]
                         (reset! active-instance i)
                         (assoc ins i (empty-instance pattern))))))
            
            (delete-instance! [i]
              (swap! instances dissoc i))]
      
      ;; render function
      (fn [pattern piece-xml instances]
        (let [ai @active-instance]
          [:div
           [:h2 "Manual Annotations"]
           [manual-annotation-inner pattern piece-xml current-instance]
           ;; [:p (str @current-instance)]
           ;; [:p (str @active-instance)]
           ;; [:p (str @instances)]
           [:form.pure-form
            [:legend "Instances"]
            [:a.pure-button.pure-button-primary
             {:on-click #(add-instance!)}
             "New Instance"]]
           [:ol
            (doall
             (for [[i ins] @instances]
               [:li
                {:key i
                 :class (if (= i ai) "manual-instance-selected" "")}
                [:div.pure-g
                 [:div.pure-u-1.pure-u-md-3-4.manual-instance
                  [:div
                   (str "Instance " (inc i))]]
                 [:div.pure-u-1.pure-u-md-1-4;;.pure-g
                  [:div.pure-u-1-2
                   [:a.pure-button.pure-u-23-24
                    {:on-click #(toggle-instance! i)
                     :href "javascript:void()"
                     :class (if (= i ai) "pure-button-primary pure-button-active" "")}
                    "Select"]]
                  [:div.pure-u-1-2
                   (when (= i ai)
                     [:a.pure-button.button-danger.pure-u-23-24
                      {:on-click #(delete-instance! i)}
                      "Delete"])]]]]))]])))))
