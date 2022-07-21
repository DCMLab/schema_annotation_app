// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__2497){
var map__2498 = p__2497;
var map__2498__$1 = cljs.core.__destructure_map.call(null,map__2498);
var replacement_transformers = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__2498__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__2499 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__2500 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__2500);

try{var vec__2501 = cljs.core.reduce.call(null,(function (p__2504,transformer){
var vec__2505 = p__2504;
var text = cljs.core.nth.call(null,vec__2505,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__2505,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__2501,(0),null);
var new_state = cljs.core.nth.call(null,vec__2501,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__2499);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2510 = arguments.length;
var i__5770__auto___2511 = (0);
while(true){
if((i__5770__auto___2511 < len__5769__auto___2510)){
args__5775__auto__.push((arguments[i__5770__auto___2511]));

var G__2512 = (i__5770__auto___2511 + (1));
i__5770__auto___2511 = G__2512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq2508){
var G__2509 = cljs.core.first.call(null,seq2508);
var seq2508__$1 = cljs.core.next.call(null,seq2508);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2509,seq2508__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__2513_2517 = cljs.core.seq.call(null,lines);
var chunk__2514_2518 = null;
var count__2515_2519 = (0);
var i__2516_2520 = (0);
while(true){
if((i__2516_2520 < count__2515_2519)){
var line_2521 = cljs.core._nth.call(null,chunk__2514_2518,i__2516_2520);
markdown.links.parse_reference_link.call(null,line_2521,references);


var G__2522 = seq__2513_2517;
var G__2523 = chunk__2514_2518;
var G__2524 = count__2515_2519;
var G__2525 = (i__2516_2520 + (1));
seq__2513_2517 = G__2522;
chunk__2514_2518 = G__2523;
count__2515_2519 = G__2524;
i__2516_2520 = G__2525;
continue;
} else {
var temp__5804__auto___2526 = cljs.core.seq.call(null,seq__2513_2517);
if(temp__5804__auto___2526){
var seq__2513_2527__$1 = temp__5804__auto___2526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2513_2527__$1)){
var c__5568__auto___2528 = cljs.core.chunk_first.call(null,seq__2513_2527__$1);
var G__2529 = cljs.core.chunk_rest.call(null,seq__2513_2527__$1);
var G__2530 = c__5568__auto___2528;
var G__2531 = cljs.core.count.call(null,c__5568__auto___2528);
var G__2532 = (0);
seq__2513_2517 = G__2529;
chunk__2514_2518 = G__2530;
count__2515_2519 = G__2531;
i__2516_2520 = G__2532;
continue;
} else {
var line_2533 = cljs.core.first.call(null,seq__2513_2527__$1);
markdown.links.parse_reference_link.call(null,line_2533,references);


var G__2534 = cljs.core.next.call(null,seq__2513_2527__$1);
var G__2535 = null;
var G__2536 = (0);
var G__2537 = (0);
seq__2513_2517 = G__2534;
chunk__2514_2518 = G__2535;
count__2515_2519 = G__2536;
i__2516_2520 = G__2537;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__2538_2542 = cljs.core.seq.call(null,lines);
var chunk__2539_2543 = null;
var count__2540_2544 = (0);
var i__2541_2545 = (0);
while(true){
if((i__2541_2545 < count__2540_2544)){
var line_2546 = cljs.core._nth.call(null,chunk__2539_2543,i__2541_2545);
markdown.links.parse_footnote_link.call(null,line_2546,footnotes);


var G__2547 = seq__2538_2542;
var G__2548 = chunk__2539_2543;
var G__2549 = count__2540_2544;
var G__2550 = (i__2541_2545 + (1));
seq__2538_2542 = G__2547;
chunk__2539_2543 = G__2548;
count__2540_2544 = G__2549;
i__2541_2545 = G__2550;
continue;
} else {
var temp__5804__auto___2551 = cljs.core.seq.call(null,seq__2538_2542);
if(temp__5804__auto___2551){
var seq__2538_2552__$1 = temp__5804__auto___2551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2538_2552__$1)){
var c__5568__auto___2553 = cljs.core.chunk_first.call(null,seq__2538_2552__$1);
var G__2554 = cljs.core.chunk_rest.call(null,seq__2538_2552__$1);
var G__2555 = c__5568__auto___2553;
var G__2556 = cljs.core.count.call(null,c__5568__auto___2553);
var G__2557 = (0);
seq__2538_2542 = G__2554;
chunk__2539_2543 = G__2555;
count__2540_2544 = G__2556;
i__2541_2545 = G__2557;
continue;
} else {
var line_2558 = cljs.core.first.call(null,seq__2538_2552__$1);
markdown.links.parse_footnote_link.call(null,line_2558,footnotes);


var G__2559 = cljs.core.next.call(null,seq__2538_2552__$1);
var G__2560 = null;
var G__2561 = (0);
var G__2562 = (0);
seq__2538_2542 = G__2559;
chunk__2539_2543 = G__2560;
count__2540_2544 = G__2561;
i__2541_2545 = G__2562;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__2564 = cljs.core.split_with.call(null,(function (p1__2563_SHARP_){
return cljs.core.not_empty.call(null,p1__2563_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__2564,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__2564,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__2567 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__2568 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__2569 = (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});
var _STAR_formatter_STAR__temp_val__2570 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__2569);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__2570);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__2571 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__2571,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__2571,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__2577_2587 = lines__$1;
var vec__2578_2588 = G__2577_2587;
var seq__2579_2589 = cljs.core.seq.call(null,vec__2578_2588);
var first__2580_2590 = cljs.core.first.call(null,seq__2579_2589);
var seq__2579_2591__$1 = cljs.core.next.call(null,seq__2579_2589);
var line_2592 = first__2580_2590;
var more_2593 = seq__2579_2591__$1;
var state_2594 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__2577_2595__$1 = G__2577_2587;
var state_2596__$1 = state_2594;
while(true){
var vec__2584_2597 = G__2577_2595__$1;
var seq__2585_2598 = cljs.core.seq.call(null,vec__2584_2597);
var first__2586_2599 = cljs.core.first.call(null,seq__2585_2598);
var seq__2585_2600__$1 = cljs.core.next.call(null,seq__2585_2598);
var line_2601__$1 = first__2586_2599;
var more_2602__$1 = seq__2585_2600__$1;
var state_2603__$2 = state_2596__$1;
var line_2604__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_2603__$2))?"":line_2601__$1);
var state_2605__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_2603__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_2603__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_2603__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_2603__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_2603__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_2602__$1))){
var G__2606 = more_2602__$1;
var G__2607 = cljs.core.assoc.call(null,transformer.call(null,html,line_2604__$2,cljs.core.first.call(null,more_2602__$1),cljs.core.dissoc.call(null,state_2605__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_2604__$2.trim()));
G__2577_2595__$1 = G__2606;
state_2596__$1 = G__2607;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_2605__$3))),line_2604__$2,"",cljs.core.assoc.call(null,state_2605__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__2568);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__2567);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2610 = arguments.length;
var i__5770__auto___2611 = (0);
while(true){
if((i__5770__auto___2611 < len__5769__auto___2610)){
args__5775__auto__.push((arguments[i__5770__auto___2611]));

var G__2612 = (i__5770__auto___2611 + (1));
i__5770__auto___2611 = G__2612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq2608){
var G__2609 = cljs.core.first.call(null,seq2608);
var seq2608__$1 = cljs.core.next.call(null,seq2608);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2609,seq2608__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2615 = arguments.length;
var i__5770__auto___2616 = (0);
while(true){
if((i__5770__auto___2616 < len__5769__auto___2615)){
args__5775__auto__.push((arguments[i__5770__auto___2616]));

var G__2617 = (i__5770__auto___2616 + (1));
i__5770__auto___2616 = G__2617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq2613){
var G__2614 = cljs.core.first.call(null,seq2613);
var seq2613__$1 = cljs.core.next.call(null,seq2613);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2614,seq2613__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2619 = arguments.length;
var i__5770__auto___2620 = (0);
while(true){
if((i__5770__auto___2620 < len__5769__auto___2619)){
args__5775__auto__.push((arguments[i__5770__auto___2620]));

var G__2621 = (i__5770__auto___2620 + (1));
i__5770__auto___2620 = G__2621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq2618){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2618));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2623 = arguments.length;
var i__5770__auto___2624 = (0);
while(true){
if((i__5770__auto___2624 < len__5769__auto___2623)){
args__5775__auto__.push((arguments[i__5770__auto___2624]));

var G__2625 = (i__5770__auto___2624 + (1));
i__5770__auto___2624 = G__2625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq2622){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2622));
}));


//# sourceMappingURL=core.js.map
