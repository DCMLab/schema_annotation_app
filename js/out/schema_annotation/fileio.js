// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.fileio');
goog.require('cljs.core');
goog.require('schema_annotation.io');
goog.require('schema_annotation.helpers');
goog.require('reagent.core');
schema_annotation.fileio.file_io_comp = (function schema_annotation$fileio$file_io_comp(score,state){
var node_score = cljs.core.atom.call(null,null);
var node_suggest = cljs.core.atom.call(null,null);
var node_notes = cljs.core.atom.call(null,null);
var fn_score = reagent.core.atom.call(null,null);
var fn_suggest = reagent.core.atom.call(null,null);
var fn_notes = reagent.core.atom.call(null,null);
var visible = reagent.core.atom.call(null,true);
return (function (score__$1,state__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,visible))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g","div.pure-g",1950568742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.pure-u-1","h2.pure-u-1",2026904627),"Input / Output"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-button-group.pure-u-1.pure-u-md-4-5","div.pure-button-group.pure-u-1.pure-u-md-4-5",-1609388743),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-button.pure-u-1.pure-u-sm-1-4","label.pure-button.pure-u-1.pure-u-sm-1-4",1447799440),(function (){var or__5045__auto__ = cljs.core.deref.call(null,fn_score);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "Select Score";
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".xml,.musicxml",new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__3489_SHARP_){
return cljs.core.reset_BANG_.call(null,node_score,p1__3489_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3490_SHARP_){
return cljs.core.reset_BANG_.call(null,fn_score,schema_annotation.helpers.get_filename.call(null,p1__3490_SHARP_.target));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-button.pure-u-1.pure-u-sm-1-4","label.pure-button.pure-u-1.pure-u-sm-1-4",1447799440),(function (){var or__5045__auto__ = cljs.core.deref.call(null,fn_suggest);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "Select Suggestions";
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".json",new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__3491_SHARP_){
return cljs.core.reset_BANG_.call(null,node_suggest,p1__3491_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3492_SHARP_){
return cljs.core.reset_BANG_.call(null,fn_suggest,schema_annotation.helpers.get_filename.call(null,p1__3492_SHARP_.target));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-button.pure-u-1.pure-u-sm-1-4","label.pure-button.pure-u-1.pure-u-sm-1-4",1447799440),(function (){var or__5045__auto__ = cljs.core.deref.call(null,fn_notes);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "Select Note File";
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".json",new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__3493_SHARP_){
return cljs.core.reset_BANG_.call(null,node_notes,p1__3493_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3494_SHARP_){
return cljs.core.reset_BANG_.call(null,fn_notes,schema_annotation.helpers.get_filename.call(null,p1__3494_SHARP_.target));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-primary.pure-u-1.pure-u-sm-1-4","a.pure-button.button-primary.pure-u-1.pure-u-sm-1-4",2108868975),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
schema_annotation.helpers.load_from_file_BANG_.call(null,score__$1,schema_annotation.helpers.get_file.call(null,cljs.core.deref.call(null,node_score)));

return schema_annotation.helpers.load_from_file_BANG_.call(null,state__$1,schema_annotation.helpers.get_file.call(null,cljs.core.deref.call(null,node_notes)),schema_annotation.io.load_notes_BANG_);
})], null),"Load Files"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1.pure-u-md-1-5","a.pure-button.pure-u-1.pure-u-md-1-5",-1045443713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return schema_annotation.io.download_annotations_BANG_.call(null,cljs.core.deref.call(null,state__$1));
})], null),"Download Annotations"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hide-show","a.hide-show",539582916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),schema_annotation.helpers.make_js_link.call(null,(function (){
return cljs.core.swap_BANG_.call(null,visible,cljs.core.not);
}))], null),(cljs.core.truth_(cljs.core.deref.call(null,visible))?"Hide IO":"Show IO")], null)], null);
});
});

//# sourceMappingURL=fileio.js.map
