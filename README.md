# Ganesha

Ganesha is a suite of tools for **literate programming** with JavaScript/TypeScript and Markdown.
It helps you **write better code faster**, by skipping a compilation step, and storing the
documentation where it's most useful and easiest to update - right next to the code.

At the same time, Ganesha **makes your code more accessible** by embedding it in Markdown,
letting you write human-friendly descriptions of what individual blocks of code do,
which can then be rendered by GitHub as [**literate modules**](./tests/MATRIX.cjs.md).

**For backend development**, Ganesha provides a [**module loader**](./nodejs-loader) for Node.js
that extracts and runs code blocks from `.md`, `.ts.md`, `.js.md`, `.mjs.md`, and `.cjs.md` files.
It works with both `require` and `import`, preserves line numbers,
and automatically compiles TypeScript with source maps.

**For frontend development**, Ganesha currently provides a [**Rollup plugin**](./rollup-plugin)
that can be used in Rollup or Vite to compile literate modules for the browser.

**A language server** is currently in development.

## Usage

```sh
npm install --save @hackbg/ganesha-nodejs-loader
ganesha MyLiterateTypeScriptModule.ts.md
```

## Comparison with alternatives

|Feature                           |Ganesha|esmo/esno|ts-esnode|ts-node|
|----------------------------------|-------|---------|---------|-------|
|Literate modules                  |🟩 yes |❌ no    |no       |no     |
|Honors `compilerOptions.paths`    |🟩 yes |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes |❌ no    |?        |?      |
|Depends on `esbuild` binary module|🟩 no  |❌ yes   |?        |?      |

## Known issues

### Nested code blocks

Did you know Markdown supported nested code blocks?

`````markdown
````
```
like this
```
````
`````

Neither did I. Currently, you're limited to the garden variety
three-backtick code blocks.

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
