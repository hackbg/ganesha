
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
|Rollup|Bare CJS|require|sibling|Literate CJS|[❌ FAIL](#rollup_bare_cjs_require_sibling_literate_cjs)|
|Rollup|Bare CJS|require|sibling|Literate ESM|[❌ FAIL](#rollup_bare_cjs_require_sibling_literate_esm)|
|Rollup|Bare CJS|require|sibling|Literate TS|[❌ FAIL](#rollup_bare_cjs_require_sibling_literate_ts)|
|Rollup|Bare CJS|require|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Bare TS|🟩 PASS|
|Rollup|Bare CJS|require|dependency|Literate CJS|[❌ FAIL](#rollup_bare_cjs_require_dependency_literate_cjs)|
|Rollup|Bare CJS|require|dependency|Literate ESM|[❌ FAIL](#rollup_bare_cjs_require_dependency_literate_esm)|
|Rollup|Bare CJS|require|dependency|Literate TS|[❌ FAIL](#rollup_bare_cjs_require_dependency_literate_ts)|
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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_25_317Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_25_540Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_25_767Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_25_988Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_26_216Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_26_440Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_26_669Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_26_892Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_27_123Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_27_348Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_27_570Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_27_799Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_34_879Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_35_259Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_35_644Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_36_017Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_36_398Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_36_776Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_37_155Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_37_526Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_37_901Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_38_278Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_38_658Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_39_033Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_49_852Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_54_52_169Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_00_022Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_00_251Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_00_472Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_00_697Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_00_919Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_01_152Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_01_373Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_01_600Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_01_830Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_02_059Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_02_288Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_02_515Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_09_579Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_09_954Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_10_334Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_10_710Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_11_085Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_11_459Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_11_832Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_12_209Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_12_588Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_12_966Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_13_348Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_13_725Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_25_224Z-debug.log

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
npm ERR!     /home/user/.npm/_logs/2022-01-05T11_55_27_836Z-debug.log

```

### Rollup_Bare_CJS_require_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.cjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.cjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_CJS/target.cjs.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_CJS_require_sibling_Literate_ESM
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.mjs.md?commonjs-require";
6: import require$$1 from "\u0000./target.mjs.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_ESM/target.mjs.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_CJS_require_sibling_Literate_TS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000./target.ts.md?commonjs-require";
6: import require$$1 from "\u0000./target.ts.md?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_sibling_Literate_TS/target.ts.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_CJS_require_dependency_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_CJS/node_modules/target/target.cjs.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_CJS_require_dependency_Literate_ESM
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_ESM/node_modules/target/target.mjs.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_CJS_require_dependency_Literate_TS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs'
}
webWorkerPlugin.load { id: '\x00commonjsHelpers.js', isBuild: true }
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs?commonjs-exports',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs?commonjs-exports'
}
{ parsedQuery: { 'commonjs-exports': '' } }
webWorkerPlugin.load { id: '\x00__vite-browser-external?commonjs-proxy', isBuild: true }
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md'
}
{ parsedQuery: null }
webWorkerPlugin.load {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy',
  isBuild: true
}
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy'
}
{ parsedQuery: { 'commonjs-proxy': '' } }
webWorkerPlugin.transform  commonjsHelpers.js
parseWorkerRequest { id: '\x00commonjsHelpers.js' }
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs?commonjs-exports
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs?commonjs-exports'
}
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform  __vite-browser-external?commonjs-proxy
parseWorkerRequest { id: '\x00__vite-browser-external?commonjs-proxy' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md'
}
webWorkerPlugin.transform  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy
parseWorkerRequest {
  id: '\x00/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy'
}
✓ 9 modules transformed.

```

Stderr
```
Error when using sourcemap for reporting an error: Can't resolve original location of error.
'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
file: /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/source.cjs:6:7
4: import require$$0 from "\u0000process?commonjs-proxy";
5: import "\u0000target?commonjs-require";
6: import require$$1 from "\u0000target?commonjs-proxy";
          ^
7: 
8: const process = require$$0
error during build:
Error: 'default' is not exported by  /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_CJS_require_dependency_Literate_TS/node_modules/target/target.ts.md?commonjs-proxy, imported by source.cjs
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

### Rollup_Bare_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/source.ts'
}
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_sibling_Literate_CJS/target.cjs.md'
}
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
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/source.ts'
}
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Bare_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
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

### Rollup_Literate_TS_import_type_sibling_Literate_CJS
Exit code
```
1
```

Stdout
```
vite v2.7.6 building for production...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/source.ts.md'
}
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_sibling_Literate_CJS/target.cjs.md'
}
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
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/index.html',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/index.html'
}
{ parsedQuery: null }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/index.html
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/index.html'
}
transforming...
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform vite/modulepreload-polyfill
parseWorkerRequest { id: 'vite/modulepreload-polyfill' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/source.ts.md'
}
webWorkerPlugin.load {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md',
  isBuild: true
}
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
{ parsedQuery: null }
webWorkerPlugin.transform __vite-browser-external
parseWorkerRequest { id: '__vite-browser-external' }
webWorkerPlugin.transform /home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md
parseWorkerRequest {
  id: '/home/user/Lab/5/takovata/fadroma/packages/ganesha/tests/cases/Rollup_Literate_TS_import_type_dependency_Literate_CJS/node_modules/target/target.cjs.md'
}
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
