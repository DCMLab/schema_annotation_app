// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__2498){
var map__2499 = p__2498;
var map__2499__$1 = cljs.core.__destructure_map.call(null,map__2499);
var replacement_transformers = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__2499__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__2500 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__2501 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__2501);

try{var vec__2502 = cljs.core.reduce.call(null,(function (p__2505,transformer){
var vec__2506 = p__2505;
var text = cljs.core.nth.call(null,vec__2506,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__2506,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__2502,(0),null);
var new_state = cljs.core.nth.call(null,vec__2502,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__2500);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2511 = arguments.length;
var i__5770__auto___2512 = (0);
while(true){
if((i__5770__auto___2512 < len__5769__auto___2511)){
args__5775__auto__.push((arguments[i__5770__auto___2512]));

var G__2513 = (i__5770__auto___2512 + (1));
i__5770__auto___2512 = G__2513;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq2509){
var G__2510 = cljs.core.first.call(null,seq2509);
var seq2509__$1 = cljs.core.next.call(null,seq2509);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2510,seq2509__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__2514_2518 = cljs.core.seq.call(null,lines);
var chunk__2515_2519 = null;
var count__2516_2520 = (0);
var i__2517_2521 = (0);
while(true){
if((i__2517_2521 < count__2516_2520)){
var line_2522 = cljs.core._nth.call(null,chunk__2515_2519,i__2517_2521);
markdown.links.parse_reference_link.call(null,line_2522,references);


var G__2523 = seq__2514_2518;
var G__2524 = chunk__2515_2519;
var G__2525 = count__2516_2520;
var G__2526 = (i__2517_2521 + (1));
seq__2514_2518 = G__2523;
chunk__2515_2519 = G__2524;
count__2516_2520 = G__2525;
i__2517_2521 = G__2526;
continue;
} else {
var temp__5804__auto___2527 = cljs.core.seq.call(null,seq__2514_2518);
if(temp__5804__auto___2527){
var seq__2514_2528__$1 = temp__5804__auto___2527;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2514_2528__$1)){
var c__5568__auto___2529 = cljs.core.chunk_first.call(null,seq__2514_2528__$1);
var G__2530 = cljs.core.chunk_rest.call(null,seq__2514_2528__$1);
var G__2531 = c__5568__auto___2529;
var G__2532 = cljs.core.count.call(null,c__5568__auto___2529);
var G__2533 = (0);
seq__2514_2518 = G__2530;
chunk__2515_2519 = G__2531;
count__2516_2520 = G__2532;
i__2517_2521 = G__2533;
continue;
} else {
var line_2534 = cljs.core.first.call(null,seq__2514_2528__$1);
markdown.links.parse_reference_link.call(null,line_2534,references);


var G__2535 = cljs.core.next.call(null,seq__2514_2528__$1);
var G__2536 = null;
var G__2537 = (0);
var G__2538 = (0);
seq__2514_2518 = G__2535;
chunk__2515_2519 = G__2536;
count__2516_2520 = G__2537;
i__2517_2521 = G__2538;
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
var seq__2539_2543 = cljs.core.seq.call(null,lines);
var chunk__2540_2544 = null;
var count__2541_2545 = (0);
var i__2542_2546 = (0);
while(true){
if((i__2542_2546 < count__2541_2545)){
var line_2547 = cljs.core._nth.call(null,chunk__2540_2544,i__2542_2546);
markdown.links.parse_footnote_link.call(null,line_2547,footnotes);


var G__2548 = seq__2539_2543;
var G__2549 = chunk__2540_2544;
var G__2550 = count__2541_2545;
var G__2551 = (i__2542_2546 + (1));
seq__2539_2543 = G__2548;
chunk__2540_2544 = G__2549;
count__2541_2545 = G__2550;
i__2542_2546 = G__2551;
continue;
} else {
var temp__5804__auto___2552 = cljs.core.seq.call(null,seq__2539_2543);
if(temp__5804__auto___2552){
var seq__2539_2553__$1 = temp__5804__auto___2552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2539_2553__$1)){
var c__5568__auto___2554 = cljs.core.chunk_first.call(null,seq__2539_2553__$1);
var G__2555 = cljs.core.chunk_rest.call(null,seq__2539_2553__$1);
var G__2556 = c__5568__auto___2554;
var G__2557 = cljs.core.count.call(null,c__5568__auto___2554);
var G__2558 = (0);
seq__2539_2543 = G__2555;
chunk__2540_2544 = G__2556;
count__2541_2545 = G__2557;
i__2542_2546 = G__2558;
continue;
} else {
var line_2559 = cljs.core.first.call(null,seq__2539_2553__$1);
markdown.links.parse_footnote_link.call(null,line_2559,footnotes);


var G__2560 = cljs.core.next.call(null,seq__2539_2553__$1);
var G__2561 = null;
var G__2562 = (0);
var G__2563 = (0);
seq__2539_2543 = G__2560;
chunk__2540_2544 = G__2561;
count__2541_2545 = G__2562;
i__2542_2546 = G__2563;
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
var vec__2565 = cljs.core.split_with.call(null,(function (p1__2564_SHARP_){
return cljs.core.not_empty.call(null,p1__2564_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__2565,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__2565,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__2568 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__2569 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__2570 = (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});
var _STAR_formatter_STAR__temp_val__2571 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__2570);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__2571);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__2572 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__2572,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__2572,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__2578_2588 = lines__$1;
var vec__2579_2589 = G__2578_2588;
var seq__2580_2590 = cljs.core.seq.call(null,vec__2579_2589);
var first__2581_2591 = cljs.core.first.call(null,seq__2580_2590);
var seq__2580_2592__$1 = cljs.core.next.call(null,seq__2580_2590);
var line_2593 = first__2581_2591;
var more_2594 = seq__2580_2592__$1;
var state_2595 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__2578_2596__$1 = G__2578_2588;
var state_2597__$1 = state_2595;
while(true){
var vec__2585_2598 = G__2578_2596__$1;
var seq__2586_2599 = cljs.core.seq.call(null,vec__2585_2598);
var first__2587_2600 = cljs.core.first.call(null,seq__2586_2599);
var seq__2586_2601__$1 = cljs.core.next.call(null,seq__2586_2599);
var line_2602__$1 = first__2587_2600;
var more_2603__$1 = seq__2586_2601__$1;
var state_2604__$2 = state_2597__$1;
var line_2605__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_2604__$2))?"":line_2602__$1);
var state_2606__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_2604__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_2604__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_2604__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_2604__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_2604__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_2603__$1))){
var G__2607 = more_2603__$1;
var G__2608 = cljs.core.assoc.call(null,transformer.call(null,html,line_2605__$2,cljs.core.first.call(null,more_2603__$1),cljs.core.dissoc.call(null,state_2606__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_2605__$2.trim()));
G__2578_2596__$1 = G__2607;
state_2597__$1 = G__2608;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_2606__$3))),line_2605__$2,"",cljs.core.assoc.call(null,state_2606__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__2569);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__2568);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2611 = arguments.length;
var i__5770__auto___2612 = (0);
while(true){
if((i__5770__auto___2612 < len__5769__auto___2611)){
args__5775__auto__.push((arguments[i__5770__auto___2612]));

var G__2613 = (i__5770__auto___2612 + (1));
i__5770__auto___2612 = G__2613;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq2609){
var G__2610 = cljs.core.first.call(null,seq2609);
var seq2609__$1 = cljs.core.next.call(null,seq2609);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2610,seq2609__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2616 = arguments.length;
var i__5770__auto___2617 = (0);
while(true){
if((i__5770__auto___2617 < len__5769__auto___2616)){
args__5775__auto__.push((arguments[i__5770__auto___2617]));

var G__2618 = (i__5770__auto___2617 + (1));
i__5770__auto___2617 = G__2618;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq2614){
var G__2615 = cljs.core.first.call(null,seq2614);
var seq2614__$1 = cljs.core.next.call(null,seq2614);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2615,seq2614__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2620 = arguments.length;
var i__5770__auto___2621 = (0);
while(true){
if((i__5770__auto___2621 < len__5769__auto___2620)){
args__5775__auto__.push((arguments[i__5770__auto___2621]));

var G__2622 = (i__5770__auto___2621 + (1));
i__5770__auto___2621 = G__2622;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq2619){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2619));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2624 = arguments.length;
var i__5770__auto___2625 = (0);
while(true){
if((i__5770__auto___2625 < len__5769__auto___2624)){
args__5775__auto__.push((arguments[i__5770__auto___2625]));

var G__2626 = (i__5770__auto___2625 + (1));
i__5770__auto___2625 = G__2626;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq2623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2623));
}));


//# sourceMappingURL=core.js.map
