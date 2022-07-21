// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.annotate');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('schema_annotation.verovio');
goog.require('schema_annotation.helpers');
goog.require('reagent_keybindings.keyboard');
goog.require('clojure.string');
schema_annotation.annotate.new_manual_instance = (function schema_annotation$annotate$new_manual_instance(pattern){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto","auto",-566279492),false,new cljs.core.Keyword(null,"alts","alts",647552416),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,pattern),cljs.core.PersistentVector.EMPTY)),new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});
schema_annotation.annotate.new_known_manual_instance = (function schema_annotation$annotate$new_known_manual_instance(stages){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto","auto",-566279492),false,new cljs.core.Keyword(null,"alts","alts",647552416),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null,new cljs.core.Keyword(null,"stages","stages",-442109532),stages,new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});
schema_annotation.annotate.new_automatic_instance = (function schema_annotation$annotate$new_automatic_instance(alts){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"auto","auto",-566279492),true,new cljs.core.Keyword(null,"alts","alts",647552416),alts,new cljs.core.Keyword(null,"alt","alt",-3214426),(0),new cljs.core.Keyword(null,"stages","stages",-442109532),null,new cljs.core.Keyword(null,"checked","checked",-50955819),false], null);
});
schema_annotation.annotate.make_manual = (function schema_annotation$annotate$make_manual(inst){
var stages = (((((new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(inst) == null)) || ((new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(inst) == null))))?new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(inst):cljs.core.get.call(null,new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(inst),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(inst)));
return cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"stages","stages",-442109532),stages,new cljs.core.Keyword(null,"auto","auto",-566279492),false);
});
schema_annotation.annotate.make_automatic = (function schema_annotation$annotate$make_automatic(inst){
return cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"auto","auto",-566279492),true);
});
schema_annotation.annotate.get_stages = (function schema_annotation$annotate$get_stages(inst){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(inst))){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(inst),new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(inst));
} else {
return new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(inst);
}
});
schema_annotation.annotate.set_stages = (function schema_annotation$annotate$set_stages(inst,stages){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(inst))){
return inst;
} else {
return cljs.core.assoc.call(null,inst,new cljs.core.Keyword(null,"stages","stages",-442109532),stages);
}
});
schema_annotation.annotate.stages_cursor = (function schema_annotation$annotate$stages_cursor(instance){
return reagent.core.cursor.call(null,(function() {
var G__3418 = null;
var G__3418__1 = (function (k){
return schema_annotation.annotate.get_stages.call(null,cljs.core.deref.call(null,instance));
});
var G__3418__2 = (function (k,v){
return cljs.core.swap_BANG_.call(null,instance,schema_annotation.annotate.set_stages,v);
});
G__3418 = function(k,v){
switch(arguments.length){
case 1:
return G__3418__1.call(this,k);
case 2:
return G__3418__2.call(this,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3418.cljs$core$IFn$_invoke$arity$1 = G__3418__1;
G__3418.cljs$core$IFn$_invoke$arity$2 = G__3418__2;
return G__3418;
})()
,cljs.core.PersistentVector.EMPTY);
});
schema_annotation.annotate.validate_instance = (function schema_annotation$annotate$validate_instance(pattern,notes,instance){
if(cljs.core.truth_(instance)){
if(cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,instance))){
return "first stage is empty";
} else {
var schema = schema_annotation.helpers.lookup_schema.call(null,instance,notes);
var match_results = schema_annotation.helpers.match_schema.call(null,schema_annotation.helpers.rel_schema.call(null,schema),pattern);
if(cljs.core.not.call(null,schema)){
return "invalid note selected (e.g. after a tie)";
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.empty_QMARK_,instance))){
return "contains empty stages";
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,pattern),cljs.core.count.call(null,instance))){
return "wrong number of stages (internal error)";
} else {
if(cljs.core.not_every_QMARK_.call(null,cljs.core.true_QMARK_,match_results)){
return schema_annotation.helpers.match_to_error_msg.call(null,match_results);
} else {
if(cljs.core.not.call(null,schema_annotation.helpers.stages_separate_QMARK_.call(null,schema))){
return "stages overlap";
} else {
if(cljs.core.truth_(schema_annotation.helpers.potential_overlap_QMARK_.call(null,schema))){
return "stages potentially overlap (check manually)";
} else {
return null;

}
}
}
}
}
}
}
} else {
return null;
}
});
schema_annotation.annotate.current_instance_cursor = (function schema_annotation$annotate$current_instance_cursor(active_instance,instances){
return reagent.core.cursor.call(null,(function() {
var G__3419 = null;
var G__3419__1 = (function (k){
var ai = cljs.core.deref.call(null,active_instance);
var ins = cljs.core.deref.call(null,instances);
return cljs.core.get.call(null,ins,ai);
});
var G__3419__2 = (function (k,value){
return cljs.core.swap_BANG_.call(null,instances,(function (ins){
var ai = cljs.core.deref.call(null,active_instance);
if((ai == null)){
return ins;
} else {
return cljs.core.assoc.call(null,ins,ai,value);
}
}));
});
G__3419 = function(k,value){
switch(arguments.length){
case 1:
return G__3419__1.call(this,k);
case 2:
return G__3419__2.call(this,k,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3419.cljs$core$IFn$_invoke$arity$1 = G__3419__1;
G__3419.cljs$core$IFn$_invoke$arity$2 = G__3419__2;
return G__3419;
})()
,cljs.core.PersistentVector.EMPTY);
});
schema_annotation.annotate.toggle_active_instance_BANG_ = (function schema_annotation$annotate$toggle_active_instance_BANG_(active_instance,i){
return cljs.core.swap_BANG_.call(null,active_instance,(function (p1__3420_SHARP_){
if(cljs.core._EQ_.call(null,p1__3420_SHARP_,i)){
return null;
} else {
return i;
}
}));
});
schema_annotation.annotate.toggle_instance_checked_BANG_ = (function schema_annotation$annotate$toggle_instance_checked_BANG_(instances,active_instance){
return cljs.core.swap_BANG_.call(null,instances,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_instance,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),cljs.core.not);
});
schema_annotation.annotate.current_stage_cursor = (function schema_annotation$annotate$current_stage_cursor(active_stage,stages){
return reagent.core.cursor.call(null,(function() {
var G__3421 = null;
var G__3421__1 = (function (k){
var as = cljs.core.deref.call(null,active_stage);
var sts = cljs.core.deref.call(null,stages);
if((((as == null)) || ((((as < (0))) || ((as >= cljs.core.count.call(null,sts))))))){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.set.call(null,cljs.core.nth.call(null,sts,as));
}
});
var G__3421__2 = (function (k,value){
return cljs.core.swap_BANG_.call(null,stages,(function (sts){
var as = cljs.core.deref.call(null,active_stage);
if((((as == null)) || ((((as < (0))) || ((as >= cljs.core.count.call(null,sts))))))){
return sts;
} else {
return cljs.core.assoc.call(null,sts,as,cljs.core.vec.call(null,value));
}
}));
});
G__3421 = function(k,value){
switch(arguments.length){
case 1:
return G__3421__1.call(this,k);
case 2:
return G__3421__2.call(this,k,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3421.cljs$core$IFn$_invoke$arity$1 = G__3421__1;
G__3421.cljs$core$IFn$_invoke$arity$2 = G__3421__2;
return G__3421;
})()
,cljs.core.PersistentVector.EMPTY);
});
schema_annotation.annotate.set_alt = (function schema_annotation$annotate$set_alt(instance,alt){
return cljs.core.assoc.call(null,instance,new cljs.core.Keyword(null,"alt","alt",-3214426),(function (){var x__5133__auto__ = (function (){var x__5130__auto__ = (0);
var y__5131__auto__ = alt;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5134__auto__ = (cljs.core.count.call(null,new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(instance)) - (1));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
});
schema_annotation.annotate.prev_alt = (function schema_annotation$annotate$prev_alt(instance){
return schema_annotation.annotate.set_alt.call(null,instance,(new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(instance) - (1)));
});
schema_annotation.annotate.next_alt = (function schema_annotation$annotate$next_alt(instance){
return schema_annotation.annotate.set_alt.call(null,instance,(new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(instance) + (1)));
});
schema_annotation.annotate.annotation_inner = (function schema_annotation$annotate$annotation_inner(pattern,notes,piece_xml,active_instance,instances){
var active_stage = reagent.core.atom.call(null,null);
var quick_notes = reagent.core.atom.call(null,null);
var jump = reagent.core.atom.call(null,null);
var jump_candidate = reagent.core.atom.call(null,null);
var options = cljs.core.PersistentArrayMap.EMPTY;
var co__1182__auto___3447 = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.reset_BANG_.call(null,jump,cljs.core.deref.call(null,jump_candidate));
}),new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
cljs.core.deref.call(null,co__1182__auto___3447);


return (function (pattern__$1,notes__$1,piece_xml__$1,active_instance__$1,instances__$1){
var current_instance = schema_annotation.annotate.current_instance_cursor.call(null,active_instance__$1,instances__$1);
var stages = schema_annotation.annotate.stages_cursor.call(null,current_instance);
var selected = schema_annotation.annotate.current_stage_cursor.call(null,active_stage,stages);
var allow_select = reagent.ratom.make_reaction.call(null,(function (){
var sts = cljs.core.deref.call(null,stages);
var as = cljs.core.deref.call(null,active_stage);
return cljs.core.not.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (((sts == null)) || ((((as == null)) || ((((as < (0))) || ((as >= cljs.core.count.call(null,sts))))))));
}
})());
}));
var highlighted = reagent.ratom.make_reaction.call(null,(function (){
var sts = cljs.core.deref.call(null,stages);
var as = cljs.core.deref.call(null,active_stage);
var qn = cljs.core.deref.call(null,quick_notes);
if((!((qn == null)))){
return qn;
} else {
if((sts == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.vec.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$annotate$annotation_inner_$_iter__3423(s__3424){
return (new cljs.core.LazySeq(null,(function (){
var s__3424__$1 = s__3424;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3424__$1);
if(temp__5804__auto__){
var s__3424__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3424__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3424__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3426 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3425 = (0);
while(true){
if((i__3425 < size__5522__auto__)){
var vec__3427 = cljs.core._nth.call(null,c__5521__auto__,i__3425);
var i = cljs.core.nth.call(null,vec__3427,(0),null);
var stage = cljs.core.nth.call(null,vec__3427,(1),null);
cljs.core.chunk_append.call(null,b__3426,((cljs.core._EQ_.call(null,i,as))?cljs.core.PersistentVector.EMPTY:stage));

var G__3448 = (i__3425 + (1));
i__3425 = G__3448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3426),schema_annotation$annotate$annotation_inner_$_iter__3423.call(null,cljs.core.chunk_rest.call(null,s__3424__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3426),null);
}
} else {
var vec__3430 = cljs.core.first.call(null,s__3424__$2);
var i = cljs.core.nth.call(null,vec__3430,(0),null);
var stage = cljs.core.nth.call(null,vec__3430,(1),null);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,i,as))?cljs.core.PersistentVector.EMPTY:stage),schema_annotation$annotate$annotation_inner_$_iter__3423.call(null,cljs.core.rest.call(null,s__3424__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,sts));
})());
}
}
}));
var to_3449 = (function (){var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,stages),cljs.core.deref.call(null,active_stage));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.deref.call(null,highlighted)));
}
})();
if(cljs.core.not_EQ_.call(null,to_3449,cljs.core.deref.call(null,jump_candidate))){
cljs.core.reset_BANG_.call(null,jump_candidate,to_3449);
} else {
}

var unset_stage_BANG_ = (function schema_annotation$annotate$annotation_inner_$_unset_stage_BANG_(){
return cljs.core.reset_BANG_.call(null,active_stage,null);
});
var set_stage_BANG_ = (function schema_annotation$annotate$annotation_inner_$_set_stage_BANG_(stagei){
var inst = cljs.core.deref.call(null,current_instance);
if((inst == null)){
return null;
} else {
return cljs.core.reset_BANG_.call(null,active_stage,stagei);
}
});
var as = cljs.core.deref.call(null,active_stage);
var enabled_class = (((cljs.core.deref.call(null,current_instance) == null))?" pure-button-disabled":"");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g","div.pure-g",1950568742),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-form.pure-u-1","div.pure-form.pure-u-1",1745018464),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Quick Notes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-1.pure-u-md-4-5","input.pure-u-1.pure-u-md-4-5",418552970),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),schema_annotation.helpers.poly_str.call(null,cljs.core.deref.call(null,quick_notes)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var poly = schema_annotation.helpers.parse_poly.call(null,ev.target.value);
return cljs.core.reset_BANG_.call(null,quick_notes,poly);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1.pure-u-md-1-5","a.pure-button.pure-u-1.pure-u-md-1-5",-1045443713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,quick_notes,null);
})], null),"Clear"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-form.pure-u-1.pure-u-lg-2-5","div.pure-form.pure-u-1.pure-u-lg-2-5",-748608255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Instance ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.validation-error","span.validation-error",927385236),(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance)))?null:schema_annotation.annotate.validate_instance.call(null,pattern__$1,notes__$1,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance))))], null)], null),(function (){var insts = cljs.core.deref.call(null,instances__$1);
var ai = cljs.core.deref.call(null,active_instance__$1);
var inst = cljs.core.get.call(null,insts,ai);
var ks = cljs.core.to_array.call(null,cljs.core.keys.call(null,insts));
var key_i = (function (){var i = ks.indexOf(ai);
if(cljs.core._EQ_.call(null,(-1),i)){
return null;
} else {
return i;
}
})();
var prev_key = (function (){var or__5045__auto__ = (cljs.core.truth_(key_i)?cljs.core.get.call(null,ks,(key_i - (1))):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.last.call(null,ks);
}
})();
var next_key = (function (){var or__5045__auto__ = (cljs.core.truth_(key_i)?cljs.core.get.call(null,ks,(key_i + (1))):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first.call(null,ks);
}
})();
var go_prev_instance = (function (){
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance__$1,prev_key);
});
var go_next_instance = (function (){
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance__$1,next_key);
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-button-group.pure-u-1.pure-u-sm-1-2","div.pure-button-group.pure-u-1.pure-u-sm-1-2",-684279188),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(prev_key)?null:"pure-button-disabled"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_prev_instance], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"shift-up",go_prev_instance], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ai], null)),"<"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.instance-select","select.instance-select",-505868272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = ai;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3422_SHARP_){
var key = parseInt(p1__3422_SHARP_.target.value);
if(cljs.core.truth_(Number.isNaN(key))){
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance__$1,null);
} else {
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance__$1,key);
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"none","none",1333468478)], null),"none"], null),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$annotate$annotation_inner_$_iter__3433(s__3434){
return (new cljs.core.LazySeq(null,(function (){
var s__3434__$1 = s__3434;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3434__$1);
if(temp__5804__auto__){
var s__3434__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3434__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3434__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3436 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3435 = (0);
while(true){
if((i__3435 < size__5522__auto__)){
var vec__3437 = cljs.core._nth.call(null,c__5521__auto__,i__3435);
var k = cljs.core.nth.call(null,vec__3437,(0),null);
var v = cljs.core.nth.call(null,vec__3437,(1),null);
cljs.core.chunk_append.call(null,b__3436,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),k], null),(k + (1))], null));

var G__3450 = (i__3435 + (1));
i__3435 = G__3450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3436),schema_annotation$annotate$annotation_inner_$_iter__3433.call(null,cljs.core.chunk_rest.call(null,s__3434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3436),null);
}
} else {
var vec__3440 = cljs.core.first.call(null,s__3434__$2);
var k = cljs.core.nth.call(null,vec__3440,(0),null);
var v = cljs.core.nth.call(null,vec__3440,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),k], null),(k + (1))], null),schema_annotation$annotate$annotation_inner_$_iter__3433.call(null,cljs.core.rest.call(null,s__3434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,insts);
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(next_key)?null:"pure-button-disabled"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_next_instance], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"shift-down",go_next_instance], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ai], null)),">"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[(((inst == null))?"pure-button-disabled ":null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(inst))?"pure-button-active button-checked":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return schema_annotation.annotate.toggle_instance_checked_BANG_.call(null,instances__$1,ai);
})], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"enter",(function (){
return schema_annotation.annotate.toggle_instance_checked_BANG_.call(null,instances__$1,ai);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ai], null)),"\u2714"], null)], null);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-sm-1-2","div.pure-u-1.pure-u-sm-1-2",-1398117423),(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1.pure-u-lg-23-24","a.pure-button.pure-u-1.pure-u-lg-23-24",-1687826600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),enabled_class,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,current_instance,schema_annotation.annotate.make_manual);
})], null),"Make Manual"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1.pure-u-lg-23-24","a.pure-button.pure-u-1.pure-u-lg-23-24",-1687826600),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance)) == null))?"pure-button-disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,current_instance,schema_annotation.annotate.make_automatic);
})], null),"Make Automatic"], null))], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_instance)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form.pure-u-1.pure-u-lg-3-5","form.pure-form.pure-u-1.pure-u-lg-3-5",15143600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Suggestion"], null),(function (){var inst = cljs.core.deref.call(null,current_instance);
var alt = new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(inst);
var nalts = cljs.core.count.call(null,new cljs.core.Keyword(null,"alts","alts",647552416).cljs$core$IFn$_invoke$arity$1(inst));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.automatic","div.automatic",1863910111),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-button-group","div.pure-button-group",-852593445),(function (){var go_prev = (function (){
return cljs.core.swap_BANG_.call(null,current_instance,schema_annotation.annotate.prev_alt);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((((alt == null)) || ((alt <= (0)))))?"pure-button-disabled":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_prev], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"shift-left",go_prev], null),"<"], null);
})(),(function (){var go_next = (function (){
return cljs.core.swap_BANG_.call(null,current_instance,schema_annotation.annotate.next_alt);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(((((alt == null)) || ((alt >= (nalts - (1))))))?"pure-button-disabled":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_next], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,"shift-right",go_next], null),">"], null);
})()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"suggestion"], null)," ",(alt + (1))," / ",nalts], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"suggestion",new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),nalts,new cljs.core.Keyword(null,"value","value",305978217),(alt + (1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var new_alt = ev.target.valueAsNumber;
return cljs.core.swap_BANG_.call(null,current_instance,schema_annotation.annotate.set_alt,(new_alt - (1)));
})], null)], null)], null);
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form.pure-u-1.pure-u-lg-3-5","form.pure-form.pure-u-1.pure-u-lg-3-5",15143600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Stage"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-button-group","div.pure-button-group",-852593445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"toolbar"], null),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$annotate$annotation_inner_$_iter__3443(s__3444){
return (new cljs.core.LazySeq(null,(function (){
var s__3444__$1 = s__3444;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3444__$1);
if(temp__5804__auto__){
var s__3444__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3444__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3444__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3446 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3445 = (0);
while(true){
if((i__3445 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__3445);
cljs.core.chunk_append.call(null,b__3446,(function (){var sel_class = ((cljs.core._EQ_.call(null,i,as))?"vrv-selected pure-button-active":[" vrv-highlighted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,i,(9)))].join(''));
var click = ((function (i__3445,sel_class,i,c__5521__auto__,size__5522__auto__,b__3446,s__3444__$2,temp__5804__auto__,as,enabled_class,current_instance,stages,selected,allow_select,highlighted,active_stage,quick_notes,jump,jump_candidate,options){
return (function (){
if(cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,active_stage))){
return unset_stage_BANG_.call(null);
} else {
return set_stage_BANG_.call(null,i);
}
});})(i__3445,sel_class,i,c__5521__auto__,size__5522__auto__,b__3446,s__3444__$2,temp__5804__auto__,as,enabled_class,current_instance,stages,selected,allow_select,highlighted,active_stage,quick_notes,jump,jump_candidate,options))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),[sel_class," ",enabled_class].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),click], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1))),click], null),(i + (1))], null);
})());

var G__3451 = (i__3445 + (1));
i__3445 = G__3451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3446),schema_annotation$annotate$annotation_inner_$_iter__3443.call(null,cljs.core.chunk_rest.call(null,s__3444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3446),null);
}
} else {
var i = cljs.core.first.call(null,s__3444__$2);
return cljs.core.cons.call(null,(function (){var sel_class = ((cljs.core._EQ_.call(null,i,as))?"vrv-selected pure-button-active":[" vrv-highlighted-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod.call(null,i,(9)))].join(''));
var click = ((function (sel_class,i,s__3444__$2,temp__5804__auto__,as,enabled_class,current_instance,stages,selected,allow_select,highlighted,active_stage,quick_notes,jump,jump_candidate,options){
return (function (){
if(cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,active_stage))){
return unset_stage_BANG_.call(null);
} else {
return set_stage_BANG_.call(null,i);
}
});})(sel_class,i,s__3444__$2,temp__5804__auto__,as,enabled_class,current_instance,stages,selected,allow_select,highlighted,active_stage,quick_notes,jump,jump_candidate,options))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),[sel_class," ",enabled_class].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),click], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.kb_action,cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1))),click], null),(i + (1))], null);
})(),schema_annotation$annotate$annotation_inner_$_iter__3443.call(null,cljs.core.rest.call(null,s__3444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,pattern__$1)));
})())], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1","div.pure-u-1",1705259099),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.verovio.verovio_comp,piece_xml__$1,selected,allow_select,highlighted,jump,options], null)], null)], null);
});
});
schema_annotation.annotate.annotation_comp = (function schema_annotation$annotate$annotation_comp(pattern,notes,piece_xml,instances){
var active_instance = reagent.core.atom.call(null,null);
return (function (pattern__$1,notes__$1,piece_xml__$1,instances__$1){
var add_instance_BANG_ = (function schema_annotation$annotate$annotation_comp_$_add_instance_BANG_(){
return cljs.core.swap_BANG_.call(null,instances__$1,(function (ins){
var i = (cljs.core.reduce.call(null,cljs.core.max,(-1),cljs.core.keys.call(null,ins)) + (1));
cljs.core.reset_BANG_.call(null,active_instance,i);

return cljs.core.assoc.call(null,ins,i,schema_annotation.annotate.new_manual_instance.call(null,pattern__$1));
}));
});
var delete_instance_BANG_ = (function schema_annotation$annotate$annotation_comp_$_delete_instance_BANG_(i){
return cljs.core.swap_BANG_.call(null,instances__$1,cljs.core.dissoc,i);
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.annotations","div.annotations",-2087603635),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Annotations"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.annotate.annotation_inner,pattern__$1,notes__$1,piece_xml__$1,active_instance,instances__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form.pure-g","form.pure-form.pure-g",-949187178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-sm-4-5","div.pure-u-1.pure-u-sm-4-5",-299949756),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Instances"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-primary.pure-u-1.pure-u-sm-1-5","a.pure-button.button-primary.pure-u-1.pure-u-sm-1-5",-692012062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return add_instance_BANG_.call(null);
})], null),"New Instance"], null)], null),(function (){var ai = cljs.core.deref.call(null,active_instance);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.instance-list","ol.instance-list",2127568690),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$annotate$annotation_comp_$_iter__3452(s__3453){
return (new cljs.core.LazySeq(null,(function (){
var s__3453__$1 = s__3453;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3453__$1);
if(temp__5804__auto__){
var s__3453__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3453__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3453__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3455 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3454 = (0);
while(true){
if((i__3454 < size__5522__auto__)){
var vec__3456 = cljs.core._nth.call(null,c__5521__auto__,i__3454);
var i = cljs.core.nth.call(null,vec__3456,(0),null);
var ins = cljs.core.nth.call(null,vec__3456,(1),null);
cljs.core.chunk_append.call(null,b__3455,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core._EQ_.call(null,i,ai))?"instance-selected ":null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(ins))?"instance-checked":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g.instance","div.pure-g.instance",-858368064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-5-8","div.pure-u-1.pure-u-md-5-8",-763700403),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instance-name","div.instance-name",-518831414),["Instance ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')," ",(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(ins))?"(automatic)":"(manual)")," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.validation-error","span.validation-error",927385236),(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(ins))?null:schema_annotation.annotate.validate_instance.call(null,pattern__$1,notes__$1,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(ins)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-3-8","div.pure-u-1.pure-u-md-3-8",1680695435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-23-24","a.pure-button.pure-u-23-24",581095274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance,i);
});})(i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,i,ai))?"button-selected pure-button-active":null)], null),((cljs.core._EQ_.call(null,i,ai))?"Deselect":"Select")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-23-24","a.pure-button.pure-u-23-24",581095274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(ins))?"pure-button-active button-checked":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return schema_annotation.annotate.toggle_instance_checked_BANG_.call(null,instances__$1,i);
});})(i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance))
], null),"Checked"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),((cljs.core._EQ_.call(null,i,ai))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-danger.pure-u-23-24","a.pure-button.button-danger.pure-u-23-24",18378895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return delete_instance_BANG_.call(null,i);
});})(i__3454,vec__3456,i,ins,c__5521__auto__,size__5522__auto__,b__3455,s__3453__$2,temp__5804__auto__,ai,active_instance))
], null),"Delete"], null):null)], null)], null)], null)], null));

var G__3462 = (i__3454 + (1));
i__3454 = G__3462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3455),schema_annotation$annotate$annotation_comp_$_iter__3452.call(null,cljs.core.chunk_rest.call(null,s__3453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3455),null);
}
} else {
var vec__3459 = cljs.core.first.call(null,s__3453__$2);
var i = cljs.core.nth.call(null,vec__3459,(0),null);
var ins = cljs.core.nth.call(null,vec__3459,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),[((cljs.core._EQ_.call(null,i,ai))?"instance-selected ":null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(ins))?"instance-checked":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g.instance","div.pure-g.instance",-858368064),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-5-8","div.pure-u-1.pure-u-md-5-8",-763700403),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.instance-name","div.instance-name",-518831414),["Instance ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))].join('')," ",(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(ins))?"(automatic)":"(manual)")," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.validation-error","span.validation-error",927385236),(cljs.core.truth_(new cljs.core.Keyword(null,"auto","auto",-566279492).cljs$core$IFn$_invoke$arity$1(ins))?null:schema_annotation.annotate.validate_instance.call(null,pattern__$1,notes__$1,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(ins)))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-3-8","div.pure-u-1.pure-u-md-3-8",1680695435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-23-24","a.pure-button.pure-u-23-24",581095274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return schema_annotation.annotate.toggle_active_instance_BANG_.call(null,active_instance,i);
});})(vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,i,ai))?"button-selected pure-button-active":null)], null),((cljs.core._EQ_.call(null,i,ai))?"Deselect":"Select")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-23-24","a.pure-button.pure-u-23-24",581095274),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(ins))?"pure-button-active button-checked":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return schema_annotation.annotate.toggle_instance_checked_BANG_.call(null,instances__$1,i);
});})(vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance))
], null),"Checked"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1-3","div.pure-u-1-3",1614587459),((cljs.core._EQ_.call(null,i,ai))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-danger.pure-u-23-24","a.pure-button.button-danger.pure-u-23-24",18378895),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance){
return (function (){
return delete_instance_BANG_.call(null,i);
});})(vec__3459,i,ins,s__3453__$2,temp__5804__auto__,ai,active_instance))
], null),"Delete"], null):null)], null)], null)], null)], null),schema_annotation$annotate$annotation_comp_$_iter__3452.call(null,cljs.core.rest.call(null,s__3453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.deref.call(null,instances__$1));
})())], null);
})()], null);
});
});

//# sourceMappingURL=annotate.js.map
