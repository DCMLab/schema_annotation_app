// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('intervals.spelled');
goog.require('cljs.core');
goog.require('intervals.core');
goog.require('clojure.string');
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.diachrom !== 'undefined')){
} else {
intervals.spelled.diachrom = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(5),(7),(9),(11)], null);
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.dianames !== 'undefined')){
} else {
intervals.spelled.dianames = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","D","E","F","G","A","B"], null);
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.dianames_lookup !== 'undefined')){
} else {
intervals.spelled.dianames_lookup = cljs.core.zipmap.call(null,intervals.spelled.dianames,cljs.core.range.call(null));
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.diafifths !== 'undefined')){
} else {
intervals.spelled.diafifths = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(4),(-1),(1),(3),(5)], null);
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.perfectints !== 'undefined')){
} else {
intervals.spelled.perfectints = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(4),null,(3),null], null), null);
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.rg_sic !== 'undefined')){
} else {
intervals.spelled.rg_sic = /^(-?)(a+|d+|[MPm])([1-7])$/;
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.rg_spelled !== 'undefined')){
} else {
intervals.spelled.rg_spelled = /^(-?)(a+|d+|[MPm])([1-7])(\+|-)(\d+)$/;
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.rg_spc !== 'undefined')){
} else {
intervals.spelled.rg_spc = /^([a-g])(♭+|♯+|b+|#+)?$/i;
}
if((typeof intervals !== 'undefined') && (typeof intervals.spelled !== 'undefined') && (typeof intervals.spelled.rg_spelled_p !== 'undefined')){
} else {
intervals.spelled.rg_spelled_p = /^([a-g])(♭+|♯+|b+|#+)?(-?\d+)$/i;
}
intervals.spelled.dia__GT_chrom = (function intervals$spelled$dia__GT_chrom(d){
return (intervals.spelled.diachrom.call(null,cljs.core.mod.call(null,d,(7))) + ((12) * Math.floor((d / (7)))));
});
intervals.spelled.qualpf = (function intervals$spelled$qualpf(n,a,p,d){
if((n > (0))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,n,a));
} else {
if((n < (0))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,(- n),d));
} else {
return p;

}
}
});
intervals.spelled.qualimpf = (function intervals$spelled$qualimpf(n,a,mj,mn,d){
if((n > (0))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,n,a));
} else {
if((n < (-1))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,((-1) - n),d));
} else {
if(cljs.core._EQ_.call(null,n,(-1))){
return mn;
} else {
return mj;

}
}
}
});
intervals.spelled.accstr = (function intervals$spelled$accstr(n,s,f){
return intervals.spelled.qualpf.call(null,n,s,"",f);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {intervals.core.IPitchNotation}
 * @implements {intervals.core.IDiatonic}
 * @implements {intervals.core.IToMidi}
 * @implements {intervals.core.IInterval}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {intervals.core.IEmbed}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {intervals.core.IChromatic}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
 * @implements {intervals.spelled.Object}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
intervals.spelled.SInterval = (function (dia,chrom,__meta,__extmap,__hash){
this.dia = dia;
this.chrom = chrom;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 141312;
});
(intervals.spelled.SInterval.prototype.intervals$core$IChromatic$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IChromatic$chromatic_semitone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval((0),(1),null,null,null));
}));

(intervals.spelled.SInterval.prototype.toString = (function (){
var self__ = this;
var i = this;
if((new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i) < (0))){
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i.intervals$core$IInterval$iabs$arity$1(null))].join('');
} else {
var dmod = cljs.core.mod.call(null,self__.dia,(7));
var diff = (self__.chrom - intervals.spelled.dia__GT_chrom.call(null,self__.dia));
var qual = (cljs.core.truth_(intervals.spelled.perfectints.call(null,dmod))?intervals.spelled.qualpf.call(null,diff,"a","P","d"):intervals.spelled.qualimpf.call(null,diff,"a","M","m","d"));
var oct = Math.floor((self__.dia / (7)));
var octstr = (((oct >= (0)))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oct)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(oct));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(qual),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dmod + (1))),octstr].join('');
}
}));

(intervals.spelled.SInterval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intervals.spelled.SInterval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k982,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__986 = k982;
var G__986__$1 = (((G__986 instanceof cljs.core.Keyword))?G__986.fqn:null);
switch (G__986__$1) {
case "dia":
return self__.dia;

break;
case "chrom":
return self__.chrom;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k982,else__5346__auto__);

}
}));

(intervals.spelled.SInterval.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__987){
var vec__988 = p__987;
var k__5367__auto__ = cljs.core.nth.call(null,vec__988,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__988,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(intervals.spelled.SInterval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#intervals.spelled.SInterval{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dia","dia",-134509912),self__.dia],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chrom","chrom",2008036247),self__.chrom],null))], null),self__.__extmap));
}));

(intervals.spelled.SInterval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__981){
var self__ = this;
var G__981__$1 = this;
return (new cljs.core.RecordIter((0),G__981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dia","dia",-134509912),new cljs.core.Keyword(null,"chrom","chrom",2008036247)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(intervals.spelled.SInterval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intervals.spelled.SInterval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intervals.spelled.SInterval(self__.dia,self__.chrom,self__.__meta,self__.__extmap,self__.__hash));
}));

(intervals.spelled.SInterval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(intervals.spelled.SInterval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (1489094135 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intervals.spelled.SInterval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this983,other984){
var self__ = this;
var this983__$1 = this;
return (((!((other984 == null)))) && ((((this983__$1.constructor === other984.constructor)) && (((cljs.core._EQ_.call(null,this983__$1.dia,other984.dia)) && (((cljs.core._EQ_.call(null,this983__$1.chrom,other984.chrom)) && (cljs.core._EQ_.call(null,this983__$1.__extmap,other984.__extmap)))))))));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IPitchNotation$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IPitchNotation$notate_pitch$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var alter = (self__.chrom - intervals.spelled.dia__GT_chrom.call(null,self__.dia));
var oct = Math.floor((self__.dia / (7)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(intervals.spelled.dianames.call(null,cljs.core.mod.call(null,self__.dia,(7)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(intervals.spelled.accstr.call(null,alter,"\u266F","\u266D")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oct)].join('');
}));

(intervals.spelled.SInterval.prototype.intervals$core$IToMidi$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IToMidi$to_midi$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.chrom + (12));
}));

(intervals.spelled.SInterval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dia","dia",-134509912),null,new cljs.core.Keyword(null,"chrom","chrom",2008036247),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intervals.spelled.SInterval(self__.dia,self__.chrom,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$i_PLUS_$arity$2 = (function (_,i2){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval((self__.dia + new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i2)),(self__.chrom + new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(i2)),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$i_$arity$2 = (function (_,i2){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval((self__.dia - new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i2)),(self__.chrom - new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(i2)),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$i_$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return (new intervals.spelled.SInterval((- self__.dia),(- self__.chrom),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$i_STAR_$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval((self__.dia * n),(self__.chrom * n),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$iabs$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
if((i__$1.intervals$core$IInterval$direction$arity$1(null) < (0))){
return i__$1.intervals$core$IInterval$i_$arity$1(null);
} else {
return i__$1;
}
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$direction$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return cljs.core.compare.call(null,i__$1,i__$1.intervals$core$IInterval$zero$arity$1(null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$zero$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return (new intervals.spelled.SInterval((0),(0),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$octave$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval((7),(12),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$octave$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SInterval(((7) * n),((12) * n),null,null,null));
}));

(intervals.spelled.SInterval.prototype.intervals$core$IInterval$ic$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return intervals.spelled.make_sic.call(null,self__.dia,self__.chrom);
}));

(intervals.spelled.SInterval.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k982){
var self__ = this;
var this__5350__auto____$1 = this;
var G__991 = k982;
var G__991__$1 = (((G__991 instanceof cljs.core.Keyword))?G__991.fqn:null);
switch (G__991__$1) {
case "dia":
case "chrom":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k982);

}
}));

(intervals.spelled.SInterval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__981){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__992 = cljs.core.keyword_identical_QMARK_;
var expr__993 = k__5352__auto__;
if(cljs.core.truth_(pred__992.call(null,new cljs.core.Keyword(null,"dia","dia",-134509912),expr__993))){
return (new intervals.spelled.SInterval(G__981,self__.chrom,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__992.call(null,new cljs.core.Keyword(null,"chrom","chrom",2008036247),expr__993))){
return (new intervals.spelled.SInterval(self__.dia,G__981,self__.__meta,self__.__extmap,null));
} else {
return (new intervals.spelled.SInterval(self__.dia,self__.chrom,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__981),null));
}
}
}));

(intervals.spelled.SInterval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dia","dia",-134509912),self__.dia,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chrom","chrom",2008036247),self__.chrom,null))], null),self__.__extmap));
}));

(intervals.spelled.SInterval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__981){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intervals.spelled.SInterval(self__.dia,self__.chrom,G__981,self__.__extmap,self__.__hash));
}));

(intervals.spelled.SInterval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intervals.spelled.SInterval.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,i2){
var self__ = this;
var ___$1 = this;
var d2 = new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i2);
var c2 = new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(i2);
if((((self__.dia < d2)) || (((cljs.core._EQ_.call(null,self__.dia,d2)) && ((self__.chrom < c2)))))){
return (-1);
} else {
if(((cljs.core._EQ_.call(null,self__.dia,d2)) && (cljs.core._EQ_.call(null,self__.chrom,c2)))){
return (0);
} else {
return (1);

}
}
}));

(intervals.spelled.SInterval.prototype.intervals$core$IEmbed$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IEmbed$embed$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return i__$1;
}));

(intervals.spelled.SInterval.prototype.intervals$core$IDiatonic$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SInterval.prototype.intervals$core$IDiatonic$step_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (intervals.core.iabs.call(null,self__.dia) <= (1));
}));

(intervals.spelled.SInterval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dia","dia",1506021615,null),new cljs.core.Symbol(null,"chrom","chrom",-646399522,null)], null);
}));

(intervals.spelled.SInterval.cljs$lang$type = true);

(intervals.spelled.SInterval.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intervals.spelled/SInterval",null,(1),null));
}));

(intervals.spelled.SInterval.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"intervals.spelled/SInterval");
}));

/**
 * Positional factory function for intervals.spelled/SInterval.
 */
intervals.spelled.__GT_SInterval = (function intervals$spelled$__GT_SInterval(dia,chrom){
return (new intervals.spelled.SInterval(dia,chrom,null,null,null));
});

/**
 * Factory function for intervals.spelled/SInterval, taking a map of keywords to field values.
 */
intervals.spelled.map__GT_SInterval = (function intervals$spelled$map__GT_SInterval(G__985){
var extmap__5385__auto__ = (function (){var G__995 = cljs.core.dissoc.call(null,G__985,new cljs.core.Keyword(null,"dia","dia",-134509912),new cljs.core.Keyword(null,"chrom","chrom",2008036247));
if(cljs.core.record_QMARK_.call(null,G__985)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__995);
} else {
return G__995;
}
})();
return (new intervals.spelled.SInterval(new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(G__985),new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(G__985),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

intervals.spelled.make_spelled = (function intervals$spelled$make_spelled(dia,chrom){
return (new intervals.spelled.SInterval(dia,chrom,null,null,null));
});
intervals.spelled.make_spelled_p = (function intervals$spelled$make_spelled_p(dia,chrom){
return intervals.core.make_pitch.call(null,intervals.spelled.make_spelled.call(null,dia,chrom));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {intervals.core.IPitchNotation}
 * @implements {intervals.core.IDiatonic}
 * @implements {intervals.core.IToMidi}
 * @implements {intervals.core.IInterval}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {intervals.core.IEmbed}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {intervals.core.IChromatic}
 * @implements {cljs.core.IWithMeta}
 * @implements {intervals.spelled.Object}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
intervals.spelled.SIC = (function (fifths,__meta,__extmap,__hash){
this.fifths = fifths;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(intervals.spelled.SIC.prototype.intervals$core$IChromatic$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IChromatic$chromatic_semitone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((7),null,null,null));
}));

(intervals.spelled.SIC.prototype.toString = (function (){
var self__ = this;
var ic = this;
var i = ic.intervals$core$IEmbed$embed$arity$1(null);
var dia = new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i);
var chrom = new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(i);
var diff = (chrom - intervals.spelled.dia__GT_chrom.call(null,dia));
var qual = (cljs.core.truth_(intervals.spelled.perfectints.call(null,dia))?intervals.spelled.qualpf.call(null,diff,"a","P","d"):intervals.spelled.qualimpf.call(null,diff,"a","M","m","d"));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(qual),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dia + (1)))].join('');
}));

(intervals.spelled.SIC.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(intervals.spelled.SIC.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k999,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__1003 = k999;
var G__1003__$1 = (((G__1003 instanceof cljs.core.Keyword))?G__1003.fqn:null);
switch (G__1003__$1) {
case "fifths":
return self__.fifths;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k999,else__5346__auto__);

}
}));

(intervals.spelled.SIC.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__1004){
var vec__1005 = p__1004;
var k__5367__auto__ = cljs.core.nth.call(null,vec__1005,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__1005,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(intervals.spelled.SIC.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#intervals.spelled.SIC{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fifths","fifths",1954598251),self__.fifths],null))], null),self__.__extmap));
}));

(intervals.spelled.SIC.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__998){
var self__ = this;
var G__998__$1 = this;
return (new cljs.core.RecordIter((0),G__998__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fifths","fifths",1954598251)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(intervals.spelled.SIC.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(intervals.spelled.SIC.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new intervals.spelled.SIC(self__.fifths,self__.__meta,self__.__extmap,self__.__hash));
}));

(intervals.spelled.SIC.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(intervals.spelled.SIC.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (768174723 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(intervals.spelled.SIC.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this1000,other1001){
var self__ = this;
var this1000__$1 = this;
return (((!((other1001 == null)))) && ((((this1000__$1.constructor === other1001.constructor)) && (((cljs.core._EQ_.call(null,this1000__$1.fifths,other1001.fifths)) && (cljs.core._EQ_.call(null,this1000__$1.__extmap,other1001.__extmap)))))));
}));

(intervals.spelled.SIC.prototype.intervals$core$IPitchNotation$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IPitchNotation$notate_pitch$arity$1 = (function (ic){
var self__ = this;
var ic__$1 = this;
var i = ic__$1.intervals$core$IEmbed$embed$arity$1(null);
var dia = new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i);
var chrom = new cljs.core.Keyword(null,"chrom","chrom",2008036247).cljs$core$IFn$_invoke$arity$1(i);
var alter = (chrom - intervals.spelled.dia__GT_chrom.call(null,dia));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(intervals.spelled.dianames.call(null,cljs.core.mod.call(null,dia,(7)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(intervals.spelled.accstr.call(null,alter,"\u266F","\u266D"))].join('');
}));

(intervals.spelled.SIC.prototype.intervals$core$IToMidi$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IToMidi$to_midi$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mod.call(null,(self__.fifths * (7)),(12));
}));

(intervals.spelled.SIC.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fifths","fifths",1954598251),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new intervals.spelled.SIC(self__.fifths,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IInterval$i_PLUS_$arity$2 = (function (_,i2){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((self__.fifths + new cljs.core.Keyword(null,"fifths","fifths",1954598251).cljs$core$IFn$_invoke$arity$1(i2)),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$i_$arity$2 = (function (_,i2){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((self__.fifths - new cljs.core.Keyword(null,"fifths","fifths",1954598251).cljs$core$IFn$_invoke$arity$1(i2)),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$i_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((- self__.fifths),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$i_STAR_$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((self__.fifths * n),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$iabs$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return i__$1;
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$direction$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
var d = new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i__$1.intervals$core$IEmbed$embed$arity$1(null));
if(cljs.core._EQ_.call(null,d,(0))){
return (0);
} else {
if((d < (4))){
return (1);
} else {
return (-1);
}
}
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$zero$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((0),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$octave$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new intervals.spelled.SIC((0),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$octave$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return (new intervals.spelled.SIC((0),null,null,null));
}));

(intervals.spelled.SIC.prototype.intervals$core$IInterval$ic$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return i__$1;
}));

(intervals.spelled.SIC.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k999){
var self__ = this;
var this__5350__auto____$1 = this;
var G__1008 = k999;
var G__1008__$1 = (((G__1008 instanceof cljs.core.Keyword))?G__1008.fqn:null);
switch (G__1008__$1) {
case "fifths":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k999);

}
}));

(intervals.spelled.SIC.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__998){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__1009 = cljs.core.keyword_identical_QMARK_;
var expr__1010 = k__5352__auto__;
if(cljs.core.truth_(pred__1009.call(null,new cljs.core.Keyword(null,"fifths","fifths",1954598251),expr__1010))){
return (new intervals.spelled.SIC(G__998,self__.__meta,self__.__extmap,null));
} else {
return (new intervals.spelled.SIC(self__.fifths,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__998),null));
}
}));

(intervals.spelled.SIC.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fifths","fifths",1954598251),self__.fifths,null))], null),self__.__extmap));
}));

(intervals.spelled.SIC.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__998){
var self__ = this;
var this__5342__auto____$1 = this;
return (new intervals.spelled.SIC(self__.fifths,G__998,self__.__extmap,self__.__hash));
}));

(intervals.spelled.SIC.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(intervals.spelled.SIC.prototype.intervals$core$IEmbed$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IEmbed$embed$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dia = (self__.fifths * (4));
var chrom = (self__.fifths * (7));
return intervals.spelled.make_spelled.call(null,cljs.core.mod.call(null,dia,(7)),(chrom - ((12) * Math.floor((dia / (7))))));
}));

(intervals.spelled.SIC.prototype.intervals$core$IDiatonic$ = cljs.core.PROTOCOL_SENTINEL);

(intervals.spelled.SIC.prototype.intervals$core$IDiatonic$step_QMARK_$arity$1 = (function (i){
var self__ = this;
var i__$1 = this;
return intervals.core.iabs.call(null,new cljs.core.Keyword(null,"dia","dia",-134509912).cljs$core$IFn$_invoke$arity$1(i__$1.intervals$core$IEmbed$embed$arity$1(null)));
}));

(intervals.spelled.SIC.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fifths","fifths",-699837518,null)], null);
}));

(intervals.spelled.SIC.cljs$lang$type = true);

(intervals.spelled.SIC.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"intervals.spelled/SIC",null,(1),null));
}));

(intervals.spelled.SIC.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"intervals.spelled/SIC");
}));

/**
 * Positional factory function for intervals.spelled/SIC.
 */
intervals.spelled.__GT_SIC = (function intervals$spelled$__GT_SIC(fifths){
return (new intervals.spelled.SIC(fifths,null,null,null));
});

/**
 * Factory function for intervals.spelled/SIC, taking a map of keywords to field values.
 */
intervals.spelled.map__GT_SIC = (function intervals$spelled$map__GT_SIC(G__1002){
var extmap__5385__auto__ = (function (){var G__1012 = cljs.core.dissoc.call(null,G__1002,new cljs.core.Keyword(null,"fifths","fifths",1954598251));
if(cljs.core.record_QMARK_.call(null,G__1002)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__1012);
} else {
return G__1012;
}
})();
return (new intervals.spelled.SIC(new cljs.core.Keyword(null,"fifths","fifths",1954598251).cljs$core$IFn$_invoke$arity$1(G__1002),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

intervals.spelled.make_sic = (function intervals$spelled$make_sic(var_args){
var G__1016 = arguments.length;
switch (G__1016) {
case 1:
return intervals.spelled.make_sic.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intervals.spelled.make_sic.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intervals.spelled.make_sic.cljs$core$IFn$_invoke$arity$1 = (function (fifths){
return (new intervals.spelled.SIC(fifths,null,null,null));
}));

(intervals.spelled.make_sic.cljs$core$IFn$_invoke$arity$2 = (function (dia,chrom){
var diff = (chrom - intervals.spelled.dia__GT_chrom.call(null,dia));
return intervals.spelled.make_sic.call(null,(intervals.spelled.diafifths.call(null,cljs.core.mod.call(null,dia,(7))) + ((7) * diff)));
}));

(intervals.spelled.make_sic.cljs$lang$maxFixedArity = 2);

intervals.spelled.make_spc = (function intervals$spelled$make_spc(var_args){
var G__1019 = arguments.length;
switch (G__1019) {
case 1:
return intervals.spelled.make_spc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return intervals.spelled.make_spc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(intervals.spelled.make_spc.cljs$core$IFn$_invoke$arity$1 = (function (fifths){
return intervals.core.make_pitch.call(null,intervals.spelled.make_sic.call(null,fifths));
}));

(intervals.spelled.make_spc.cljs$core$IFn$_invoke$arity$2 = (function (dia,chrom){
return intervals.core.make_pitch.call(null,intervals.spelled.make_sic.call(null,dia,chrom));
}));

(intervals.spelled.make_spc.cljs$lang$maxFixedArity = 2);

intervals.spelled.match_interval = (function intervals$spelled$match_interval(modifier,num){
var dia = (parseInt(num) - (1));
var defchrom = intervals.spelled.diachrom.call(null,dia);
var perfect = intervals.spelled.perfectints.call(null,dia);
var chrom = ((((cljs.core._EQ_.call(null,modifier,"M")) && (cljs.core.not.call(null,perfect))))?defchrom:((((cljs.core._EQ_.call(null,modifier,"m")) && (cljs.core.not.call(null,perfect))))?(defchrom - (1)):(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,modifier,"P");
if(and__5043__auto__){
return perfect;
} else {
return and__5043__auto__;
}
})())?defchrom:(cljs.core.truth_(cljs.core.re_find.call(null,/^a+$/,modifier))?(defchrom + cljs.core.count.call(null,modifier)):(cljs.core.truth_(cljs.core.re_find.call(null,/^d+$/,modifier))?((defchrom - cljs.core.count.call(null,modifier)) - (cljs.core.truth_(perfect)?(0):(1))):null
)))));
if(cljs.core.truth_(chrom)){
return intervals.spelled.make_spelled.call(null,dia,chrom);
} else {
return null;
}
});
intervals.spelled.parse_spelled = (function intervals$spelled$parse_spelled(string){
var temp__5804__auto__ = cljs.core.re_find.call(null,intervals.spelled.rg_spelled,string);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var temp__5804__auto____$1 = intervals.spelled.match_interval.call(null,m.call(null,(2)),m.call(null,(3)));
if(cljs.core.truth_(temp__5804__auto____$1)){
var int$ = temp__5804__auto____$1;
var octs = parseInt([cljs.core.str.cljs$core$IFn$_invoke$arity$1(m.call(null,(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m.call(null,(5)))].join(''));
var intoct = intervals.core.i_PLUS_.call(null,int$,intervals.core.octave.call(null,int$,octs));
if(cljs.core._EQ_.call(null,m.call(null,(1)),"-")){
return intervals.core.i_.call(null,intoct);
} else {
return intoct;
}
} else {
return null;
}
} else {
return null;
}
});
intervals.spelled.parse_sic = (function intervals$spelled$parse_sic(string){
var temp__5804__auto__ = cljs.core.re_find.call(null,intervals.spelled.rg_sic,string);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var int$ = intervals.core.ic.call(null,intervals.spelled.match_interval.call(null,m.call(null,(2)),m.call(null,(3))));
if(cljs.core._EQ_.call(null,m.call(null,(1)),"-")){
return intervals.core.i_.call(null,int$);
} else {
return int$;
}
} else {
return null;
}
});
intervals.spelled.match_pitch = (function intervals$spelled$match_pitch(letter,accs){
var temp__5804__auto__ = intervals.spelled.dianames_lookup.call(null,clojure.string.upper_case.call(null,letter));
if(cljs.core.truth_(temp__5804__auto__)){
var dia = temp__5804__auto__;
var defchrom = intervals.spelled.diachrom.call(null,dia);
var chrom = (((((accs == null)) || (cljs.core.empty_QMARK_.call(null,accs))))?defchrom:(cljs.core.truth_(cljs.core.re_find.call(null,/^♭+|b+$/,accs))?(defchrom - cljs.core.count.call(null,accs)):(cljs.core.truth_(cljs.core.re_find.call(null,/^♯+|#+$/,accs))?(defchrom + cljs.core.count.call(null,accs)):null
)));
if(cljs.core.truth_(chrom)){
return intervals.spelled.make_spelled_p.call(null,dia,chrom);
} else {
return null;
}
} else {
return null;
}
});
intervals.spelled.parse_spelled_p = (function intervals$spelled$parse_spelled_p(string){
var temp__5804__auto__ = cljs.core.re_find.call(null,intervals.spelled.rg_spelled_p,string);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
var octs = parseInt(m.call(null,(3)));
var pitch = intervals.spelled.match_pitch.call(null,m.call(null,(1)),m.call(null,(2)));
var i = intervals.core.interval.call(null,pitch);
return intervals.core.p_PLUS_i.call(null,pitch,intervals.core.octave.call(null,i,octs));
} else {
return null;
}
});
intervals.spelled.parse_spc = (function intervals$spelled$parse_spc(string){
var temp__5804__auto__ = cljs.core.re_find.call(null,intervals.spelled.rg_spc,string);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return intervals.core.pc.call(null,intervals.spelled.match_pitch.call(null,m.call(null,(1)),m.call(null,(2))));
} else {
return null;
}
});

//# sourceMappingURL=spelled.js.map
