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

## Basic usage

Use `ganesha-node` to run a Node.js process with Ganesha support. **Requires [Node 16.12+](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V16.md#experimental-esm-loader-hooks-api)**.

* Ganesha allows Node.js to load **TypeScript files**,
  compiling them on demand to the appropriate JavaScript module format.
* Ganesha allows Node.js to load **Markdown files** that contain embedded
  JavaScript or TypeScript. The code is treated as a single module, and the
  text is converted to comments.

```sh
npm i --save @hackbg/ganesha
node_modules/.bin/ganesha-node my-typescript-program.ts
node_modules/.bin/ganesha-node my-literate-program.ts.md
```

## File format

Ganesha extracts [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)
from Markdown files. It also supports loading regular TypeScript without an
intermediate compilation step (no more running `tsc` on every change!)

`````markdown
# My literate program

The text will be ignored
and the code will be executed:

```typescript
console.log("Hello world!")
```
`````

## Frontend bundling

Ganesha currently provides a [**Rollup plugin**](./src/rollup)
that can be used in Rollup or Vite to compile literate modules for the browser.

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
