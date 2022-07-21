// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.github');
goog.require('cljs.core');
goog.require('schema_annotation.helpers');
goog.require('schema_annotation.io');
goog.require('reagent.core');
goog.require('ajax.core');
schema_annotation.github.gh_data_url = (function schema_annotation$github$gh_data_url(var_args){
var args__5775__auto__ = [];
var len__5769__auto___3501 = arguments.length;
var i__5770__auto___3502 = (0);
while(true){
if((i__5770__auto___3502 < len__5769__auto___3501)){
args__5775__auto__.push((arguments[i__5770__auto___3502]));

var G__3503 = (i__5770__auto___3502 + (1));
i__5770__auto___3502 = G__3503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return schema_annotation.github.gh_data_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(schema_annotation.github.gh_data_url.cljs$core$IFn$_invoke$arity$variadic = (function (p__3499,path){
var map__3500 = p__3499;
var map__3500__$1 = cljs.core.__destructure_map.call(null,map__3500);
var user = cljs.core.get.call(null,map__3500__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var repo = cljs.core.get.call(null,map__3500__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var branch = cljs.core.get.call(null,map__3500__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
return ["https://api.github.com/repos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"/contents/data/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,path)),"?ref=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(branch)].join('');
}));

(schema_annotation.github.gh_data_url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema_annotation.github.gh_data_url.cljs$lang$applyTo = (function (seq3497){
var G__3498 = cljs.core.first.call(null,seq3497);
var seq3497__$1 = cljs.core.next.call(null,seq3497);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3498,seq3497__$1);
}));

schema_annotation.github.api_headers = (function schema_annotation$github$api_headers(token){
return new cljs.core.PersistentArrayMap(null, 2, ["Authorization",["token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),"Accept","application/vnd.github.v3.raw"], null);
});
schema_annotation.github.corpora_index = (function schema_annotation$github$corpora_index(json){
var res = cljs.core.mapv.call(null,(function (p1__3504_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__3504_SHARP_);
}),cljs.core.filter.call(null,(function (p1__3505_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__3505_SHARP_),"dir");
}),json));
return res;
});
schema_annotation.github.gql_query = (function schema_annotation$github$gql_query(p__3506){
var map__3507 = p__3506;
var map__3507__$1 = cljs.core.__destructure_map.call(null,map__3507);
var user = cljs.core.get.call(null,map__3507__$1,new cljs.core.Keyword(null,"user","user",1532431356));
var repo = cljs.core.get.call(null,map__3507__$1,new cljs.core.Keyword(null,"repo","repo",-1999060679));
var branch = cljs.core.get.call(null,map__3507__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
return ["{\n  repository(name: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(repo),"\", owner: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),"\") {\n    object(expression: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(branch),":data/\") {\n      ... on Tree {\n        entries {\n          name\n          type\n          object {\n            ... on Tree {\n              entries {\n                name\n                object {\n                  ... on Tree {\n                    entries {\n                      name\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"].join('');
});
schema_annotation.github.parse_gh_data = (function schema_annotation$github$parse_gh_data(result){
var entries = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repository","repository",1489835364).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(result))));
var corpora = cljs.core.filter.call(null,(function (p1__3508_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__3508_SHARP_),"tree");
}),entries);
var corpora_names = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"name","name",1843675177),corpora);
var pieces = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function schema_annotation$github$parse_gh_data_$_iter__3512(s__3513){
return (new cljs.core.LazySeq(null,(function (){
var s__3513__$1 = s__3513;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3513__$1);
if(temp__5804__auto__){
var s__3513__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3513__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3513__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3515 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3514 = (0);
while(true){
if((i__3514 < size__5522__auto__)){
var crp = cljs.core._nth.call(null,c__5521__auto__,i__3514);
cljs.core.chunk_append.call(null,b__3515,(function (){var crp_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(crp);
var subdirs = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(crp));
var xmldir = cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__3514,crp_name,subdirs,crp,c__5521__auto__,size__5522__auto__,b__3515,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names){
return (function (p1__3509_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__3509_SHARP_),"musicxml");
});})(i__3514,crp_name,subdirs,crp,c__5521__auto__,size__5522__auto__,b__3515,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names))
,subdirs));
var names = cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(xmldir)));
var pieces = cljs.core.mapv.call(null,((function (i__3514,crp_name,subdirs,xmldir,names,crp,c__5521__auto__,size__5522__auto__,b__3515,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names){
return (function (p1__3510_SHARP_){
return cljs.core.subs.call(null,p1__3510_SHARP_,(0),(cljs.core.count.call(null,p1__3510_SHARP_) - (4)));
});})(i__3514,crp_name,subdirs,xmldir,names,crp,c__5521__auto__,size__5522__auto__,b__3515,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names))
,names);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crp_name,pieces], null);
})());

var G__3520 = (i__3514 + (1));
i__3514 = G__3520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3515),schema_annotation$github$parse_gh_data_$_iter__3512.call(null,cljs.core.chunk_rest.call(null,s__3513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3515),null);
}
} else {
var crp = cljs.core.first.call(null,s__3513__$2);
return cljs.core.cons.call(null,(function (){var crp_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(crp);
var subdirs = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(crp));
var xmldir = cljs.core.first.call(null,cljs.core.filter.call(null,((function (crp_name,subdirs,crp,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names){
return (function (p1__3509_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__3509_SHARP_),"musicxml");
});})(crp_name,subdirs,crp,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names))
,subdirs));
var names = cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(xmldir)));
var pieces = cljs.core.mapv.call(null,((function (crp_name,subdirs,xmldir,names,crp,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names){
return (function (p1__3510_SHARP_){
return cljs.core.subs.call(null,p1__3510_SHARP_,(0),(cljs.core.count.call(null,p1__3510_SHARP_) - (4)));
});})(crp_name,subdirs,xmldir,names,crp,s__3513__$2,temp__5804__auto__,entries,corpora,corpora_names))
,names);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crp_name,pieces], null);
})(),schema_annotation$github$parse_gh_data_$_iter__3512.call(null,cljs.core.rest.call(null,s__3513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,corpora);
})());
var suggestions = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function schema_annotation$github$parse_gh_data_$_iter__3516(s__3517){
return (new cljs.core.LazySeq(null,(function (){
var s__3517__$1 = s__3517;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3517__$1);
if(temp__5804__auto__){
var s__3517__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3517__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3517__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3519 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3518 = (0);
while(true){
if((i__3518 < size__5522__auto__)){
var crp = cljs.core._nth.call(null,c__5521__auto__,i__3518);
cljs.core.chunk_append.call(null,b__3519,(function (){var crp_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(crp);
var subdirs = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(crp));
var groupdir = cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__3518,crp_name,subdirs,crp,c__5521__auto__,size__5522__auto__,b__3519,s__3517__$2,temp__5804__auto__,entries,corpora,corpora_names,pieces){
return (function (p1__3511_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__3511_SHARP_),"groups");
});})(i__3518,crp_name,subdirs,crp,c__5521__auto__,size__5522__auto__,b__3519,s__3517__$2,temp__5804__auto__,entries,corpora,corpora_names,pieces))
,subdirs));
var suggs = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(groupdir)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crp_name,suggs], null);
})());

var G__3521 = (i__3518 + (1));
i__3518 = G__3521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3519),schema_annotation$github$parse_gh_data_$_iter__3516.call(null,cljs.core.chunk_rest.call(null,s__3517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3519),null);
}
} else {
var crp = cljs.core.first.call(null,s__3517__$2);
return cljs.core.cons.call(null,(function (){var crp_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(crp);
var subdirs = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(crp));
var groupdir = cljs.core.first.call(null,cljs.core.filter.call(null,((function (crp_name,subdirs,crp,s__3517__$2,temp__5804__auto__,entries,corpora,corpora_names,pieces){
return (function (p1__3511_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__3511_SHARP_),"groups");
});})(crp_name,subdirs,crp,s__3517__$2,temp__5804__auto__,entries,corpora,corpora_names,pieces))
,subdirs));
var suggs = cljs.core.mapv.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(groupdir)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crp_name,suggs], null);
})(),schema_annotation$github$parse_gh_data_$_iter__3516.call(null,cljs.core.rest.call(null,s__3517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,corpora);
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [corpora_names,pieces,suggestions], null);
});
schema_annotation.github.fetch_gh_data_BANG_ = (function schema_annotation$github$fetch_gh_data_BANG_(state,repo,token,gh_corpus,gh_piece,gh_schema){
ajax.core.GET.call(null,schema_annotation.github.gh_data_url.call(null,repo,"lexicon.json"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"lexicon","lexicon",52593497),result);

return cljs.core.reset_BANG_.call(null,gh_schema,cljs.core.first.call(null,result));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),schema_annotation.github.api_headers.call(null,token),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),false], null));

ajax.core.POST.call(null,"https://api.github.com/graphql",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){
var vec__3522 = schema_annotation.github.parse_gh_data.call(null,result);
var corpora = cljs.core.nth.call(null,vec__3522,(0),null);
var pieces = cljs.core.nth.call(null,vec__3522,(1),null);
var suggested = cljs.core.nth.call(null,vec__3522,(2),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"corpora","corpora",-1467133301),corpora,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),pieces,new cljs.core.Keyword(null,"suggested","suggested",-1700058078),suggested);

cljs.core.reset_BANG_.call(null,gh_corpus,cljs.core.first.call(null,corpora));

return cljs.core.reset_BANG_.call(null,gh_piece,cljs.core.first.call(null,cljs.core.get.call(null,pieces,cljs.core.deref.call(null,gh_corpus))));
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),schema_annotation.github.gql_query.call(null,repo)], null)], null));

return null;
});
schema_annotation.github.load_piece_BANG_ = (function schema_annotation$github$load_piece_BANG_(state,repo,token,corpus,piece){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"corpus","corpus",-2028151250),corpus,new cljs.core.Keyword(null,"piece","piece",1396691784),piece,new cljs.core.Keyword(null,"notes","notes",-1039600523),null,new cljs.core.Keyword(null,"score-xml","score-xml",1762238119),null,new cljs.core.Keyword(null,"instances","instances",-335364781),null,new cljs.core.Keyword(null,"loading","loading",-737050189),true);

ajax.core.GET.call(null,schema_annotation.github.gh_data_url.call(null,repo,corpus,"/musicxml/",piece,".xml"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__3525_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"score-xml","score-xml",1762238119),p1__3525_SHARP_);
}),new cljs.core.Keyword(null,"headers","headers",-835030129),schema_annotation.github.api_headers.call(null,token)], null));

return ajax.core.GET.call(null,schema_annotation.github.gh_data_url.call(null,repo,corpus,"/notelist/",piece,".json"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__3526_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"notes","notes",-1039600523),schema_annotation.io.parse_notes.call(null,p1__3526_SHARP_));
}),new cljs.core.Keyword(null,"headers","headers",-835030129),schema_annotation.github.api_headers.call(null,token)], null));
});
schema_annotation.github.load_suggestions_BANG_ = (function schema_annotation$github$load_suggestions_BANG_(state,repo,token,replace){
var st = cljs.core.deref.call(null,state);
var corpus = new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1(st);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(st);
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(st);
return ajax.core.GET.call(null,schema_annotation.github.gh_data_url.call(null,repo,corpus,"/groups/",schema,"/",piece,"_",schema,".json"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){
return cljs.core.swap_BANG_.call(null,state,(function (st__$1){
var max_old = cljs.core.reduce.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(st__$1)));
var offset = (cljs.core.truth_((function (){var and__5043__auto__ = max_old;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,replace);
} else {
return and__5043__auto__;
}
})())?(max_old + (1)):(0));
var new_instances = schema_annotation.io.parse_groups.call(null,cljs.core.get.call(null,result,new cljs.core.Keyword(null,"groups","groups",-136896102)),offset);
if(cljs.core.truth_(replace)){
return cljs.core.assoc.call(null,st__$1,new cljs.core.Keyword(null,"instances","instances",-335364781),new_instances);
} else {
return cljs.core.update.call(null,st__$1,new cljs.core.Keyword(null,"instances","instances",-335364781),cljs.core.concat,new_instances);
}
}));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__3527){
var map__3528 = p__3527;
var map__3528__$1 = cljs.core.__destructure_map.call(null,map__3528);
var status = cljs.core.get.call(null,map__3528__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3528__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var msg = ["Couldn't load suggestions for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema),")."].join('');
console.log(msg);

return alert(msg);
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),schema_annotation.github.api_headers.call(null,token),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
schema_annotation.github.load_annotations_BANG_ = (function schema_annotation$github$load_annotations_BANG_(state,repo,token,replace){
var st = cljs.core.deref.call(null,state);
var corpus = new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1(st);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(st);
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(st);
return ajax.core.GET.call(null,schema_annotation.github.gh_data_url.call(null,repo,corpus,"/annotations/",schema,"/",piece,"_",schema,".json"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){
return cljs.core.swap_BANG_.call(null,state,(function (st__$1){
var max_old = cljs.core.reduce.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"instances","instances",-335364781).cljs$core$IFn$_invoke$arity$1(st__$1)));
var offset = (cljs.core.truth_((function (){var and__5043__auto__ = max_old;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,replace);
} else {
return and__5043__auto__;
}
})())?(max_old + (1)):(0));
var new_instances = schema_annotation.io.parse_instances.call(null,cljs.core.get.call(null,result,new cljs.core.Keyword(null,"instances","instances",-335364781)),offset);
if(cljs.core.truth_(replace)){
return cljs.core.assoc.call(null,st__$1,new cljs.core.Keyword(null,"instances","instances",-335364781),new_instances);
} else {
return cljs.core.update.call(null,st__$1,new cljs.core.Keyword(null,"instances","instances",-335364781),cljs.core.concat,new_instances);
}
}));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__3529){
var map__3530 = p__3529;
var map__3530__$1 = cljs.core.__destructure_map.call(null,map__3530);
var status = cljs.core.get.call(null,map__3530__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__3530__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var msg = ["Couldn't load annotations for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(schema),")."].join('');
console.log(msg);

return alert(msg);
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"headers","headers",-835030129),schema_annotation.github.api_headers.call(null,token),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});
schema_annotation.github.set_schema_BANG_ = (function schema_annotation$github$set_schema_BANG_(state,schema){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema);
});
schema_annotation.github.github_io_comp = (function schema_annotation$github$github_io_comp(state){
var st = cljs.core.deref.call(null,state);
var visible = reagent.core.atom.call(null,true);
var gh_token = reagent.core.atom.call(null,null);
var gh_repo = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),"DCMLab",new cljs.core.Keyword(null,"repo","repo",-1999060679),"schema_annotation_data",new cljs.core.Keyword(null,"branch","branch",-74633925),"master"], null));
var corpus = reagent.core.atom.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"corpora","corpora",-1467133301).cljs$core$IFn$_invoke$arity$1(st)));
var piece = reagent.core.atom.call(null,null);
var schema = reagent.core.atom.call(null,null);
var load_open = reagent.core.atom.call(null,null);
return (function (state__$1){
var st__$1 = cljs.core.deref.call(null,state__$1);
var corpora = new cljs.core.Keyword(null,"corpora","corpora",-1467133301).cljs$core$IFn$_invoke$arity$1(st__$1);
var s_pieces = new cljs.core.Keyword(null,"pieces","pieces",-1436634023).cljs$core$IFn$_invoke$arity$1(st__$1);
var crp = cljs.core.deref.call(null,corpus);
var pieces = cljs.core.get.call(null,s_pieces,crp);
var pc = cljs.core.deref.call(null,piece);
var schemas = cljs.core.sort.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"lexicon","lexicon",52593497).cljs$core$IFn$_invoke$arity$1(st__$1)));
var scm = cljs.core.deref.call(null,schema);
if(cljs.core.truth_(crp)){
} else {
cljs.core.reset_BANG_.call(null,corpus,cljs.core.first.call(null,corpora));
}

if(cljs.core.truth_(pc)){
} else {
cljs.core.reset_BANG_.call(null,piece,cljs.core.first.call(null,pieces));
}

if(((cljs.core.not.call(null,scm)) || (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([scm]),schemas))))){
cljs.core.reset_BANG_.call(null,schema,cljs.core.first.call(null,schemas));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gh-input","div.gh-input",931680179),(cljs.core.truth_(cljs.core.deref.call(null,visible))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Input / Output"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.pure-form.pure-g","form.pure-form.pure-g",-949187178),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return false;
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.pure-u-1","fieldset.pure-u-1",-704662803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Source Repository"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1-4","label.pure-u-1-4",-303199558),"Owner",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-23-24","input.pure-u-23-24",96503048),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"user or organization",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh_repo)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3531_SHARP_){
return cljs.core.swap_BANG_.call(null,gh_repo,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),p1__3531_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1-4","label.pure-u-1-4",-303199558),"Repository Name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-23-24","input.pure-u-23-24",96503048),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"repo",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh_repo)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3532_SHARP_){
return cljs.core.swap_BANG_.call(null,gh_repo,cljs.core.assoc,new cljs.core.Keyword(null,"repo","repo",-1999060679),p1__3532_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1-4","label.pure-u-1-4",-303199558),"Branch",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-23-24","input.pure-u-23-24",96503048),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"branch",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"branch","branch",-74633925).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh_repo)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3533_SHARP_){
return cljs.core.swap_BANG_.call(null,gh_repo,cljs.core.assoc,new cljs.core.Keyword(null,"branch","branch",-74633925),p1__3533_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1-4","label.pure-u-1-4",-303199558),"GitHub ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Access Token"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.pure-u-1","input.pure-u-1",-1194417277),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ghp_...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,gh_token),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
return cljs.core.reset_BANG_.call(null,gh_token,ev.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button","a.pure-button",2112940889),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return schema_annotation.github.fetch_gh_data_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),corpus,piece,schema);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,gh_token))], null),"Set Repo"], null)], null),(cljs.core.truth_(corpora)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.pure-u-1","fieldset.pure-u-1",-704662803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Corpus and Piece"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),"Corpus",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.pure-u-1.pure-u-md-23-24","select.pure-u-1.pure-u-md-23-24",-257778876),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = crp;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3534_SHARP_){
var key = p1__3534_SHARP_.target.value;
return cljs.core.reset_BANG_.call(null,corpus,key);
})], null),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$github$github_io_comp_$_iter__3537(s__3538){
return (new cljs.core.LazySeq(null,(function (){
var s__3538__$1 = s__3538;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3538__$1);
if(temp__5804__auto__){
var s__3538__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3538__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3538__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3540 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3539 = (0);
while(true){
if((i__3539 < size__5522__auto__)){
var c = cljs.core._nth.call(null,c__5521__auto__,i__3539);
cljs.core.chunk_append.call(null,b__3540,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"value","value",305978217),c], null),c], null));

var G__3549 = (i__3539 + (1));
i__3539 = G__3549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3540),schema_annotation$github$github_io_comp_$_iter__3537.call(null,cljs.core.chunk_rest.call(null,s__3538__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3540),null);
}
} else {
var c = cljs.core.first.call(null,s__3538__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),c,new cljs.core.Keyword(null,"value","value",305978217),c], null),c], null),schema_annotation$github$github_io_comp_$_iter__3537.call(null,cljs.core.rest.call(null,s__3538__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,corpora);
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),"Piece",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.pure-u-1.pure-u-md-23-24","select.pure-u-1.pure-u-md-23-24",-257778876),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = pc;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3535_SHARP_){
return cljs.core.reset_BANG_.call(null,piece,p1__3535_SHARP_.target.value);
})], null),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$github$github_io_comp_$_iter__3541(s__3542){
return (new cljs.core.LazySeq(null,(function (){
var s__3542__$1 = s__3542;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3542__$1);
if(temp__5804__auto__){
var s__3542__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3542__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3542__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3544 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3543 = (0);
while(true){
if((i__3543 < size__5522__auto__)){
var p = cljs.core._nth.call(null,c__5521__auto__,i__3543);
cljs.core.chunk_append.call(null,b__3544,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),p,new cljs.core.Keyword(null,"value","value",305978217),p], null),p], null));

var G__3550 = (i__3543 + (1));
i__3543 = G__3550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3544),schema_annotation$github$github_io_comp_$_iter__3541.call(null,cljs.core.chunk_rest.call(null,s__3542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3544),null);
}
} else {
var p = cljs.core.first.call(null,s__3542__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),p,new cljs.core.Keyword(null,"value","value",305978217),p], null),p], null),schema_annotation$github$github_io_comp_$_iter__3541.call(null,cljs.core.rest.call(null,s__3542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,pieces);
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-primary","a.pure-button.button-primary",1483301973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return schema_annotation.github.load_piece_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),crp,pc);
})], null),"Load Piece"], null)], null)], null):null),(cljs.core.truth_(cljs.core.not_empty.call(null,schemas))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.pure-u-1","fieldset.pure-u-1",-704662803),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Schema Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.pure-u-1.pure-u-md-23-24","select.pure-u-1.pure-u-md-23-24",-257778876),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = scm;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__3536_SHARP_){
return cljs.core.reset_BANG_.call(null,schema,p1__3536_SHARP_.target.value);
})], null),cljs.core.doall.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$github$github_io_comp_$_iter__3545(s__3546){
return (new cljs.core.LazySeq(null,(function (){
var s__3546__$1 = s__3546;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3546__$1);
if(temp__5804__auto__){
var s__3546__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3546__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__3546__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__3548 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__3547 = (0);
while(true){
if((i__3547 < size__5522__auto__)){
var s = cljs.core._nth.call(null,c__5521__auto__,i__3547);
cljs.core.chunk_append.call(null,b__3548,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"value","value",305978217),s], null),s], null));

var G__3551 = (i__3547 + (1));
i__3547 = G__3551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3548),schema_annotation$github$github_io_comp_$_iter__3545.call(null,cljs.core.chunk_rest.call(null,s__3546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3548),null);
}
} else {
var s = cljs.core.first.call(null,s__3546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"value","value",305978217),s], null),s], null),schema_annotation$github$github_io_comp_$_iter__3545.call(null,cljs.core.rest.call(null,s__3546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,schemas);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-primary","a.pure-button.button-primary",1483301973),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,state__$1,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,schema));
})], null),"Set Schema"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.pure-u-1.pure-u-md-1-4","label.pure-u-1.pure-u-md-1-4",202570374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-text","div.form-text",-2040142595),"Current Schema: ",new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(st__$1)], null)], null)], null):null),(cljs.core.truth_((function (){var and__5043__auto__ = pc;
if(cljs.core.truth_(and__5043__auto__)){
return scm;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1","div.pure-u-1",1705259099),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Existing Instances"], null),(function (){var c = new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1(st__$1);
var s = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(st__$1);
var p = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(st__$1);
var in$ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([s]),cljs.core.get_in.call(null,st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggested","suggested",-1700058078),c], null)));
var disabled = cljs.core.not.call(null,(function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = c;
if(cljs.core.truth_(and__5043__auto____$1)){
var and__5043__auto____$2 = s;
if(cljs.core.truth_(and__5043__auto____$2)){
return in$;
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})());
var open = cljs.core._EQ_.call(null,cljs.core.deref.call(null,load_open),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-1-4","div.pure-u-1.pure-u-md-1-4",-307811921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-u-1.pure-u-md-23-24.pure-button.button-primary","a.pure-u-1.pure-u-md-23-24.pure-button.button-primary",-1109388897),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"class","class",-2030961996),((open)?"pure-button-active":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,load_open,(function (lo){
if(open){
return null;
} else {
return new cljs.core.Keyword(null,"suggestions","suggestions",-859472618);
}
}));
})], null),"Load Suggestions"], null),(((((!(disabled))) && (open)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-23-24.pure-group","div.pure-u-1.pure-u-md-23-24.pure-group",-430045190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
schema_annotation.github.load_suggestions_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),true);

return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Replace Other Instances"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
schema_annotation.github.load_suggestions_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),false);

return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Add To Instances"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Cancel"], null)], null):null)], null);
})(),(function (){var c = new cljs.core.Keyword(null,"corpus","corpus",-2028151250).cljs$core$IFn$_invoke$arity$1(st__$1);
var s = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(st__$1);
var p = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(st__$1);
var in$ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.get_in.call(null,st__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"annotated","annotated",607467861),c,s], null)));
var disabled = cljs.core.not.call(null,(function (){var and__5043__auto__ = p;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = c;
if(cljs.core.truth_(and__5043__auto____$1)){
return s;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})());
var open = cljs.core._EQ_.call(null,cljs.core.deref.call(null,load_open),new cljs.core.Keyword(null,"annot-gh","annot-gh",-534256399));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-1-4","div.pure-u-1.pure-u-md-1-4",-307811921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-u-1.pure-u-md-23-24.pure-button.button-primary","a.pure-u-1.pure-u-md-23-24.pure-button.button-primary",-1109388897),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"class","class",-2030961996),((open)?"pure-button-active":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,load_open,(function (lo){
if(open){
return null;
} else {
return new cljs.core.Keyword(null,"annot-gh","annot-gh",-534256399);
}
}));
})], null),"Load Annotations (GitHub)"], null),(((((!(disabled))) && (open)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-u-1.pure-u-md-23-24.pure-group","div.pure-u-1.pure-u-md-23-24.pure-group",-430045190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
schema_annotation.github.load_annotations_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),true);

return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Replace Other Instances"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
schema_annotation.github.load_annotations_BANG_.call(null,state__$1,cljs.core.deref.call(null,gh_repo),cljs.core.deref.call(null,gh_token),false);

return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Add To Instances"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.pure-u-1","a.pure-button.pure-u-1",1219774458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,load_open,null);
})], null),"Cancel"], null)], null):null)], null);
})()], null):null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hide-show","a.hide-show",539582916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),schema_annotation.helpers.make_js_link.call(null,(function (){
return cljs.core.swap_BANG_.call(null,visible,cljs.core.not);
}))], null),(cljs.core.truth_(cljs.core.deref.call(null,visible))?"Hide file selection":"Show file selection")], null)], null);
});
});

//# sourceMappingURL=github.js.map
