// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3623){
var map__3624 = p__3623;
var map__3624__$1 = cljs.core.__destructure_map.call(null,map__3624);
var m = map__3624__$1;
var n = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3625_3653 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3626_3654 = null;
var count__3627_3655 = (0);
var i__3628_3656 = (0);
while(true){
if((i__3628_3656 < count__3627_3655)){
var f_3657 = cljs.core._nth.call(null,chunk__3626_3654,i__3628_3656);
cljs.core.println.call(null,"  ",f_3657);


var G__3658 = seq__3625_3653;
var G__3659 = chunk__3626_3654;
var G__3660 = count__3627_3655;
var G__3661 = (i__3628_3656 + (1));
seq__3625_3653 = G__3658;
chunk__3626_3654 = G__3659;
count__3627_3655 = G__3660;
i__3628_3656 = G__3661;
continue;
} else {
var temp__5804__auto___3662 = cljs.core.seq.call(null,seq__3625_3653);
if(temp__5804__auto___3662){
var seq__3625_3663__$1 = temp__5804__auto___3662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3625_3663__$1)){
var c__5568__auto___3664 = cljs.core.chunk_first.call(null,seq__3625_3663__$1);
var G__3665 = cljs.core.chunk_rest.call(null,seq__3625_3663__$1);
var G__3666 = c__5568__auto___3664;
var G__3667 = cljs.core.count.call(null,c__5568__auto___3664);
var G__3668 = (0);
seq__3625_3653 = G__3665;
chunk__3626_3654 = G__3666;
count__3627_3655 = G__3667;
i__3628_3656 = G__3668;
continue;
} else {
var f_3669 = cljs.core.first.call(null,seq__3625_3663__$1);
cljs.core.println.call(null,"  ",f_3669);


var G__3670 = cljs.core.next.call(null,seq__3625_3663__$1);
var G__3671 = null;
var G__3672 = (0);
var G__3673 = (0);
seq__3625_3653 = G__3670;
chunk__3626_3654 = G__3671;
count__3627_3655 = G__3672;
i__3628_3656 = G__3673;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3674 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3674);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3674)))?cljs.core.second.call(null,arglists_3674):arglists_3674));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3629_3675 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3630_3676 = null;
var count__3631_3677 = (0);
var i__3632_3678 = (0);
while(true){
if((i__3632_3678 < count__3631_3677)){
var vec__3641_3679 = cljs.core._nth.call(null,chunk__3630_3676,i__3632_3678);
var name_3680 = cljs.core.nth.call(null,vec__3641_3679,(0),null);
var map__3644_3681 = cljs.core.nth.call(null,vec__3641_3679,(1),null);
var map__3644_3682__$1 = cljs.core.__destructure_map.call(null,map__3644_3681);
var doc_3683 = cljs.core.get.call(null,map__3644_3682__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3684 = cljs.core.get.call(null,map__3644_3682__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3680);

cljs.core.println.call(null," ",arglists_3684);

if(cljs.core.truth_(doc_3683)){
cljs.core.println.call(null," ",doc_3683);
} else {
}


var G__3685 = seq__3629_3675;
var G__3686 = chunk__3630_3676;
var G__3687 = count__3631_3677;
var G__3688 = (i__3632_3678 + (1));
seq__3629_3675 = G__3685;
chunk__3630_3676 = G__3686;
count__3631_3677 = G__3687;
i__3632_3678 = G__3688;
continue;
} else {
var temp__5804__auto___3689 = cljs.core.seq.call(null,seq__3629_3675);
if(temp__5804__auto___3689){
var seq__3629_3690__$1 = temp__5804__auto___3689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3629_3690__$1)){
var c__5568__auto___3691 = cljs.core.chunk_first.call(null,seq__3629_3690__$1);
var G__3692 = cljs.core.chunk_rest.call(null,seq__3629_3690__$1);
var G__3693 = c__5568__auto___3691;
var G__3694 = cljs.core.count.call(null,c__5568__auto___3691);
var G__3695 = (0);
seq__3629_3675 = G__3692;
chunk__3630_3676 = G__3693;
count__3631_3677 = G__3694;
i__3632_3678 = G__3695;
continue;
} else {
var vec__3645_3696 = cljs.core.first.call(null,seq__3629_3690__$1);
var name_3697 = cljs.core.nth.call(null,vec__3645_3696,(0),null);
var map__3648_3698 = cljs.core.nth.call(null,vec__3645_3696,(1),null);
var map__3648_3699__$1 = cljs.core.__destructure_map.call(null,map__3648_3698);
var doc_3700 = cljs.core.get.call(null,map__3648_3699__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3701 = cljs.core.get.call(null,map__3648_3699__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3697);

cljs.core.println.call(null," ",arglists_3701);

if(cljs.core.truth_(doc_3700)){
cljs.core.println.call(null," ",doc_3700);
} else {
}


var G__3702 = cljs.core.next.call(null,seq__3629_3690__$1);
var G__3703 = null;
var G__3704 = (0);
var G__3705 = (0);
seq__3629_3675 = G__3702;
chunk__3630_3676 = G__3703;
count__3631_3677 = G__3704;
i__3632_3678 = G__3705;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__3649 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3650 = null;
var count__3651 = (0);
var i__3652 = (0);
while(true){
if((i__3652 < count__3651)){
var role = cljs.core._nth.call(null,chunk__3650,i__3652);
var temp__5804__auto___3706__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___3706__$1)){
var spec_3707 = temp__5804__auto___3706__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3707));
} else {
}


var G__3708 = seq__3649;
var G__3709 = chunk__3650;
var G__3710 = count__3651;
var G__3711 = (i__3652 + (1));
seq__3649 = G__3708;
chunk__3650 = G__3709;
count__3651 = G__3710;
i__3652 = G__3711;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__3649);
if(temp__5804__auto____$1){
var seq__3649__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3649__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__3649__$1);
var G__3712 = cljs.core.chunk_rest.call(null,seq__3649__$1);
var G__3713 = c__5568__auto__;
var G__3714 = cljs.core.count.call(null,c__5568__auto__);
var G__3715 = (0);
seq__3649 = G__3712;
chunk__3650 = G__3713;
count__3651 = G__3714;
i__3652 = G__3715;
continue;
} else {
var role = cljs.core.first.call(null,seq__3649__$1);
var temp__5804__auto___3716__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___3716__$2)){
var spec_3717 = temp__5804__auto___3716__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3717));
} else {
}


var G__3718 = cljs.core.next.call(null,seq__3649__$1);
var G__3719 = null;
var G__3720 = (0);
var G__3721 = (0);
seq__3649 = G__3718;
chunk__3650 = G__3719;
count__3651 = G__3720;
i__3652 = G__3721;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__3722 = cljs.core.conj.call(null,via,t);
var G__3723 = cljs.core.ex_cause.call(null,t);
via = G__3722;
t = G__3723;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__3726 = datafied_throwable;
var map__3726__$1 = cljs.core.__destructure_map.call(null,map__3726);
var via = cljs.core.get.call(null,map__3726__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__3726__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__3726__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__3727 = cljs.core.last.call(null,via);
var map__3727__$1 = cljs.core.__destructure_map.call(null,map__3727);
var type = cljs.core.get.call(null,map__3727__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__3727__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__3727__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__3728 = data;
var map__3728__$1 = cljs.core.__destructure_map.call(null,map__3728);
var problems = cljs.core.get.call(null,map__3728__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__3728__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__3728__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__3729 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__3729__$1 = cljs.core.__destructure_map.call(null,map__3729);
var top_data = map__3729__$1;
var source = cljs.core.get.call(null,map__3729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__3730 = phase;
var G__3730__$1 = (((G__3730 instanceof cljs.core.Keyword))?G__3730.fqn:null);
switch (G__3730__$1) {
case "read-source":
var map__3731 = data;
var map__3731__$1 = cljs.core.__destructure_map.call(null,map__3731);
var line = cljs.core.get.call(null,map__3731__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__3731__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__3732 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__3732__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__3732,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__3732);
var G__3732__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__3732__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__3732__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__3732__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__3732__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__3733 = top_data;
var G__3733__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__3733,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__3733);
var G__3733__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__3733__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__3733__$1);
var G__3733__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__3733__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__3733__$2);
var G__3733__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__3733__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__3733__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__3733__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__3733__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__3734 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__3734,(0),null);
var method = cljs.core.nth.call(null,vec__3734,(1),null);
var file = cljs.core.nth.call(null,vec__3734,(2),null);
var line = cljs.core.nth.call(null,vec__3734,(3),null);
var G__3737 = top_data;
var G__3737__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__3737,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__3737);
var G__3737__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__3737__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__3737__$1);
var G__3737__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__3737__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__3737__$2);
var G__3737__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__3737__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__3737__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__3737__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__3737__$4;
}

break;
case "execution":
var vec__3738 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__3738,(0),null);
var method = cljs.core.nth.call(null,vec__3738,(1),null);
var file = cljs.core.nth.call(null,vec__3738,(2),null);
var line = cljs.core.nth.call(null,vec__3738,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__3725_SHARP_){
var or__5045__auto__ = (p1__3725_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__3725_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__3741 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__3741__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__3741,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__3741);
var G__3741__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__3741__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__3741__$1);
var G__3741__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.call(null,G__3741__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__3741__$2);
var G__3741__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__3741__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__3741__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__3741__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__3741__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3730__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__3745){
var map__3746 = p__3745;
var map__3746__$1 = cljs.core.__destructure_map.call(null,map__3746);
var triage_data = map__3746__$1;
var phase = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__3746__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__3747 = phase;
var G__3747__$1 = (((G__3747 instanceof cljs.core.Keyword))?G__3747.fqn:null);
switch (G__3747__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3748_3757 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3749_3758 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3750_3759 = true;
var _STAR_print_fn_STAR__temp_val__3751_3760 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3750_3759);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3751_3760);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__3743_SHARP_){
return cljs.core.dissoc.call(null,p1__3743_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3749_3758);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3748_3757);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3752_3761 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3753_3762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3754_3763 = true;
var _STAR_print_fn_STAR__temp_val__3755_3764 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3754_3763);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3755_3764);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__3744_SHARP_){
return cljs.core.dissoc.call(null,p1__3744_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3753_3762);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3752_3761);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3747__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
