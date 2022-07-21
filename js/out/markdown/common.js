// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [markdown.common.escape_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),markdown.common.escape_delimiter].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2242 = arguments.length;
var i__5770__auto___2243 = (0);
while(true){
if((i__5770__auto___2243 < len__5769__auto___2242)){
args__5775__auto__.push((arguments[i__5770__auto___2243]));

var G__2244 = (i__5770__auto___2243 + (1));
i__5770__auto___2243 = G__2244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = markdown.common.gen_token.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
}));

(markdown.common.freeze_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.common.freeze_string.cljs$lang$applyTo = (function (seq2241){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2241));
}));

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__5802__auto__ = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[markdown.common.escape_delimiter,"\\d+",markdown.common.escape_delimiter].join('')),text);
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
var G__2247 = cljs.core.reduce.call(null,((function (text,state,matches,temp__5802__auto__){
return (function (s,r){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,r),((function (text,state,matches,temp__5802__auto__){
return (function (p1__2245_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__2245_SHARP_,p1__2245_SHARP_);
});})(text,state,matches,temp__5802__auto__))
);
});})(text,state,matches,temp__5802__auto__))
,text,matches);
var G__2248 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__5802__auto__){
return (function (p1__2246_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__2246_SHARP_,matches);
});})(text,state,matches,temp__5802__auto__))
);
text = G__2247;
state = G__2248;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))))){
return markdown.common.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var G__2250 = arguments.length;
switch (G__2250) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.call(null,separator,open,close,cljs.core.identity);
}));

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq.call(null,separator);
return (function (text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var vec__2257 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__2260 = transformer.call(null,clojure.string.join.call(null,buf),cur_state);
var s = cljs.core.nth.call(null,vec__2260,(0),null);
var new_state = cljs.core.nth.call(null,vec__2260,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,s),new_state], null);
})());
var new_buf = cljs.core.nth.call(null,vec__2257,(0),null);
var new_state = cljs.core.nth.call(null,vec__2257,(1),null);
var G__2264 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),new_buf,cljs.core.seq.call(null,close)));
var G__2265 = cljs.core.PersistentVector.EMPTY;
var G__2266 = cljs.core.rest.call(null,tokens);
var G__2267 = cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__2264;
buf = G__2265;
tokens = G__2266;
cur_state = G__2267;
continue;
} else {
var G__2268 = out;
var G__2269 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__2270 = cljs.core.rest.call(null,tokens);
var G__2271 = cur_state;
out = G__2268;
buf = G__2269;
tokens = G__2270;
cur_state = G__2271;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__2272 = out;
var G__2273 = buf;
var G__2274 = cljs.core.rest.call(null,tokens);
var G__2275 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__2272;
buf = G__2273;
tokens = G__2274;
cur_state = G__2275;
continue;
} else {
var G__2276 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__2277 = buf;
var G__2278 = cljs.core.rest.call(null,tokens);
var G__2279 = cur_state;
out = G__2276;
buf = G__2277;
tokens = G__2278;
cur_state = G__2279;
continue;

}
}
}
break;
}
}
});
}));

(markdown.common.make_separator.cljs$lang$maxFixedArity = 4);

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code.call(null,text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
return markdown.common.make_separator.call(null,separator,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity)).call(null,text,state);
});
markdown.common.strong = markdown.common.make_separator.call(null,"**","<strong>","</strong>");
markdown.common.bold_italic = markdown.common.make_separator.call(null,"***","<b><i>","</i></b>");
markdown.common.bold = markdown.common.make_separator.call(null,"__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.call(null,"*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.call(null,"_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.call(null,"~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.call(null,"`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
return markdown.common.make_separator.call(null,markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string).call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace.call(null,text,clojure.string.join.call(null,cljs.core.concat.call(null,markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.call(null,markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__2280_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__2280_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__2281_SHARP_){
return ((cljs.core._EQ_.call(null,"#",p1__2281_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__2281_SHARP_)));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__5804__auto__ = markdown.common.heading_level.call(null,text);
if(cljs.core.truth_(temp__5804__auto__)){
var heading = temp__5804__auto__;
var text__$1 = markdown.common.heading_text.call(null,text);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),(cljs.core.truth_(heading_anchors)?[" id=\"",clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;"),"\""].join(''):null),">",text__$1,"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;"),/<code>.*<\/code>/,(function (s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&mdash;/,"---"),/&ndash;/,"--");
}))),state], null);
});

//# sourceMappingURL=common.js.map
