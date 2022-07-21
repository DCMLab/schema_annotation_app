// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.node$module$react_dom = require('react-dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.node$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__1530 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__1531 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__1531);

try{return reagent.dom.node$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__1532 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__1533 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__1533);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__1532);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__1530);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__1535 = arguments.length;
switch (G__1535) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__1536 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__1536,(0),null);
var callback = cljs.core.nth.call(null,vec__1536,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.node$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__1540_1556 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__1541_1557 = null;
var count__1542_1558 = (0);
var i__1543_1559 = (0);
while(true){
if((i__1543_1559 < count__1542_1558)){
var vec__1550_1560 = cljs.core._nth.call(null,chunk__1541_1557,i__1543_1559);
var container_1561 = cljs.core.nth.call(null,vec__1550_1560,(0),null);
var comp_1562 = cljs.core.nth.call(null,vec__1550_1560,(1),null);
reagent.dom.re_render_component.call(null,comp_1562,container_1561);


var G__1563 = seq__1540_1556;
var G__1564 = chunk__1541_1557;
var G__1565 = count__1542_1558;
var G__1566 = (i__1543_1559 + (1));
seq__1540_1556 = G__1563;
chunk__1541_1557 = G__1564;
count__1542_1558 = G__1565;
i__1543_1559 = G__1566;
continue;
} else {
var temp__5804__auto___1567 = cljs.core.seq.call(null,seq__1540_1556);
if(temp__5804__auto___1567){
var seq__1540_1568__$1 = temp__5804__auto___1567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1540_1568__$1)){
var c__5568__auto___1569 = cljs.core.chunk_first.call(null,seq__1540_1568__$1);
var G__1570 = cljs.core.chunk_rest.call(null,seq__1540_1568__$1);
var G__1571 = c__5568__auto___1569;
var G__1572 = cljs.core.count.call(null,c__5568__auto___1569);
var G__1573 = (0);
seq__1540_1556 = G__1570;
chunk__1541_1557 = G__1571;
count__1542_1558 = G__1572;
i__1543_1559 = G__1573;
continue;
} else {
var vec__1553_1574 = cljs.core.first.call(null,seq__1540_1568__$1);
var container_1575 = cljs.core.nth.call(null,vec__1553_1574,(0),null);
var comp_1576 = cljs.core.nth.call(null,vec__1553_1574,(1),null);
reagent.dom.re_render_component.call(null,comp_1576,container_1575);


var G__1577 = cljs.core.next.call(null,seq__1540_1568__$1);
var G__1578 = null;
var G__1579 = (0);
var G__1580 = (0);
seq__1540_1556 = G__1577;
chunk__1541_1557 = G__1578;
count__1542_1558 = G__1579;
i__1543_1559 = G__1580;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map