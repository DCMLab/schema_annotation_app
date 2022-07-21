// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.json');
goog.require('goog.userAgent.product');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
clojure.browser.repl.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
clojure.browser.repl.goog$module$goog$array = goog.module.get('goog.array');
});

/**
 * @define {string}
 */
clojure.browser.repl.HOST = goog.define("clojure.browser.repl.HOST","localhost");

/**
 * @define {number}
 */
clojure.browser.repl.PORT = goog.define("clojure.browser.repl.PORT",(9000));
clojure.browser.repl._STAR_repl_STAR_ = null;
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.parent_connected_QMARK_ = cljs.core.atom.call(null,false);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__3767_3771 = cljs.core.seq.call(null,clojure.browser.repl.print_queue);
var chunk__3768_3772 = null;
var count__3769_3773 = (0);
var i__3770_3774 = (0);
while(true){
if((i__3770_3774 < count__3769_3773)){
var str_3775 = cljs.core._nth.call(null,chunk__3768_3772,i__3770_3774);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_3775})));


var G__3776 = seq__3767_3771;
var G__3777 = chunk__3768_3772;
var G__3778 = count__3769_3773;
var G__3779 = (i__3770_3774 + (1));
seq__3767_3771 = G__3776;
chunk__3768_3772 = G__3777;
count__3769_3773 = G__3778;
i__3770_3774 = G__3779;
continue;
} else {
var temp__5804__auto___3780 = cljs.core.seq.call(null,seq__3767_3771);
if(temp__5804__auto___3780){
var seq__3767_3781__$1 = temp__5804__auto___3780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3767_3781__$1)){
var c__5568__auto___3782 = cljs.core.chunk_first.call(null,seq__3767_3781__$1);
var G__3783 = cljs.core.chunk_rest.call(null,seq__3767_3781__$1);
var G__3784 = c__5568__auto___3782;
var G__3785 = cljs.core.count.call(null,c__5568__auto___3782);
var G__3786 = (0);
seq__3767_3771 = G__3783;
chunk__3768_3772 = G__3784;
count__3769_3773 = G__3785;
i__3770_3774 = G__3786;
continue;
} else {
var str_3787 = cljs.core.first.call(null,seq__3767_3781__$1);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_3787})));


var G__3788 = cljs.core.next.call(null,seq__3767_3781__$1);
var G__3789 = null;
var G__3790 = (0);
var G__3791 = (0);
seq__3767_3771 = G__3788;
chunk__3768_3772 = G__3789;
count__3769_3773 = G__3790;
i__3770_3774 = G__3791;
continue;
}
} else {
}
}
break;
}

return clojure.browser.repl.goog$module$goog$array.clear.call(null,clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.call(null,data));

if(cljs.core.truth_(cljs.core.deref.call(null,clojure.browser.repl.parent_connected_QMARK_))){
return clojure.browser.repl.flush_print_queue_BANG_.call(null,cljs.core.deref.call(null,clojure.browser.repl.xpc_connection));
} else {
return null;
}
});
(cljs.core._STAR_print_newline_STAR_ = true);
cljs.core.set_print_fn_BANG_.call(null,clojure.browser.repl.repl_print);
cljs.core.set_print_err_fn_BANG_.call(null,clojure.browser.repl.repl_print);
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))], null);
}catch (e3792){var e = e3792;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.repl.error__GT_str.call(null,e)], null);
}})();
return cljs.core.pr_str.call(null,result);
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__3794 = arguments.length;
switch (G__3794) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.call(null,url,data,(0));
}));

(clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),(function (_){
if((n < (10))){
return clojure.browser.repl.send_print.call(null,url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
}));

return clojure.browser.net.transmit.call(null,conn,url,"POST",data,null,(0));
}));

(clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3);

clojure.browser.repl.order = cljs.core.atom.call(null,(0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(repl,t,data){
return cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repl","repl",-35398667),repl,new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)], null));
});
/**
 * Start the REPL server connection process. This process runs inside the
 *   embedded iframe.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__5802__auto__ = clojure.browser.net.xpc_connection.call(null);
if(cljs.core.truth_(temp__5802__auto__)){
var repl_connection = temp__5802__auto__;
var connection = clojure.browser.net.xhr_connection.call(null);
var repl_connected_QMARK_ = cljs.core.atom.call(null,false);
var try_handshake = (function clojure$browser$repl$start_evaluator_$_try_handshake(){
if(cljs.core.truth_(cljs.core.deref.call(null,repl_connected_QMARK_))){
return null;
} else {
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),null);
}
});
clojure.browser.net.connect.call(null,repl_connection,try_handshake);

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),(function (_){
if(cljs.core.truth_(cljs.core.deref.call(null,repl_connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,repl_connected_QMARK_,true);

return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,null,new cljs.core.Keyword(null,"ready","ready",1086465795),"ready"));
}
}));

clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"error","error",-978969032),(function (e){
cljs.core.reset_BANG_.call(null,repl_connected_QMARK_,false);

clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"reconnect","reconnect",596420411),null);

return setTimeout(try_handshake,(1000));
}));

clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"success","success",1890645906),(function (e){
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var result = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"result");
return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,repl,new cljs.core.Keyword(null,"result","result",1415092211),result));
}));

return clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"print","print",1299562414),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var str = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"str");
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,repl,new cljs.core.Keyword(null,"print","print",1299562414),str));
}));
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require__ = goog.require);

(goog.isProvided_ = (function (name){
return false;
}));

goog.constructNamespace_("cljs.user");

(goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.call(null,false);
var onload = (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,loaded) === false;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return (clojure.browser.repl.load_queue = null);
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__3796 = script;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__3796,"type","text/javascript");

clojure.browser.repl.goog$module$goog$object.set.call(null,G__3796,"onload",onload);

clojure.browser.repl.goog$module$goog$object.set.call(null,G__3796,"onreadystatechange",onload);

return G__3796;
})();
if((opt_sourceText == null)){
var G__3797 = script__$1;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__3797,"src",src);

return G__3797;
} else {
var G__3798 = script__$1;
goog.dom.setTextContent(G__3798,opt_sourceText);

return G__3798;
}
})());
}));

(goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
(clojure.browser.repl.load_queue = []);

return goog.writeScriptTag__(src,opt_sourceText);
}
}));

if(cljs.core.truth_(goog.debugLoader_)){
(CLOSURE_IMPORT_SCRIPT = goog.writeScriptTag_);
} else {
}

return (goog.require = (function (src,reload){
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

var reload_QMARK_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.cljsReloadAll_;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
if((!((goog.debugLoader_ == null)))){
var path_3799 = goog.debugLoader_.getPathFromDeps_(src);
clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path_3799);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_3799)].join(''));
} else {
var path_3800 = clojure.browser.repl.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,src);
clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path_3800);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path_3800);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_3800)].join(''));
}
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

if(cljs.core.truth_(goog.isInModuleLoader_())){
return goog.module.getInternal_(src);
} else {
return ret;
}
}));
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var connected_QMARK_ = cljs.core.atom.call(null,false);
var repl_connection = clojure.browser.net.xpc_connection.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"peer_uri","peer_uri",910305997),repl_server_url], null));
cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),(function (_){
if(cljs.core.truth_(cljs.core.deref.call(null,connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

cljs.core.reset_BANG_.call(null,clojure.browser.repl.parent_connected_QMARK_,true);

clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),null);

return clojure.browser.repl.flush_print_queue_BANG_.call(null,repl_connection);
}
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"reconnect","reconnect",596420411),(function (_){
cljs.core.reset_BANG_.call(null,connected_QMARK_,false);

return cljs.core.reset_BANG_.call(null,clojure.browser.repl.parent_connected_QMARK_,false);
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var form = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"form");
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),goog.json.serialize(({"repl": repl, "result": (function (){var _STAR_repl_STAR__orig_val__3801 = clojure.browser.repl._STAR_repl_STAR_;
var _STAR_repl_STAR__temp_val__3802 = repl;
(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__temp_val__3802);

try{return clojure.browser.repl.evaluate_javascript.call(null,repl_connection,form);
}finally {(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__orig_val__3801);
}})()})));
}));

clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null),(function (iframe){
return (iframe.style.display = "none");
}));

clojure.browser.repl.bootstrap.call(null);

return repl_connection;
});

//# sourceMappingURL=repl.js.map
