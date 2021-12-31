
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
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.cjs


```

Stderr
```

```

### Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.cjs


```

Stderr
```

```

### Node_Bare_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_27_354Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_27_584Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_27_812Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_28_042Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_28_266Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_28_497Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_28_722Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_28_952Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_29_178Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_29_412Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_29_637Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_29_875Z-debug.log

```

### Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```

```

### Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```

```

### Node_Bare_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_34_233Z-debug.log

```

### Node_Bare_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_35_880Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_CJS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_36_883Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_ESM/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_37_270Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Bare_TS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_37_641Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_CJS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_38_024Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_ESM/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_38_403Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_sibling_Literate_TS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_38_798Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_CJS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_39_189Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_ESM/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_39_580Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Bare_TS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_39_971Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_CJS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_40_344Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_ESM/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_40_717Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_require_dependency_Literate_TS/source.ts:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_41_097Z-debug.log

```

### Node_Bare_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_dynamic_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```

```

### Node_Bare_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```

```

### Node_Bare_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_47_318Z-debug.log

```

### Node_Bare_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_49_650Z-debug.log

```

### Node_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_52_014Z-debug.log

```

### Node_Bare_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_12_54_369Z-debug.log

```

### Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.cjs.md


```

Stderr
```

```

### Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.cjs.md


```

Stderr
```

```

### Node_Literate_MJS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_02_360Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_02_587Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_02_817Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_03_044Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_03_274Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_03_503Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_03_734Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_03_966Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_04_207Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_04_437Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_04_664Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_04_890Z-debug.log

```

### Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```

```

### Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```

```

### Node_Literate_MJS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_09_324Z-debug.log

```

### Node_Literate_MJS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.mjs.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_11_017Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1
process.exit(require("./target.cjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_CJS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_12_044Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1
process.exit(require("./target.mjs").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_ESM/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_12_439Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1
process.exit(require("./target.ts").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Bare_TS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_12_870Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1
process.exit(require("./target.cjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_CJS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_13_316Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1
process.exit(require("./target.mjs.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_ESM/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_13_748Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1
process.exit(require("./target.ts.md").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_sibling_Literate_TS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_14_147Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_CJS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_14_574Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_ESM/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_14_994Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Bare_TS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_15_398Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_CJS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_15_806Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_ESM/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_16_208Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1
process.exit(require("target").exitCode);
        ^

ReferenceError: require is not defined in ES module scope, you can use import instead
    at file:///home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_require_dependency_Literate_TS/source.ts.md:1:9
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at Loader.import (internal/modules/esm/loader.js:178:24)
    at Object.loadESM (internal/process/esm_loader.js:68:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_16_622Z-debug.log

```

### Node_Literate_TS_dynamic_import_sibling_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_dynamic_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```

```

### Node_Literate_TS_dynamic_import_dependency_Literate_CJS
Exit code
```
0
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_dynamic_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```

```

### Node_Literate_TS_static_import_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_23_023Z-debug.log

```

### Node_Literate_TS_static_import_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_25_335Z-debug.log

```

### Node_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_27_670Z-debug.log

```

### Node_Literate_TS_import_type_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```

> source@ test /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> /home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md


```

Stderr
```
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
npm ERR! source@ test: `/home/user/Lab/5/takovata/fadroma/packages/ganesha/nodejs-loader/ganesha --unhandled-rejections=throw  source.ts.md`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the source@ test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2021-12-31T23_13_30_063Z-debug.log

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
3: process.exit(theExitCode);
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
3: process.exit(theExitCode);
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
3: process.exit(theExitCode);
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
3: process.exit(theExitCode);
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
