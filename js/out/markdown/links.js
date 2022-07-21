// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__2284 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.call(null,vec__2284,(0),null);
var title = cljs.core.nth.call(null,vec__2284,(1),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link__$1,cljs.core.seq.call(null,"'"),(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str," title=",clojure.string.join.call(null,cljs.core.rest.call(null,title)),">")):cljs.core.seq.call(null,">")),text,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2295 = arguments.length;
var i__5770__auto___2296 = (0);
while(true){
if((i__5770__auto___2296 < len__5769__auto___2295)){
args__5775__auto__.push((arguments[i__5770__auto___2296]));

var G__2297 = (i__5770__auto___2296 + (1));
i__5770__auto___2296 = G__2297;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__2291){
var vec__2292 = p__2291;
var title = cljs.core.nth.call(null,vec__2292,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
}));

(markdown.links.img.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(markdown.links.img.cljs$lang$applyTo = (function (seq2287){
var G__2288 = cljs.core.first.call(null,seq2287);
var seq2287__$1 = cljs.core.next.call(null,seq2287);
var G__2289 = cljs.core.first.call(null,seq2287__$1);
var seq2287__$2 = cljs.core.next.call(null,seq2287__$1);
var G__2290 = cljs.core.first.call(null,seq2287__$2);
var seq2287__$3 = cljs.core.next.call(null,seq2287__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2288,G__2289,G__2290,seq2287__$3);
}));

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__2298 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__2298,(0),null);
var xy = cljs.core.nth.call(null,vec__2298,(1),null);
var vec__2301 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__2301,(0),null);
var zy = cljs.core.nth.call(null,vec__2301,(1),null);
var vec__2304 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__2304,(0),null);
var title = cljs.core.nth.call(null,vec__2304,(1),null);
var vec__2307 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__2307,(0),null);
var new_state = cljs.core.nth.call(null,vec__2307,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__2311_SHARP_,p2__2310_SHARP_){
return cljs.core.apply.call(null,p2__2310_SHARP_,p1__2311_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__2312){
var map__2313 = p__2312;
var map__2313__$1 = cljs.core.__destructure_map.call(null,map__2313);
var state = map__2313__$1;
var code = cljs.core.get.call(null,map__2313__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__2313__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__2338 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__2338,(0),null);
var xs = cljs.core.nth.call(null,vec__2338,(1),null);
var vec__2341 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__2341,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__2341,(1),null);
var vec__2344 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__2344,(0),null);
var ys = cljs.core.nth.call(null,vec__2344,(1),null);
var vec__2347 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__2347,(0),null);
var zs = cljs.core.nth.call(null,vec__2347,(1),null);
var vec__2350 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__2350,(0),null);
var tail = cljs.core.nth.call(null,vec__2350,(1),null);
if((((cljs.core.count.call(null,link__$1) < (2))) || ((((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1))))))){
var G__2362 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__2363 = tail;
var G__2364 = loop_state__$1;
out = G__2362;
tokens = G__2363;
loop_state = G__2364;
continue;
} else {
if(((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!")))){
var vec__2353 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__2353,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__2353,(1),null);
var G__2365 = cljs.core.concat.call(null,out,head,link_text);
var G__2366 = cljs.core.rest.call(null,tail);
var G__2367 = new_loop_state;
out = G__2365;
tokens = G__2366;
loop_state = G__2367;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = img_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__5043__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__2356 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__2356,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__2356,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__2359 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__2359,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__2359,(1),null);
var G__2368 = cljs.core.concat.call(null,out,cljs.core.butlast.call(null,head),img_text);
var G__2369 = cljs.core.rest.call(null,tail);
var G__2370 = new_loop_state;
out = G__2368;
tokens = G__2369;
loop_state = G__2370;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.concat.call(null,out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__5804__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__2371 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__2371,(0),null);
var id = cljs.core.nth.call(null,vec__2371,(1),null);
var vec__2374 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__2374,(0),null);
var alt = cljs.core.nth.call(null,vec__2374,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",(cljs.core.truth_(alt)?[" title='",cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1))),"'"].join(''):null),">",cljs.core.subs.call(null,title,(1)),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__2377,link){
var vec__2378 = p__2377;
var i__$1 = cljs.core.nth.call(null,vec__2378,(0),null);
var encoded = cljs.core.nth.call(null,vec__2378,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.call(null,encoded,markdown.common.gen_token.call(null,i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2381){
var vec__2382 = p__2381;
var k = cljs.core.nth.call(null,vec__2382,(0),null);
var v = cljs.core.nth.call(null,vec__2382,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link.call(null,references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq.call(null,/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links.call(null,links,cljs.core.fnil.call(null,cljs.core.count,cljs.core.PersistentVector.EMPTY).call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,(function (s,p__2385){
var vec__2386 = p__2385;
var id = cljs.core.nth.call(null,vec__2386,(0),null);
var link = cljs.core.nth.call(null,vec__2386,(1),null);
return clojure.string.replace.call(null,s,link,id);
}),text,encoded_links),cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links.call(null,references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__2389){
var map__2390 = p__2389;
var map__2390__$1 = cljs.core.__destructure_map.call(null,map__2390);
var state = map__2390__$1;
var code = cljs.core.get.call(null,map__2390__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__2390__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__2390__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__5045__auto__ = (references == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links.call(null,references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace.call(null,text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__5804__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",link,"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__2391){
while(true){
var map__2392 = p__2391;
var map__2392__$1 = cljs.core.__destructure_map.call(null,map__2392);
var state = map__2392__$1;
var footnotes = cljs.core.get.call(null,map__2392__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__2393 = next_text;
var G__2394 = next_state;
text = G__2393;
p__2391 = G__2394;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__2395){
var map__2396 = p__2395;
var map__2396__$1 = cljs.core.__destructure_map.call(null,map__2396);
var state = map__2396__$1;
var code = cljs.core.get.call(null,map__2396__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__2396__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__2396__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__5045__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__2397 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__2397,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__2397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = (cljs.core.truth_(title)?["\" title=",clojure.string.join.call(null,title),""].join(''):"\"");
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),title_text," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__2400){
var map__2401 = p__2400;
var map__2401__$1 = cljs.core.__destructure_map.call(null,map__2401);
var state = map__2401__$1;
var references = cljs.core.get.call(null,map__2401__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_.call(null,references)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.call(null,cljs.core.re_seq.call(null,matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq.call(null,ms)){
var vec__2405 = cljs.core.first.call(null,ms);
var m = cljs.core.nth.call(null,vec__2405,(0),null);
var alt = cljs.core.nth.call(null,vec__2405,(1),null);
var ref = cljs.core.nth.call(null,vec__2405,(2),null);
var refval = cljs.core.get.call(null,references,ref);
var im = markdown.links.make_image_reference.call(null,cljs.core.first.call(null,refval),alt,cljs.core.second.call(null,refval));
var G__2408 = cljs.core.rest.call(null,ms);
var G__2409 = clojure.string.replace.call(null,new_text,m,im);
ms = G__2408;
new_text = G__2409;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=links.js.map
