(ns intervals.spelled
  (:require [intervals.core :as i]
            [clojure.string :as str]))

;; common stuff for the diatonic-chromatic system
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defonce diachrom [0 2 4 5 7 9 11])
(defonce dianames ["C", "D", "E", "F", "G", "A", "B"])
(defonce dianames-lookup (zipmap dianames (range)))
(defonce diafifths [0 2 4 -1 1 3 5])
(defonce perfectints #{0 3 4})

(defonce rg-sic #"^(-?)(a+|d+|[MPm])([1-7])$")
(defonce rg-spelled #"^(-?)(a+|d+|[MPm])([1-7])(\+|-)(\d+)$")

(defonce rg-spc #"(?i)^([a-g])(♭+|♯+|b+|#+)?$")
(defonce rg-spelled-p #"(?i)^([a-g])(♭+|♯+|b+|#+)?(-?\d+)$")

(defn dia->chrom [d]
  (+ (diachrom (mod d 7))
     (* 12 (Math/floor (/ d 7)))))

(defn qualpf [n a p d]
  (cond
    (> n 0) (str/join (repeat n a))
    (< n 0) (str/join (repeat (- n) d))
    :else p))

(defn qualimpf [n a mj mn d]
  (cond
    (> n 0) (str/join (repeat n a))
    (< n -1) (str/join (repeat (- -1 n) d))
    (= n -1) mn
    :else mj))

(defn accstr [n s f]
  (qualpf n s "" f))

;; Spelled intervals
;;;;;;;;;;;;;;;;;;;;

(declare make-sic)

(defrecord SInterval [dia chrom]
  i/IInterval
  (i+ [_ i2] (SInterval. (+ dia (:dia i2)) (+ chrom (:chrom i2))))
  (i- [_ i2] (SInterval. (- dia (:dia i2)) (- chrom (:chrom i2))))
  (i- [i] (SInterval. (- dia) (- chrom)))
  (i* [_ n] (SInterval. (* dia n) (* chrom n)))
  (iabs [i] (if (< (i/direction i) 0) (i/i- i) i))
  (direction [i] (compare i (i/zero i)))
  (zero [i] (SInterval. 0 0))
  (octave [_] (SInterval. 7 12))
  (octave [_ n] (SInterval. (* 7 n) (* 12 n)))
  (ic [_] (make-sic dia chrom))
  
  i/IDiatonic
  (step? [_] (<= (i/iabs dia) 1))

  i/IChromatic
  (chromatic-semitone [_] (SInterval. 0 1))
  
  i/IEmbed
  (embed [i] i)
  
  i/IToMidi
  (to-midi [_] (+ chrom 12)) ;; C4 = 48 semitones above C0 = MIDI 60

  i/IPitchNotation
  (notate-pitch [_]
    (let [alter (- chrom (dia->chrom dia))
          oct (js/Math.floor (/ dia 7))]
      (str (dianames (mod dia 7)) (accstr alter "♯" "♭") oct)))
  
  IComparable
  (-compare [_ i2]
    (let [d2 (:dia i2)
          c2 (:chrom i2)]
      (cond
        (or (< dia d2) (and (= dia d2) (< chrom c2))) -1
        (and (= dia d2) (= chrom c2)) 0
        :else 1)))
  
  Object
  (toString [i]
    (if (< (:dia i) 0)
      (str "-" (i/iabs i))
      (let [dmod (mod dia 7)
            diff (- chrom (dia->chrom dia))
            qual (if (perfectints dmod)
                   (qualpf diff "a", "P", "d")
                   (qualimpf diff "a", "M", "m", "d"))
            oct (js/Math.floor (/ dia 7))
            octstr (if (>= oct 0) (str "+" oct) (str oct))]
        (str qual (inc dmod) octstr)))))

(defn make-spelled [dia chrom]
  (SInterval. dia chrom))

(defn make-spelled-p [dia chrom]
  (i/make-pitch (make-spelled dia chrom)))

;; Spelled interval class
;;;;;;;;;;;;;;;;;;;;;;;;;

(defrecord SIC [fifths]
  i/IInterval
  (i+ [_ i2] (SIC. (+ fifths (:fifths i2))))
  (i- [_ i2] (SIC. (- fifths (:fifths i2))))
  (i- [_] (SIC. (- fifths)))
  (i* [_ n] (SIC. (* fifths n)))
  (iabs [i] i)
  (direction [i]
    (let [d (:dia (i/embed i))]
      (if (= d 0)
        0
        (if (< d 4) 1 -1))))
  (zero [_] (SIC. 0))
  (octave [_] (SIC. 0))
  (octave [_ _] (SIC. 0))
  (ic [i] i)
  
  i/IDiatonic
  (step? [i] (i/iabs (:dia (i/embed i))))
  
  i/IChromatic
  (chromatic-semitone [_] (SIC. 7))
  
  i/IEmbed
  (embed [_]
    (let [dia (* fifths 4)
          chrom (* fifths 7)]
      (make-spelled (mod dia 7) (- chrom (* 12 (js/Math.floor (/ dia 7)))))))
  
  i/IToMidi 
  (to-midi [_] (mod (* fifths 7) 12))

  i/IPitchNotation
  (notate-pitch [ic]
    (let [i (i/embed ic)
          dia (:dia i)
          chrom (:chrom i)
          alter (- chrom (dia->chrom dia))]
      (str (dianames (mod dia 7)) (accstr alter "♯" "♭"))))
  
  Object
  (toString [ic]
    (let [i (i/embed ic)
          dia (:dia i)
          chrom (:chrom i)
          diff (- chrom (dia->chrom dia))
          qual (if (perfectints dia)
                 (qualpf diff "a", "P", "d")
                 (qualimpf diff "a", "M", "m", "d"))]
      (str qual (inc dia)))))

(defn make-sic
  ([fifths]
   (SIC. fifths))
  ([dia chrom]
   (let [diff (- chrom (dia->chrom dia))]
     (make-sic (+ (diafifths (mod dia 7)) (* 7 diff))))))

(defn make-spc
  ([fifths]
   (i/make-pitch (make-sic fifths)))
  ([dia chrom]
   (i/make-pitch (make-sic dia chrom))))

;; parsing
;;;;;;;;;;

(defn match-interval [modifier num]
  (let [dia (dec (js/parseInt num))
        defchrom (diachrom dia)
        perfect (perfectints dia)
        chrom (cond
                (and (= modifier "M") (not perfect)) defchrom
                (and (= modifier "m") (not perfect)) (dec defchrom)
                (and (= modifier "P") perfect)       defchrom
                (re-find #"^a+$" modifier)           (+ defchrom (count modifier))
                (re-find #"^d+$" modifier)           (- defchrom
                                                        (count modifier)
                                                        (if perfect 0 1))
                :else nil)]
    (when chrom
      (make-spelled dia chrom))))

(defn parse-spelled [string]
  (when-let [m (re-find rg-spelled string)]
    (when-let [int (match-interval (m 2) (m 3))]
      (let [octs (js/parseInt (str (m 4) (m 5)))
            intoct (i/i+ int (i/octave int octs))]
        (if (= (m 1) "-") (i/i- intoct) intoct)))))

(defn parse-sic [string]
  (when-let [m (re-find rg-sic string)]
    (let [int (i/ic (match-interval (m 2) (m 3)))]
      (if (= (m 1) "-") (i/i- int) int))))

(defn match-pitch [letter accs]
  (when-let [dia (dianames-lookup (str/upper-case letter))]
    (let [defchrom (diachrom dia)
          chrom (cond
                  (or (nil? accs) (empty? accs)) defchrom
                  (re-find #"^♭+|b+$" accs) (- defchrom (count accs))
                  (re-find #"^♯+|#+$" accs) (+ defchrom (count accs))
                  :else nil)]
      (when chrom
        (make-spelled-p dia chrom)))))

(defn parse-spelled-p [string]
  (when-let [m (re-find rg-spelled-p string)]
    (let [octs (js/parseInt (m 3))
          pitch (match-pitch (m 1) (m 2))
          i (i/interval pitch)]
      (i/p+i pitch (i/octave i octs)))))

(defn parse-spc [string]
  (when-let [m (re-find rg-spc string)]
    (i/pc (match-pitch (m 1) (m 2)))))
