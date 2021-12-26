
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

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

Stderr
```
(node:142942) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

Stderr
```
(node:143106) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143188) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2
process.exit(require("./target.cjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_28_036Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143213) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2
process.exit(require("./target.mjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_28_269Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143238) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2
process.exit(require("./target.ts").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_28_483Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143263) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2
process.exit(require("./target.cjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_28_724Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143288) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2
process.exit(require("./target.mjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_28_976Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143313) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2
process.exit(require("./target.ts.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_29_193Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143338) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_29_427Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143363) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_29_632Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143388) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_29_842Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143413) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_30_080Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143438) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_30_296Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143463) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS/source.mjs:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_30_502Z-debug.log

```

### Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143570) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143735) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:143899) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS/source.mjs:2
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_33_914Z-debug.log

```

### Node_Bare_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

Stderr
```
(node:144063) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS/source.mjs:2
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_35_205Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts',
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
(node:144145) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_35_888Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts',
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
(node:144177) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_36_127Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts',
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
(node:144209) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_36_366Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts',
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
(node:144241) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_36_604Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts',
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
(node:144273) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_36_845Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts',
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
(node:144305) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_37_084Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts',
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
(node:144337) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_37_325Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts',
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
(node:144369) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_37_567Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts',
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
(node:144401) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_37_805Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts',
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
(node:144433) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_38_050Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts',
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
(node:144466) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_38_291Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts',
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
(node:144498) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:2:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_38_531Z-debug.log

```

### Node_Bare_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:144627) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:144820) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:145013) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS/source.ts:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_42_348Z-debug.log

```

### Node_Bare_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:145205) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS/source.ts:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_43_792Z-debug.log

```

### Node_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:145398) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS/source.ts:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_45_230Z-debug.log

```

### Node_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

Stderr
```
(node:145592) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS/source.ts:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_46_671Z-debug.log

```

### Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

Stderr
```
(node:146136) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

Stderr
```
(node:146300) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146382) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3
process.exit(require("./target.cjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_52_662Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146407) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3
process.exit(require("./target.mjs").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_52_868Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146432) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3
process.exit(require("./target.ts").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_53_071Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146457) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3
process.exit(require("./target.cjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_53_276Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146482) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3
process.exit(require("./target.mjs.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_53_481Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146508) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3
process.exit(require("./target.ts.md").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_53_699Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146533) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_53_907Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146559) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_54_111Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146584) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_54_314Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146609) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_54_518Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146634) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_54_722Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146659) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3
process.exit(require("target").exitCode)
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS/source.mjs.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_54_930Z-debug.log

```

### Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146766) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:146930) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:147094) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS/source.mjs.md:3
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_58_366Z-debug.log

```

### Node_Literate_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

Stderr
```
(node:147259) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS/source.mjs.md:3
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_10_59_663Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md',
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
(node:147341) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_00_357Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md',
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
(node:147373) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_00_596Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md',
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
(node:147406) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_00_837Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md',
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
(node:147438) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_01_076Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md',
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
(node:147470) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_01_317Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md',
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
(node:147502) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_01_557Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md',
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
(node:147534) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_01_799Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md',
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
(node:147566) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_02_042Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md',
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
(node:147598) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_02_282Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md',
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
(node:147631) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_02_522Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md',
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
(node:147664) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_02_760Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md

{
  column: 13,
  file: '/home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md',
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
(node:147696) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:3:9
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_03_000Z-debug.log

```

### Node_Literate_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:147825) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:148017) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:148209) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS/source.ts.md:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_06_823Z-debug.log

```

### Node_Literate_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:148401) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS/source.ts.md:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_08_268Z-debug.log

```

### Node_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:148594) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_09_699Z-debug.log

```

### Node_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

Stderr
```
(node:148787) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:1
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T13_11_11_142Z-debug.log

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_MJS_static_import_sibling_Literate_CJS/source.mjs:2:9
1: 
2: import { exitCode } from "./target.cjs.md"
            ^
3: process.exit(exitCode)
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.mjs
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_MJS_static_import_dependency_Literate_CJS/source.mjs:2:9
1: 
2: import { exitCode } from "target"
            ^
3: process.exit(exitCode)
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_TS_static_import_sibling_Literate_CJS/source.ts:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_TS_static_import_dependency_Literate_CJS/source.ts:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts:1:9
1: import { exitCode } from "target";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_MJS_static_import_sibling_Literate_CJS/source.mjs.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS9nYW5lc2hhL3Rlc3RzL2Nhc2VzL1JvbGx1cF9MaXRlcmF0ZV9NSlNfc3RhdGljX2ltcG9ydF9zaWJsaW5nX0xpdGVyYXRlX0NKUy9zb3VyY2UubWpzLm1kIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcblxuaW1wb3J0IHsgZXhpdENvZGUgfSBmcm9tIFwiLi90YXJnZXQuY2pzLm1kXCJcbnByb2Nlc3MuZXhpdChleGl0Q29kZSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQSxRQUFRLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.mjs.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_MJS_static_import_dependency_Literate_CJS/source.mjs.md:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS9nYW5lc2hhL3Rlc3RzL2Nhc2VzL1JvbGx1cF9MaXRlcmF0ZV9NSlNfc3RhdGljX2ltcG9ydF9kZXBlbmRlbmN5X0xpdGVyYXRlX0NKUy9zb3VyY2UubWpzLm1kIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcblxuaW1wb3J0IHsgZXhpdENvZGUgfSBmcm9tIFwidGFyZ2V0XCJcbnByb2Nlc3MuZXhpdChleGl0Q29kZSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQSxRQUFRLEtBQUs7IiwKICAibmFtZXMiOiBbXQp9Cg==
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.mjs.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_TS_static_import_sibling_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS9nYW5lc2hhL3Rlc3RzL2Nhc2VzL1JvbGx1cF9MaXRlcmF0ZV9UU19zdGF0aWNfaW1wb3J0X3NpYmxpbmdfTGl0ZXJhdGVfQ0pTL3NvdXJjZS50cy5tZCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5cbmltcG9ydCB7IGV4aXRDb2RlIH0gZnJvbSBcIi4vdGFyZ2V0LmNqcy5tZFwiXG5wcm9jZXNzLmV4aXQoZXhpdENvZGUpXG5cbiJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0EsUUFBUSxLQUFLOyIsCiAgIm5hbWVzIjogW10KfQo=
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_TS_static_import_dependency_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "target";
            ^
2: process.exit(exitCode);
3: //# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvdXNlci9MYWIvNS9nYW5lc2hhL3Rlc3RzL2Nhc2VzL1JvbGx1cF9MaXRlcmF0ZV9UU19zdGF0aWNfaW1wb3J0X2RlcGVuZGVuY3lfTGl0ZXJhdGVfQ0pTL3NvdXJjZS50cy5tZCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXG5cbmltcG9ydCB7IGV4aXRDb2RlIH0gZnJvbSBcInRhcmdldFwiXG5wcm9jZXNzLmV4aXQoZXhpdENvZGUpXG5cbiJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0EsUUFBUSxLQUFLOyIsCiAgIm5hbWVzIjogW10KfQo=
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at CallExpression.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:9422:15)
    at ExpressionStatement.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "./target.cjs.md";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

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
file: /home/user/Lab/5/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:1:9
1: import { exitCode } from "target";
            ^
2: const theExitCode = exitCode;
3: process.exit(exitCode);
error during build:
Error: 'exitCode' is not exported by node_modules/target/target.cjs.md, imported by source.ts.md
    at error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:158:30)
    at Module.error (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12420:16)
    at Module.traceVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12805:29)
    at ModuleScope.findVariable (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:11585:39)
    at Identifier.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:6467:40)
    at VariableDeclarator.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5075:23)
    at VariableDeclaration.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Program.bind (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:5071:31)
    at Module.bindReferences (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:12416:18)
    at Graph.sortModules (/home/user/Lab/5/ganesha/node_modules/.pnpm/rollup@2.62.0/node_modules/rollup/dist/shared/rollup.js:22969:20)

```
