(ns intervals.core)

;; Protocols

(defprotocol IInterval
  "Operations on intervals"
  (i+ [i1 i2] "Adds two intervals.")
  (i- [i] [i1 i2] "Negates or substracts intervals.")
  (i* [i n] "Muliplies the interval `i` with the integer `n`.")
  (abs [i] "Returns the upward directed version of `i`.")
  (direction [i] "Returns the direction of `i`: up (`1`), down (`-1`), or undirected (`0`).")
  (zero [i] "Returns the zero interval of the same type as `i`.")
  (octave [i] [i n] "Returns the (upward) octave of the same type as `i`.
                     If `n` is given, returns `n` octaves.")
  (ic [i] "Returns the interval class of `i` (mod octave)."))

(defprotocol IDiatonic
  "Operations specific to (in some sense) diatonic interval types"
  (step? [i] "If `i` is a diatonic pitch type, tests if `i` is a step."))

(defprotocol IChromatic
  "Operations specific to (in some sense) chromatic interval types"
  (chromatic-semitone [i] "Returns the chromatic semitone of the same type as `i`."))

(defprotocol IEmbed
  "Operations on interval classes"
  (embed [i] [i o] "Embeds `i` into the default octave or, if provided into octave `o`."))

(defprotocol IToMidi
  "Conversion of pitches and intervals to MIDI pitch"
  (to-midi [i] "Returns a midi pitch approximation of `i`."))

;; Pitches
;;;;;;;;;;

(defprotocol IPitch
  "Operations on pitches"
  (interval [p] "Returns the underlying interval.")
  (p+i [p i] "Transposes `p` by `i`.")
  (p-i [p i] "Substracts `i` from `p`.")
  (pc [p] "Returns the pitch class of `p` (mod octave)."))

(defprotocol IPitchNotation
  "Allows Pitches to be printent according to their interval type"
  (notate-pitch [i] "A string notation of a pitch based on `i`."))

(defrecord Pitch [_interval]
  IPitch
  (interval [_] _interval)
  (p+i [_ i] (Pitch. (i+ _interval i)))
  (p-i [_ i] (Pitch. (i- _interval i)))
  (pc [_] (Pitch. (ic _interval)))
  
  IEmbed
  (embed [_] (Pitch. (embed _interval)))
  (embed [_ o] (Pitch. (embed _interval o)))
  
  IDiatonic
  (step? [_] (step? _interval))
  
  IToMidi
  (to-midi [_] (to-midi _interval))
  
  Object
  (toString [_] (notate-pitch _interval)))

(defn make-pitch [interval]
  (Pitch. interval))

(defn p-p [p1 p2]
  (p-i p1 (interval p2)))

(defn p-to [p1 p2]
  (p-p p2 p1))
