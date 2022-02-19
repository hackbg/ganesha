<div align="center">

```
"The very day I was born I made my first mistake,
and by that path have I sought wisdom ever since."
                                   - William Buck
```

![](./logo.png)

# Ganesha

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

</div>

Ganesha is a suite of tools for **literate programming** with JavaScript/TypeScript and Markdown.
It helps you **write better code faster**, by letting you skip the TS-JS compilation step,
and by letting you store the documentation where it's most needed and easiest to update -
right next to the code.

Ganesha **makes your code more accessible** by embedding it in Markdown,
letting you write human-friendly descriptions of what individual blocks of code do,
which can then be rendered by GitHub as [**literate modules**](./test/MATRIX.cjs.md).

**For backend development**, Ganesha provides a [**module loader**](./src/nodejs) for Node.js
that extracts and runs code blocks from `.md`, `.ts.md`, `.js.md`, `.mjs.md`, and `.cjs.md` files.
It works with both `require` and `import`, preserves line numbers,
and automatically compiles TypeScript with source maps.

**For frontend development**, Ganesha currently provides a [**Rollup plugin**](./src/rollup)
that can be used in Rollup or Vite to compile literate modules for the browser.

**A language server** is currently in development.

## Usage

```sh
npm install --save @hackbg/ganesha
ganesha-node MyLiterateTypeScriptModule.ts.md
```

## Comparison with alternatives

|Feature                           |**Ganesha**             |esmo/esno|ts-esnode|ts-node|
|----------------------------------|------------------------|---------|---------|-------|
|Literate modules                  |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Honors `compilerOptions.paths`    |🟩 yes                  |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes                  |❌ no    |?        |?      |
|Depends on `esbuild` binary module|🟩 no                   |❌ yes   |?        |?      |
|Built-in hot reloader             |[⏳ WIP](./doc/LIVE.md) |❌ no    |❌ no    |❌ no  |

## Known issues

See [doc/GRIPES.md](./doc/GRIPES.md)
