<div align="center">

![Ganesha](ganesha.svg)

**Collection of fast TypeScript loaders.**

[![](https://img.shields.io/npm/v/@hackbg/ganesha?color=%23f68f21&style=for-the-badge&label=@hackbg/ganesha)](https://www.npmjs.com/package/@hackbg/ganesha)
[![](https://img.shields.io/npm/v/@ganesha/esbuild?color=%23f68f21&style=for-the-badge&label=@ganesha/esbuild)](https://www.npmjs.com/package/@ganesha/esbuild)
[![](https://img.shields.io/npm/v/@ganesha/oxc?color=%23f68f21&style=for-the-badge&label=@ganesha/oxc)](https://www.npmjs.com/package/@ganesha/oxc)

Made with [🧡](mailto:hello@hack.bg) at [Hack.bg](https://hack.bg).

</div>

---

## Backends

* [x] `@ganesha/oxc`: based on [Oxc, the Oxidation Compiler](https://github.com/oxc-project/oxc).
  Fast but no source maps yet (see [oxc#1045](https://github.com/oxc-project/oxc/issues/1045))
* [x] `@ganesha/esbuild`: based on [esbuild](https://github.com/evanw/esbuild).
  Slower (~2.5x), but source maps work out of the box.
* [ ] `@ganesha/ezno`: possible future support for [ezno](https://github.com/kaleidawave/ezno)
  is under consideration.

### Benchmarks

**TODO**, contributions welcome.

## How to use

Install with:

```sh
npm i --save @ganesha/oxc # or @ganesha/esbuild
```

Use from shell:

```sh
node --import @ganesha/oxc ./my-program.ts # or @ganesha/esbuild
```

Use from script:

```js
await import("@ganesha/oxc") // or @ganesha/esbuild
await import("./my-program") // note that it works with no extension
```

The TypeScript program in question:

```ts
// my-program.ts
import { Foo } from './another-ts-module' // no extension required!
import { Bar } from './a-raw-js-module.js' // import from JS with extension
```

And it works both ways:

```js
// my-program.js
import { Foo } from './another-ts-module.ts' // extension optional but preferred
```

### Switching between backends

**TODO**.

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

## Troubleshooting

To see what Ganesha is doing:

* `GANESHA_DEBUG`: set this environment variable to enable logging to stderr.

**TODO**.

## See also

At [Hack.bg](https://hack.bg), we primarily use Ganesha for developing
[Fadroma](https://fadroma.tech), a cross-chain framework for the CosmWasm ecosystem.

When it's time to publish a package, we switch over to **[Ubik](https://github.com/hackbg/ubik)**,
a complementary tool for publishing well-formed ESM packages from TypeScript while avoiding
the nastiness of how `tsc` chooses to (more like "refuses to") handle extensions
of `import`ed modules.

---

<div align="right">

*"The very day I was born I made my first mistake,
and by that path have I sought wisdom ever since."<br>
\- **William Buck**'s retelling of the **Mahabharata** ([source](https://hinduism.stackexchange.com/questions/16719/))*

</div>
