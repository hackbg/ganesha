
# Test failures

## TSC_Bare_CJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_44_517Z-debug.log

```

## TSC_Bare_CJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_45_223Z-debug.log

```

## TSC_Bare_CJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_46_083Z-debug.log

```

## Node_Bare_CJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_CJS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_46_314Z-debug.log

```

## TSC_Bare_CJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_46_810Z-debug.log

```

## Vite_Bare_CJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.cjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.cjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_47_536Z-debug.log

```

## Vite_Bare_CJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.mjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.mjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_48_421Z-debug.log

```

## Node_Bare_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_CJS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts.md] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_48_651Z-debug.log

```

## Vite_Bare_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.ts.md?commonjs-require";
6: import require$$1 from "\u0000./target.ts.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_49_148Z-debug.log

```

## TSC_Bare_CJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_49_869Z-debug.log

```

## TSC_Bare_CJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_50_748Z-debug.log

```

## Node_Bare_CJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_CJS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_50_977Z-debug.log

```

## TSC_Bare_CJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_51_466Z-debug.log

```

## Vite_Bare_CJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_52_194Z-debug.log

```

## Vite_Bare_CJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_53_103Z-debug.log

```

## Node_Bare_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_CJS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts.md] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_53_338Z-debug.log

```

## Vite_Bare_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_CJS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_53_837Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_54_552Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_55_267Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_56_129Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_56_885Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_57_644Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_58_551Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_59_270Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_40_59_989Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_00_857Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_01_620Z-debug.log

```

## TSC_Bare_CJS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_CJS_dynamic_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_02_381Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_03_283Z-debug.log

```

## Node_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_03_513Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_03_973Z-debug.log

```

## Node_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_04_198Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_04_663Z-debug.log

```

## Node_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_04_890Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_05_358Z-debug.log

```

## Node_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_05_583Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_06_043Z-debug.log

```

## Node_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_06_273Z-debug.log

```

## TSC_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_06_752Z-debug.log

```

## Node_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_06_977Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_07_450Z-debug.log

```

## Node_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_07_677Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_08_161Z-debug.log

```

## Node_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_08_396Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_08_866Z-debug.log

```

## Node_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_09_096Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_09_559Z-debug.log

```

## Node_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_09_785Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_10_247Z-debug.log

```

## Node_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_10_473Z-debug.log

```

## TSC_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_10_935Z-debug.log

```

## Node_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_11_166Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_11_640Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_12_366Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_13_081Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_13_956Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_14_713Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_15_475Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_16_387Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_17_126Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_17_842Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_18_719Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_19_513Z-debug.log

```

## TSC_Bare_MJS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_dynamic_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_20_288Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_21_204Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_21_929Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_22_639Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_23_494Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_24_238Z-debug.log

```

## TSC_Bare_MJS_static_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_24_983Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_25_885Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_26_590Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_27_304Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_28_158Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_28_915Z-debug.log

```

## TSC_Bare_MJS_static_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_MJS_static_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_29_670Z-debug.log

```

## TSC_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_30_573Z-debug.log

```

## Node_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_30_963Z-debug.log

```

## TSC_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_31_434Z-debug.log

```

## Node_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_31_815Z-debug.log

```

## TSC_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_32_298Z-debug.log

```

## Node_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_32_697Z-debug.log

```

## TSC_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_33_169Z-debug.log

```

## Node_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_33_561Z-debug.log

```

## TSC_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_34_036Z-debug.log

```

## Node_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_34_423Z-debug.log

```

## TSC_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_34_889Z-debug.log

```

## Node_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_35_274Z-debug.log

```

## TSC_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_35_757Z-debug.log

```

## Node_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_36_148Z-debug.log

```

## TSC_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_36_614Z-debug.log

```

## Node_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_37_002Z-debug.log

```

## TSC_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_37_474Z-debug.log

```

## Node_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_37_863Z-debug.log

```

## TSC_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_38_335Z-debug.log

```

## Node_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_38_717Z-debug.log

```

## TSC_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_39_194Z-debug.log

```

## Node_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_39_580Z-debug.log

```

## TSC_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Bare_TS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_40_056Z-debug.log

```

## Node_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_40_438Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_40_776Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_41_561Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_42_319Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_43_076Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_43_871Z-debug.log

```

## TSC_Bare_TS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_44_669Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_45_468Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_46_236Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_46_995Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_47_754Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_48_540Z-debug.log

```

## TSC_Bare_TS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_49_344Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_50_134Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_50_880Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_51_611Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_52_343Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_53_106Z-debug.log

```

## TSC_Bare_TS_static_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_53_902Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_54_684Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_55_440Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_56_174Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_56_913Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_57_702Z-debug.log

```

## TSC_Bare_TS_static_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_58_476Z-debug.log

```

## TSC_Bare_TS_import_type_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_41_59_259Z-debug.log

```

## TSC_Bare_TS_import_type_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_00_006Z-debug.log

```

## TSC_Bare_TS_import_type_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_00_751Z-debug.log

```

## TSC_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_01_488Z-debug.log

```

## Node_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_import_type_sibling_Literate_CJS/source.ts:2
import { exitCode } from "./target.cjs.md";
         ^^^^^^^^
SyntaxError: Named export 'exitCode' not found. The requested module './target.cjs.md' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from './target.cjs.md';
const { exitCode } = pkg;

    at ModuleJob._instantiate (internal/modules/esm/module_job.js:124:21)
    at ModuleJob.run (internal/modules/esm/module_job.js:179:5)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_01_878Z-debug.log

```

## Vite_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/source.ts:2:9
1: import process from "process";
2: import { exitCode } from "./target.cjs.md";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_TS_import_type_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_02_245Z-debug.log

```

## TSC_Bare_TS_import_type_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_03_017Z-debug.log

```

## TSC_Bare_TS_import_type_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_03_818Z-debug.log

```

## TSC_Bare_TS_import_type_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_04_558Z-debug.log

```

## TSC_Bare_TS_import_type_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_05_306Z-debug.log

```

## TSC_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_06_041Z-debug.log

```

## Node_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Bare_TS_import_type_dependency_Literate_CJS/source.ts:2
import { exitCode } from "target";
         ^^^^^^^^
SyntaxError: Named export 'exitCode' not found. The requested module 'target' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'target';
const { exitCode } = pkg;

    at ModuleJob._instantiate (internal/modules/esm/module_job.js:124:21)
    at ModuleJob.run (internal/modules/esm/module_job.js:179:5)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_06_431Z-debug.log

```

## Vite_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/source.ts:2:9
1: import process from "process";
2: import { exitCode } from "target";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Bare_TS_import_type_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_06_787Z-debug.log

```

## TSC_Bare_TS_import_type_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_07_596Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_08_537Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_09_340Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_10_270Z-debug.log

```

## Node_Literate_CJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_CJS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_10_515Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_11_033Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_11_766Z-debug.log

```

## TSC_Literate_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_12_702Z-debug.log

```

## Node_Literate_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_CJS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts.md] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_12_948Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_13_499Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_14_330Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_15_301Z-debug.log

```

## Node_Literate_CJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_CJS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_15_597Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_16_171Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_17_024Z-debug.log

```

## TSC_Literate_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_18_022Z-debug.log

```

## Node_Literate_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_CJS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:902
  const err = new Error(message);
              ^

Error: Cannot find module 'esbuild'
Require stack:
- /home/user/Lab/5/ganesha.release/src/core/transform.cjs
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.esbuildToCjs (/home/user/Lab/5/ganesha.release/src/core/transform.cjs:26:45)
    at compile (/home/user/Lab/5/ganesha.release/src/node/loader.cjs:35:72)
    at Module._compile (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:130:29)
    at Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
    at Object.newLoader [as .ts.md] (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/pirates@4.0.4/node_modules/pirates/lib/index.js:141:7)
    at Module.load (internal/modules/cjs/loader.js:950:32) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/home/user/Lab/5/ganesha.release/src/core/transform.cjs' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_18_263Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_18_826Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_19_610Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_20_510Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_21_528Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_22_319Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_23_128Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_24_034Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_24_820Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_25_581Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_26_597Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_27_416Z-debug.log

```

## TSC_Literate_CJS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_CJS_dynamic_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.cjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_28_205Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_29_150Z-debug.log

```

## Node_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_29_398Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_29_922Z-debug.log

```

## Node_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_30_194Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_30_726Z-debug.log

```

## Node_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_30_961Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_31_481Z-debug.log

```

## Node_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_31_720Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_32_296Z-debug.log

```

## Node_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_32_532Z-debug.log

```

## TSC_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_33_046Z-debug.log

```

## Node_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_33_312Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_33_828Z-debug.log

```

## Node_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_34_075Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_34_612Z-debug.log

```

## Node_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_34_847Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_35_419Z-debug.log

```

## Node_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_35_664Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_36_275Z-debug.log

```

## Node_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_36_536Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_37_125Z-debug.log

```

## Node_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_37_359Z-debug.log

```

## TSC_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_37_878Z-debug.log

```

## Node_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_38_116Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_38_640Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_39_481Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_40_258Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_41_199Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_42_004Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_42_823Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_43_858Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_44_728Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_45_492Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_46_442Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_47_287Z-debug.log

```

## TSC_Literate_MJS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_dynamic_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_48_097Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_49_097Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_49_884Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_50_657Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_51_618Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_52_478Z-debug.log

```

## TSC_Literate_MJS_static_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_53_261Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_54_164Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_55_025Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_55_818Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_56_872Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_57_676Z-debug.log

```

## TSC_Literate_MJS_static_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_MJS_static_import_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_58_524Z-debug.log

```

## TSC_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_42_59_557Z-debug.log

```

## Node_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_00_000Z-debug.log

```

## TSC_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_00_668Z-debug.log

```

## Node_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_01_240Z-debug.log

```

## TSC_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_01_846Z-debug.log

```

## Node_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_02_264Z-debug.log

```

## TSC_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_02_863Z-debug.log

```

## Node_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_03_265Z-debug.log

```

## TSC_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_03_783Z-debug.log

```

## Node_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_04_166Z-debug.log

```

## TSC_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_sibling_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_04_765Z-debug.log

```

## Node_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_05_180Z-debug.log

```

## TSC_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Bare_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_05_747Z-debug.log

```

## Node_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_06_221Z-debug.log

```

## TSC_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Bare_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_06_779Z-debug.log

```

## Node_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_07_181Z-debug.log

```

## TSC_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Bare_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_07_683Z-debug.log

```

## Node_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_08_082Z-debug.log

```

## TSC_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Literate_CJS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_08_625Z-debug.log

```

## Node_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_09_022Z-debug.log

```

## TSC_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Literate_ESM
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_09_554Z-debug.log

```

## Node_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_09_983Z-debug.log

```

## TSC_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ build /home/user/Lab/5/ganesha.release/test/cases/TSC_Literate_TS_require_dependency_Literate_TS
> rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md


```

Stderr
```
internal/modules/cjs/loader.js:905
  throw err;
  ^

Error: Cannot find module '/home/user/Lab/5/ganesha.release/src/tsc/proxy.js'
Require stack:
- /home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js
- /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:902:15)
    at Function.Module._load (internal/modules/cjs/loader.js:746:27)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:93:18)
    at Object.createProgram (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:93628:118)
    at performCompilation (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101963:26)
    at executeCommandLineWorker (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101866:17)
    at Object.executeCommandLine (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:101893:20)
    at Object.<anonymous> (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js:102187:4)
    at Module._compile (internal/modules/cjs/loader.js:1085:14) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/user/Lab/5/ganesha.release/node_modules/.pnpm/typescript@4.5.4/node_modules/typescript/lib/tsc.js',
    '/home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc'
  ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ build: `rm -rf dist && mkdir -p dist && /home/user/Lab/5/ganesha.release/src/tsc/ganesha-tsc --outDir dist source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_10_510Z-debug.log

```

## Node_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_TS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_10_893Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_11_281Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_12_064Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_12_915Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_13_745Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_14_562Z-debug.log

```

## TSC_Literate_TS_dynamic_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_15_409Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_16_275Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_17_106Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_17_954Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_18_784Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_19_646Z-debug.log

```

## TSC_Literate_TS_dynamic_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_20_455Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_21_290Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_22_076Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_22_891Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_23_676Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_24_545Z-debug.log

```

## TSC_Literate_TS_static_import_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_25_396Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_26_194Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_26_981Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_27_781Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_28_559Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_29_374Z-debug.log

```

## TSC_Literate_TS_static_import_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_30_278Z-debug.log

```

## TSC_Literate_TS_import_type_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_31_082Z-debug.log

```

## TSC_Literate_TS_import_type_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_31_910Z-debug.log

```

## TSC_Literate_TS_import_type_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_32_709Z-debug.log

```

## TSC_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_33_470Z-debug.log

```

## Node_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:2
import { exitCode } from "./target.cjs.md";
         ^^^^^^^^
SyntaxError: Named export 'exitCode' not found. The requested module './target.cjs.md' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from './target.cjs.md';
const { exitCode } = pkg;

    at ModuleJob._instantiate (internal/modules/esm/module_job.js:124:21)
    at ModuleJob.run (internal/modules/esm/module_job.js:179:5)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_33_857Z-debug.log

```

## Vite_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:2:9
1: import process from "process";
2: import { exitCode } from "./target.cjs.md";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Literate_TS_import_type_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_34_223Z-debug.log

```

## TSC_Literate_TS_import_type_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_35_017Z-debug.log

```

## TSC_Literate_TS_import_type_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_35_866Z-debug.log

```

## TSC_Literate_TS_import_type_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_36_676Z-debug.log

```

## TSC_Literate_TS_import_type_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_37_432Z-debug.log

```

## TSC_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_38_266Z-debug.log

```

## Node_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/ganesha.release/test/cases/Node_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:2
import { exitCode } from "target";
         ^^^^^^^^
SyntaxError: Named export 'exitCode' not found. The requested module 'target' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'target';
const { exitCode } = pkg;

    at ModuleJob._instantiate (internal/modules/esm/module_job.js:124:21)
    at ModuleJob.run (internal/modules/esm/module_job.js:179:5)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/ganesha.release/src/node/ganesha-node --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_38_678Z-debug.log

```

## Vite_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
??? 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/ganesha.release/test/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:2:9
1: import process from "process";
2: import { exitCode } from "target";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha.release/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

## TSC_Literate_TS_import_type_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_39_072Z-debug.log

```

## TSC_Literate_TS_import_type_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

```

Stderr
```
npm ERR! missing script: build

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-12T16_43_39_875Z-debug.log

```
