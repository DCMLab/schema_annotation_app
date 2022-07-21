// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.input');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.impl.template.node$module$react = require('react');
goog.require('goog.object');
goog.scope(function(){
reagent.impl.template.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper.call(null,c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (((cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper)))));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return reagent.impl.template.goog$module$goog$object.get.call(null,o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5806__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5806__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
reagent.impl.template.goog$module$goog$object.set.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5806__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__1383 = o;
reagent.impl.template.goog$module$goog$object.set.call(null,G__1383,reagent.impl.template.cached_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__1383;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__1384__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__1384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1385__i = 0, G__1385__a = new Array(arguments.length -  0);
while (G__1385__i < G__1385__a.length) {G__1385__a[G__1385__i] = arguments[G__1385__i + 0]; ++G__1385__i;}
  args = new cljs.core.IndexedSeq(G__1385__a,0,null);
} 
return G__1384__delegate.call(this,args);};
G__1384.cljs$lang$maxFixedArity = 0;
G__1384.cljs$lang$applyTo = (function (arglist__1386){
var args = cljs.core.seq(arglist__1386);
return G__1384__delegate(args);
});
G__1384.cljs$core$IFn$_invoke$arity$variadic = G__1384__delegate;
return G__1384;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__5806__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__5806__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
reagent.impl.template.goog$module$goog$object.set.call(null,reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5806__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__1387 = o;
reagent.impl.template.goog$module$goog$object.set.call(null,G__1387,reagent.impl.template.cached_custom_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__1387;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__1388__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__1388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1389__i = 0, G__1389__a = new Array(arguments.length -  0);
while (G__1389__i < G__1389__a.length) {G__1389__a[G__1389__i] = arguments[G__1389__i + 0]; ++G__1389__i;}
  args = new cljs.core.IndexedSeq(G__1389__a,0,null);
} 
return G__1388__delegate.call(this,args);};
G__1388.cljs$lang$maxFixedArity = 0;
G__1388.cljs$lang$applyTo = (function (arglist__1390){
var args = cljs.core.seq(arglist__1390);
return G__1388__delegate(args);
});
G__1388.cljs$core$IFn$_invoke$arity$variadic = G__1388__delegate;
return G__1388;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__1391 = props;
var G__1391__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__1391,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__1391);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__1391__$1,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__1391__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class.call(null,(function (){var G__1392 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__1392,new cljs.core.Keyword(null,"class","class",-2030961996),reagent.impl.util.class_names.call(null,class$));
} else {
return G__1392;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__1393 = (cljs.core.count.call(null,argv) - first_child);
switch (G__1393) {
case (0):
return reagent.impl.template.node$module$react.createElement(component,jsprops);

break;
case (1):
return reagent.impl.template.node$module$react.createElement(component,jsprops,reagent.impl.protocols.as_element.call(null,this$,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return reagent.impl.template.node$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,(function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element.call(null,this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__1395 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__1395,(0),null);
var id = cljs.core.nth.call(null,vec__1395,(1),null);
var className = cljs.core.nth.call(null,vec__1395,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace.call(null,className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name.call(null)].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag.call(null,tag,id,className__$1,cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class.call(null,tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5808__auto___1398 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__5808__auto___1398 == null)){
} else {
var key_1399 = temp__5808__auto___1398;
(jsprops.key = key_1399);
}

return reagent.impl.template.node$module$react.createElement(c,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.call(null,v,first_arg));

var temp__5808__auto___1400 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__5808__auto___1400 == null)){
} else {
var key_1401 = temp__5808__auto___1400;
(jsprops.key = key_1401);
}

return reagent.impl.template.node$module$react.createElement(reagent.impl.component.functional_render_fn.call(null,compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_.call(null,tag)){
return reagent.impl.template.reag_element.call(null,tag,v,compiler);
} else {
return reagent.impl.template.function_element.call(null,tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__5045__auto__ = reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5808__auto___1402 = reagent.impl.util.react_key_from_vec.call(null,argv);
if((temp__5808__auto___1402 == null)){
} else {
var key_1403 = temp__5808__auto___1402;
(jsprops.key = key_1403);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,reagent.impl.template.node$module$react.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(this$,x,_){
var temp__5806__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__5806__auto__ == null)){
var v = reagent.impl.template.parse_tag.call(null,x);
reagent.impl.template.goog$module$goog$object.set.call(null,reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5806__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__5045__auto__ = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_.call(null,component)){
var react_key = reagent.impl.util.get_react_key.call(null,props);
var input_class = (function (){var or__5045__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var x = reagent.impl.component.create_class.call(null,reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return reagent.impl.protocols.as_element.call(null,compiler,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.merge.call(null,(cljs.core.truth_(react_key)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),react_key], null):null),cljs.core.meta.call(null,argv))));
} else {
var temp__5808__auto___1404 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5808__auto___1404 == null)){
} else {
var key_1405 = temp__5808__auto___1404;
(jsprops.key = key_1405);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.call(null,argv,(2),null);
var jsprops = (function (){var or__5045__auto__ = props;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ({});
}
})();
var temp__5808__auto___1406 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__5808__auto___1406 == null)){
} else {
var key_1407 = temp__5808__auto___1406;
(jsprops.key = key_1407);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__1408_SHARP_){
return reagent.impl.protocols.as_element.call(null,compiler,p1__1408_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (val){
if(((cljs.core.vector_QMARK_.call(null,val)) && ((reagent.impl.util.react_key_from_vec.call(null,val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.protocols.as_element.call(null,compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__1409 = reagent.ratom.check_derefs.call(null,(function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx,compiler);
}));
var res = cljs.core.nth.call(null,vec__1409,(0),null);
var derefed = cljs.core.nth.call(null,vec__1409,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Reactive deref not supported in lazy seq, ","it should be wrapped in doall")].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Every element in a seq should have a unique :key")].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.call(null,v,(0),null);
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__1412 = pos;
switch (G__1412) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.protocols.parse_tag.call(null,compiler,n,tag),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.call(null,">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup tag"),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__1414 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
var G__1415 = compiler;
v = G__1414;
compiler = G__1415;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.call(null,v));
} else {
}

if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Hiccup form should not be empty"),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup form"),"\n","(valid-tag? tag)"].join('')));
}

var G__1416 = tag;
var G__1416__$1 = (((G__1416 instanceof cljs.core.Keyword))?G__1416.fqn:null);
switch (G__1416__$1) {
case ">":
return reagent.impl.template.native_element.call(null,reagent.impl.template.__GT_HiccupTag.call(null,cljs.core.nth.call(null,v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element.call(null,cljs.core.nth.call(null,v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element.call(null,cljs.core.nth.call(null,v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element.call(null,v,compiler);

break;
default:
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
return reagent.impl.template.hiccup_element.call(null,v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1),compiler);
} else {
return fn_to_element.call(null,tag,v,compiler);

}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x,this$);

} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.call(null,"reagent-compiler");
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
var parse_fn = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"parse-tag","parse-tag",1427313738),reagent.impl.template.cached_parse);
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template1419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reagent.impl.template.t_reagent$impl$template1419 = (function (opts,id,fn_to_element,parse_fn,meta1420){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.parse_fn = parse_fn;
this.meta1420 = meta1420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.template.t_reagent$impl$template1419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1421,meta1420__$1){
var self__ = this;
var _1421__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template1419(self__.opts,self__.id,self__.fn_to_element,self__.parse_fn,meta1420__$1));
}));

(reagent.impl.template.t_reagent$impl$template1419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1421){
var self__ = this;
var _1421__$1 = this;
return self__.meta1420;
}));

(reagent.impl.template.t_reagent$impl$template1419.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.template.t_reagent$impl$template1419.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(reagent.impl.template.t_reagent$impl$template1419.prototype.reagent$impl$protocols$Compiler$parse_tag$arity$3 = (function (this$,tag_name,tag_value){
var self__ = this;
var this$__$1 = this;
return self__.parse_fn.call(null,this$__$1,tag_name,tag_value);
}));

(reagent.impl.template.t_reagent$impl$template1419.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element.call(null,this$__$1,x,self__.fn_to_element);
}));

(reagent.impl.template.t_reagent$impl$template1419.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element.call(null,this$__$1,argv,component,jsprops,first_child);
}));

(reagent.impl.template.t_reagent$impl$template1419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"meta1420","meta1420",-329462790,null)], null);
}));

(reagent.impl.template.t_reagent$impl$template1419.cljs$lang$type = true);

(reagent.impl.template.t_reagent$impl$template1419.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template1419");

(reagent.impl.template.t_reagent$impl$template1419.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reagent.impl.template/t_reagent$impl$template1419");
}));

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template1419.
 */
reagent.impl.template.__GT_t_reagent$impl$template1419 = (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template1419(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta1420){
return (new reagent.impl.template.t_reagent$impl$template1419(opts__$1,id__$1,fn_to_element__$1,parse_fn__$1,meta1420));
});

}

return (new reagent.impl.template.t_reagent$impl$template1419(opts,id,fn_to_element,parse_fn,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return (reagent.impl.template.default_compiler = compiler);
});

//# sourceMappingURL=template.js.map
