
# Ganesha


## Test Matrix Results

|Environment|Source module|Import type|Relation type|Target module|Result|
|-----------|-------------|-----------|-------------|-------------|------|
|Node|Bare CJS|require|sibling|Bare CJS|🟩 PASS|
|Node|Bare CJS|require|sibling|Bare ESM|🟩 PASS|
|Node|Bare CJS|require|sibling|Bare TS|🟩 PASS|
|Node|Bare CJS|require|sibling|Literate CJS|🟩 PASS|
|Node|Bare CJS|require|sibling|Literate ESM|🟩 PASS|
|Node|Bare CJS|require|sibling|Literate TS|🟩 PASS|
|Node|Bare CJS|require|dependency|Bare CJS|🟩 PASS|
|Node|Bare CJS|require|dependency|Bare ESM|🟩 PASS|
|Node|Bare CJS|require|dependency|Bare TS|🟩 PASS|
|Node|Bare CJS|require|dependency|Literate CJS|🟩 PASS|
|Node|Bare CJS|require|dependency|Literate ESM|🟩 PASS|
|Node|Bare CJS|require|dependency|Literate TS|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_bare_cjs_dynamic_import_sibling_literate_cjs)|
|Node|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_bare_cjs_dynamic_import_dependency_literate_cjs)|
|Node|Bare CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare MJS|require|sibling|Bare CJS|[❌ FAIL](#node_bare_mjs_require_sibling_bare_cjs)|
|Node|Bare MJS|require|sibling|Bare ESM|[❌ FAIL](#node_bare_mjs_require_sibling_bare_esm)|
|Node|Bare MJS|require|sibling|Bare TS|[❌ FAIL](#node_bare_mjs_require_sibling_bare_ts)|
|Node|Bare MJS|require|sibling|Literate CJS|[❌ FAIL](#node_bare_mjs_require_sibling_literate_cjs)|
|Node|Bare MJS|require|sibling|Literate ESM|[❌ FAIL](#node_bare_mjs_require_sibling_literate_esm)|
|Node|Bare MJS|require|sibling|Literate TS|[❌ FAIL](#node_bare_mjs_require_sibling_literate_ts)|
|Node|Bare MJS|require|dependency|Bare CJS|[❌ FAIL](#node_bare_mjs_require_dependency_bare_cjs)|
|Node|Bare MJS|require|dependency|Bare ESM|[❌ FAIL](#node_bare_mjs_require_dependency_bare_esm)|
|Node|Bare MJS|require|dependency|Bare TS|[❌ FAIL](#node_bare_mjs_require_dependency_bare_ts)|
|Node|Bare MJS|require|dependency|Literate CJS|[❌ FAIL](#node_bare_mjs_require_dependency_literate_cjs)|
|Node|Bare MJS|require|dependency|Literate ESM|[❌ FAIL](#node_bare_mjs_require_dependency_literate_esm)|
|Node|Bare MJS|require|dependency|Literate TS|[❌ FAIL](#node_bare_mjs_require_dependency_literate_ts)|
|Node|Bare MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_bare_mjs_dynamic_import_sibling_literate_cjs)|
|Node|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_bare_mjs_dynamic_import_dependency_literate_cjs)|
|Node|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate CJS|[❌ FAIL](#node_bare_mjs_static_import_sibling_literate_cjs)|
|Node|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Literate CJS|[❌ FAIL](#node_bare_mjs_static_import_dependency_literate_cjs)|
|Node|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Bare MJS|static import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|require|sibling|Bare CJS|[❌ FAIL](#node_bare_ts_require_sibling_bare_cjs)|
|Node|Bare TS|require|sibling|Bare ESM|[❌ FAIL](#node_bare_ts_require_sibling_bare_esm)|
|Node|Bare TS|require|sibling|Bare TS|[❌ FAIL](#node_bare_ts_require_sibling_bare_ts)|
|Node|Bare TS|require|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_require_sibling_literate_cjs)|
|Node|Bare TS|require|sibling|Literate ESM|[❌ FAIL](#node_bare_ts_require_sibling_literate_esm)|
|Node|Bare TS|require|sibling|Literate TS|[❌ FAIL](#node_bare_ts_require_sibling_literate_ts)|
|Node|Bare TS|require|dependency|Bare CJS|[❌ FAIL](#node_bare_ts_require_dependency_bare_cjs)|
|Node|Bare TS|require|dependency|Bare ESM|[❌ FAIL](#node_bare_ts_require_dependency_bare_esm)|
|Node|Bare TS|require|dependency|Bare TS|[❌ FAIL](#node_bare_ts_require_dependency_bare_ts)|
|Node|Bare TS|require|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_require_dependency_literate_cjs)|
|Node|Bare TS|require|dependency|Literate ESM|[❌ FAIL](#node_bare_ts_require_dependency_literate_esm)|
|Node|Bare TS|require|dependency|Literate TS|[❌ FAIL](#node_bare_ts_require_dependency_literate_ts)|
|Node|Bare TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_dynamic_import_sibling_literate_cjs)|
|Node|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_dynamic_import_dependency_literate_cjs)|
|Node|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_static_import_sibling_literate_cjs)|
|Node|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_static_import_dependency_literate_cjs)|
|Node|Bare TS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|static import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|import type|sibling|Literate CJS|[❌ FAIL](#node_bare_ts_import_type_sibling_literate_cjs)|
|Node|Bare TS|import type|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|import type|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|import type|dependency|Literate CJS|[❌ FAIL](#node_bare_ts_import_type_dependency_literate_cjs)|
|Node|Bare TS|import type|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|import type|dependency|Literate TS|🟩 PASS|
|Node|Literate CJS|require|sibling|Bare CJS|🟩 PASS|
|Node|Literate CJS|require|sibling|Bare ESM|🟩 PASS|
|Node|Literate CJS|require|sibling|Bare TS|🟩 PASS|
|Node|Literate CJS|require|sibling|Literate CJS|🟩 PASS|
|Node|Literate CJS|require|sibling|Literate ESM|🟩 PASS|
|Node|Literate CJS|require|sibling|Literate TS|🟩 PASS|
|Node|Literate CJS|require|dependency|Bare CJS|🟩 PASS|
|Node|Literate CJS|require|dependency|Bare ESM|🟩 PASS|
|Node|Literate CJS|require|dependency|Bare TS|🟩 PASS|
|Node|Literate CJS|require|dependency|Literate CJS|🟩 PASS|
|Node|Literate CJS|require|dependency|Literate ESM|🟩 PASS|
|Node|Literate CJS|require|dependency|Literate TS|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_literate_cjs_dynamic_import_sibling_literate_cjs)|
|Node|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_literate_cjs_dynamic_import_dependency_literate_cjs)|
|Node|Literate CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate MJS|require|sibling|Bare CJS|[❌ FAIL](#node_literate_mjs_require_sibling_bare_cjs)|
|Node|Literate MJS|require|sibling|Bare ESM|[❌ FAIL](#node_literate_mjs_require_sibling_bare_esm)|
|Node|Literate MJS|require|sibling|Bare TS|[❌ FAIL](#node_literate_mjs_require_sibling_bare_ts)|
|Node|Literate MJS|require|sibling|Literate CJS|[❌ FAIL](#node_literate_mjs_require_sibling_literate_cjs)|
|Node|Literate MJS|require|sibling|Literate ESM|[❌ FAIL](#node_literate_mjs_require_sibling_literate_esm)|
|Node|Literate MJS|require|sibling|Literate TS|[❌ FAIL](#node_literate_mjs_require_sibling_literate_ts)|
|Node|Literate MJS|require|dependency|Bare CJS|[❌ FAIL](#node_literate_mjs_require_dependency_bare_cjs)|
|Node|Literate MJS|require|dependency|Bare ESM|[❌ FAIL](#node_literate_mjs_require_dependency_bare_esm)|
|Node|Literate MJS|require|dependency|Bare TS|[❌ FAIL](#node_literate_mjs_require_dependency_bare_ts)|
|Node|Literate MJS|require|dependency|Literate CJS|[❌ FAIL](#node_literate_mjs_require_dependency_literate_cjs)|
|Node|Literate MJS|require|dependency|Literate ESM|[❌ FAIL](#node_literate_mjs_require_dependency_literate_esm)|
|Node|Literate MJS|require|dependency|Literate TS|[❌ FAIL](#node_literate_mjs_require_dependency_literate_ts)|
|Node|Literate MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_literate_mjs_dynamic_import_sibling_literate_cjs)|
|Node|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_literate_mjs_dynamic_import_dependency_literate_cjs)|
|Node|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate CJS|[❌ FAIL](#node_literate_mjs_static_import_sibling_literate_cjs)|
|Node|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Literate CJS|[❌ FAIL](#node_literate_mjs_static_import_dependency_literate_cjs)|
|Node|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Literate MJS|static import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|require|sibling|Bare CJS|[❌ FAIL](#node_literate_ts_require_sibling_bare_cjs)|
|Node|Literate TS|require|sibling|Bare ESM|[❌ FAIL](#node_literate_ts_require_sibling_bare_esm)|
|Node|Literate TS|require|sibling|Bare TS|[❌ FAIL](#node_literate_ts_require_sibling_bare_ts)|
|Node|Literate TS|require|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_require_sibling_literate_cjs)|
|Node|Literate TS|require|sibling|Literate ESM|[❌ FAIL](#node_literate_ts_require_sibling_literate_esm)|
|Node|Literate TS|require|sibling|Literate TS|[❌ FAIL](#node_literate_ts_require_sibling_literate_ts)|
|Node|Literate TS|require|dependency|Bare CJS|[❌ FAIL](#node_literate_ts_require_dependency_bare_cjs)|
|Node|Literate TS|require|dependency|Bare ESM|[❌ FAIL](#node_literate_ts_require_dependency_bare_esm)|
|Node|Literate TS|require|dependency|Bare TS|[❌ FAIL](#node_literate_ts_require_dependency_bare_ts)|
|Node|Literate TS|require|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_require_dependency_literate_cjs)|
|Node|Literate TS|require|dependency|Literate ESM|[❌ FAIL](#node_literate_ts_require_dependency_literate_esm)|
|Node|Literate TS|require|dependency|Literate TS|[❌ FAIL](#node_literate_ts_require_dependency_literate_ts)|
|Node|Literate TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_dynamic_import_sibling_literate_cjs)|
|Node|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_dynamic_import_dependency_literate_cjs)|
|Node|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_static_import_sibling_literate_cjs)|
|Node|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_static_import_dependency_literate_cjs)|
|Node|Literate TS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|static import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|import type|sibling|Literate CJS|[❌ FAIL](#node_literate_ts_import_type_sibling_literate_cjs)|
|Node|Literate TS|import type|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|import type|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|import type|dependency|Literate CJS|[❌ FAIL](#node_literate_ts_import_type_dependency_literate_cjs)|
|Node|Literate TS|import type|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|import type|dependency|Literate TS|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate CJS|[❌ FAIL](#rollup_bare_mjs_static_import_sibling_literate_cjs)|
|Rollup|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate CJS|[❌ FAIL](#rollup_bare_mjs_static_import_dependency_literate_cjs)|
|Rollup|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate CJS|[❌ FAIL](#rollup_bare_ts_static_import_sibling_literate_cjs)|
|Rollup|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate CJS|[❌ FAIL](#rollup_bare_ts_static_import_dependency_literate_cjs)|
|Rollup|Bare TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate CJS|[❌ FAIL](#rollup_bare_ts_import_type_sibling_literate_cjs)|
|Rollup|Bare TS|import type|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate CJS|[❌ FAIL](#rollup_bare_ts_import_type_dependency_literate_cjs)|
|Rollup|Bare TS|import type|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate TS|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate CJS|[❌ FAIL](#rollup_literate_mjs_static_import_sibling_literate_cjs)|
|Rollup|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate CJS|[❌ FAIL](#rollup_literate_mjs_static_import_dependency_literate_cjs)|
|Rollup|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|require|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|require|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|require|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|require|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|require|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|require|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|require|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|require|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|require|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate CJS|[❌ FAIL](#rollup_literate_ts_static_import_sibling_literate_cjs)|
|Rollup|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate CJS|[❌ FAIL](#rollup_literate_ts_static_import_dependency_literate_cjs)|
|Rollup|Literate TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate CJS|[❌ FAIL](#rollup_literate_ts_import_type_sibling_literate_cjs)|
|Rollup|Literate TS|import type|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate CJS|[❌ FAIL](#rollup_literate_ts_import_type_dependency_literate_cjs)|
|Rollup|Literate TS|import type|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate TS|🟩 PASS|

## Test failures

### Node_Bare_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

Stderr
```
(node:61725) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

Stderr
```
(node:61890) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:61972) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2
process.exit(require("./target.cjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_57_865Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:61997) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2
process.exit(require("./target.mjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_58_067Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62024) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2
process.exit(require("./target.ts").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_58_272Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62049) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2
process.exit(require("./target.cjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_58_474Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62074) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2
process.exit(require("./target.mjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_58_675Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62099) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2
process.exit(require("./target.ts.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_58_876Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62124) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_59_078Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62149) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_59_281Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62174) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_59_486Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62200) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_59_694Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62225) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_29_59_905Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62250) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_00_114Z-debug.log

```

### Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62357) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62521) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62685) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS/source.mjs:2
import { exitCode } from "./target.cjs.md"
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_03_512Z-debug.log

```

### Node_Bare_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:62849) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS/source.mjs:2
import { exitCode } from "target"
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_04_795Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.cjs").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:62931) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_05_545Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.mjs").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:62963) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_05_784Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.ts").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:62995) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_06_028Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.cjs.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63028) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_06_270Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.mjs.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63060) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_06_510Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("./target.ts.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63092) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_06_751Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63124) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_06_994Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63156) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_07_230Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63188) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_07_471Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63220) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_07_716Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63252) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_07_960Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts',
  length: 7,
  line: 2,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:63284) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:2:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_08_194Z-debug.log

```

### Node_Bare_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:63413) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:63607) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:63799) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS/source.ts:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_11_940Z-debug.log

```

### Node_Bare_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:63991) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS/source.ts:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_13_356Z-debug.log

```

### Node_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:64183) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS/source.ts:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_14_794Z-debug.log

```

### Node_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:64384) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS/source.ts:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_16_246Z-debug.log

```

### Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

Stderr
```
(node:64897) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

Stderr
```
(node:65061) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65143) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3
process.exit(require("./target.cjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_22_649Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65168) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3
process.exit(require("./target.mjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_22_851Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65193) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3
process.exit(require("./target.ts").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_23_049Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65218) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3
process.exit(require("./target.cjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_23_250Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65243) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3
process.exit(require("./target.mjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_23_452Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65275) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3
process.exit(require("./target.ts.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_23_655Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65300) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_23_858Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65325) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_24_058Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65350) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_24_263Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65375) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_24_466Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65400) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_24_666Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65425) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_24_867Z-debug.log

```

### Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65532) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65696) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:65860) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS/source.mjs.md:3
import { exitCode } from "./target.cjs.md"
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_28_263Z-debug.log

```

### Node_Literate_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:66028) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS/source.mjs.md:3
import { exitCode } from "target"
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_29_555Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.cjs").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66110) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_30_241Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.mjs").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66142) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_30_487Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.ts").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66174) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_30_726Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.cjs.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66206) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_30_970Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.mjs.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66238) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_31_215Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("./target.ts.md").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66270) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_31_456Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66302) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_31_696Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66334) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_31_940Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66366) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_32_180Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66398) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_32_420Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66430) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_32_661Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md',
  length: 7,
  line: 3,
  lineText: 'process.exit(require("target").exitCode)',
  namespace: '',
  suggestion: ''
}
Converting "require" to "esm" is currently not supported

```

Stderr
```
(node:66462) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:3:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_32_904Z-debug.log

```

### Node_Literate_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:66591) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:66783) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:66975) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS/source.ts.md:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_36_742Z-debug.log

```

### Node_Literate_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:67167) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS/source.ts.md:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_38_170Z-debug.log

```

### Node_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:67361) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_39_615Z-debug.log

```

### Node_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:67555) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:1
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
npm ERR! source@ test: `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T22_30_41_061Z-debug.log

```

### Rollup_Bare_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
'exitCode' is not exported by target.cjs.md, imported by source.mjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_MJS_static_import_sibling_Literate_CJS/source.mjs:2:9
1: 
2: import { exitCode } from "./target.cjs.md"
            ^
3: process.exit(exitCode)
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.mjs
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Bare_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_MJS_static_import_dependency_Literate_CJS/source.mjs:2:9
1: 
2: import { exitCode } from "target"
            ^
3: process.exit(exitCode)
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Bare_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_static_import_sibling_Literate_CJS/source.ts:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Bare_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_static_import_dependency_Literate_CJS/source.ts:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Rollup_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts:1:9
1: import { exitCode } from "target";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Rollup_Literate_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.mjs.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_MJS_static_import_sibling_Literate_CJS/source.mjs.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS90YWtvdmF0YS9mYWRyb21hL3BhY2thZ2VzL2dhbmVzaGEvdGVzdHMvY2FzZXMvUm9sbHVwX0xpdGVyYXRlX01KU19zdGF0aWNfaW1wb3J0X3NpYmxpbmdfTGl0ZXJhdGVfQ0pTL3NvdXJjZS5tanMubWQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuXG5pbXBvcnQgeyBleGl0Q29kZSB9IGZyb20gXCIuL3RhcmdldC5janMubWRcIlxucHJvY2Vzcy5leGl0KGV4aXRDb2RlKVxuXG4iXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBLFFBQVEsS0FBSzsiLAogICJuYW1lcyI6IFtdCn0K
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.mjs.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Literate_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_MJS_static_import_dependency_Literate_CJS/source.mjs.md:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS90YWtvdmF0YS9mYWRyb21hL3BhY2thZ2VzL2dhbmVzaGEvdGVzdHMvY2FzZXMvUm9sbHVwX0xpdGVyYXRlX01KU19zdGF0aWNfaW1wb3J0X2RlcGVuZGVuY3lfTGl0ZXJhdGVfQ0pTL3NvdXJjZS5tanMubWQiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlxuXG5pbXBvcnQgeyBleGl0Q29kZSB9IGZyb20gXCJ0YXJnZXRcIlxucHJvY2Vzcy5leGl0KGV4aXRDb2RlKVxuXG4iXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBLFFBQVEsS0FBSzsiLAogICJuYW1lcyI6IFtdCn0K
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Literate_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_static_import_sibling_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS90YWtvdmF0YS9mYWRyb21hL3BhY2thZ2VzL2dhbmVzaGEvdGVzdHMvY2FzZXMvUm9sbHVwX0xpdGVyYXRlX1RTX3N0YXRpY19pbXBvcnRfc2libGluZ19MaXRlcmF0ZV9DSlMvc291cmNlLnRzLm1kIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcblxuaW1wb3J0IHsgZXhpdENvZGUgfSBmcm9tIFwiLi90YXJnZXQuY2pzLm1kXCJcbnByb2Nlc3MuZXhpdChleGl0Q29kZSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQSxRQUFRLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Literate_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_static_import_dependency_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS90YWtvdmF0YS9mYWRyb21hL3BhY2thZ2VzL2dhbmVzaGEvdGVzdHMvY2FzZXMvUm9sbHVwX0xpdGVyYXRlX1RTX3N0YXRpY19pbXBvcnRfZGVwZW5kZW5jeV9MaXRlcmF0ZV9DSlMvc291cmNlLnRzLm1kIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcblxuaW1wb3J0IHsgZXhpdENvZGUgfSBmcm9tIFwidGFyZ2V0XCJcbnByb2Nlc3MuZXhpdChleGl0Q29kZSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQSxRQUFRLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

```

### Rollup_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```

### Rollup_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "target";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/takovata/fadroma/packages/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```
