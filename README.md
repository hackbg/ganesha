<div align="center">

```
"The very day I was born I made my first mistake,
and by that path have I sought wisdom ever since."
                                   - William Buck
```

![Ganesha](./doc/banner.svg)

**Tools for modern [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
with JS/TS and Markdown.**

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

![![](https://img.shields.io/npm/v/@hackbg/ganesha?color=%23f17433&label=%20&logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@hackbg/ganesha)

</div>

## How to use

Install `@hackbg/ganesha` and use the `ganesha-node` command
to run a Node.js process with Ganesha support.
**Requires [Node 16.12+](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V16.md#experimental-esm-loader-hooks-api)**.

* Ganesha allows Node.js to load **Markdown files** that contain embedded
  JavaScript or TypeScript. The code is treated as a single module, and the
  text is converted to comments.

```sh
npm i --save @hackbg/ganesha
node_modules/.bin/ganesha-node my-typescript-program.ts
node_modules/.bin/ganesha-node my-literate-program.ts.md
```

## What it does

### Compile TypeScript on demand

Having to run `tsc` on every change is a speed bump.
Ganesha allows Node.js to load **TypeScript files**,
compiling them on demand to the appropriate JavaScript module format.

```typescript
const hello = (what: string) => console.log("hello", what)
hello("world")
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

Ganesha provides a [**Rollup plugin**](./src/rollup)
that can be used in [Rollup](https://www.rollupjs.org/guide/en/) or [Vite](https://vitejs.dev/)
to compile literate modules for the browser.

`index.html`:
```html
<script type="module" src="./script"></script>
```

`script.ts.md`:
`````markdown
This is an example literate frontend script:
```typescript
console.log('Hello, world!')
```
`````
 
`vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import ganesha from '@ganesha/rollup'
export default defineConfig({ plugins: [ ganesha() ] })
```

## IDE integration

**Help wanted!**

**A language server** is currently in development.

## Comparison with alternatives

|Feature                           |**Ganesha**             |esmo/esno|ts-esnode|ts-node|
|----------------------------------|------------------------|---------|---------|-------|
|Compile TypeScript on demand      |🟩 yes                  |🟩 yes   |🟩 yes   |🟩 yes |
|Literate modules                  |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Honors `compilerOptions.paths`    |🟩 yes                  |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Depends on `esbuild` binary module|🟩 no                   |❌ yes   |🟩 no    |🟩 no  |
|Built-in hot reloader             |[⏳ WIP](./doc/LIVE.md) |❌ no    |❌ no    |❌ no  |

## Known issues

See [doc/GRIPES.md](./doc/GRIPES.md)
