// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown_to_hiccup.decode');
goog.require('cljs.core');
goog.require('goog.string');
markdown_to_hiccup.decode.decode_string = (function markdown_to_hiccup$decode$decode_string(var_args){
var G__2629 = arguments.length;
switch (G__2629) {
case 1:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return goog.string.unescapeEntities(s);
}));

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2 = (function (s,transform_fn){
var decoded = markdown_to_hiccup.decode.decode_string.call(null,s);
return transform_fn.call(null,decoded);
}));

(markdown_to_hiccup.decode.decode_string.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.encode_string = (function markdown_to_hiccup$decode$encode_string(s){
throw "No yet implemented.".Exception();
});
markdown_to_hiccup.decode.decode_iseq = (function markdown_to_hiccup$decode$decode_iseq(var_args){
var G__2633 = arguments.length;
switch (G__2633) {
case 1:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1 = (function (iseq){
return cljs.core.map.call(null,markdown_to_hiccup.decode.decode,cljs.core.seq.call(null,iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2 = (function (iseq,transform_str_fn){
return cljs.core.map.call(null,(function (p1__2631_SHARP_){
return markdown_to_hiccup.decode.decode.call(null,p1__2631_SHARP_,transform_str_fn);
}),cljs.core.seq.call(null,iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.dispatch = (function markdown_to_hiccup$decode$dispatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2637 = arguments.length;
var i__5770__auto___2638 = (0);
while(true){
if((i__5770__auto___2638 < len__5769__auto___2637)){
args__5775__auto__.push((arguments[i__5770__auto___2638]));

var G__2639 = (i__5770__auto___2638 + (1));
i__5770__auto___2638 = G__2639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){

if(cljs.core.map_QMARK_.call(null,x)){
var or__5045__auto__ = new cljs.core.Keyword(null,"decode-type","decode-type",-1943601402).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649);
}
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350);
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285);

}
}
}
}));

(markdown_to_hiccup.decode.dispatch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.decode.dispatch.cljs$lang$applyTo = (function (seq2635){
var G__2636 = cljs.core.first.call(null,seq2635);
var seq2635__$1 = cljs.core.next.call(null,seq2635);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2636,seq2635__$1);
}));

if((typeof markdown_to_hiccup !== 'undefined') && (typeof markdown_to_hiccup.decode !== 'undefined') && (typeof markdown_to_hiccup.decode.decode !== 'undefined')){
} else {
markdown_to_hiccup.decode.decode = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"markdown-to-hiccup.decode","decode"),markdown_to_hiccup.decode.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,markdown_to_hiccup.decode.decode,new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350),(function() {
var G__2640 = null;
var G__2640__1 = (function (s){
return markdown_to_hiccup.decode.decode_string.call(null,s);
});
var G__2640__2 = (function (s,transform){
return markdown_to_hiccup.decode.decode_string.call(null,s,transform);
});
G__2640 = function(s,transform){
switch(arguments.length){
case 1:
return G__2640__1.call(this,s);
case 2:
return G__2640__2.call(this,s,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2640.cljs$core$IFn$_invoke$arity$1 = G__2640__1;
G__2640.cljs$core$IFn$_invoke$arity$2 = G__2640__2;
return G__2640;
})()
);
cljs.core._add_method.call(null,markdown_to_hiccup.decode.decode,new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649),(function() {
var G__2641 = null;
var G__2641__1 = (function (m){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),markdown_to_hiccup.decode.decode_iseq.call(null,m));
});
var G__2641__2 = (function (m,transform){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),markdown_to_hiccup.decode.decode_iseq.call(null,m,transform));
});
G__2641 = function(m,transform){
switch(arguments.length){
case 1:
return G__2641__1.call(this,m);
case 2:
return G__2641__2.call(this,m,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2641.cljs$core$IFn$_invoke$arity$1 = G__2641__1;
G__2641.cljs$core$IFn$_invoke$arity$2 = G__2641__2;
return G__2641;
})()
);
cljs.core._add_method.call(null,markdown_to_hiccup.decode.decode,new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818),(function() {
var G__2642 = null;
var G__2642__1 = (function (v){
return cljs.core.vec.call(null,markdown_to_hiccup.decode.decode_iseq.call(null,v));
});
var G__2642__2 = (function (v,transform){
return cljs.core.vec.call(null,markdown_to_hiccup.decode.decode_iseq.call(null,v,transform));
});
G__2642 = function(v,transform){
switch(arguments.length){
case 1:
return G__2642__1.call(this,v);
case 2:
return G__2642__2.call(this,v,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2642.cljs$core$IFn$_invoke$arity$1 = G__2642__1;
G__2642.cljs$core$IFn$_invoke$arity$2 = G__2642__2;
return G__2642;
})()
);
cljs.core._add_method.call(null,markdown_to_hiccup.decode.decode,new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285),(function() {
var G__2643 = null;
var G__2643__1 = (function (x){
return cljs.core.identity.call(null,x);
});
var G__2643__2 = (function (x,f){
return cljs.core.identity.call(null,x);
});
G__2643 = function(x,f){
switch(arguments.length){
case 1:
return G__2643__1.call(this,x);
case 2:
return G__2643__2.call(this,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2643.cljs$core$IFn$_invoke$arity$1 = G__2643__1;
G__2643.cljs$core$IFn$_invoke$arity$2 = G__2643__2;
return G__2643;
})()
);

//# sourceMappingURL=decode.js.map
