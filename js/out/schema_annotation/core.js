// Compiled by ClojureScript 1.11.60 {:target :nodejs, :nodejs-rt false, :optimizations :none}
goog.provide('schema_annotation.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('schema_annotation.helpers');
goog.require('schema_annotation.verovio');
goog.require('schema_annotation.annotate');
goog.require('schema_annotation.io');
goog.require('schema_annotation.fileio');
goog.require('schema_annotation.github');
goog.require('reagent_keybindings.keyboard');
goog.require('markdown_to_hiccup.core');
goog.require('ajax.core');
goog.require('intervals.spelled');
schema_annotation.core.node$module$react_dom$client = require('react-dom/client');
if((typeof schema_annotation !== 'undefined') && (typeof schema_annotation.core !== 'undefined') && (typeof schema_annotation.core.state !== 'undefined')){
} else {
schema_annotation.core.state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"suggested","suggested",-1700058078),new cljs.core.Keyword(null,"score-xml","score-xml",1762238119),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"corpora","corpora",-1467133301),new cljs.core.Keyword(null,"corpus","corpus",-2028151250),new cljs.core.Keyword(null,"instances","instances",-335364781),new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.Keyword(null,"lexicon","lexicon",52593497)],[null,null,null,null,null,null,null,false,null,null,null]));
}
if((typeof schema_annotation !== 'undefined') && (typeof schema_annotation.core !== 'undefined') && (typeof schema_annotation.core.app_root !== 'undefined')){
} else {
schema_annotation.core.app_root = schema_annotation.core.node$module$react_dom$client.createRoot(document.getElementById("app"));
}
schema_annotation.core.manual_text = markdown_to_hiccup.core.component.call(null,markdown_to_hiccup.core.md__GT_hiccup.call(null,"\nThis tool helps you to create annotations of schema instances.\nIt can load music files as well as existing annotations or precomputed instance suggestions\nfrom a prepared corpus that is stored on GitHub (like [this one](https://github.com/DCMLab/schema_annotation_data)).\nTo use this tool, you need a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)\nthat is used to access the GitHub API, query the corpus repository, and load the files.\nIf the repository that you want to use is public, you can generate a token without any scopes\n(providing read-only access to public information).\nIf you use a private repository, add the `repo` scope,\nwhich will add read/write access to private repositories (but this app never writes any data to GitHub directly).\nWhen using your own dataset, the corpus repository should have a `data` directory\nwith the same [directory structure](https://github.com/DCMLab/schema_annotation_data/blob/master/doc/Internal.md#data-files-data)\nas the example repository.\n\nTo create annotations, follow these steps:\n\n1. Select a repository (by owner, repo name, and branch) and enter your GH access token (see above).\n   Always use the default branch (usually `master`/`main`).\n   Click on \"Set Repo\" to load the schema lexicon and corpus data from the repository.\n1. Select a (sub)corpus and a piece, then click on \"Load Piece\".\n1. Select a schema variant from the list, then click \"Set Schema\".\n1. (optional) Load precomputed suggestions or existing annotations\n   for the selected schema and piece.\n1. Create a new schema instance or select an existing instance from the list.\n   - For precomputed suggestions, select one of the suggested \"automatic\" alternatives.\n   - For \"manual\" instance, edit each stage by selecting notes directly.\n1. When you are done with an instance, you can mark it as \"checked\".\n   This is just a help for you to keep track of your work.\n1. You can delete clearly invalid instances,\n   and add new instances where no suggestion exists.\n1. When you are happy with your annotations, click on \"Download Annotations\".\n   The resulting JSON file needs to be committed to the repo manually.\n\nShortcuts:\n- `shift-left`/`-right` for selecting alternative suggestions\n- `1`...`9` for selecting / deselecting a stage.\n- `shift-up`/`-down` for selecting the previous / next instance.\n- `enter` for (un)checking the current instance.\n"));
schema_annotation.core.manual_comp = (function schema_annotation$core$manual_comp(){
var visible = reagent.core.atom.call(null,true);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,visible))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Manual"], null),schema_annotation.core.manual_text], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.hide-show","a.hide-show",539582916),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#0",new cljs.core.Keyword(null,"on-click","on-click",1632826543),schema_annotation.helpers.make_js_link.call(null,(function (){
return cljs.core.swap_BANG_.call(null,visible,cljs.core.not);
}))], null),(cljs.core.truth_(cljs.core.deref.call(null,visible))?"Hide Manual":"Show Manual")], null)], null);
});
});
schema_annotation.core.download_comp = (function schema_annotation$core$download_comp(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pure-g","div.pure-g",1950568742),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pure-button.button-primary.pure-u-1.pure-u-md-1-4","a.pure-button.button-primary.pure-u-1.pure-u-md-1-4",-2130977231),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return schema_annotation.io.download_annotations_BANG_.call(null,cljs.core.deref.call(null,state));
})], null),"Download Annotations"], null)], null);
});
schema_annotation.core.schema_annotation_app = (function schema_annotation$core$schema_annotation_app(){
var score = reagent.core.cursor.call(null,schema_annotation.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score-xml","score-xml",1762238119)], null));
var instances = reagent.core.cursor.call(null,schema_annotation.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instances","instances",-335364781)], null));
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Schema Annotation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.core.manual_comp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.github.github_io_comp,schema_annotation.core.state], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,schema_annotation.core.state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768)], null):null),(function (){var lexicon = new cljs.core.Keyword(null,"lexicon","lexicon",52593497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,schema_annotation.core.state));
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,schema_annotation.core.state));
var notes = new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,schema_annotation.core.state));
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref.call(null,score);
if(cljs.core.truth_(and__5043__auto__)){
return notes;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,schema_annotation.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),false);

var pattern = schema_annotation.helpers.parse_pattern.call(null,cljs.core.get.call(null,lexicon,schema));
if(cljs.core.truth_(pattern)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.annotate.annotation_comp,pattern,notes,cljs.core.deref.call(null,score),instances], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.core.download_comp,schema_annotation.core.state], null)], null);
} else {
return alert(["Schema ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,schema_annotation.core.state)))," not found in the lexicon! Please report this to the developers."].join(''));
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_keybindings.keyboard.keyboard_listener], null)], null);
});
});
schema_annotation.core.reload = (function schema_annotation$core$reload(){
return schema_annotation.core.app_root.render(reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema_annotation.core.schema_annotation_app], null)));
});
schema_annotation.core.init_BANG_ = (function schema_annotation$core$init_BANG_(){
return schema_annotation.core.reload.call(null);
});
schema_annotation.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map
