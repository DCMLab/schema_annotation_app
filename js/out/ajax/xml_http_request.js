// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set.call(null,global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__1935,handler){
var map__1936 = p__1935;
var map__1936__$1 = cljs.core.__destructure_map.call(null,map__1936);
var uri = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__1936__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__1934_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__1934_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___1953 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___1953)){
var response_type_1954 = temp__5804__auto___1953;
(this$__$1.responseType = cljs.core.name.call(null,response_type_1954));
} else {
}

var seq__1937_1955 = cljs.core.seq.call(null,headers);
var chunk__1938_1956 = null;
var count__1939_1957 = (0);
var i__1940_1958 = (0);
while(true){
if((i__1940_1958 < count__1939_1957)){
var vec__1947_1959 = cljs.core._nth.call(null,chunk__1938_1956,i__1940_1958);
var k_1960 = cljs.core.nth.call(null,vec__1947_1959,(0),null);
var v_1961 = cljs.core.nth.call(null,vec__1947_1959,(1),null);
this$__$1.setRequestHeader(k_1960,v_1961);


var G__1962 = seq__1937_1955;
var G__1963 = chunk__1938_1956;
var G__1964 = count__1939_1957;
var G__1965 = (i__1940_1958 + (1));
seq__1937_1955 = G__1962;
chunk__1938_1956 = G__1963;
count__1939_1957 = G__1964;
i__1940_1958 = G__1965;
continue;
} else {
var temp__5804__auto___1966 = cljs.core.seq.call(null,seq__1937_1955);
if(temp__5804__auto___1966){
var seq__1937_1967__$1 = temp__5804__auto___1966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1937_1967__$1)){
var c__5568__auto___1968 = cljs.core.chunk_first.call(null,seq__1937_1967__$1);
var G__1969 = cljs.core.chunk_rest.call(null,seq__1937_1967__$1);
var G__1970 = c__5568__auto___1968;
var G__1971 = cljs.core.count.call(null,c__5568__auto___1968);
var G__1972 = (0);
seq__1937_1955 = G__1969;
chunk__1938_1956 = G__1970;
count__1939_1957 = G__1971;
i__1940_1958 = G__1972;
continue;
} else {
var vec__1950_1973 = cljs.core.first.call(null,seq__1937_1967__$1);
var k_1974 = cljs.core.nth.call(null,vec__1950_1973,(0),null);
var v_1975 = cljs.core.nth.call(null,vec__1950_1973,(1),null);
this$__$1.setRequestHeader(k_1974,v_1975);


var G__1976 = cljs.core.next.call(null,seq__1937_1967__$1);
var G__1977 = null;
var G__1978 = (0);
var G__1979 = (0);
seq__1937_1955 = G__1976;
chunk__1938_1956 = G__1977;
count__1939_1957 = G__1978;
i__1940_1958 = G__1979;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map
