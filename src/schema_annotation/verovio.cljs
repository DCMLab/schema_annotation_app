(ns schema-annotation.verovio
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [reagent.ratom :as ratom]
            [clojure.string :as str]
            [schema-annotation.helpers :as h]))

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

(defn load-all-pages! [tk data]
  (js/tk.loadData data)
  (let [pages (js/tk.getPageCount)]
    (doall
     (for [page (range 1 (inc pages))]
       (js/tk.renderToSVG page)))))

(defn scroll-to-note! [dom-node jump-atom]
  (let [jump @jump-atom]
    (let [pad-top 50
          container-top (.. dom-node getBoundingClientRect -top)
          container-scroll (.. dom-node -scrollTop)
          elts (filter
                #(not (nil? %))
                (for [j jump] (.. js/document (getElementById j))))
          elt-tops (map #(.. % getBoundingClientRect -top) elts)
          min-elt-top (apply min elt-tops)
          max-elt-top (apply max elt-tops)
          offset (- min-elt-top container-top)
          height (. dom-node -clientHeight)]
      (when (or (< offset 0)
                (> offset (- height pad-top))
                (and (< (- min-elt-top max-elt-top) (+ pad-top 10))
                     (> max-elt-top (+ container-top height -10))))
        (aset dom-node "scrollTop" (+ container-scroll (- offset pad-top))))))
  (reset! jump-atom nil))

(defn toggle-in-selection [sel elt]
  (if (some #{elt} sel)
    (disj sel elt)
    (conj sel elt)))

(defn add-select-handlers! [dom-node selected]
  (letfn [(toggle-select! [id]
            (swap! selected toggle-in-selection id))]
    (let [notes (.. js/d3 (select dom-node) (selectAll "svg") (selectAll ".note"))]
      (. notes on "click" (fn [] (this-as this
                                   (toggle-select! (.-id this))))))))

(defn reset-note-classes! [dom-node]
  (.. js/d3
      (select dom-node)
      (selectAll "svg")
      (selectAll ".note")
      (attr "class" "note")))

(defn add-class-to-notes! [dom-node ids class]
  (let [score (.. js/d3 (select dom-node) (select "svg") (selectAll ".node"))]
    (doseq [id ids]
      (let [note (.. js/d3 (select (str "#" id)) node)]
        (when (not= nil note)
          (.. note -classList (add class)))))))

(defn verovio-comp [data selected allow-select highlighted jump in-opts]
  (let [options (conj verovio-options in-opts)
        tk (create-tk! options)
        data-atom (r/atom data)
        svgs (reagent.ratom/run! (load-all-pages! tk @data-atom))]
    
    (r/create-class
     {:reagent-render
      (fn [data selected allow-select highlighted jump in-opts]
        (reset! data-atom data)
        ;; ensures update on every change of controls or selected
        (let [atoms (do @selected @highlighted @svgs)]
          [:div.verovio-cmp
           {:class (when @allow-select " allow-select")
            :dangerouslySetInnerHTML {:__html (str/join "\n" @svgs)}}]))
      
      :component-did-update
      (fn [comp]
        (let [comp-dom (rdom/dom-node comp)]
          (reset-note-classes! comp-dom)
          (when @allow-select
            (add-select-handlers! comp-dom selected)
            (add-class-to-notes! comp-dom @selected "vrv-selected"))
          (doseq [[i group] (map-indexed vector @highlighted)]
            ;; TODO: make color modulo an option
            (add-class-to-notes! comp-dom group (str "vrv-highlighted-" (mod i 9))))
          (when @jump (scroll-to-note! comp-dom jump))))
      
      :display-name "verovio-comp"})))

(defn verovio-example-comp []
  (let [data (r/atom h/xml-test)
        selected (r/atom #{})
        allow-select (r/atom true)
        highlighted (r/atom [])
        jump (r/atom nil)
        options {}]
    (fn []
      [:div
       [:form.pure-form.pure-g
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
       [verovio-comp selected allow-select highlighted jump options]])))
