<div align="center">

![Ganesha](ganesha.svg)

**Collection of fast TypeScript loaders.**

[![](https://img.shields.io/npm/v/@hackbg/ganesha?color=%23f68f21&style=for-the-badge&label=@hackbg/ganesha)](https://www.npmjs.com/package/@hackbg/ganesha)
[![](https://img.shields.io/npm/v/@ganesha/esbuild?color=%23f68f21&style=for-the-badge&label=@ganesha/esbuild)](https://www.npmjs.com/package/@ganesha/esbuild)
[![](https://img.shields.io/npm/v/@ganesha/oxc?color=%23f68f21&style=for-the-badge&label=@ganesha/oxc)](https://www.npmjs.com/package/@ganesha/oxc)

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

</div>

---

## How to use

### Install

```sh
npm i --save @ganesha/esbuild-wasm
# and/or:
npm i --save @ganesha/esbuild
```

### Use from shell

```sh
node --import @ganesha/esbuild ./my-program.ts
```

### Use with shebang/hashbang

```sh
#!/usr/bin/env -S node --import @ganesha/esbuild
```

*Note that [`env -S` is unavailable in Busybox environments such as Alpine Linux](https://bugs.busybox.net/show_bug.cgi?id=15371).*

### Use from JS

```js
await import("@ganesha/esbuild")
await import("./my-program")
// supports extensionless imports, unlike raw Node
```

And now `my-program.ts` can look like this:

```ts
import { Foo } from './another-ts-module'  // extension optional but preferred
import { Bar } from './a-raw-js-module.ts' // import from TS with extension
import { Bar } from './a-raw-js-module.js' // import from *existing* JS with extension
```

Conversely a `my-program.js` running in the same process would also work:

```js
import { Foo } from './another-ts-module.ts' // extension optional but preferred
```

## Caching

For faster loading, Ganesha provides a cache based on `cacache`.
This cache is controlled by the following environment variables:

* `GANESHA_CACHE_PATH`: path to cache store
* `GANESHA_CACHE_OFF`: set this to a non-empty value to disable caching

The cache store path defaults to a subdirectory of the user's cache root,
as returned by [`@folder/xdg`](https://www.npmjs.com/package/@folder/xdg).
For example, on desktop Linux, this would be `~/.cache/ganesha-v5`

To disable caching globally (for a given store path),
you can write a file in place of the caching directory, e.g.:

```sh
rm -rf ~/.cache/ganesha-v5
echo "delete this file to reenable caching" > ~/.cache/ganesha-v5
```

## Available backends

Ganesha can perform type stripping useing one of several available tools:

* [x] `@ganesha/oxc`: based on [Oxc, the Oxidation Compiler](https://github.com/oxc-project/oxc).
  Fast but no source maps yet (see [oxc#1045](https://github.com/oxc-project/oxc/issues/1045))
* [x] `@ganesha/esbuild-wasm`: based on [esbuild](https://github.com/evanw/esbuild).
  Slower (~2.5x), but source maps work out of the box. May dump Go stack trace to console
  (see [esbuild#1662](https://github.com/evanw/esbuild/issues/1662) and
  [go#59099](https://github.com/golang/go/issues/59099))
* [x] `@ganesha/esbuild`: based on [esbuild](https://github.com/evanw/esbuild).
  Depends on native binary, but unaffected by the above esbuild-wasm issue.
* [ ] `@ganesha/ezno`: possible future support for [ezno](https://github.com/kaleidawave/ezno)
  is under consideration.
* [ ] `@ganesha/swc`: possible future support for [swc](https://github.com/swc-project/swc)
  is under consideration.
* [ ] **TODO:** Use env var to switch between backends?
* [ ] **TODO:** Benchmark various backends
* [ ] **TODO:** Optional load-time type checking?

## Troubleshooting

To see what Ganesha is doing:

* `GANESHA_DEBUG`: set this environment variable to enable logging to stderr.

**TODO**.

## See also

At [Hack.bg](https://hack.bg), we primarily use Ganesha for developing
[Fadroma](https://fadroma.tech), a cross-chain framework for the CosmWasm ecosystem.

When it's time to publish your package, try **[Ubik](https://github.com/hackbg/ubik)**,
a complementary tool for publishing well-formed isomorphic ESM/CJS packages from TypeScript --
while avoiding all sorts of cruft that tends to accumulate at the interface boundary between
JS and TS (the kind of stuff that frontend bundlers shield you from, but raw Node doesn't).

## Benchmarks

**TODO**, contributions welcome.

---

<div align="right">

*"The very day I was born I made my first mistake,<br>
and by that path have I sought wisdom ever since."<br>
\- **William Buck**'s retelling of the **Mahabharata**<br>([source](https://hinduism.stackexchange.com/questions/16719/))*

</div>
