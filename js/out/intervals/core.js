// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('intervals.core');
goog.require('cljs.core');

/**
 * Operations on intervals
 * @interface
 */
intervals.core.IInterval = function(){};

var intervals$core$IInterval$i_PLUS_$dyn_937 = (function (i1,i2){
var x__5393__auto__ = (((i1 == null))?null:i1);
var m__5394__auto__ = (intervals.core.i_PLUS_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i1,i2);
} else {
var m__5392__auto__ = (intervals.core.i_PLUS_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i1,i2);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.i+",i1);
}
}
});
/**
 * Adds two intervals.
 */
intervals.core.i_PLUS_ = (function intervals$core$i_PLUS_(i1,i2){
if((((!((i1 == null)))) && ((!((i1.intervals$core$IInterval$i_PLUS_$arity$2 == null)))))){
return i1.intervals$core$IInterval$i_PLUS_$arity$2(i1,i2);
} else {
return intervals$core$IInterval$i_PLUS_$dyn_937.call(null,i1,i2);
}
});

var intervals$core$IInterval$i_$dyn_938 = (function() {
var G__939 = null;
var G__939__1 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.i_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.i_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.i-",i);
}
}
});
var G__939__2 = (function (i1,i2){
var x__5393__auto__ = (((i1 == null))?null:i1);
var m__5394__auto__ = (intervals.core.i_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i1,i2);
} else {
var m__5392__auto__ = (intervals.core.i_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i1,i2);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.i-",i1);
}
}
});
G__939 = function(i1,i2){
switch(arguments.length){
case 1:
return G__939__1.call(this,i1);
case 2:
return G__939__2.call(this,i1,i2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__939.cljs$core$IFn$_invoke$arity$1 = G__939__1;
G__939.cljs$core$IFn$_invoke$arity$2 = G__939__2;
return G__939;
})()
;
/**
 * Negates or substracts intervals.
 */
intervals.core.i_ = (function intervals$core$i_(var_args){
var G__934 = arguments.length;
switch (G__934) {
case 1:
return intervals.core.i_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intervals.core.i_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intervals.core.i_.cljs$core$IFn$_invoke$arity$1 = (function (i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$i_$arity$1 == null)))))){
return i.intervals$core$IInterval$i_$arity$1(i);
} else {
return intervals$core$IInterval$i_$dyn_938.call(null,i);
}
}));

(intervals.core.i_.cljs$core$IFn$_invoke$arity$2 = (function (i1,i2){
if((((!((i1 == null)))) && ((!((i1.intervals$core$IInterval$i_$arity$2 == null)))))){
return i1.intervals$core$IInterval$i_$arity$2(i1,i2);
} else {
return intervals$core$IInterval$i_$dyn_938.call(null,i1,i2);
}
}));

(intervals.core.i_.cljs$lang$maxFixedArity = 2);


var intervals$core$IInterval$i_STAR_$dyn_941 = (function (i,n){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.i_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i,n);
} else {
var m__5392__auto__ = (intervals.core.i_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i,n);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.i*",i);
}
}
});
/**
 * Muliplies the interval `i` with the integer `n`.
 */
intervals.core.i_STAR_ = (function intervals$core$i_STAR_(i,n){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$i_STAR_$arity$2 == null)))))){
return i.intervals$core$IInterval$i_STAR_$arity$2(i,n);
} else {
return intervals$core$IInterval$i_STAR_$dyn_941.call(null,i,n);
}
});

var intervals$core$IInterval$iabs$dyn_942 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.iabs[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.iabs["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.iabs",i);
}
}
});
/**
 * Returns the upward directed version of `i`.
 */
intervals.core.iabs = (function intervals$core$iabs(i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$iabs$arity$1 == null)))))){
return i.intervals$core$IInterval$iabs$arity$1(i);
} else {
return intervals$core$IInterval$iabs$dyn_942.call(null,i);
}
});

var intervals$core$IInterval$direction$dyn_943 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.direction[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.direction["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.direction",i);
}
}
});
/**
 * Returns the direction of `i`: up (`1`), down (`-1`), or undirected (`0`).
 */
intervals.core.direction = (function intervals$core$direction(i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$direction$arity$1 == null)))))){
return i.intervals$core$IInterval$direction$arity$1(i);
} else {
return intervals$core$IInterval$direction$dyn_943.call(null,i);
}
});

var intervals$core$IInterval$zero$dyn_944 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.zero[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.zero["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.zero",i);
}
}
});
/**
 * Returns the zero interval of the same type as `i`.
 */
intervals.core.zero = (function intervals$core$zero(i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$zero$arity$1 == null)))))){
return i.intervals$core$IInterval$zero$arity$1(i);
} else {
return intervals$core$IInterval$zero$dyn_944.call(null,i);
}
});

var intervals$core$IInterval$octave$dyn_945 = (function() {
var G__946 = null;
var G__946__1 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.octave[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.octave["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.octave",i);
}
}
});
var G__946__2 = (function (i,n){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.octave[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i,n);
} else {
var m__5392__auto__ = (intervals.core.octave["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i,n);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.octave",i);
}
}
});
G__946 = function(i,n){
switch(arguments.length){
case 1:
return G__946__1.call(this,i);
case 2:
return G__946__2.call(this,i,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__946.cljs$core$IFn$_invoke$arity$1 = G__946__1;
G__946.cljs$core$IFn$_invoke$arity$2 = G__946__2;
return G__946;
})()
;
/**
 * Returns the (upward) octave of the same type as `i`.
 *                   If `n` is given, returns `n` octaves.
 */
intervals.core.octave = (function intervals$core$octave(var_args){
var G__936 = arguments.length;
switch (G__936) {
case 1:
return intervals.core.octave.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intervals.core.octave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intervals.core.octave.cljs$core$IFn$_invoke$arity$1 = (function (i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$octave$arity$1 == null)))))){
return i.intervals$core$IInterval$octave$arity$1(i);
} else {
return intervals$core$IInterval$octave$dyn_945.call(null,i);
}
}));

(intervals.core.octave.cljs$core$IFn$_invoke$arity$2 = (function (i,n){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$octave$arity$2 == null)))))){
return i.intervals$core$IInterval$octave$arity$2(i,n);
} else {
return intervals$core$IInterval$octave$dyn_945.call(null,i,n);
}
}));

(intervals.core.octave.cljs$lang$maxFixedArity = 2);


var intervals$core$IInterval$ic$dyn_948 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.ic[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.ic["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IInterval.ic",i);
}
}
});
/**
 * Returns the interval class of `i` (mod octave).
 */
intervals.core.ic = (function intervals$core$ic(i){
if((((!((i == null)))) && ((!((i.intervals$core$IInterval$ic$arity$1 == null)))))){
return i.intervals$core$IInterval$ic$arity$1(i);
} else {
return intervals$core$IInterval$ic$dyn_948.call(null,i);
}
});


/**
 * Operations specific to (in some sense) diatonic interval types
 * @interface
 */
intervals.core.IDiatonic = function(){};

var intervals$core$IDiatonic$step_QMARK_$dyn_949 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.step_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.step_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IDiatonic.step?",i);
}
}
});
/**
 * If `i` is a diatonic pitch type, tests if `i` is a step.
 */
intervals.core.step_QMARK_ = (function intervals$core$step_QMARK_(i){
if((((!((i == null)))) && ((!((i.intervals$core$IDiatonic$step_QMARK_$arity$1 == null)))))){
return i.intervals$core$IDiatonic$step_QMARK_$arity$1(i);
} else {
return intervals$core$IDiatonic$step_QMARK_$dyn_949.call(null,i);
}
});


/**
 * Operations specific to (in some sense) chromatic interval types
 * @interface
 */
intervals.core.IChromatic = function(){};

var intervals$core$IChromatic$chromatic_semitone$dyn_950 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.chromatic_semitone[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.chromatic_semitone["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IChromatic.chromatic-semitone",i);
}
}
});
/**
 * Returns the chromatic semitone of the same type as `i`.
 */
intervals.core.chromatic_semitone = (function intervals$core$chromatic_semitone(i){
if((((!((i == null)))) && ((!((i.intervals$core$IChromatic$chromatic_semitone$arity$1 == null)))))){
return i.intervals$core$IChromatic$chromatic_semitone$arity$1(i);
} else {
return intervals$core$IChromatic$chromatic_semitone$dyn_950.call(null,i);
}
});


/**
 * Operations on interval classes
 * @interface
 */
intervals.core.IEmbed = function(){};

var intervals$core$IEmbed$embed$dyn_953 = (function() {
var G__954 = null;
var G__954__1 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.embed[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.embed["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IEmbed.embed",i);
}
}
});
var G__954__2 = (function (i,o){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.embed[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i,o);
} else {
var m__5392__auto__ = (intervals.core.embed["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i,o);
} else {
throw cljs.core.missing_protocol.call(null,"IEmbed.embed",i);
}
}
});
G__954 = function(i,o){
switch(arguments.length){
case 1:
return G__954__1.call(this,i);
case 2:
return G__954__2.call(this,i,o);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__954.cljs$core$IFn$_invoke$arity$1 = G__954__1;
G__954.cljs$core$IFn$_invoke$arity$2 = G__954__2;
return G__954;
})()
;
/**
 * Embeds `i` into the default octave or, if provided into octave `o`.
 */
intervals.core.embed = (function intervals$core$embed(var_args){
var G__952 = arguments.length;
switch (G__952) {
case 1:
return intervals.core.embed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intervals.core.embed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intervals.core.embed.cljs$core$IFn$_invoke$arity$1 = (function (i){
if((((!((i == null)))) && ((!((i.intervals$core$IEmbed$embed$arity$1 == null)))))){
return i.intervals$core$IEmbed$embed$arity$1(i);
} else {
return intervals$core$IEmbed$embed$dyn_953.call(null,i);
}
}));

(intervals.core.embed.cljs$core$IFn$_invoke$arity$2 = (function (i,o){
if((((!((i == null)))) && ((!((i.intervals$core$IEmbed$embed$arity$2 == null)))))){
return i.intervals$core$IEmbed$embed$arity$2(i,o);
} else {
return intervals$core$IEmbed$embed$dyn_953.call(null,i,o);
}
}));

(intervals.core.embed.cljs$lang$maxFixedArity = 2);



/**
 * Conversion of pitches and intervals to MIDI pitch
 * @interface
 */
intervals.core.IToMidi = function(){};

var intervals$core$IToMidi$to_midi$dyn_956 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.to_midi[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.to_midi["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IToMidi.to-midi",i);
}
}
});
/**
 * Returns a midi pitch approximation of `i`.
 */
intervals.core.to_midi = (function intervals$core$to_midi(i){
if((((!((i == null)))) && ((!((i.intervals$core$IToMidi$to_midi$arity$1 == null)))))){
return i.intervals$core$IToMidi$to_midi$arity$1(i);
} else {
return intervals$core$IToMidi$to_midi$dyn_956.call(null,i);
}
});


/**
 * Operations on pitches
 * @interface
 */
intervals.core.IPitch = function(){};

var intervals$core$IPitch$interval$dyn_957 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (intervals.core.interval[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (intervals.core.interval["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"IPitch.interval",p);
}
}
});
/**
 * Returns the underlying interval.
 */
intervals.core.interval = (function intervals$core$interval(p){
if((((!((p == null)))) && ((!((p.intervals$core$IPitch$interval$arity$1 == null)))))){
return p.intervals$core$IPitch$interval$arity$1(p);
} else {
return intervals$core$IPitch$interval$dyn_957.call(null,p);
}
});

var intervals$core$IPitch$p_PLUS_i$dyn_958 = (function (p,i){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (intervals.core.p_PLUS_i[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,i);
} else {
var m__5392__auto__ = (intervals.core.p_PLUS_i["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,i);
} else {
throw cljs.core.missing_protocol.call(null,"IPitch.p+i",p);
}
}
});
/**
 * Transposes `p` by `i`.
 */
intervals.core.p_PLUS_i = (function intervals$core$p_PLUS_i(p,i){
if((((!((p == null)))) && ((!((p.intervals$core$IPitch$p_PLUS_i$arity$2 == null)))))){
return p.intervals$core$IPitch$p_PLUS_i$arity$2(p,i);
} else {
return intervals$core$IPitch$p_PLUS_i$dyn_958.call(null,p,i);
}
});

var intervals$core$IPitch$p_i$dyn_959 = (function (p,i){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (intervals.core.p_i[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,i);
} else {
var m__5392__auto__ = (intervals.core.p_i["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,i);
} else {
throw cljs.core.missing_protocol.call(null,"IPitch.p-i",p);
}
}
});
/**
 * Substracts `i` from `p`.
 */
intervals.core.p_i = (function intervals$core$p_i(p,i){
if((((!((p == null)))) && ((!((p.intervals$core$IPitch$p_i$arity$2 == null)))))){
return p.intervals$core$IPitch$p_i$arity$2(p,i);
} else {
return intervals$core$IPitch$p_i$dyn_959.call(null,p,i);
}
});

var intervals$core$IPitch$pc$dyn_960 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (intervals.core.pc[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (intervals.core.pc["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"IPitch.pc",p);
}
}
});
/**
 * Returns the pitch class of `p` (mod octave).
 */
intervals.core.pc = (function intervals$core$pc(p){
if((((!((p == null)))) && ((!((p.intervals$core$IPitch$pc$arity$1 == null)))))){
return p.intervals$core$IPitch$pc$arity$1(p);
} else {
return intervals$core$IPitch$pc$dyn_960.call(null,p);
}
});


/**
 * Allows Pitches to be printent according to their interval type
 * @interface
 */
intervals.core.IPitchNotation = function(){};

var intervals$core$IPitchNotation$notate_pitch$dyn_961 = (function (i){
var x__5393__auto__ = (((i == null))?null:i);
var m__5394__auto__ = (intervals.core.notate_pitch[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,i);
} else {
var m__5392__auto__ = (intervals.core.notate_pitch["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,i);
} else {
throw cljs.core.missing_protocol.call(null,"IPitchNotation.notate-pitch",i);
}
}
});
/**
 * A string notation of a pitch based on `i`.
 */
intervals.core.notate_pitch = (function intervals$core$notate_pitch(i){
if((((!((i == null)))) && ((!((i.intervals$core$IPitchNotation$notate_pitch$arity$1 == null)))))){
return i.intervals$core$IPitchNotation$notate_pitch$arity$1(i);
} else {
return intervals$core$IPitchNotation$notate_pitch$dyn_961.call(null,i);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {intervals.core.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {intervals.core.IDiatonic}
 * @implements {intervals.core.IToMidi}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {intervals.core.IPitch}
 * @implements {intervals.core.IEmbed}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
intervals.core.Pitch = (function (_interval,__meta,__extmap,__hash){
this._interval = _interval;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
(intervals.core.Pitch.prototype.toString = (function (){
var self__ = this;
var _ = this;
return intervals.core.notate_pitch.call(null,self__._interval);
}));

(intervals.core.Pitch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intervals.core.Pitch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k963,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__967 = k963;
var G__967__$1 = (((G__967 instanceof cljs.core.Keyword))?G__967.fqn:null);
switch (G__967__$1) {
case "_interval":
return self__._interval;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k963,else__5346__auto__);

}
}));

(intervals.core.Pitch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__968){
var vec__969 = p__968;
var k__5367__auto__ = cljs.core.nth.call(null,vec__969,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__969,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(intervals.core.Pitch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#intervals.core.Pitch{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_interval","_interval",-775950231),self__._interval],null))], null),self__.__extmap));
}));

(intervals.core.Pitch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__962){
var self__ = this;
var G__962__$1 = this;
return (new cljs.core.RecordIter((0),G__962__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_interval","_interval",-775950231)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(intervals.core.Pitch.prototype.intervals$core$IDiatonic$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.core.Pitch.prototype.intervals$core$IDiatonic$step_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return intervals.core.step_QMARK_.call(null,self__._interval);
}));

(intervals.core.Pitch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intervals.core.Pitch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intervals.core.Pitch(self__._interval,self__.__meta,self__.__extmap,self__.__hash));
}));

(intervals.core.Pitch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(intervals.core.Pitch.prototype.intervals$core$IToMidi$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.core.Pitch.prototype.intervals$core$IToMidi$to_midi$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return intervals.core.to_midi.call(null,self__._interval);
}));

(intervals.core.Pitch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1035349060 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intervals.core.Pitch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this964,other965){
var self__ = this;
var this964__$1 = this;
return (((!((other965 == null)))) && ((((this964__$1.constructor === other965.constructor)) && (((cljs.core._EQ_.call(null,this964__$1._interval,other965._interval)) && (cljs.core._EQ_.call(null,this964__$1.__extmap,other965.__extmap)))))));
}));

(intervals.core.Pitch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_interval","_interval",-775950231),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intervals.core.Pitch(self__._interval,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(intervals.core.Pitch.prototype.intervals$core$IEmbed$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.core.Pitch.prototype.intervals$core$IEmbed$embed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.core.Pitch(intervals.core.embed.call(null,self__._interval),null,null,null));
}));

(intervals.core.Pitch.prototype.intervals$core$IEmbed$embed$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new intervals.core.Pitch(intervals.core.embed.call(null,self__._interval,o),null,null,null));
}));

(intervals.core.Pitch.prototype.intervals$core$IPitch$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.core.Pitch.prototype.intervals$core$IPitch$interval$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._interval;
}));

(intervals.core.Pitch.prototype.intervals$core$IPitch$p_PLUS_i$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
return (new intervals.core.Pitch(intervals.core.i_PLUS_.call(null,self__._interval,i),null,null,null));
}));

(intervals.core.Pitch.prototype.intervals$core$IPitch$p_i$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
return (new intervals.core.Pitch(intervals.core.i_.call(null,self__._interval,i),null,null,null));
}));

(intervals.core.Pitch.prototype.intervals$core$IPitch$pc$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.core.Pitch(intervals.core.ic.call(null,self__._interval),null,null,null));
}));

(intervals.core.Pitch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k963){
var self__ = this;
var this__5350__auto____$1 = this;
var G__972 = k963;
var G__972__$1 = (((G__972 instanceof cljs.core.Keyword))?G__972.fqn:null);
switch (G__972__$1) {
case "_interval":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k963);

}
}));

(intervals.core.Pitch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__962){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__973 = cljs.core.keyword_identical_QMARK_;
var expr__974 = k__5352__auto__;
if(cljs.core.truth_(pred__973.call(null,new cljs.core.Keyword(null,"_interval","_interval",-775950231),expr__974))){
return (new intervals.core.Pitch(G__962,self__.__meta,self__.__extmap,null));
} else {
return (new intervals.core.Pitch(self__._interval,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__962),null));
}
}));

(intervals.core.Pitch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_interval","_interval",-775950231),self__._interval,null))], null),self__.__extmap));
}));

(intervals.core.Pitch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__962){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intervals.core.Pitch(self__._interval,G__962,self__.__extmap,self__.__hash));
}));

(intervals.core.Pitch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intervals.core.Pitch.prototype.cljs$core$IComparable$_compare$arity$2 = (function (p1,p2){
var self__ = this;
var p1__$1 = this;
return cljs.core.compare.call(null,p1__$1.intervals$core$IPitch$interval$arity$1(null),intervals.core.interval.call(null,p2));
}));

(intervals.core.Pitch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_interval","_interval",864581296,null)], null);
}));

(intervals.core.Pitch.cljs$lang$type = true);

(intervals.core.Pitch.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intervals.core/Pitch",null,(1),null));
}));

(intervals.core.Pitch.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"intervals.core/Pitch");
}));

/**
 * Positional factory function for intervals.core/Pitch.
 */
intervals.core.__GT_Pitch = (function intervals$core$__GT_Pitch(_interval){
return (new intervals.core.Pitch(_interval,null,null,null));
});

/**
 * Factory function for intervals.core/Pitch, taking a map of keywords to field values.
 */
intervals.core.map__GT_Pitch = (function intervals$core$map__GT_Pitch(G__966){
var extmap__5385__auto__ = (function (){var G__976 = cljs.core.dissoc.call(null,G__966,new cljs.core.Keyword(null,"_interval","_interval",-775950231));
if(cljs.core.record_QMARK_.call(null,G__966)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__976);
} else {
return G__976;
}
})();
return (new intervals.core.Pitch(new cljs.core.Keyword(null,"_interval","_interval",-775950231).cljs$core$IFn$_invoke$arity$1(G__966),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

intervals.core.make_pitch = (function intervals$core$make_pitch(interval){
return (new intervals.core.Pitch(interval,null,null,null));
});
intervals.core.p_p = (function intervals$core$p_p(p1,p2){
return intervals.core.i_.call(null,intervals.core.interval.call(null,p1),intervals.core.interval.call(null,p2));
});
intervals.core.p_to = (function intervals$core$p_to(p1,p2){
return intervals.core.p_p.call(null,p2,p1);
});

//# sourceMappingURL=core.js.map
