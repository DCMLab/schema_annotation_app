// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown_to_hiccup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('markdown_to_hiccup.decode');
goog.require('hickory.core');
goog.require('markdown.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__3335){
return cljs.core.map_QMARK_.call(null,G__3335);
})], null),(function (G__3335){
return cljs.core.map_QMARK_.call(null,G__3335);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"encode?","encode?",-640109139)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","encode?","markdown-to-hiccup.core/encode?",-1516433262)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("markdown-to-hiccup.core","md->hiccup","markdown-to-hiccup.core/md->hiccup",1623858518,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword(null,"params","params",710516235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"md-str","md-str",-1726634417),new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),null,null),new cljs.core.Keyword("markdown-to-hiccup.core","hiccup","markdown-to-hiccup.core/hiccup",1147350639),null,null,null));
/**
 * Accepts a markdown string and returns a hiccup data structure converted from that markdown.
 *   Also accepts an optional params map. Use the :encode? boolean key to specify whether
 *   or not you want html escape characters to be encoded. Example:
 *  (md->hiccup "#Title" {:encode? true})
 */
markdown_to_hiccup.core.md__GT_hiccup = (function markdown_to_hiccup$core$md__GT_hiccup(var_args){
var G__3337 = arguments.length;
switch (G__3337) {
case 2:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (md_str,params){
var valid_md = (cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"/home/runner/.cljs/.aot_cache/1.11.60/8CFF774/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","markdown","markdown-to-hiccup.core/markdown",1289845536),md_str):md_str):md_str);
var encode_QMARK_ = new cljs.core.Keyword(null,"encode?","encode?",-640109139).cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"/home/runner/.cljs/.aot_cache/1.11.60/8CFF774/cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_.call(null,new cljs.core.Keyword("markdown-to-hiccup.core","options","markdown-to-hiccup.core/options",439665020),params):params):params));
var html = markdown.core.md__GT_html.call(null,valid_md);
var dom = hickory.core.parse.call(null,html);
var hiccup = cljs.core.first.call(null,hickory.core.as_hiccup.call(null,dom));
if(cljs.core.truth_(encode_QMARK_)){
return hiccup;
} else {
return markdown_to_hiccup.decode.decode.call(null,hiccup);
}
}));

(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (md_str){
return markdown_to_hiccup.core.md__GT_hiccup.call(null,md_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encode?","encode?",-640109139),false], null));
}));

(markdown_to_hiccup.core.md__GT_hiccup.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated. Please use hiccup-in for better access to nested hiccup.
 *   Accepts a hiccup data structure and a keyword representing
 *   an html element tag (e.g. :body) and returns the first nested
 *   hiccup vector identified by the keyword.
 */
markdown_to_hiccup.core.hicc_in = (function markdown_to_hiccup$core$hicc_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3341 = arguments.length;
var i__5770__auto___3342 = (0);
while(true){
if((i__5770__auto___3342 < len__5769__auto___3341)){
args__5775__auto__.push((arguments[i__5770__auto___3342]));

var G__3343 = (i__5770__auto___3342 + (1));
i__5770__auto___3342 = G__3343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kws){
while(true){
var kw = cljs.core.first.call(null,kws);
var root = cljs.core.first.call(null,hiccup);
if((kw == null)){
return hiccup;
} else {
if(cljs.core.empty_QMARK_.call(null,hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.map_QMARK_.call(null,root)){
var G__3344 = cljs.core.rest.call(null,hiccup);
var G__3345 = kws;
hiccup = G__3344;
kws = G__3345;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,root)){
var branch_result = cljs.core.apply.call(null,markdown_to_hiccup.core.hicc_in,root,kws);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var G__3346 = cljs.core.rest.call(null,hiccup);
var G__3347 = kws;
hiccup = G__3346;
kws = G__3347;
continue;
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.call(null,root,kw)){
var G__3348 = hiccup;
var G__3349 = cljs.core.rest.call(null,kws);
hiccup = G__3348;
kws = G__3349;
continue;
} else {
var G__3350 = cljs.core.rest.call(null,hiccup);
var G__3351 = kws;
hiccup = G__3350;
kws = G__3351;
continue;

}
}
}
}
}
break;
}
}));

(markdown_to_hiccup.core.hicc_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.core.hicc_in.cljs$lang$applyTo = (function (seq3339){
var G__3340 = cljs.core.first.call(null,seq3339);
var seq3339__$1 = cljs.core.next.call(null,seq3339);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3340,seq3339__$1);
}));

markdown_to_hiccup.core.keywords_QMARK_ = (function markdown_to_hiccup$core$keywords_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3353 = arguments.length;
var i__5770__auto___3354 = (0);
while(true){
if((i__5770__auto___3354 < len__5769__auto___3353)){
args__5775__auto__.push((arguments[i__5770__auto___3354]));

var G__3355 = (i__5770__auto___3354 + (1));
i__5770__auto___3354 = G__3355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,args);
}));

(markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$applyTo = (function (seq3352){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3352));
}));

/**
 * Accepts a list of [keyword count] pairs, and subtracts the count
 * of the first pair. If that count becomes negative, dec-front returns
 * the rest of the list. Otherwise, it returns the list with the new
 * count value for the first pair.
 */
markdown_to_hiccup.core.dec_front = (function markdown_to_hiccup$core$dec_front(kw_pairs){
var vec__3356 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__3356,(0),null);
var count = cljs.core.nth.call(null,vec__3356,(1),null);
var new_count = (count - (1));
var new_pair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new_count], null);
if((new_count < (0))){
return cljs.core.rest.call(null,kw_pairs);
} else {
return cljs.core.cons.call(null,new_pair,cljs.core.rest.call(null,kw_pairs));
}
});
/**
 * Accepts a list of keywords and numbers. Any place in which
 *   a number does not separate keywords, a zero will be inserted.
 *   Returns the arg list as a sequence of keyword -> number pairs
 *   nested as lists.
 */
markdown_to_hiccup.core.num_partition = (function markdown_to_hiccup$core$num_partition(args){
var arglist = args;
var ret_vec = cljs.core.PersistentVector.EMPTY;
while(true){
var curr_arg = cljs.core.first.call(null,arglist);
var prev_arg = cljs.core.peek.call(null,ret_vec);
if((curr_arg == null)){
if((prev_arg instanceof cljs.core.Keyword)){
return cljs.core.partition.call(null,(2),cljs.core.conj.call(null,ret_vec,(0)));
} else {
return cljs.core.partition.call(null,(2),ret_vec);
}
} else {
if(markdown_to_hiccup.core.keywords_QMARK_.call(null,curr_arg,prev_arg)){
var G__3359 = cljs.core.rest.call(null,arglist);
var G__3360 = cljs.core.conj.call(null,ret_vec,(0),curr_arg);
arglist = G__3359;
ret_vec = G__3360;
continue;
} else {
var G__3361 = cljs.core.rest.call(null,arglist);
var G__3362 = cljs.core.conj.call(null,ret_vec,curr_arg);
arglist = G__3361;
ret_vec = G__3362;
continue;

}
}
break;
}
});
markdown_to_hiccup.core.same_length_QMARK_ = (function markdown_to_hiccup$core$same_length_QMARK_(coll_a,coll_b){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll_a),cljs.core.count.call(null,coll_b));
});
/**
 * Recursive helper function for hiccup-in.
 */
markdown_to_hiccup.core.get_nested_hiccup = (function markdown_to_hiccup$core$get_nested_hiccup(hiccup,kw_pairs){
while(true){
var vec__3363 = cljs.core.first.call(null,kw_pairs);
var kw = cljs.core.nth.call(null,vec__3363,(0),null);
var nth_kw = cljs.core.nth.call(null,vec__3363,(1),null);
var front = cljs.core.first.call(null,hiccup);
var remaining = cljs.core.rest.call(null,hiccup);
if(cljs.core.empty_QMARK_.call(null,hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((kw == null)){
return hiccup;
} else {
if(cljs.core.map_QMARK_.call(null,front)){
var G__3366 = remaining;
var G__3367 = kw_pairs;
hiccup = G__3366;
kw_pairs = G__3367;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,front)){
var branch_result = markdown_to_hiccup.core.get_nested_hiccup.call(null,front,kw_pairs);
if(cljs.core.empty_QMARK_.call(null,branch_result)){
var nested_front = cljs.core.first.call(null,front);
if(cljs.core._EQ_.call(null,nested_front,kw)){
var G__3368 = remaining;
var G__3369 = markdown_to_hiccup.core.dec_front.call(null,kw_pairs);
hiccup = G__3368;
kw_pairs = G__3369;
continue;
} else {
var G__3370 = remaining;
var G__3371 = kw_pairs;
hiccup = G__3370;
kw_pairs = G__3371;
continue;
}
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.call(null,front,kw)){
var new_pairs = markdown_to_hiccup.core.dec_front.call(null,kw_pairs);
if(cljs.core.empty_QMARK_.call(null,new_pairs)){
return hiccup;
} else {
var G__3372 = remaining;
var G__3373 = new_pairs;
hiccup = G__3372;
kw_pairs = G__3373;
continue;

}
} else {
var G__3374 = remaining;
var G__3375 = kw_pairs;
hiccup = G__3374;
kw_pairs = G__3375;
continue;

}
}
}
}
}
break;
}
});
/**
 * Accepts a hiccup data structure and any series of args in keyword, index order.
 * Each keyword represents a hiccup element, and the paired index is which element at that level hiccup-in will look in.
 * If no number proceeds a keyword, hiccup-in will find the first element with that keyword.
 * Returns the nested hiccup vector identified by the keywords.
 * Example: (hiccup-in hiccup :html :body :div 0 :h1 2 :p)
 */
markdown_to_hiccup.core.hiccup_in = (function markdown_to_hiccup$core$hiccup_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3378 = arguments.length;
var i__5770__auto___3379 = (0);
while(true){
if((i__5770__auto___3379 < len__5769__auto___3378)){
args__5775__auto__.push((arguments[i__5770__auto___3379]));

var G__3380 = (i__5770__auto___3379 + (1));
i__5770__auto___3379 = G__3380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kw_pairs){
var pathway = markdown_to_hiccup.core.num_partition.call(null,kw_pairs);
return markdown_to_hiccup.core.get_nested_hiccup.call(null,hiccup,pathway);
}));

(markdown_to_hiccup.core.hiccup_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.core.hiccup_in.cljs$lang$applyTo = (function (seq3376){
var G__3377 = cljs.core.first.call(null,seq3376);
var seq3376__$1 = cljs.core.next.call(null,seq3376);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3377,seq3376__$1);
}));

/**
 * Accepts hiccup and returns the same hiccup only
 * without the :html, :head, and :body elements. Useful
 * if you want to nest your markdown hiccup in existing
 * hiccup data structures.
 */
markdown_to_hiccup.core.component = (function markdown_to_hiccup$core$component(hiccup){
var body = markdown_to_hiccup.core.hiccup_in.call(null,hiccup,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.rest.call(null,body)));
});

//# sourceMappingURL=core.js.map
