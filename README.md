# Ganesha

Ganesha is a suite of tools for **literate programming** in JavaScript and TypeScript.

Module loader for Node.JS (ESM and CommonJS) that extracts and runs code blocks
from `.md`, `.ts.md`, `.js.md`, `.mjs.md`, `.cjs.md`, preserving line numbers and
automatically transpiling TypeScript.

Also works for plain `.ts` like [antfu/esno](https://github.com/antfu/esno)
but honors `compilerOptions.paths` and is a single package rather than 4
(single entrypoint instead of separate `esmo` and `esno` executables;
equivalents to `esbuild-node-loader` and `esbuild-register` are embedded).

## Comparison with alternatives

|Feature                           |Ganesha|esmo/esno|ts-esnode|ts-node|
|----------------------------------|-------|---------|---------|-------|
|Literate modules                  |🟩 yes |❌ no    |no       |no     |
|Honors `compilerOptions.paths`    |🟩 yes |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes |❌ no    |?        |?      |
|Depends on `esbuild` binary module|🟩 no  |❌ yes   |?        |?      |

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

## Known issues

### Dynamic import of CommonJS modules handles `default` differently

There is a difference in the behavior of `module.exports`
between bare and literate CJS modules
when using dynamic `import()` calls.

Consider the following export:

````javascript
# target.cjs.md
```javascript
module.exports.hello = 'world'
```
````

And the following import:

```javascript
import('./target.cjs.md').then(console.log)
```

This will print:

```
[Module: null prototype] { default: { hello: "world" } }
```

As opposed to the expected:

```
[Module: null prototype] { default: { hello: "world" }, hello: "world" }
```

This is due to [this hardcoded conditional in Node's `lib/internal/modules/esm/translators.js`](https://github.com/nodejs/node/blob/7af8896d99f5e61704c887c993ec2e8446f390ad/lib/internal/modules/esm/translators.js#L266).
It's not fatal, but requires you to change the imports when using literate modules,
e.g. this:

```javascript
import('./target.cjs.md').then(({hello})=>console.log(hello))
```

should become this:

```javascript
import('./target.cjs.md').then(({default:{hello}})=>console.log(hello))
```

Blame whoever introduced ESM `default` and made it correspond to CommonJS `module.exports.default`,
instead of `module.exports`. 🐘

## Node.js doesn't allow usage of `require` in ES modules.
