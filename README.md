# Schema Annotation App

A web app for annotating instances of voice-leading schemata.
You can try the app [here](https://dcmlab.github.io/schema_annotation_app/).
Note that you will need a [GitHub access token](https://github.com/settings/tokens)
so that the app can use the GitHub API.

The app is meant to be used together with a data repository
that contains scores, a schema lexicon, and potentially existing annotations
or precomputed suggestions.
An example of such a repository is our dataset of
[Mozart Piano Sonatas](https://github.com/DCMLab/schema_annotation_data/).

## Development

Install the Clojure CLI Tools.

This project uses [figwheel-main](https://figwheel.org/)
and has a `deps.edn` project file with aliases configured accordingly.
To start a figwheel REPL with hot reloading, run

``` shell
$ clj -A:fig
```

To use figwheel in CIDER, allow emacs to load the variables in `.dir-locals`,
open one of the source files (e.g. `/src/schema_annotation/core.cljs`),
and run `cider-jack-in-cljs (C-C M-J)` (note the capital `J`!).
This uses the `:cider` alias defined in `deps.edn`.

## Production Builds

For deployment, use the following steps:

1. Create a production build using `clj -A:prod`.
2. Copy `target/public/js/main.js` to `resources/public/js/main.js`
3. Deploy the `resources/public/` directory.

**Note:** If you do this in your development directory,
don't forget to remove `resources/public/js/main.js`
when switching back to development builds.
Figwheel saves its output to `target/public/js/main.js`,
but `index.html` can't distinguish between files in `target/public` and `resources/public`.
