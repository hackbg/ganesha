# Ganesha

Module loader for Node.JS (ESM and CommonJS) that extracts and runs code blocks
from `.md`, `.ts.md`, `.js.md`, `.mjs.md`, `.cjs.md`, preserving line numbers and
automatically transpiling TypeScript.

Also works for plain `.ts` like [antfu/esno](https://github.com/antfu/esno)
but honors `compilerOptions.paths` and is a single package rather than 4
(single entrypoint instead of separate `esmo` and `esno` executables;
equivalents to `esbuild-node-loader` and `esbuild-register` are embedded).

## Usage

### If your entrypoint is an ES or TS module

```sh
node --experimental-loader=@hackbg/ganesha/loader.mjs main.ts.md
# -or-
ganesha run-module main.ts.md
```

### If your entrypoint is a CommonJS module

```sh
node -r @hackbg/ganesha/loader.cjs main.js.md
#-or-
ganesha run-script main.js.md
```

### From `ts-in-markdown` README:

> ⚡ Language support for TypeScript in markdown, inspired by [@volar](https://github.com/johnsoncodehk/volar)

https://marketplace.visualstudio.com/items?itemName=amour1688.ts-in-markdown



https://user-images.githubusercontent.com/31695475/125228066-a73c7c00-e306-11eb-9457-6d3f2ffa4255.mp4




## Note

* Enable completion

Markdown by default disables quick suggests on normal words. It can be re-enabled using

```json
{
  "[markdown]": {
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    }
  }
}
```
