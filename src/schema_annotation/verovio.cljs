(ns schema-annotation.verovio
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def xml-test "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>
<!DOCTYPE score-partwise PUBLIC
    \"-//Recordare//DTD MusicXML 3.1 Partwise//EN\"
    \"http://www.musicxml.org/dtds/partwise.dtd\">
<score-partwise version=\"3.1\">
  <part-list>
    <score-part id=\"P1\">
      <part-name>Music</part-name>
    </score-part>
  </part-list>
  <part id=\"P1\">
    <measure number=\"1\">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
</score-partwise>")

(def verovio-controls
  {:page 1
   :selected #{}
   :highlighted []
   :data nil
   :allow-select true})

(defn next-page [controls pages]
  (update controls :page #(min (inc %) pages)))

(defn prev-page [controls pages]
  (update controls :page #(max (dec %) 1)))

(defn load-from-file! [controls file]
  (let [reader (new js/FileReader)]
    (set! (.-onload reader)
          (fn [e]
            (swap! controls assoc :data (.. e -target -result))))
    (.readAsText reader file)))

(def verovio-options
  {:scale 50
   :pageWidth 2048
   :adjustPageHeight true
   :header "none"
   :footer "none"
   :format "xml"})

(defn create-tk! [options]
  (let [tk (new js/verovio.toolkit)]
    (.setOptions tk (clj->js options))
    tk))

(defn load-data [tk data]
  (js/tk.loadData data)
  (js/tk.getPageCount))

(defn page-svg [tk page]
  (js/tk.renderToSVG page))

(defn toggle-in-selection [sel elt]
  (if (some #{elt} sel)
    (disj sel elt)
    (conj sel elt)))

(defn add-select-handlers! [dom-node controls]
  (letfn [(toggle-select! [id]
            (swap! controls update :selected toggle-in-selection id))]
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

(defn verovio-inner [controls pages in-opts]
  (let [options (conj verovio-options in-opts)
        tk (create-tk! options)
        ;; cursors for control elements
        data (r/cursor controls [:data])
        page (r/cursor controls [:page])
        pgs (reagent.ratom/run! (reset! pages (load-data tk @data)))
        svg (reagent.ratom/run! @data (page-svg tk @page))]
    (r/create-class
     {:reagent-render
      (fn []
        (let [c @controls] ;; ensures update on every change of controls
          [:div {:dangerouslySetInnerHTML {:__html @svg}}]))
      
      :component-did-mount
      (fn [comp]
        (swap! controls assoc :page 1))
      
      :component-did-update
      (fn [comp]
        (let [comp-dom (r/dom-node comp)]
          (reset-note-classes! comp-dom)
          (when (:allow-select @controls)
            (add-select-handlers! comp-dom controls)
            (add-class-to-notes! comp-dom (:selected @controls) "vrv-selected"))
          (doseq [[i group] (map-indexed vector (:highlighted @controls))]
            (add-class-to-notes! comp-dom group (str "vrv-highlighted-" (mod i 9))))))
      
      :display-name "verovio-inner"})))

(defn verovio-example []
  (let [controls (r/atom (assoc verovio-controls :data xml-test))
        pages (r/atom 0)
        options {}]
    (fn []
      [:div
       [:form.pure-form.pure-g
        [:div.pure-u-1-4
         [:a.pure-button
          {:disabled (<= (:page @controls) 1)
           :on-click #(swap! controls prev-page @pages)} "<<"]
         " " (:page @controls) " / " @pages " "
         [:a.pure-button
          {:disabled (>= (:page @controls) @pages)
           :on-click #(swap! controls next-page @pages)} ">>"]]
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
                          (swap! controls assoc :highlighted hls)))}]]
        [:div.pure-u-1-4
         [:input
          {:type "file"
           :accept ".xml,.musicxml"
           :multiple false
           :on-change (fn [ev]
                        (let [files (.. ev -target -files)]
                          (load-from-file! controls (aget files 0))))}]]
        
        
        [:div.pure-u-3-4
         "Selection:" (clj->js (:selected @controls))]
        [:a.pure-button.pure-u-1-4
         {:disabled (empty? (:selected @controls))
          :on-click #(swap! controls update :selected empty)}
         "Clear Selection"]
        
        ]
       [verovio-inner controls pages options]])))
