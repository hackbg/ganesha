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

```
// Normal:
//    [tsc (self-contained)]
// 
// Patched:
//    [tsc] -> [patch] -> [tsserverlibrary]
```

* The patch relies on the fact that `tsserverlibrary` and `tsc` mostly consist of the same code -
  they are (monolithic) JavaScript artifacts produced from the same (modular) TypeScript codebase.

  * The difference is that `tsserverlibrary` can be imported, while `tsc` is meant to be run.
    Therefore, when augmenting a function in `tsc`, the patch is implemented on top of the 
    identical function taken from `tsserverlibrary`, because it can't be taken from `tsc`.

* **Entrypoint patch:** The entry point for the patch is `createProgram`.
  This is one of three `tsc` entrypoints, the other two being `createIncrementalProgram`
  and `createWatchProgram`. Just like in Volar, those two are disabled, making incremental
  and watched compilation unavailable.

  * The contents of `createProgram` are replaced by a call to `createProgramProxy`.
    It does the following:

    * Apply the **compiler patch** to `ts: ts.TypeScript`, the compiler instance

    * Apply the **host patch** to `options.host`, which must be present and have
      a `readDirectory` property for the patch to work.

    * Apply the **program patch** to a `ts.Program` instance obtained through
      `ts.createLanguageService(host).getProgram`.

      * This is a roundabout way to call the original `getProgram` - probably because
        that way we get the program's `host` property populated for free by `createLanguageService`

    * Apply **the program patch** to the `ts.Program` instance.

    * With the **compiler patch**, **host patch**, and **program patch** in place,
      all subsequent operations by `tsc` will be aware of literate modules, and "see"
      TS "comments" and "code" where the TSMD source contains "prose" and "embedded code blocks".

* **Compiler patch**

  * This patch augments `TypeScript#resolveModuleName`. If the original function
    fails to resolve the module specifier with the extensions known to baseline TypeScript,
    the extra code will try the new extensions such as `.ts.md`, `.js.md`, `.md`
    (with `literate:` in the front matter), etc.

* **Host patch**

  * The host is the interface to the underlying filesystem.
    It provides the source code snapshots that are compiled.

  * The `getScriptSnapshot` function is augmented to read `.ts.md` files
    directly in their transformed form, using `parseString` from `@ganesha/core`.

  * The `allowNonTsExtensions` and `allowJs` options are enforced to be always `true`.

  * The `getScriptFileNames` function is overridden to also include files with
    the `.ts.ms` extension. 

* **Program patch**

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
const tsc        = `${resolve(__dirname, 'ganesha-tsc')}`
const tscOptions = ['--lib', 'es5', '--typeRoots', 'undefined', '--noEmit']
const fixture    = (...args) => resolve(__dirname, 'fixtures', ...args)
```

## Examples

### Baseline: TS checking continues as normal

```javascript
run(tsc, ...tscOptions, fixture('standalone-ts.ts'))
```

### Baseline: TS/TS imports continue as normal

```javascript
run(tsc, ...tscOptions, fixture('import-ts.ts'))
```

### Feature: TSMD is type-checked

```javascript
run(tsc, ...tscOptions, fixture('standalone-ts-md.ts.md'))
```

### Feature: TSMD can import TS

```javascript
run(tsc, ...tscOptions, fixture('import-ts.ts.md'))
```

### Feature: TS can import TSMD

```javascript
run(tsc, ...tscOptions, fixture('import-ts-md.ts'))
```

### Feature: TSMD can import TSMD

```javascript
run(tsc, ...tscOptions, fixture('import-ts-md.ts.md'))
```
