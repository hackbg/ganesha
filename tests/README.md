
# Ganesha


## Test Matrix Results

|Source module|Import type|Relation type|Target module|Node|Vite|
|-------------|-----------|-------------|-------------|-|-|
|Bare CJS|require|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Literate CJS|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_sibling_literate_cjs)|
|Bare CJS|require|sibling|Literate ESM|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_sibling_literate_esm)|
|Bare CJS|require|sibling|Literate TS|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_sibling_literate_ts)|
|Bare CJS|require|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Literate CJS|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_dependency_literate_cjs)|
|Bare CJS|require|dependency|Literate ESM|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_dependency_literate_esm)|
|Bare CJS|require|dependency|Literate TS|🟩 PASS|[❌ FAIL](#vite_bare_cjs_require_dependency_literate_ts)|
|Bare CJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Bare MJS|require|sibling|Bare CJS|[❌ FAIL](#node_bare_mjs_require_sibling_bare_cjs)|🟩 PASS|
|Bare MJS|require|sibling|Bare ESM|[❌ FAIL](#node_bare_mjs_require_sibling_bare_esm)|🟩 PASS|
|Bare MJS|require|sibling|Bare TS|[❌ FAIL](#node_bare_mjs_require_sibling_bare_ts)|🟩 PASS|
|Bare MJS|require|sibling|Literate CJS|[❌ FAIL](#node_bare_mjs_require_sibling_literate_cjs)|🟩 PASS|
|Bare MJS|require|sibling|Literate ESM|[❌ FAIL](#node_bare_mjs_require_sibling_literate_esm)|🟩 PASS|
|Bare MJS|require|sibling|Literate TS|[❌ FAIL](#node_bare_mjs_require_sibling_literate_ts)|🟩 PASS|
|Bare MJS|require|dependency|Bare CJS|[❌ FAIL](#node_bare_mjs_require_dependency_bare_cjs)|🟩 PASS|
|Bare MJS|require|dependency|Bare ESM|[❌ FAIL](#node_bare_mjs_require_dependency_bare_esm)|🟩 PASS|
|Bare MJS|require|dependency|Bare TS|[❌ FAIL](#node_bare_mjs_require_dependency_bare_ts)|🟩 PASS|
|Bare MJS|require|dependency|Literate CJS|[❌ FAIL](#node_bare_mjs_require_dependency_literate_cjs)|🟩 PASS|
|Bare MJS|require|dependency|Literate ESM|[❌ FAIL](#node_bare_mjs_require_dependency_literate_esm)|🟩 PASS|
|Bare MJS|require|dependency|Literate TS|[❌ FAIL](#node_bare_mjs_require_dependency_literate_ts)|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|require|sibling|Bare CJS|[❌ FAIL](#node_bare_ts_require_sibling_bare_cjs)|🟩 PASS|
|Bare TS|require|sibling|Bare ESM|[❌ FAIL](#node_bare_ts_require_sibling_bare_esm)|🟩 PASS|
|Bare TS|require|sibling|Bare TS|[❌ FAIL](#node_bare_ts_require_sibling_bare_ts)|🟩 PASS|
|Bare TS|require|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_require_sibling_literate_cjs)|🟩 PASS|
|Bare TS|require|sibling|Literate ESM|[❌ FAIL](#node_bare_ts_require_sibling_literate_esm)|🟩 PASS|
|Bare TS|require|sibling|Literate TS|[❌ FAIL](#node_bare_ts_require_sibling_literate_ts)|🟩 PASS|
|Bare TS|require|dependency|Bare CJS|[❌ FAIL](#node_bare_ts_require_dependency_bare_cjs)|🟩 PASS|
|Bare TS|require|dependency|Bare ESM|[❌ FAIL](#node_bare_ts_require_dependency_bare_esm)|🟩 PASS|
|Bare TS|require|dependency|Bare TS|[❌ FAIL](#node_bare_ts_require_dependency_bare_ts)|🟩 PASS|
|Bare TS|require|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_require_dependency_literate_cjs)|🟩 PASS|
|Bare TS|require|dependency|Literate ESM|[❌ FAIL](#node_bare_ts_require_dependency_literate_esm)|🟩 PASS|
|Bare TS|require|dependency|Literate TS|[❌ FAIL](#node_bare_ts_require_dependency_literate_ts)|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_import_type_sibling_literate_cjs)|[❌ FAIL](#vite_bare_ts_import_type_sibling_literate_cjs)|
|Bare TS|import type|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_import_type_dependency_literate_cjs)|[❌ FAIL](#vite_bare_ts_import_type_dependency_literate_cjs)|
|Bare TS|import type|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate MJS|require|sibling|Bare CJS|[❌ FAIL](#node_literate_mjs_require_sibling_bare_cjs)|🟩 PASS|
|Literate MJS|require|sibling|Bare ESM|[❌ FAIL](#node_literate_mjs_require_sibling_bare_esm)|🟩 PASS|
|Literate MJS|require|sibling|Bare TS|[❌ FAIL](#node_literate_mjs_require_sibling_bare_ts)|🟩 PASS|
|Literate MJS|require|sibling|Literate CJS|[❌ FAIL](#node_literate_mjs_require_sibling_literate_cjs)|🟩 PASS|
|Literate MJS|require|sibling|Literate ESM|[❌ FAIL](#node_literate_mjs_require_sibling_literate_esm)|🟩 PASS|
|Literate MJS|require|sibling|Literate TS|[❌ FAIL](#node_literate_mjs_require_sibling_literate_ts)|🟩 PASS|
|Literate MJS|require|dependency|Bare CJS|[❌ FAIL](#node_literate_mjs_require_dependency_bare_cjs)|🟩 PASS|
|Literate MJS|require|dependency|Bare ESM|[❌ FAIL](#node_literate_mjs_require_dependency_bare_esm)|🟩 PASS|
|Literate MJS|require|dependency|Bare TS|[❌ FAIL](#node_literate_mjs_require_dependency_bare_ts)|🟩 PASS|
|Literate MJS|require|dependency|Literate CJS|[❌ FAIL](#node_literate_mjs_require_dependency_literate_cjs)|🟩 PASS|
|Literate MJS|require|dependency|Literate ESM|[❌ FAIL](#node_literate_mjs_require_dependency_literate_esm)|🟩 PASS|
|Literate MJS|require|dependency|Literate TS|[❌ FAIL](#node_literate_mjs_require_dependency_literate_ts)|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|require|sibling|Bare CJS|[❌ FAIL](#node_literate_ts_require_sibling_bare_cjs)|🟩 PASS|
|Literate TS|require|sibling|Bare ESM|[❌ FAIL](#node_literate_ts_require_sibling_bare_esm)|🟩 PASS|
|Literate TS|require|sibling|Bare TS|[❌ FAIL](#node_literate_ts_require_sibling_bare_ts)|🟩 PASS|
|Literate TS|require|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_require_sibling_literate_cjs)|🟩 PASS|
|Literate TS|require|sibling|Literate ESM|[❌ FAIL](#node_literate_ts_require_sibling_literate_esm)|🟩 PASS|
|Literate TS|require|sibling|Literate TS|[❌ FAIL](#node_literate_ts_require_sibling_literate_ts)|🟩 PASS|
|Literate TS|require|dependency|Bare CJS|[❌ FAIL](#node_literate_ts_require_dependency_bare_cjs)|🟩 PASS|
|Literate TS|require|dependency|Bare ESM|[❌ FAIL](#node_literate_ts_require_dependency_bare_esm)|🟩 PASS|
|Literate TS|require|dependency|Bare TS|[❌ FAIL](#node_literate_ts_require_dependency_bare_ts)|🟩 PASS|
|Literate TS|require|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_require_dependency_literate_cjs)|🟩 PASS|
|Literate TS|require|dependency|Literate ESM|[❌ FAIL](#node_literate_ts_require_dependency_literate_esm)|🟩 PASS|
|Literate TS|require|dependency|Literate TS|[❌ FAIL](#node_literate_ts_require_dependency_literate_ts)|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_import_type_sibling_literate_cjs)|[❌ FAIL](#vite_literate_ts_import_type_sibling_literate_cjs)|
|Literate TS|import type|sibling|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Literate TS|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare CJS|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare ESM|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare TS|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_import_type_dependency_literate_cjs)|[❌ FAIL](#vite_literate_ts_import_type_dependency_literate_cjs)|
|Literate TS|import type|dependency|Literate ESM|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Literate TS|🟩 PASS|🟩 PASS|

## Test failures

### Vite_Bare_CJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.cjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.cjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Vite_Bare_CJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.mjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.mjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Vite_Bare_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.ts.md?commonjs-require";
6: import require$$1 from "\u0000./target.ts.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Vite_Bare_CJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Vite_Bare_CJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Vite_Bare_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Node_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_24_701Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_25_161Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_25_592Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_26_024Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_26_449Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_26_881Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_27_365Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_27_861Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_28_342Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_28_857Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_29_330Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_29_762Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_44_222Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_44_931Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_45_623Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_46_309Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_47_005Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_47_708Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_48_430Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_49_126Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_49_801Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_50_498Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_51_208Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_18_51_935Z-debug.log

```

### Node_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS/source.ts:2
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_12_872Z-debug.log

```

### Vite_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_sibling_Literate_CJS/source.ts:2:9
1: import process from "process";
2: import { exitCode } from "./target.cjs.md";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Node_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS/source.ts:2
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_17_299Z-debug.log

```

### Vite_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Bare_TS_import_type_dependency_Literate_CJS/source.ts:2:9
1: import process from "process";
2: import { exitCode } from "target";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Node_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_34_652Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_35_254Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_35_849Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_36_427Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_37_038Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_37_571Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_38_154Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_38_829Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_39_425Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_39_969Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_40_533Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3
const process = require('process')
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3:17
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_41_073Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_56_954Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_57_690Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_58_408Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_59_138Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_19_59_898Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_00_656Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_01_390Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_02_114Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_02_839Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_03_562Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_04_290Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1
var process = require('process');
              ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1:15
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_05_025Z-debug.log

```

### Node_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:2
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_26_392Z-debug.log

```

### Vite_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:2:9
1: import process from "process";
2: import { exitCode } from "./target.cjs.md";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Node_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:2
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2022-01-10T16_20_30_891Z-debug.log

```

### Vite_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
configFile { '--': [] } {}
doBuild {
  plugins: [
    {
      name: 'alias',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'vite:html-inline-script-proxy',
      resolveId: [Function: resolveId],
      buildStart: [Function: buildStart],
      load: [Function: load]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer],
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer],
      transform: [AsyncFunction: transform]
    },
    { name: 'vite:json', transform: [Function: transform] },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load]
    },
    {
      name: 'vite:worker',
      load: [Function: load],
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [AsyncFunction: load],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'rollup-plugin-ganesha',
      resolveId: [Function: resolveId],
      transform: [Function: transform]
    },
    { name: 'vite:define', transform: [Function: transform] },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      renderChunk: [AsyncFunction: renderChunk],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'vite:watch-package-data',
      buildStart: [Function: buildStart],
      buildEnd: [Function: buildEnd],
      watchChange: [Function: watchChange]
    },
    {
      name: 'vite:build-html',
      buildStart: [Function: buildStart],
      transform: [AsyncFunction: transform],
      generateBundle: [AsyncFunction: generateBundle]
    },
    {
      name: 'commonjs',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [Function: transform],
      moduleParsed: [Function: moduleParsed]
    },
    {
      name: 'vite:data-uri',
      buildStart: [Function: buildStart],
      resolveId: [Function: resolveId],
      load: [Function: load]
    },
    {
      name: 'rollup-plugin-dynamic-import-variables',
      transform: [Function: transform]
    },
    {
      name: 'vite:asset-import-meta-url',
      transform: [AsyncFunction: transform]
    },
    {
      name: 'vite:build-import-analysis',
      resolveId: [Function: resolveId],
      load: [Function: load],
      transform: [AsyncFunction: transform],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle]
    },
    {
      name: 'vite:esbuild-transpile',
      renderChunk: [AsyncFunction: renderChunk]
    },
    {
      name: 'vite:reporter',
      transform: [Function: transform],
      buildEnd: [Function: buildEnd],
      renderStart: [Function: renderStart],
      renderChunk: [Function: renderChunk],
      generateBundle: [Function: generateBundle],
      writeBundle: [AsyncFunction: writeBundle]
    },
    { name: 'vite:load-fallback', load: [AsyncFunction: load] }
  ],
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    polyfillModulePreload: true,
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/index.html'
    },
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array], extensions: [Array] },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array] }
  },
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/vite.config.js',
  configFileDependencies: [ '../../../rollup-plugin/index.js', 'vite.config.js' ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    build: {}
  },
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/node_modules/.vite',
  command: 'build',
  mode: 'production',
  isProduction: true,
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array], deny: [Array] }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined
  },
  env: { BASE_URL: '/', MODE: 'production', DEV: false, PROD: true },
  assetsInclude: [Function: assetsInclude],
  logger: {
    hasWarned: false,
    info: [Function: info],
    warn: [Function: warn],
    warnOnce: [Function: warnOnce],
    error: [Function: error],
    clearScreen: [Function: clearScreen],
    hasErrorLogged: [Function: hasErrorLogged]
  },
  packageCache: Map(0) { set: [Function (anonymous)] },
  createResolver: [Function: createResolver],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined }
  }
}
vite v2.7.10 building for production...
transforming...
✓ 5 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Vite_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:2:9
1: import process from "process";
2: import { exitCode } from "target";
            ^
3: const theExitCode = exitCode;
4: process.exit(theExitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```
