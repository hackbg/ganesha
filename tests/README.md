
# Test matrix results


|Source module|Import type|Relation type|Target module|[TSC](../tsc)|[Node](../nodejs-loader)|[Vite](../rollup-plugin)|
|-------------|-----------|-------------|-------------|---|---|---|
|Bare CJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare CJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_cjs)|
|Bare CJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_esm)|
|Bare CJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_ts)|
|Bare CJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare CJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_cjs)|
|Bare CJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_esm)|
|Bare CJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_ts)|
|Bare CJS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare CJS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_cjs)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_cjs)|🟩 PASS|
|Bare MJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_esm)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_esm)|🟩 PASS|
|Bare MJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_ts)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_ts)|🟩 PASS|
|Bare MJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_cjs)|🟩 PASS|
|Bare MJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_esm)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_esm)|🟩 PASS|
|Bare MJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_ts)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_ts)|🟩 PASS|
|Bare MJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_cjs)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_cjs)|🟩 PASS|
|Bare MJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_esm)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_esm)|🟩 PASS|
|Bare MJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_ts)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_ts)|🟩 PASS|
|Bare MJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_cjs)|🟩 PASS|
|Bare MJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_esm)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_esm)|🟩 PASS|
|Bare MJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_ts)|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_ts)|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare MJS|static import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_cjs)|🟩 PASS|
|Bare TS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_esm)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_esm)|🟩 PASS|
|Bare TS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_ts)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_ts)|🟩 PASS|
|Bare TS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_cjs)|🟩 PASS|
|Bare TS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_esm)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_esm)|🟩 PASS|
|Bare TS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_ts)|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_ts)|🟩 PASS|
|Bare TS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_cjs)|🟩 PASS|
|Bare TS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_esm)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_esm)|🟩 PASS|
|Bare TS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_ts)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_ts)|🟩 PASS|
|Bare TS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_cjs)|🟩 PASS|
|Bare TS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_esm)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_esm)|🟩 PASS|
|Bare TS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_ts)|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_ts)|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|static import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|static import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#vite_bare_ts_import_type_sibling_literate_cjs)|
|Bare TS|import type|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|import type|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_bare_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#vite_bare_ts_import_type_dependency_literate_cjs)|
|Bare TS|import type|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Bare TS|import type|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate CJS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_cjs)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_cjs)|🟩 PASS|
|Literate MJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_esm)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_esm)|🟩 PASS|
|Literate MJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_ts)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_ts)|🟩 PASS|
|Literate MJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_cjs)|🟩 PASS|
|Literate MJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_esm)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_esm)|🟩 PASS|
|Literate MJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_ts)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_ts)|🟩 PASS|
|Literate MJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_cjs)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_cjs)|🟩 PASS|
|Literate MJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_esm)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_esm)|🟩 PASS|
|Literate MJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_ts)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_ts)|🟩 PASS|
|Literate MJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_cjs)|🟩 PASS|
|Literate MJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_esm)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_esm)|🟩 PASS|
|Literate MJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_ts)|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_ts)|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate MJS|static import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_cjs)|🟩 PASS|
|Literate TS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_esm)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_esm)|🟩 PASS|
|Literate TS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_ts)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_ts)|🟩 PASS|
|Literate TS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_cjs)|🟩 PASS|
|Literate TS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_esm)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_esm)|🟩 PASS|
|Literate TS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_ts)|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_ts)|🟩 PASS|
|Literate TS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_cjs)|🟩 PASS|
|Literate TS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_esm)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_esm)|🟩 PASS|
|Literate TS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_ts)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_ts)|🟩 PASS|
|Literate TS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_cjs)|🟩 PASS|
|Literate TS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_esm)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_esm)|🟩 PASS|
|Literate TS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_ts)|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_ts)|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|dynamic import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|static import|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|static import|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#vite_literate_ts_import_type_sibling_literate_cjs)|
|Literate TS|import type|sibling|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|import type|sibling|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_ts)|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_cjs)|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_esm)|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Bare TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_ts)|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Literate CJS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#node_literate_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#vite_literate_ts_import_type_dependency_literate_cjs)|
|Literate TS|import type|dependency|Literate ESM|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_esm)|🟩 PASS|🟩 PASS|
|Literate TS|import type|dependency|Literate TS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_ts)|🟩 PASS|🟩 PASS|
