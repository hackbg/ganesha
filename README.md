<div align="center">

![Ganesha](./doc/banner.svg)

**Tools for modern [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
with JS/TS and Markdown.**

[![](https://img.shields.io/npm/v/@hackbg/ganesha?color=%23f68f21&style=for-the-badge&label=@hackbg/ganesha)](https://fadroma.tech)

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

</div>

## How to use

Install `@hackbg/ganesha` and use the `ganesha-node` command
to run a Node.js process with Ganesha support.
**Requires [Node 16.12+](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V16.md#experimental-esm-loader-hooks-api)**.

```sh
npm i -g @hackbg/ganesha
ganesha-node my-typescript-program.ts
ganesha-node my-literate-program.ts.md
```

## What it does

### Compile TypeScript on demand

Having to run `tsc` on every change is a speed bump.
Ganesha allows Node.js to load **TypeScript files**,
compiling them on demand to the appropriate JavaScript module format.

```typescript
// hello.ts
export const hello = (what: string) => console.log('hello', what)
```

```typescript
// main.ts
import { hello } from './hello'
hello('world')
```

* `package.json`:

```json
{
  "type": "module",
  "exports": {
    "ganesha": "./main.ts",
    "default": "./dist/main.js"
  },
  "devDependencies": {
    "@hackbg/ganesha": "^2",
    "typescript":      "^4"
  },
  "scripts": {
    "prepublishOnly": "tsc",
    "start": "ganesha-node ./hello.ts"
  }
}
```

```sh
npm start # no need to run tsc unless you're publishing to NPM!
```

### Run code that is embedded in Markdown

Automatically generated documentation is often insufficient,
and when your code and docs live in different places,
it's easy to overlook writing high-level documentation.

Ganesha allows Node.js to load **Markdown files** by extracting
the contents of [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).
This is an implementation of Don Knuth's [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
concept, using the tools of the Web age - Markdown and JS/TS.

`````markdown
# My literate program

The text will be ignored
and the code will be executed:

```typescript
console.log("Hello world!")
```
`````

### Frontend bundling of literate modules

Ganesha provides a [**Rollup plugin**](./src/rollup/README.md)
that can be used in [Rollup](https://www.rollupjs.org/guide/en/) or [Vite](https://vitejs.dev/)
to compile literate modules for the browser.

```html
<!-- index.html -->
<script type="module" src="./script"></script>
```

`````markdown
<!-- script.ts.md -->
This is an example literate frontend script:
```typescript
console.log('Hello, world!')
```
`````
 
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import ganesha from '@ganesha/rollup'
export default defineConfig({ plugins: [ ganesha() ] })
```

### Type checking of literate modules

Use [`ganesha-tsc`](./src/tsc/README.md) to type check literate modules.
A [VSCode plugin](./src/vsc/README.md) and LSP server are currently in development
(help wanted, VSCode and LSP are hell!)

## Comparison with alternatives

<div align="center">

|Feature                           |**Ganesha**             |esmo/esno|ts-esnode|ts-node|
|----------------------------------|------------------------|---------|---------|-------|
|Compile TypeScript on demand      |🟩 yes                  |🟩 yes   |🟩 yes   |🟩 yes |
|Literate modules                  |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Honors `compilerOptions.paths`    |🟩 yes                  |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Depends on `esbuild` binary module|🟩 no                   |❌ yes   |🟩 no    |🟩 no  |
|Built-in hot reloader             |[⏳ WIP](./doc/LIVE.md) |❌ no    |❌ no    |❌ no  |

</div>

>*The very day I was born I made my first mistake,
>and by that path have I sought wisdom ever since.
>                                     - **William Buck***
