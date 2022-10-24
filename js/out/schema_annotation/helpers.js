// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.helpers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('intervals.core');
goog.require('intervals.spelled');
schema_annotation.helpers.xml_test = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE score-partwise PUBLIC\n    \"-//Recordare//DTD MusicXML 3.1 Partwise//EN\"\n    \"http://www.musicxml.org/dtds/partwise.dtd\">\n<score-partwise version=\"3.1\">\n  <part-list>\n    <score-part id=\"P1\">\n      <part-name>Music</part-name>\n    </score-part>\n  </part-list>\n  <part id=\"P1\">\n    <measure number=\"1\">\n      <attributes>\n        <divisions>1</divisions>\n        <key>\n          <fifths>0</fifths>\n        </key>\n        <time>\n          <beats>4</beats>\n          <beat-type>4</beat-type>\n        </time>\n        <clef>\n          <sign>G</sign>\n          <line>2</line>\n        </clef>\n      </attributes>\n      <note>\n        <pitch>\n          <step>C</step>\n          <octave>4</octave>\n        </pitch>\n        <duration>4</duration>\n        <type>whole</type>\n      </note>\n    </measure>\n  </part>\n</score-partwise>";
/**
 * Creates an event handler for <a> elements that prevents the href from being followed.
 */
schema_annotation.helpers.make_js_link = (function schema_annotation$helpers$make_js_link(f){
return (function (e){
e.preventDefault();

f.call(null);

return false;
});
});
schema_annotation.helpers.get_file = (function schema_annotation$helpers$get_file(file_input){
return (file_input.files[(0)]);
});
schema_annotation.helpers.get_filename = (function schema_annotation$helpers$get_filename(file_input){
if(cljs.core.truth_(file_input)){
var res = cljs.core.last.call(null,clojure.string.split.call(null,file_input.value,/(\\|\/)/));
return res;
} else {
return null;
}
});
schema_annotation.helpers.load_from_file_BANG_ = (function schema_annotation$helpers$load_from_file_BANG_(var_args){
var G__1024 = arguments.length;
switch (G__1024) {
case 2:
return schema_annotation.helpers.load_from_file_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema_annotation.helpers.load_from_file_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schema_annotation.helpers.load_from_file_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,file){
return schema_annotation.helpers.load_from_file_BANG_.call(null,atom,file,(function (atm,fl){
return fl;
}));
}));

(schema_annotation.helpers.load_from_file_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom,file,f){
var reader = (new FileReader());
(reader.onload = (function (e){
return cljs.core.swap_BANG_.call(null,atom,f,e.target.result);
}));

return reader.readAsText(file);
}));

(schema_annotation.helpers.load_from_file_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Maps a function over a schema or schema instance.
 */
schema_annotation.helpers.map_schema = (function schema_annotation$helpers$map_schema(f,schema){
return cljs.core.vec.call(null,(function (){var iter__5523__auto__ = (function schema_annotation$helpers$map_schema_$_iter__1026(s__1027){
return (new cljs.core.LazySeq(null,(function (){
var s__1027__$1 = s__1027;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1027__$1);
if(temp__5804__auto__){
var s__1027__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1027__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1027__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1029 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1028 = (0);
while(true){
if((i__1028 < size__5522__auto__)){
var stage = cljs.core._nth.call(null,c__5521__auto__,i__1028);
cljs.core.chunk_append.call(null,b__1029,cljs.core.vec.call(null,(function (){var iter__5523__auto__ = ((function (i__1028,stage,c__5521__auto__,size__5522__auto__,b__1029,s__1027__$2,temp__5804__auto__){
return (function schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1030(s__1031){
return (new cljs.core.LazySeq(null,((function (i__1028,stage,c__5521__auto__,size__5522__auto__,b__1029,s__1027__$2,temp__5804__auto__){
return (function (){
var s__1031__$1 = s__1031;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__1031__$1);
if(temp__5804__auto____$1){
var s__1031__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1031__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__1031__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__1033 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__1032 = (0);
while(true){
if((i__1032 < size__5522__auto____$1)){
var note = cljs.core._nth.call(null,c__5521__auto____$1,i__1032);
cljs.core.chunk_append.call(null,b__1033,f.call(null,note));

var G__1038 = (i__1032 + (1));
i__1032 = G__1038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1033),schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1030.call(null,cljs.core.chunk_rest.call(null,s__1031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1033),null);
}
} else {
var note = cljs.core.first.call(null,s__1031__$2);
return cljs.core.cons.call(null,f.call(null,note),schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1030.call(null,cljs.core.rest.call(null,s__1031__$2)));
}
} else {
return null;
}
break;
}
});})(i__1028,stage,c__5521__auto__,size__5522__auto__,b__1029,s__1027__$2,temp__5804__auto__))
,null,null));
});})(i__1028,stage,c__5521__auto__,size__5522__auto__,b__1029,s__1027__$2,temp__5804__auto__))
;
return iter__5523__auto__.call(null,stage);
})()));

var G__1039 = (i__1028 + (1));
i__1028 = G__1039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1029),schema_annotation$helpers$map_schema_$_iter__1026.call(null,cljs.core.chunk_rest.call(null,s__1027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1029),null);
}
} else {
var stage = cljs.core.first.call(null,s__1027__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5523__auto__ = ((function (stage,s__1027__$2,temp__5804__auto__){
return (function schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1034(s__1035){
return (new cljs.core.LazySeq(null,(function (){
var s__1035__$1 = s__1035;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__1035__$1);
if(temp__5804__auto____$1){
var s__1035__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1035__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1035__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1037 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1036 = (0);
while(true){
if((i__1036 < size__5522__auto__)){
var note = cljs.core._nth.call(null,c__5521__auto__,i__1036);
cljs.core.chunk_append.call(null,b__1037,f.call(null,note));

var G__1040 = (i__1036 + (1));
i__1036 = G__1040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1037),schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1034.call(null,cljs.core.chunk_rest.call(null,s__1035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1037),null);
}
} else {
var note = cljs.core.first.call(null,s__1035__$2);
return cljs.core.cons.call(null,f.call(null,note),schema_annotation$helpers$map_schema_$_iter__1026_$_iter__1034.call(null,cljs.core.rest.call(null,s__1035__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(stage,s__1027__$2,temp__5804__auto__))
;
return iter__5523__auto__.call(null,stage);
})()),schema_annotation$helpers$map_schema_$_iter__1026.call(null,cljs.core.rest.call(null,s__1027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,schema);
})());
});
/**
 * Substitutes note IDs in `schema` by actual notes taken from `notes`.
 *   Sorts each stage by pitch.
 *   Returns `nil` if an ID cannot be found in `note`.
 */
schema_annotation.helpers.lookup_schema = (function schema_annotation$helpers$lookup_schema(schema,notes){
var mapped = schema_annotation.helpers.map_schema.call(null,(function (p1__1041_SHARP_){
return cljs.core.assoc.call(null,notes.call(null,p1__1041_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),p1__1041_SHARP_);
}),schema);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1042_SHARP_){
return cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"pitch","pitch",1495126700)),p1__1042_SHARP_);
}),mapped))){
return null;
} else {
return cljs.core.mapv.call(null,(function (p1__1043_SHARP_){
return cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700),p1__1043_SHARP_));
}),mapped);
}
});
/**
 * Replaces the notes in `schema` with their IDs.
 */
schema_annotation.helpers.schema_ids = (function schema_annotation$helpers$schema_ids(schema){
return schema_annotation.helpers.map_schema.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),schema);
});
/**
 * Converts `schema` from note to interval representation.
 */
schema_annotation.helpers.rel_schema = (function schema_annotation$helpers$rel_schema(schema){
var ref = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__1044_SHARP_){
return cljs.core.get_in.call(null,p1__1044_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"pitch","pitch",1495126700)], null));
}),schema)));
if(cljs.core.truth_(ref)){
return schema_annotation.helpers.map_schema.call(null,(function (p1__1045_SHARP_){
return intervals.core.ic.call(null,intervals.core.p_p.call(null,new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(p1__1045_SHARP_),ref));
}),schema);
} else {
return schema;
}
});
schema_annotation.helpers.mark_implicit = (function schema_annotation$helpers$mark_implicit(prev_stage,stage){
if(cljs.core.truth_(prev_stage)){
return cljs.core.mapv.call(null,(function (note,prev){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"int","int",-1741416922),note,new cljs.core.Keyword(null,"opt","opt",-794706369),cljs.core._EQ_.call(null,note,prev)], null);
}),stage,prev_stage);
} else {
return cljs.core.mapv.call(null,(function (note){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"int","int",-1741416922),note,new cljs.core.Keyword(null,"opt","opt",-794706369),false], null);
}),stage);
}
});
/**
 * Tries to match `instance` to `pattern`.
 *   Returns a list of stages which contains for each stage one of the following return values:
 *   `true`, if the stage matches;
 *   `:toofew`, if the stage has too few notes;
 *   `:toomany`, if the stage has too many notes;
 *   `:mismatch`, if the stage does not match the pattern.
 */
schema_annotation.helpers.match_schema = (function schema_annotation$helpers$match_schema(instance,pattern){
var pattern_imp = cljs.core.mapv.call(null,schema_annotation.helpers.mark_implicit,cljs.core.cons.call(null,null,pattern),pattern);
var find_issues = (function schema_annotation$helpers$match_schema_$_find_issues(inst_stage,pattern_stage){
var nexti = cljs.core.first.call(null,inst_stage);
var nextp = cljs.core.first.call(null,pattern_stage);
var resti = cljs.core.rest.call(null,inst_stage);
var restp = cljs.core.rest.call(null,pattern_stage);
if((((nexti == null)) && ((nextp == null)))){
return true;
} else {
if((((!((nexti == null)))) && ((nextp == null)))){
return new cljs.core.Keyword(null,"toomany","toomany",533996214);
} else {
if((!((nextp == null)))){
var direct_matching = ((cljs.core._EQ_.call(null,nexti,new cljs.core.Keyword(null,"int","int",-1741416922).cljs$core$IFn$_invoke$arity$1(nextp)))?schema_annotation$helpers$match_schema_$_find_issues.call(null,resti,restp):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(nextp))){
if(direct_matching === true){
return true;
} else {
return schema_annotation$helpers$match_schema_$_find_issues.call(null,inst_stage,restp);
}
} else {
var or__5045__auto__ = direct_matching;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if((nexti == null)){
return new cljs.core.Keyword(null,"toofew","toofew",2039159132);
} else {
return new cljs.core.Keyword(null,"mismatch","mismatch",103313617);
}
}
}
} else {
return null;
}
}
}
});
return cljs.core.map.call(null,(function (inst_stage,pattern_stage){
if(cljs.core.empty_QMARK_.call(null,inst_stage)){
return new cljs.core.Keyword(null,"toofew","toofew",2039159132);
} else {
return find_issues.call(null,inst_stage,pattern_stage);
}
}),instance,pattern_imp);
});
/**
 * Returns a string describing the results of matching a schema to a pattern per stage.
 */
schema_annotation.helpers.match_to_error_msg = (function schema_annotation$helpers$match_to_error_msg(stages){
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map_indexed.call(null,(function (i,err){
if(err === true){
return null;
} else {
return ["stage ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + (1)))," ",(function (){var G__1047 = err;
if(cljs.core._EQ_.call(null,true,G__1047)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toomany","toomany",533996214),G__1047)){
return "has too many notes";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"toofew","toofew",2039159132),G__1047)){
return "has too few notes";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mismatch","mismatch",103313617),G__1047)){
return "doesn't match";
} else {
return "has an unknown problem";

}
}
}
}
})()].join('');
}
}),stages));
});
/**
 * Returns true iff there exists a choice of onsets and offsets
 *   such that the stages of `schema` do not overlap.
 */
schema_annotation.helpers.stages_separate_QMARK_ = (function schema_annotation$helpers$stages_separate_QMARK_(schema){
var no_overlap_QMARK_ = (function schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK_(lower,stage_off,notes,stages){
if(cljs.core.empty_QMARK_.call(null,notes)){
if(cljs.core.empty_QMARK_.call(null,stages)){
return true;
} else {
return schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK_.call(null,stage_off,stage_off,cljs.core.first.call(null,stages),cljs.core.rest.call(null,stages));
}
} else {
var note = cljs.core.first.call(null,notes);
var rest_notes = cljs.core.rest.call(null,notes);
return cljs.core.some.call(null,cljs.core.true_QMARK_,(function (){var iter__5523__auto__ = (function schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK__$_iter__1059(s__1060){
return (new cljs.core.LazySeq(null,(function (){
var s__1060__$1 = s__1060;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1060__$1);
if(temp__5804__auto__){
var s__1060__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1060__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1060__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1062 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1061 = (0);
while(true){
if((i__1061 < size__5522__auto__)){
var vec__1063 = cljs.core._nth.call(null,c__5521__auto__,i__1061);
var on = cljs.core.nth.call(null,vec__1063,(0),null);
var off = cljs.core.nth.call(null,vec__1063,(1),null);
if((on >= lower)){
cljs.core.chunk_append.call(null,b__1062,schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK_.call(null,lower,(function (){var x__5130__auto__ = stage_off;
var y__5131__auto__ = off;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),rest_notes,stages));

var G__1069 = (i__1061 + (1));
i__1061 = G__1069;
continue;
} else {
var G__1070 = (i__1061 + (1));
i__1061 = G__1070;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1062),schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK__$_iter__1059.call(null,cljs.core.chunk_rest.call(null,s__1060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1062),null);
}
} else {
var vec__1066 = cljs.core.first.call(null,s__1060__$2);
var on = cljs.core.nth.call(null,vec__1066,(0),null);
var off = cljs.core.nth.call(null,vec__1066,(1),null);
if((on >= lower)){
return cljs.core.cons.call(null,schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK_.call(null,lower,(function (){var x__5130__auto__ = stage_off;
var y__5131__auto__ = off;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})(),rest_notes,stages),schema_annotation$helpers$stages_separate_QMARK__$_no_overlap_QMARK__$_iter__1059.call(null,cljs.core.rest.call(null,s__1060__$2)));
} else {
var G__1071 = cljs.core.rest.call(null,s__1060__$2);
s__1060__$1 = G__1071;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,new cljs.core.Keyword(null,"onset","onset",1812676224).cljs$core$IFn$_invoke$arity$1(note),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(note)));
})());
}
});
var lower0 = cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__1048_SHARP_){
return cljs.core.reduce.call(null,cljs.core.min,new cljs.core.Keyword(null,"onset","onset",1812676224).cljs$core$IFn$_invoke$arity$1(p1__1048_SHARP_));
}),cljs.core.first.call(null,schema)));
return no_overlap_QMARK_.call(null,lower0,lower0,null,schema);
});
/**
 * Checks if the stages in `schema` overlap
 *   according to the first onset-offset pair for each note.
 */
schema_annotation.helpers.potential_overlap_QMARK_ = (function schema_annotation$helpers$potential_overlap_QMARK_(schema){
var overlap_QMARK_ = (function schema_annotation$helpers$potential_overlap_QMARK__$_overlap_QMARK_(lower,stages){
if(cljs.core.empty_QMARK_.call(null,stages)){
return false;
} else {
var stage = cljs.core.first.call(null,stages);
var rest_stages = cljs.core.rest.call(null,stages);
var stage_on = cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__1072_SHARP_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"onset","onset",1812676224).cljs$core$IFn$_invoke$arity$1(p1__1072_SHARP_));
}),stage));
var stage_off = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__1073_SHARP_){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(p1__1073_SHARP_));
}),stage));
if((lower > stage_on)){
return true;
} else {
return schema_annotation$helpers$potential_overlap_QMARK__$_overlap_QMARK_.call(null,stage_off,rest_stages);
}
}
});
return overlap_QMARK_.call(null,null,schema);
});
/**
 * Normalizes `pattern` as relative to the first bass pitch.
 */
schema_annotation.helpers.normalize_pattern = (function schema_annotation$helpers$normalize_pattern(pattern){
var ref = cljs.core.get_in.call(null,pattern,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return schema_annotation.helpers.map_schema.call(null,(function (p1__1074_SHARP_){
return intervals.core.i_.call(null,p1__1074_SHARP_,ref);
}),pattern);
});
/**
 * Parses and normalizes `pattern` represented in interval notation.
 */
schema_annotation.helpers.parse_pattern = (function schema_annotation$helpers$parse_pattern(pattern){
return schema_annotation.helpers.normalize_pattern.call(null,schema_annotation.helpers.map_schema.call(null,intervals.spelled.parse_sic,pattern));
});
schema_annotation.helpers.test_schema = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n1","n2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["n3","n4"], null)], null);
schema_annotation.helpers.test_notes = (function (){var notes = new cljs.core.PersistentArrayMap(null, 4, ["n1",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),"G4",new cljs.core.Keyword(null,"onset","onset",1812676224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),"n2",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),"C#4",new cljs.core.Keyword(null,"onset","onset",1812676224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5], null),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),"n3",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),"D4",new cljs.core.Keyword(null,"onset","onset",1812676224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null),"n4",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pitch","pitch",1495126700),"F4",new cljs.core.Keyword(null,"onset","onset",1812676224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null)], null)], null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function schema_annotation$helpers$iter__1075(s__1076){
return (new cljs.core.LazySeq(null,(function (){
var s__1076__$1 = s__1076;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__1076__$1);
if(temp__5804__auto__){
var s__1076__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1076__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__1076__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__1078 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__1077 = (0);
while(true){
if((i__1077 < size__5522__auto__)){
var vec__1079 = cljs.core._nth.call(null,c__5521__auto__,i__1077);
var k = cljs.core.nth.call(null,vec__1079,(0),null);
var v = cljs.core.nth.call(null,vec__1079,(1),null);
cljs.core.chunk_append.call(null,b__1078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"pitch","pitch",1495126700),intervals.spelled.parse_spelled_p)], null));

var G__1085 = (i__1077 + (1));
i__1077 = G__1085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1078),schema_annotation$helpers$iter__1075.call(null,cljs.core.chunk_rest.call(null,s__1076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1078),null);
}
} else {
var vec__1082 = cljs.core.first.call(null,s__1076__$2);
var k = cljs.core.nth.call(null,vec__1082,(0),null);
var v = cljs.core.nth.call(null,vec__1082,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.update.call(null,v,new cljs.core.Keyword(null,"pitch","pitch",1495126700),intervals.spelled.parse_spelled_p)], null),schema_annotation$helpers$iter__1075.call(null,cljs.core.rest.call(null,s__1076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,notes);
})());
})();
/**
 * Converts a polygram of note ids into a string representation
 */
schema_annotation.helpers.poly_str = (function schema_annotation$helpers$poly_str(poly){
return clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__1086_SHARP_){
return clojure.string.join.call(null,",",p1__1086_SHARP_);
}),poly));
});
/**
 * Converts a string representation of a polygram as ids into a polygram
 */
schema_annotation.helpers.parse_poly = (function schema_annotation$helpers$parse_poly(polystr){
var poly = cljs.core.mapv.call(null,(function (p1__1087_SHARP_){
return cljs.core.mapv.call(null,clojure.string.trim,clojure.string.split.call(null,p1__1087_SHARP_,/,/));
}),clojure.string.split.call(null,polystr,/;/));
if(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,polystr))){
return null;
} else {
return poly;
}
});

//# sourceMappingURL=helpers.js.map
