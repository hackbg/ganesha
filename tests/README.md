
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
|Node|Bare CJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Literate CJS|🟩 PASS|
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
|Node|Bare MJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate CJS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Literate CJS|🟩 PASS|
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
|Node|Bare TS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate CJS|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Literate CJS|🟩 PASS|
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
|Node|Literate CJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Literate CJS|🟩 PASS|
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
|Node|Literate MJS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate CJS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Literate CJS|🟩 PASS|
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
|Node|Literate TS|dynamic import|sibling|Literate CJS|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate CJS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate CJS|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Literate CJS|🟩 PASS|
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
|Rollup|Bare MJS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate CJS|🟩 PASS|
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
|Rollup|Bare TS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate CJS|🟩 PASS|
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
|Rollup|Literate MJS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate CJS|🟩 PASS|
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
|Rollup|Literate TS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate CJS|🟩 PASS|
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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_04_057Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_04_279Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_04_503Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_04_725Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_04_946Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_05_170Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_05_391Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_05_619Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_05_842Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_06_063Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_06_286Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_06_513Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_13_503Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_13_880Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_14_252Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_14_624Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_14_995Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_15_370Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_15_743Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_16_118Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_16_503Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_16_881Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_17_254Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_17_628Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_28_589Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_31_011Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_39_110Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_39_338Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_39_565Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_39_787Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_40_010Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_40_233Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_40_456Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_40_676Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_40_898Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_41_123Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_41_348Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_41_582Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_49_895Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_50_376Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_50_860Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_51_334Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_51_805Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_52_275Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_52_747Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_53_236Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_53_712Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_54_190Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_54_662Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_01_55_145Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_02_09_020Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-02T00_02_12_032Z-debug.log

```

### Rollup_Bare_TS_import_type_sibling_Literate_CJS
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
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/index.html'
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
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/vite.config.js',
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
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/node_modules/.vite',
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
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts:2:9
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

### Rollup_Bare_TS_import_type_dependency_Literate_CJS
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
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/index.html'
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
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/vite.config.js',
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
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/node_modules/.vite',
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
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts:2:9
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

### Rollup_Literate_TS_import_type_sibling_Literate_CJS
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
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/index.html'
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
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/vite.config.js',
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
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/node_modules/.vite',
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
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md:2:9
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

### Rollup_Literate_TS_import_type_dependency_Literate_CJS
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
    outDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
    sourcemap: false,
    rollupOptions: {
      input: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/index.html'
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
  configFile: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/vite.config.js',
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
  root: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS',
  base: '/',
  resolve: { dedupe: undefined, alias: [ [Object], [Object] ] },
  publicDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/public',
  cacheDir: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/node_modules/.vite',
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
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md:2:9
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
