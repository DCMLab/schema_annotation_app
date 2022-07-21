// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.verovio');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('schema_annotation.helpers');
schema_annotation.verovio.verovio_options = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scale","scale",-230427353),(50),new cljs.core.Keyword(null,"pageWidth","pageWidth",1554265710),(2048),new cljs.core.Keyword(null,"pageHeight","pageHeight",102852319),(1500),new cljs.core.Keyword(null,"adjustPageHeight","adjustPageHeight",-730347434),true,new cljs.core.Keyword(null,"header","header",119441134),"none",new cljs.core.Keyword(null,"footer","footer",1606445390),"none",new cljs.core.Keyword(null,"format","format",-1306924766),"xml"], null);
schema_annotation.verovio.create_tk_BANG_ = (function schema_annotation$verovio$create_tk_BANG_(options){
var tk = (new verovio.toolkit());
tk.setOptions(cljs.core.clj__GT_js.call(null,options));

return tk;
});
schema_annotation.verovio.load_all_pages_BANG_ = (function schema_annotation$verovio$load_all_pages_BANG_(tk,data){
tk.loadData(data);

var pages = tk.getPageCount();
return cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$verovio$load_all_pages_BANG__$_iter__1583(s__1584){
return (new cljs.core.LazySeq(null,(function (){
var s__1584__$1 = s__1584;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1584__$1);
if(temp__5804__auto__){
var s__1584__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1584__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1584__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1586 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1585 = (0);
while(true){
if((i__1585 < size__5522__auto__)){
var page = cljs.core._nth.call(null,c__5521__auto__,i__1585);
cljs.core.chunk_append.call(null,b__1586,tk.renderToSVG(page));

var G__1587 = (i__1585 + (1));
i__1585 = G__1587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1586),schema_annotation$verovio$load_all_pages_BANG__$_iter__1583.call(null,cljs.core.chunk_rest.call(null,s__1584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1586),null);
}
} else {
var page = cljs.core.first.call(null,s__1584__$2);
return cljs.core.cons.call(null,tk.renderToSVG(page),schema_annotation$verovio$load_all_pages_BANG__$_iter__1583.call(null,cljs.core.rest.call(null,s__1584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,(1),(pages + (1))));
})());
});
schema_annotation.verovio.scroll_to_note_BANG_ = (function schema_annotation$verovio$scroll_to_note_BANG_(dom_node,jump_atom){
var jump_1594 = cljs.core.deref.call(null,jump_atom);
var pad_top_1595 = (50);
var container_top_1596 = dom_node.getBoundingClientRect().top;
var container_scroll_1597 = dom_node.scrollTop;
var elts_1598 = cljs.core.filter.call(null,(function (p1__1588_SHARP_){
return (!((p1__1588_SHARP_ == null)));
}),(function (){var iter__5523__auto__ = (function schema_annotation$verovio$scroll_to_note_BANG__$_iter__1590(s__1591){
return (new cljs.core.LazySeq(null,(function (){
var s__1591__$1 = s__1591;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1591__$1);
if(temp__5804__auto__){
var s__1591__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1591__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1591__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1593 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1592 = (0);
while(true){
if((i__1592 < size__5522__auto__)){
var j = cljs.core._nth.call(null,c__5521__auto__,i__1592);
cljs.core.chunk_append.call(null,b__1593,document.getElementById(j));

var G__1604 = (i__1592 + (1));
i__1592 = G__1604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1593),schema_annotation$verovio$scroll_to_note_BANG__$_iter__1590.call(null,cljs.core.chunk_rest.call(null,s__1591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1593),null);
}
} else {
var j = cljs.core.first.call(null,s__1591__$2);
return cljs.core.cons.call(null,document.getElementById(j),schema_annotation$verovio$scroll_to_note_BANG__$_iter__1590.call(null,cljs.core.rest.call(null,s__1591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,jump_1594);
})());
var elt_tops_1599 = cljs.core.map.call(null,(function (p1__1589_SHARP_){
return p1__1589_SHARP_.getBoundingClientRect().top;
}),elts_1598);
var min_elt_top_1600 = cljs.core.apply.call(null,cljs.core.min,elt_tops_1599);
var max_elt_top_1601 = cljs.core.apply.call(null,cljs.core.max,elt_tops_1599);
var offset_1602 = (min_elt_top_1600 - container_top_1596);
var height_1603 = dom_node.clientHeight;
if((((offset_1602 < (0))) || ((((offset_1602 > (height_1603 - pad_top_1595))) || (((((min_elt_top_1600 - max_elt_top_1601) < (pad_top_1595 + (10)))) && ((max_elt_top_1601 > ((container_top_1596 + height_1603) + (-10)))))))))){
(dom_node["scrollTop"] = (container_scroll_1597 + (offset_1602 - pad_top_1595)));
} else {
}

return cljs.core.reset_BANG_.call(null,jump_atom,null);
});
schema_annotation.verovio.toggle_in_selection = (function schema_annotation$verovio$toggle_in_selection(sel,elt){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([elt]),sel))){
return cljs.core.disj.call(null,sel,elt);
} else {
return cljs.core.conj.call(null,sel,elt);
}
});
schema_annotation.verovio.add_select_handlers_BANG_ = (function schema_annotation$verovio$add_select_handlers_BANG_(dom_node,selected){
var toggle_select_BANG_ = (function schema_annotation$verovio$add_select_handlers_BANG__$_toggle_select_BANG_(id){
return cljs.core.swap_BANG_.call(null,selected,schema_annotation.verovio.toggle_in_selection,id);
});
var notes = d3.select(dom_node).selectAll("svg").selectAll(".note");
return notes.on("click",(function (){
var this$ = this;
return toggle_select_BANG_.call(null,this$.id);
}));
});
schema_annotation.verovio.reset_note_classes_BANG_ = (function schema_annotation$verovio$reset_note_classes_BANG_(dom_node){
return d3.select(dom_node).selectAll("svg").selectAll(".note").attr("class","note");
});
schema_annotation.verovio.add_class_to_notes_BANG_ = (function schema_annotation$verovio$add_class_to_notes_BANG_(dom_node,ids,class$){
var score = d3.select(dom_node).select("svg").selectAll(".node");
var seq__1605 = cljs.core.seq.call(null,ids);
var chunk__1606 = null;
var count__1607 = (0);
var i__1608 = (0);
while(true){
if((i__1608 < count__1607)){
var id = cljs.core._nth.call(null,chunk__1606,i__1608);
var note_1609 = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).node();
if(cljs.core.not_EQ_.call(null,null,note_1609)){
note_1609.classList.add(class$);
} else {
}


var G__1610 = seq__1605;
var G__1611 = chunk__1606;
var G__1612 = count__1607;
var G__1613 = (i__1608 + (1));
seq__1605 = G__1610;
chunk__1606 = G__1611;
count__1607 = G__1612;
i__1608 = G__1613;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__1605);
if(temp__5804__auto__){
var seq__1605__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1605__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__1605__$1);
var G__1614 = cljs.core.chunk_rest.call(null,seq__1605__$1);
var G__1615 = c__5568__auto__;
var G__1616 = cljs.core.count.call(null,c__5568__auto__);
var G__1617 = (0);
seq__1605 = G__1614;
chunk__1606 = G__1615;
count__1607 = G__1616;
i__1608 = G__1617;
continue;
} else {
var id = cljs.core.first.call(null,seq__1605__$1);
var note_1618 = d3.select(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')).node();
if(cljs.core.not_EQ_.call(null,null,note_1618)){
note_1618.classList.add(class$);
} else {
}


var G__1619 = cljs.core.next.call(null,seq__1605__$1);
var G__1620 = null;
var G__1621 = (0);
var G__1622 = (0);
seq__1605 = G__1619;
chunk__1606 = G__1620;
count__1607 = G__1621;
i__1608 = G__1622;
continue;
}
} else {
return null;
}
}
break;
}
});
schema_annotation.verovio.verovio_comp = (function schema_annotation$verovio$verovio_comp(data,selected,allow_select,highlighted,jump,in_opts){
var options = cljs.core.conj.call(null,schema_annotation.verovio.verovio_options,in_opts);
var tk = schema_annotation.verovio.create_tk_BANG_.call(null,options);
var data_atom = reagent.core.atom.call(null,data);
var svgs = (function (){var co__1182__auto__ = reagent.ratom.make_reaction.call(null,(function (){
return schema_annotation.verovio.load_all_pages_BANG_.call(null,tk,cljs.core.deref.call(null,data_atom));
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__1182__auto__);

return co__1182__auto__;
})();
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (data__$1,selected__$1,allow_select__$1,highlighted__$1,jump__$1,in_opts__$1){
cljs.core.reset_BANG_.call(null,data_atom,data__$1);

var atoms = (function (){
cljs.core.deref.call(null,selected__$1);

cljs.core.deref.call(null,highlighted__$1);

return cljs.core.deref.call(null,svgs);
})()
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verovio-cmp","div.verovio-cmp",-2018406100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,allow_select__$1))?" allow-select":null),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),clojure.string.join.call(null,"\n",cljs.core.deref.call(null,svgs))], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (comp){
var comp_dom = reagent.dom.dom_node.call(null,comp);
schema_annotation.verovio.reset_note_classes_BANG_.call(null,comp_dom);

if(cljs.core.truth_(cljs.core.deref.call(null,allow_select))){
schema_annotation.verovio.add_select_handlers_BANG_.call(null,comp_dom,selected);

schema_annotation.verovio.add_class_to_notes_BANG_.call(null,comp_dom,cljs.core.deref.call(null,selected),"vrv-selected");
} else {
}

var seq__1623_1639 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,highlighted)));
var chunk__1624_1640 = null;
var count__1625_1641 = (0);
var i__1626_1642 = (0);
while(true){
if((i__1626_1642 < count__1625_1641)){
var vec__1633_1643 = cljs.core._nth.call(null,chunk__1624_1640,i__1626_1642);
var i_1644 = cljs.core.nth.call(null,vec__1633_1643,(0),null);
var group_1645 = cljs.core.nth.call(null,vec__1633_1643,(1),null);
schema_annotation.verovio.add_class_to_notes_BANG_.call(null,comp_dom,group_1645,["vrv-highlighted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,i_1644,(9)))].join(''));


var G__1646 = seq__1623_1639;
var G__1647 = chunk__1624_1640;
var G__1648 = count__1625_1641;
var G__1649 = (i__1626_1642 + (1));
seq__1623_1639 = G__1646;
chunk__1624_1640 = G__1647;
count__1625_1641 = G__1648;
i__1626_1642 = G__1649;
continue;
} else {
var temp__5804__auto___1650 = cljs.core.seq.call(null,seq__1623_1639);
if(temp__5804__auto___1650){
var seq__1623_1651__$1 = temp__5804__auto___1650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1623_1651__$1)){
var c__5568__auto___1652 = cljs.core.chunk_first.call(null,seq__1623_1651__$1);
var G__1653 = cljs.core.chunk_rest.call(null,seq__1623_1651__$1);
var G__1654 = c__5568__auto___1652;
var G__1655 = cljs.core.count.call(null,c__5568__auto___1652);
var G__1656 = (0);
seq__1623_1639 = G__1653;
chunk__1624_1640 = G__1654;
count__1625_1641 = G__1655;
i__1626_1642 = G__1656;
continue;
} else {
var vec__1636_1657 = cljs.core.first.call(null,seq__1623_1651__$1);
var i_1658 = cljs.core.nth.call(null,vec__1636_1657,(0),null);
var group_1659 = cljs.core.nth.call(null,vec__1636_1657,(1),null);
schema_annotation.verovio.add_class_to_notes_BANG_.call(null,comp_dom,group_1659,["vrv-highlighted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,i_1658,(9)))].join(''));


var G__1660 = cljs.core.next.call(null,seq__1623_1651__$1);
var G__1661 = null;
var G__1662 = (0);
var G__1663 = (0);
seq__1623_1639 = G__1660;
chunk__1624_1640 = G__1661;
count__1625_1641 = G__1662;
i__1626_1642 = G__1663;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref.call(null,jump))){
return schema_annotation.verovio.scroll_to_note_BANG_.call(null,comp_dom,jump);
} else {
return null;
}
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"verovio-comp"], null));
});
schema_annotation.verovio.verovio_example_comp = (function schema_annotation$verovio$verovio_example_comp(){
var data = reagent.core.atom.call(null,schema_annotation.helpers.xml_test);
var selected = reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var allow_select = reagent.core.atom.call(null,true);
var highlighted = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var jump = reagent.core.atom.call(null,null);
var options = cljs.core.PersistentArrayMap.EMPTY;
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form.pure-g","form.pure-form.pure-g",-949187178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-2","div.pure-u-1-2",832592699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-23-24","input.pure-u-23-24",96503048),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Highlighted",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var input = ev.target.value;
var hls = cljs.core.vec.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$verovio$verovio_example_comp_$_iter__1664(s__1665){
return (new cljs.core.LazySeq(null,(function (){
var s__1665__$1 = s__1665;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1665__$1);
if(temp__5804__auto__){
var s__1665__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1665__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1665__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1667 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1666 = (0);
while(true){
if((i__1666 < size__5522__auto__)){
var group = cljs.core._nth.call(null,c__5521__auto__,i__1666);
cljs.core.chunk_append.call(null,b__1667,cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,group,",")))));

var G__1668 = (i__1666 + (1));
i__1666 = G__1668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1667),schema_annotation$verovio$verovio_example_comp_$_iter__1664.call(null,cljs.core.chunk_rest.call(null,s__1665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1667),null);
}
} else {
var group = cljs.core.first.call(null,s__1665__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,group,",")))),schema_annotation$verovio$verovio_example_comp_$_iter__1664.call(null,cljs.core.rest.call(null,s__1665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,clojure.string.split.call(null,input,";"));
})());
return cljs.core.swap_BANG_.call(null,highlighted,hls);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-4","div.pure-u-1-4",1167351211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".xml,.musicxml",new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var files = ev.target.files;
schema_annotation.helpers.load_from_file_BANG_.call(null,data,(files[(0)]));

return cljs.core.swap_BANG_.call(null,selected,cljs.core.empty);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-3-4","div.pure-u-3-4",835446454),"Selection:",cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,selected))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1-4","a.pure-button.pure-u-1-4",-2062131459),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,selected,cljs.core.empty);
})], null),"Clear Selection"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.verovio.verovio_comp,selected,allow_select,highlighted,jump,options], null)], null);
});
});

//# sourceMappingURL=verovio.js.map
