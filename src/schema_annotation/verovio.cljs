(ns schema-annotation.verovio
  (:require [reagent.core :as r]
            [reagent.ratom :as ratom]
            [clojure.string :as str]
            [schema-annotation.helpers :as h]))



(def verovio-controls
  {:page 1
   :highlighted []
   :allow-select true})

(defn next-page [page pages]
  (min (inc page) pages))

(defn prev-page [page pages]
  (max (dec page) 1))

(def verovio-options
  {:scale 50
   :pageWidth 2048
   :pageHeight 1500
   :adjustPageHeight true
   :header "none"
   :footer "none"
   :format "xml"})

(defn create-tk! [options]
  (let [tk (new js/verovio.toolkit)]
    (.setOptions tk (clj->js options))
    tk))

(defn load-data! [tk data]
  (js/tk.loadData data)
  (js/tk.getPageCount))

(defn page-svg [tk page]
  (js/tk.renderToSVG page))

(defn jump-to-page! [tk jump-atom page-atom]
  (let [jump @jump-atom]
    (if (coll? jump)
      (when-not (empty? jump)
        (swap! page-atom
               (fn [page]
                 (let [elt-pages
                       (into {} (for [elt jump]
                                  [elt (js/tk.getPageWithElement elt)]))]
                   (if (not-any? #(= page %) (vals elt-pages))
                     (get elt-pages (first jump))
                     page)))))
      (reset! page-atom (js/tk.getPageWithElement jump))))
  (reset! jump-atom nil))

(defn toggle-in-selection [sel elt]
  (if (some #{elt} sel)
    (disj sel elt)
    (conj sel elt)))

(defn add-select-handlers! [dom-node selected]
  (letfn [(toggle-select! [id]
            (swap! selected toggle-in-selection id))]
    (let [notes (.. js/d3 (select dom-node) (select "svg") (selectAll ".note"))]
      (. notes on "click" (fn [] (this-as this
                                   (toggle-select! (.-id this))))))))

(defn reset-note-classes! [dom-node]
  (.. js/d3
      (select dom-node)
      (select "svg")
      (selectAll ".note")
      (attr "class" "note")))

(defn add-class-to-notes! [dom-node ids class]
  (let [score (.. js/d3 (select dom-node) (select "svg") (selectAll ".node"))]
    (doseq [id ids]
      (let [note (.. js/d3 (select (str "#" id)) node)]
        (when (not= nil note)
          (.. note -classList (add class)))))))

(defn verovio-comp [data selected allow-select highlighted page pages jump in-opts]
  (let [options (conj verovio-options in-opts)
        tk (create-tk! options)
        data-atom (r/atom data)
        pgs (reagent.ratom/run!
             (reset! pages (load-data! tk @data-atom)))
        svg (reagent.ratom/run! @pages (page-svg tk @page))]
    
    (load-data! tk data)
    (r/create-class
     {:reagent-render
      (fn [data selected allow-select highlighted page pages jump in-opts]
        (reset! data-atom data)
        (when @jump (jump-to-page! tk jump page))
        ;; ensures update on every change of controls or selected
        (let [atoms (do @selected @highlighted @page)]
          [:div {:class (str "verovio-cmp" (when @allow-select " allow-select"))
                 :dangerouslySetInnerHTML {:__html @svg}}]))
      
      :component-did-update
      (fn [comp]
        (let [comp-dom (r/dom-node comp)]
          (reset-note-classes! comp-dom)
          (when @allow-select
            (add-select-handlers! comp-dom selected)
            (add-class-to-notes! comp-dom @selected "vrv-selected"))
          (doseq [[i group] (map-indexed vector @highlighted)]
            ;; TODO: make color modulo an option
            (add-class-to-notes! comp-dom group (str "vrv-highlighted-" (mod i 9))))))
      
      :display-name "verovio-comp"})))

(defn verovio-example-comp []
  (let [data (r/atom h/xml-test)
        selected (r/atom #{})
        allow-select (r/atom true)
        highlighted (r/atom [])
        page (r/atom 1)
        pages (r/atom 0)
        jump (r/atom nil)
        options {}]
    (fn []
      [:div
       [:form.pure-form.pure-g
        [:div.pure-u-1-4
         [:a.pure-button
          {:disabled (<= @page 1)
           :on-click #(swap! page prev-page @pages)} "<<"]
         " " @page " / " @pages " "
         [:a.pure-button
          {:disabled (>= @page @pages)
           :on-click #(swap! page next-page @pages)} ">>"]]
        [:div.pure-u-1-2
         [:input.pure-u-23-24
          {:type "text"
           :placeholder "Highlighted"
           :on-change (fn [ev]
                        (let [input (.. ev -target -value)
                              hls (vec (for [group (str/split input ";")]
                                         (vec (filter (comp not str/blank?)
                                                      (map str/trim
                                                           (str/split group ","))))))]
                          (swap! highlighted hls)))}]]
        [:div.pure-u-1-4
         [:input
          {:type "file"
           :accept ".xml,.musicxml"
           :multiple false
           :on-change (fn [ev]
                        (let [files (.. ev -target -files)]
                          (h/load-from-file! data (aget files 0))
                          (swap! selected empty)))}]]
        
        [:div.pure-u-3-4
         "Selection:" (clj->js @selected)]
        [:a.pure-button.pure-u-1-4
         {:disabled (empty? @selected)
          :on-click #(swap! selected empty)}
         "Clear Selection"]]
       [verovio-comp selected allow-select highlighted page pages jump options]])))
