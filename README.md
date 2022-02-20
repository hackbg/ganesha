<div align="center">

```
"The very day I was born I made my first mistake,
and by that path have I sought wisdom ever since."
                                   - William Buck
```

![](./logo.png)

# Ganesha

**Tools for modern [literate programming](https://en.wikipedia.org/wiki/Literate_programming)
with ECMAScript-based languages and Markdown**

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

</div>

<table>
<tr><td>

## File format

Ganesha extracts [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)
from Markdown files. It also supports loading regular TypeScript without an
intermediate compilation step (no more running `tsc` on every change!)

</td><td>

`````markdown
# My literate program

This text will be ignored
but this code will be executed:
  
```typescript
console.log("Hello world!")
```
`````

</td></tr>
<tr><!--spacer--></tr>
<tr><td>

## Module loading

Use `ganesha-node` to run a Node.js process with Ganesha support.
* This allows **TypeScript files** to be compiled on demand
  to the appropriate JavaScript module format.
* **Markdown files** can be loaded as if they were regular source files.
  The embedded code blocks are compiled and the surrounding text is ignored.

</td><td>

```sh
npm install --save @hackbg/ganesha
ganesha-node my-typescript-program.ts
ganesha-node my-literate-program.ts.md
```

</td></tr>
<tr><!--spacer--></tr>
<tr><td>

## Frontend bundling

Ganesha currently provides a [**Rollup plugin**](./src/rollup)
that can be used in Rollup or Vite to compile literate modules for the browser.

</td><td>

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
  
</td></tr>
<tr><!--spacer--></tr>
<tr><td>

## IDE integration

**Help wanted!**

**A language server** is currently in development.

</td><td>

(LSP sounds is a great idea,
but I found the implementation
to be obfuscated beyond belief)

</td></tr>
</table>

<div align="center">

## Comparison with alternatives

|Feature                           |**Ganesha**             |esmo/esno|ts-esnode|ts-node|
|----------------------------------|------------------------|---------|---------|-------|
|Literate modules                  |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Honors `compilerOptions.paths`    |🟩 yes                  |❌ no    |?        |?      |
|Single entrypoint for CJS and ESM |🟩 yes                  |❌ no    |❌ no    |❌ no  |
|Depends on `esbuild` binary module|🟩 no                   |❌ yes   |🟩 no    |🟩 no  |
|Built-in hot reloader             |[⏳ WIP](./doc/LIVE.md) |❌ no    |❌ no    |❌ no  |

## Known issues

See [doc/GRIPES.md](./doc/GRIPES.md)

</div>
