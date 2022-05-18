---
literate: typescript
---

# `@ganesha/tsc`

This is the TypeScript Compiler launcher for Ganesha.

## Intent

Ganesha is an implementation of literate programming for the Web,
based on embedding JavaScript or TypeScript in Markdown.

With JavaScript, this is easy enough: just change Markdown lines to
comments, and execute the code blocks as a single module.

TypeScript, on the other hand, [in true Microsoft fashion](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish),
is a non-extensible imperfect superset of JavaScript, which is also very closely coupled
to its tooling. This makes TypeScript hard to extend, and indeed many of the customary
patch points that, given enough experience, one might expect, are glued shut.

There is no elegant way to hook into the TypeScript compiler from the outside; the only way to
apply the modifications needed to implement embedded TypeScript support is by patching
`readFileSync` (🤯) and modifying the code of the TypeScript compiler when it's first loaded
by Node.js.

> This is basically the same hack as vue-tsc from Volar, see: https://github.com/johnsoncodehk/volar/blob/master/packages/vue-tsc/bin/vue-tsc.js
> Reused from Johnson Chu under [MIT License](https://raw.githubusercontent.com/johnsoncodehk/volar/master/packages/vue-tsc/LICENSE).

## Implementation

TODO: Describe the patches that are applied to TSC in order to fully support .TS.MD files.

## Test suite

The remainder of this document is dedicated to test cases that validate the
behavior enabled by Ganesha-TSC. You can run these tests using `npm test`.

## Definitions

* `TS` means **TypeScript**
* `TSMD` means **TypeScript-in-Markdown**

```javascript
import assert from 'assert'

import { spawnSync } from 'child_process'
const run = (command, ...args) => {
  console.log(`\n$`, command, ...args)
  const result = spawnSync(command, args, { stdio: 'inherit' })
}

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const tsc       = `${resolve(__dirname, 'ganesha-tsc')}`
const noEmit    = '--noEmit'
const fixture   = (...args) => resolve(__dirname, 'fixtures', ...args)
```

## Examples

### Baseline: TS checking continues as normal

```javascript
run(tsc, noEmit, fixture('standalone-ts.ts'))
```

### Baseline: TS/TS imports continue as normal

```javascript
run(tsc, noEmit, fixture('import-ts.ts'))
```

### Feature: TSMD is type-checked

```javascript
run(tsc, noEmit, fixture('standalone-ts-md.ts.md'))
```

### Feature: TSMD can import TS

```javascript
run(tsc, noEmit, fixture('import-ts.ts.md'))
```

### Feature: TS can import TSMD

```javascript
run(tsc, noEmit, fixture('import-ts-md.ts'))
```

### Feature: TSMD can import TSMD

```javascript
run(tsc, noEmit, fixture('import-ts-md.ts.md'))
```
