// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__838__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__839__i = 0, G__839__a = new Array(arguments.length -  0);
while (G__839__i < G__839__a.length) {G__839__a[G__839__i] = arguments[G__839__i + 0]; ++G__839__i;}
  args = new cljs.core.IndexedSeq(G__839__a,0,null);
} 
return G__838__delegate.call(this,args);};
G__838.cljs$lang$maxFixedArity = 0;
G__838.cljs$lang$applyTo = (function (arglist__840){
var args = cljs.core.seq(arglist__840);
return G__838__delegate(args);
});
G__838.cljs$core$IFn$_invoke$arity$variadic = G__838__delegate;
return G__838;
})()
);

(o.error = (function() { 
var G__841__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__842__i = 0, G__842__a = new Array(arguments.length -  0);
while (G__842__i < G__842__a.length) {G__842__a[G__842__i] = arguments[G__842__i + 0]; ++G__842__i;}
  args = new cljs.core.IndexedSeq(G__842__a,0,null);
} 
return G__841__delegate.call(this,args);};
G__841.cljs$lang$maxFixedArity = 0;
G__841.cljs$lang$applyTo = (function (arglist__843){
var args = cljs.core.seq(arglist__843);
return G__841__delegate(args);
});
G__841.cljs$core$IFn$_invoke$arity$variadic = G__841__delegate;
return G__841;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
