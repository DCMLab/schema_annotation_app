// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.io');
goog.require('cljs.core');
goog.require('schema_annotation.annotate');
goog.require('intervals.core');
goog.require('intervals.spelled');
schema_annotation.io.parse_groups = (function schema_annotation$io$parse_groups(json_groups,start_index){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),(function (){var iter__5523__auto__ = (function schema_annotation$io$parse_groups_$_iter__3465(s__3466){
return (new cljs.core.LazySeq(null,(function (){
var s__3466__$1 = s__3466;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3466__$1);
if(temp__5804__auto__){
var s__3466__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3466__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3466__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3468 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3467 = (0);
while(true){
if((i__3467 < size__5522__auto__)){
var vec__3469 = cljs.core._nth.call(null,c__5521__auto__,i__3467);
var i = cljs.core.nth.call(null,vec__3469,(0),null);
var alternatives = cljs.core.nth.call(null,vec__3469,(1),null);
cljs.core.chunk_append.call(null,b__3468,cljs.core.PersistentArrayMap.createAsIfByAssoc([(i + start_index),schema_annotation.annotate.new_automatic_instance.call(null,cljs.core.js__GT_clj.call(null,alternatives))]));

var G__3475 = (i__3467 + (1));
i__3467 = G__3475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3468),schema_annotation$io$parse_groups_$_iter__3465.call(null,cljs.core.chunk_rest.call(null,s__3466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3468),null);
}
} else {
var vec__3472 = cljs.core.first.call(null,s__3466__$2);
var i = cljs.core.nth.call(null,vec__3472,(0),null);
var alternatives = cljs.core.nth.call(null,vec__3472,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([(i + start_index),schema_annotation.annotate.new_automatic_instance.call(null,cljs.core.js__GT_clj.call(null,alternatives))]),schema_annotation$io$parse_groups_$_iter__3465.call(null,cljs.core.rest.call(null,s__3466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,json_groups));
})());
});
schema_annotation.io.parse_instances = (function schema_annotation$io$parse_instances(json_instances,start_index){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),(function (){var iter__5523__auto__ = (function schema_annotation$io$parse_instances_$_iter__3476(s__3477){
return (new cljs.core.LazySeq(null,(function (){
var s__3477__$1 = s__3477;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3477__$1);
if(temp__5804__auto__){
var s__3477__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3477__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3477__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3479 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3478 = (0);
while(true){
if((i__3478 < size__5522__auto__)){
var vec__3480 = cljs.core._nth.call(null,c__5521__auto__,i__3478);
var i = cljs.core.nth.call(null,vec__3480,(0),null);
var inst = cljs.core.nth.call(null,vec__3480,(1),null);
cljs.core.chunk_append.call(null,b__3479,cljs.core.PersistentArrayMap.createAsIfByAssoc([(i + start_index),schema_annotation.annotate.new_known_manual_instance.call(null,cljs.core.js__GT_clj.call(null,inst))]));

var G__3486 = (i__3478 + (1));
i__3478 = G__3486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3479),schema_annotation$io$parse_instances_$_iter__3476.call(null,cljs.core.chunk_rest.call(null,s__3477__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3479),null);
}
} else {
var vec__3483 = cljs.core.first.call(null,s__3477__$2);
var i = cljs.core.nth.call(null,vec__3483,(0),null);
var inst = cljs.core.nth.call(null,vec__3483,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([(i + start_index),schema_annotation.annotate.new_known_manual_instance.call(null,cljs.core.js__GT_clj.call(null,inst))]),schema_annotation$io$parse_instances_$_iter__3476.call(null,cljs.core.rest.call(null,s__3477__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,json_instances));
})());
});
schema_annotation.io.load_suggestions_BANG_ = (function schema_annotation$io$load_suggestions_BANG_(state,json_string){
var json = JSON.parse(json_string);
var groups = (json["groups"]);
var piece = (json["piece"]);
var schema = (json["schema"]);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"instances","instances",-335364781),schema_annotation.io.parse_groups.call(null,groups,(0)));
});
schema_annotation.io.parse_notes = (function schema_annotation$io$parse_notes(json_string){
var parse_frac = (function schema_annotation$io$parse_notes_$_parse_frac(obj){
return (parseInt((obj["n"])) / parseInt((obj["d"])));
});
var add_note = (function schema_annotation$io$parse_notes_$_add_note(note_map,note){
var id = (note["id"]);
var on = parse_frac.call(null,(note["on"]));
var off = parse_frac.call(null,(note["off"]));
var pitch = intervals.spelled.parse_spelled_p.call(null,(note["p"]));
if(cljs.core.contains_QMARK_.call(null,note_map,id)){
return cljs.core.update.call(null,note_map,id,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onset","onset",1812676224),on,new cljs.core.Keyword(null,"offset","offset",296498311),off], null));
} else {
return cljs.core.assoc.call(null,note_map,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onset","onset",1812676224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on], null),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [off], null),new cljs.core.Keyword(null,"pitch","pitch",1495126700),pitch], null));
}
});
var json = JSON.parse(json_string);
return cljs.core.reduce.call(null,add_note,cljs.core.PersistentArrayMap.EMPTY,json);
});
schema_annotation.io.load_notes_BANG_ = (function schema_annotation$io$load_notes_BANG_(state,json_string){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"notes","notes",-1039600523),schema_annotation.io.parse_notes.call(null,json_string));
});
schema_annotation.io.download_as_json_BANG_ = (function schema_annotation$io$download_as_json_BANG_(value,filename){
var blob = (new Blob([JSON.stringify(cljs.core.clj__GT_js.call(null,value))],({"type": "application/json"})));
var link = document.createElement("a");
var url = URL.createObjectURL(blob);
(link.href = url);

(link.download = filename);

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

return URL.revokeObjectURL(url);
});
schema_annotation.io.download_annotations_BANG_ = (function schema_annotation$io$download_annotations_BANG_(state){
var inst = new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(state);
var annots = cljs.core.vec.call(null,cljs.core.map.call(null,schema_annotation.annotate.get_stages,cljs.core.vals.call(null,inst)));
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(state);
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(state);
var out = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instances","instances",-335364781),annots,new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
return schema_annotation.io.download_as_json_BANG_.call(null,out,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema),".json"].join(''));
});

//# sourceMappingURL=io.js.map
