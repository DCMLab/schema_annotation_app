// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.success_QMARK_ = ajax.util.success_QMARK_;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2196 = arguments.length;
var i__5770__auto___2197 = (0);
while(true){
if((i__5770__auto___2197 < len__5769__auto___2196)){
args__5775__auto__.push((arguments[i__5770__auto___2197]));

var G__2198 = (i__5770__auto___2197 + (1));
i__5770__auto___2197 = G__2198;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.GET.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.GET.cljs$lang$applyTo = (function (seq2194){
var G__2195 = cljs.core.first.call(null,seq2194);
var seq2194__$1 = cljs.core.next.call(null,seq2194);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2195,seq2194__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2201 = arguments.length;
var i__5770__auto___2202 = (0);
while(true){
if((i__5770__auto___2202 < len__5769__auto___2201)){
args__5775__auto__.push((arguments[i__5770__auto___2202]));

var G__2203 = (i__5770__auto___2202 + (1));
i__5770__auto___2202 = G__2203;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.HEAD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.HEAD.cljs$lang$applyTo = (function (seq2199){
var G__2200 = cljs.core.first.call(null,seq2199);
var seq2199__$1 = cljs.core.next.call(null,seq2199);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2200,seq2199__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2206 = arguments.length;
var i__5770__auto___2207 = (0);
while(true){
if((i__5770__auto___2207 < len__5769__auto___2206)){
args__5775__auto__.push((arguments[i__5770__auto___2207]));

var G__2208 = (i__5770__auto___2207 + (1));
i__5770__auto___2207 = G__2208;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.POST.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.POST.cljs$lang$applyTo = (function (seq2204){
var G__2205 = cljs.core.first.call(null,seq2204);
var seq2204__$1 = cljs.core.next.call(null,seq2204);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2205,seq2204__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2211 = arguments.length;
var i__5770__auto___2212 = (0);
while(true){
if((i__5770__auto___2212 < len__5769__auto___2211)){
args__5775__auto__.push((arguments[i__5770__auto___2212]));

var G__2213 = (i__5770__auto___2212 + (1));
i__5770__auto___2212 = G__2213;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.PUT.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PUT.cljs$lang$applyTo = (function (seq2209){
var G__2210 = cljs.core.first.call(null,seq2209);
var seq2209__$1 = cljs.core.next.call(null,seq2209);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2210,seq2209__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2216 = arguments.length;
var i__5770__auto___2217 = (0);
while(true){
if((i__5770__auto___2217 < len__5769__auto___2216)){
args__5775__auto__.push((arguments[i__5770__auto___2217]));

var G__2218 = (i__5770__auto___2217 + (1));
i__5770__auto___2217 = G__2218;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.DELETE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.DELETE.cljs$lang$applyTo = (function (seq2214){
var G__2215 = cljs.core.first.call(null,seq2214);
var seq2214__$1 = cljs.core.next.call(null,seq2214);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2215,seq2214__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2221 = arguments.length;
var i__5770__auto___2222 = (0);
while(true){
if((i__5770__auto___2222 < len__5769__auto___2221)){
args__5775__auto__.push((arguments[i__5770__auto___2222]));

var G__2223 = (i__5770__auto___2222 + (1));
i__5770__auto___2222 = G__2223;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq2219){
var G__2220 = cljs.core.first.call(null,seq2219);
var seq2219__$1 = cljs.core.next.call(null,seq2219);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2220,seq2219__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2226 = arguments.length;
var i__5770__auto___2227 = (0);
while(true){
if((i__5770__auto___2227 < len__5769__auto___2226)){
args__5775__auto__.push((arguments[i__5770__auto___2227]));

var G__2228 = (i__5770__auto___2227 + (1));
i__5770__auto___2227 = G__2228;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.TRACE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.TRACE.cljs$lang$applyTo = (function (seq2224){
var G__2225 = cljs.core.first.call(null,seq2224);
var seq2224__$1 = cljs.core.next.call(null,seq2224);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2225,seq2224__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2231 = arguments.length;
var i__5770__auto___2232 = (0);
while(true){
if((i__5770__auto___2232 < len__5769__auto___2231)){
args__5775__auto__.push((arguments[i__5770__auto___2232]));

var G__2233 = (i__5770__auto___2232 + (1));
i__5770__auto___2232 = G__2233;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.PATCH.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PATCH.cljs$lang$applyTo = (function (seq2229){
var G__2230 = cljs.core.first.call(null,seq2229);
var seq2229__$1 = cljs.core.next.call(null,seq2229);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2230,seq2229__$1);
}));

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2236 = arguments.length;
var i__5770__auto___2237 = (0);
while(true){
if((i__5770__auto___2237 < len__5769__auto___2236)){
args__5775__auto__.push((arguments[i__5770__auto___2237]));

var G__2238 = (i__5770__auto___2237 + (1));
i__5770__auto___2237 = G__2238;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__1710__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__1710__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__1710__auto__));
}));

(ajax.core.PURGE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ajax.core.PURGE.cljs$lang$applyTo = (function (seq2234){
var G__2235 = cljs.core.first.call(null,seq2234);
var seq2234__$1 = cljs.core.next.call(null,seq2234);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2235,seq2234__$1);
}));


//# sourceMappingURL=core.js.map
