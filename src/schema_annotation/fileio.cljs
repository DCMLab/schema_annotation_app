(ns schema-annotation.fileio
  (:require [schema-annotation.io :as io]
            [schema-annotation.helpers :as h]
            [reagent.core :as r]))

;; file IO component
;;;;;;;;;;;;;;;;;;;;

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
                         (h/load-from-file! state (h/get-file @node-suggest) io/load-suggestions!)
                         (h/load-from-file! state (h/get-file @node-notes) io/load-notes!))}
            "Load Files"]]
          
          ;;[:div.pure-u-1.pure-u-md-1-5.placeholder]
          
          [:a.pure-button.pure-u-1.pure-u-md-1-5
           {:on-click #(io/download-annotations! @state)}
           "Download Annotations"]])
       
       [:a.hide-show
        {:href "javascript:void(0)"
         :on-click #(swap! visible not)}
        (if @visible "Hide IO" "Show IO")]])))
