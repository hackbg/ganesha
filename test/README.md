
# Test matrix results


|Source module|Import type|Relation type|Target module|[Node](../nodejs-loader)|[Vite](../rollup-plugin)|[TSC](../tsc)|
|-------------|-----------|-------------|-------------|---|---|---|
|Bare CJS|require|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_cjs)|
|Bare CJS|require|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_esm)|
|Bare CJS|require|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_bare_ts)|
|Bare CJS|require|sibling|Literate CJS|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_cjs)|
|Bare CJS|require|sibling|Literate ESM|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_esm)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_esm)|
|Bare CJS|require|sibling|Literate TS|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_sibling_literate_ts)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_sibling_literate_ts)|
|Bare CJS|require|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_cjs)|
|Bare CJS|require|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_esm)|
|Bare CJS|require|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_bare_ts)|
|Bare CJS|require|dependency|Literate CJS|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_cjs)|
|Bare CJS|require|dependency|Literate ESM|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_esm)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_esm)|
|Bare CJS|require|dependency|Literate TS|🟩 PASS|[❌ FAIL](./FAIL.md#vite_bare_cjs_require_dependency_literate_ts)|[❌ FAIL](./FAIL.md#tsc_bare_cjs_require_dependency_literate_ts)|
|Bare CJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_cjs)|
|Bare CJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_esm)|
|Bare CJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_bare_ts)|
|Bare CJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_cjs)|
|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_esm)|
|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_sibling_literate_ts)|
|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_cjs)|
|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_esm)|
|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_bare_ts)|
|Bare CJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_cjs)|
|Bare CJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_esm)|
|Bare CJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_cjs_dynamic_import_dependency_literate_ts)|
|Bare MJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_cjs)|
|Bare MJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_esm)|
|Bare MJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_bare_ts)|
|Bare MJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_cjs)|
|Bare MJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_esm)|
|Bare MJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_sibling_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_sibling_literate_ts)|
|Bare MJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_cjs)|
|Bare MJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_esm)|
|Bare MJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_bare_ts)|
|Bare MJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_cjs)|
|Bare MJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_esm)|
|Bare MJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#node_bare_mjs_require_dependency_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_require_dependency_literate_ts)|
|Bare MJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_cjs)|
|Bare MJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_esm)|
|Bare MJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_bare_ts)|
|Bare MJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_cjs)|
|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_esm)|
|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_sibling_literate_ts)|
|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_cjs)|
|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_esm)|
|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_bare_ts)|
|Bare MJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_cjs)|
|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_esm)|
|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_dynamic_import_dependency_literate_ts)|
|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_cjs)|
|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_esm)|
|Bare MJS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_bare_ts)|
|Bare MJS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_cjs)|
|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_esm)|
|Bare MJS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_sibling_literate_ts)|
|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_cjs)|
|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_esm)|
|Bare MJS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_bare_ts)|
|Bare MJS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_cjs)|
|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_esm)|
|Bare MJS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_mjs_static_import_dependency_literate_ts)|
|Bare TS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_cjs)|
|Bare TS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_esm)|
|Bare TS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_bare_ts)|
|Bare TS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_cjs)|
|Bare TS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_esm)|
|Bare TS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#node_bare_ts_require_sibling_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_sibling_literate_ts)|
|Bare TS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_cjs)|
|Bare TS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_esm)|
|Bare TS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_bare_ts)|
|Bare TS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_cjs)|
|Bare TS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_esm)|
|Bare TS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#node_bare_ts_require_dependency_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_require_dependency_literate_ts)|
|Bare TS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_cjs)|
|Bare TS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_esm)|
|Bare TS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_bare_ts)|
|Bare TS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_cjs)|
|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_esm)|
|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_sibling_literate_ts)|
|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_cjs)|
|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_esm)|
|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_bare_ts)|
|Bare TS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_cjs)|
|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_esm)|
|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_dynamic_import_dependency_literate_ts)|
|Bare TS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_cjs)|
|Bare TS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_esm)|
|Bare TS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_bare_ts)|
|Bare TS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_cjs)|
|Bare TS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_esm)|
|Bare TS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_sibling_literate_ts)|
|Bare TS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_cjs)|
|Bare TS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_esm)|
|Bare TS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_bare_ts)|
|Bare TS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_cjs)|
|Bare TS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_esm)|
|Bare TS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_static_import_dependency_literate_ts)|
|Bare TS|import type|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_cjs)|
|Bare TS|import type|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_esm)|
|Bare TS|import type|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_bare_ts)|
|Bare TS|import type|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#vite_bare_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_cjs)|
|Bare TS|import type|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_esm)|
|Bare TS|import type|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_sibling_literate_ts)|
|Bare TS|import type|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_cjs)|
|Bare TS|import type|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_esm)|
|Bare TS|import type|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_bare_ts)|
|Bare TS|import type|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_bare_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#vite_bare_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_cjs)|
|Bare TS|import type|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_esm)|
|Bare TS|import type|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_bare_ts_import_type_dependency_literate_ts)|
|Literate CJS|require|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_cjs)|
|Literate CJS|require|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_esm)|
|Literate CJS|require|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_bare_ts)|
|Literate CJS|require|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_cjs)|
|Literate CJS|require|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_esm)|
|Literate CJS|require|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_sibling_literate_ts)|
|Literate CJS|require|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_cjs)|
|Literate CJS|require|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_esm)|
|Literate CJS|require|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_bare_ts)|
|Literate CJS|require|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_cjs)|
|Literate CJS|require|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_esm)|
|Literate CJS|require|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_require_dependency_literate_ts)|
|Literate CJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_cjs)|
|Literate CJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_esm)|
|Literate CJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_bare_ts)|
|Literate CJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_cjs)|
|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_esm)|
|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_sibling_literate_ts)|
|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_cjs)|
|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_esm)|
|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_bare_ts)|
|Literate CJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_cjs)|
|Literate CJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_esm)|
|Literate CJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_cjs_dynamic_import_dependency_literate_ts)|
|Literate MJS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_cjs)|
|Literate MJS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_esm)|
|Literate MJS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_bare_ts)|
|Literate MJS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_cjs)|
|Literate MJS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_esm)|
|Literate MJS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_sibling_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_sibling_literate_ts)|
|Literate MJS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_cjs)|
|Literate MJS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_esm)|
|Literate MJS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_bare_ts)|
|Literate MJS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_cjs)|
|Literate MJS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_esm)|
|Literate MJS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#node_literate_mjs_require_dependency_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_require_dependency_literate_ts)|
|Literate MJS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_cjs)|
|Literate MJS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_esm)|
|Literate MJS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_bare_ts)|
|Literate MJS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_cjs)|
|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_esm)|
|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_sibling_literate_ts)|
|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_cjs)|
|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_esm)|
|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_bare_ts)|
|Literate MJS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_cjs)|
|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_esm)|
|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_dynamic_import_dependency_literate_ts)|
|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_cjs)|
|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_esm)|
|Literate MJS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_bare_ts)|
|Literate MJS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_cjs)|
|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_esm)|
|Literate MJS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_sibling_literate_ts)|
|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_cjs)|
|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_esm)|
|Literate MJS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_bare_ts)|
|Literate MJS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_cjs)|
|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_esm)|
|Literate MJS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_mjs_static_import_dependency_literate_ts)|
|Literate TS|require|sibling|Bare CJS|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_cjs)|
|Literate TS|require|sibling|Bare ESM|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_esm)|
|Literate TS|require|sibling|Bare TS|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_bare_ts)|
|Literate TS|require|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_cjs)|
|Literate TS|require|sibling|Literate ESM|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_esm)|
|Literate TS|require|sibling|Literate TS|[❌ FAIL](./FAIL.md#node_literate_ts_require_sibling_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_sibling_literate_ts)|
|Literate TS|require|dependency|Bare CJS|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_cjs)|
|Literate TS|require|dependency|Bare ESM|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_esm)|
|Literate TS|require|dependency|Bare TS|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_bare_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_bare_ts)|
|Literate TS|require|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_cjs)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_cjs)|
|Literate TS|require|dependency|Literate ESM|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_esm)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_esm)|
|Literate TS|require|dependency|Literate TS|[❌ FAIL](./FAIL.md#node_literate_ts_require_dependency_literate_ts)|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_require_dependency_literate_ts)|
|Literate TS|dynamic import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_cjs)|
|Literate TS|dynamic import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_esm)|
|Literate TS|dynamic import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_bare_ts)|
|Literate TS|dynamic import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_cjs)|
|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_esm)|
|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_sibling_literate_ts)|
|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_cjs)|
|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_esm)|
|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_bare_ts)|
|Literate TS|dynamic import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_cjs)|
|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_esm)|
|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_dynamic_import_dependency_literate_ts)|
|Literate TS|static import|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_cjs)|
|Literate TS|static import|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_esm)|
|Literate TS|static import|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_bare_ts)|
|Literate TS|static import|sibling|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_cjs)|
|Literate TS|static import|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_esm)|
|Literate TS|static import|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_sibling_literate_ts)|
|Literate TS|static import|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_cjs)|
|Literate TS|static import|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_esm)|
|Literate TS|static import|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_bare_ts)|
|Literate TS|static import|dependency|Literate CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_cjs)|
|Literate TS|static import|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_esm)|
|Literate TS|static import|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_static_import_dependency_literate_ts)|
|Literate TS|import type|sibling|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_cjs)|
|Literate TS|import type|sibling|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_esm)|
|Literate TS|import type|sibling|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_bare_ts)|
|Literate TS|import type|sibling|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#vite_literate_ts_import_type_sibling_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_cjs)|
|Literate TS|import type|sibling|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_esm)|
|Literate TS|import type|sibling|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_sibling_literate_ts)|
|Literate TS|import type|dependency|Bare CJS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_cjs)|
|Literate TS|import type|dependency|Bare ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_esm)|
|Literate TS|import type|dependency|Bare TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_bare_ts)|
|Literate TS|import type|dependency|Literate CJS|[❌ FAIL](./FAIL.md#node_literate_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#vite_literate_ts_import_type_dependency_literate_cjs)|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_cjs)|
|Literate TS|import type|dependency|Literate ESM|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_esm)|
|Literate TS|import type|dependency|Literate TS|🟩 PASS|🟩 PASS|[❌ FAIL](./FAIL.md#tsc_literate_ts_import_type_dependency_literate_ts)|
