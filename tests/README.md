
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
|Node|Bare CJS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Bare CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Bare CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare MJS|require|sibling|Bare CJS|❌ FAIL|
|Node|Bare MJS|require|sibling|Bare ESM|❌ FAIL|
|Node|Bare MJS|require|sibling|Bare TS|❌ FAIL|
|Node|Bare MJS|require|sibling|Literate CJS|❌ FAIL|
|Node|Bare MJS|require|sibling|Literate ESM|❌ FAIL|
|Node|Bare MJS|require|sibling|Literate TS|❌ FAIL|
|Node|Bare MJS|require|dependency|Bare CJS|❌ FAIL|
|Node|Bare MJS|require|dependency|Bare ESM|❌ FAIL|
|Node|Bare MJS|require|dependency|Bare TS|❌ FAIL|
|Node|Bare MJS|require|dependency|Literate CJS|❌ FAIL|
|Node|Bare MJS|require|dependency|Literate ESM|❌ FAIL|
|Node|Bare MJS|require|dependency|Literate TS|❌ FAIL|
|Node|Bare MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Bare MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Bare MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate CJS|❌ FAIL|
|Node|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare MJS|static import|dependency|Literate CJS|❌ FAIL|
|Node|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Bare MJS|static import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|require|sibling|Bare CJS|❌ FAIL|
|Node|Bare TS|require|sibling|Bare ESM|❌ FAIL|
|Node|Bare TS|require|sibling|Bare TS|❌ FAIL|
|Node|Bare TS|require|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|require|sibling|Literate ESM|❌ FAIL|
|Node|Bare TS|require|sibling|Literate TS|❌ FAIL|
|Node|Bare TS|require|dependency|Bare CJS|❌ FAIL|
|Node|Bare TS|require|dependency|Bare ESM|❌ FAIL|
|Node|Bare TS|require|dependency|Bare TS|❌ FAIL|
|Node|Bare TS|require|dependency|Literate CJS|❌ FAIL|
|Node|Bare TS|require|dependency|Literate ESM|❌ FAIL|
|Node|Bare TS|require|dependency|Literate TS|❌ FAIL|
|Node|Bare TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Bare TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|static import|dependency|Literate CJS|❌ FAIL|
|Node|Bare TS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Bare TS|static import|dependency|Literate TS|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare CJS|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare ESM|🟩 PASS|
|Node|Bare TS|import type|sibling|Bare TS|🟩 PASS|
|Node|Bare TS|import type|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|import type|sibling|Literate ESM|🟩 PASS|
|Node|Bare TS|import type|sibling|Literate TS|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare CJS|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare ESM|🟩 PASS|
|Node|Bare TS|import type|dependency|Bare TS|🟩 PASS|
|Node|Bare TS|import type|dependency|Literate CJS|❌ FAIL|
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
|Node|Literate CJS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Literate CJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Literate CJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate CJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate MJS|require|sibling|Bare CJS|❌ FAIL|
|Node|Literate MJS|require|sibling|Bare ESM|❌ FAIL|
|Node|Literate MJS|require|sibling|Bare TS|❌ FAIL|
|Node|Literate MJS|require|sibling|Literate CJS|❌ FAIL|
|Node|Literate MJS|require|sibling|Literate ESM|❌ FAIL|
|Node|Literate MJS|require|sibling|Literate TS|❌ FAIL|
|Node|Literate MJS|require|dependency|Bare CJS|❌ FAIL|
|Node|Literate MJS|require|dependency|Bare ESM|❌ FAIL|
|Node|Literate MJS|require|dependency|Bare TS|❌ FAIL|
|Node|Literate MJS|require|dependency|Literate CJS|❌ FAIL|
|Node|Literate MJS|require|dependency|Literate ESM|❌ FAIL|
|Node|Literate MJS|require|dependency|Literate TS|❌ FAIL|
|Node|Literate MJS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Literate MJS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Literate MJS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate MJS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate CJS|❌ FAIL|
|Node|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate MJS|static import|dependency|Literate CJS|❌ FAIL|
|Node|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Literate MJS|static import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|require|sibling|Bare CJS|❌ FAIL|
|Node|Literate TS|require|sibling|Bare ESM|❌ FAIL|
|Node|Literate TS|require|sibling|Bare TS|❌ FAIL|
|Node|Literate TS|require|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|require|sibling|Literate ESM|❌ FAIL|
|Node|Literate TS|require|sibling|Literate TS|❌ FAIL|
|Node|Literate TS|require|dependency|Bare CJS|❌ FAIL|
|Node|Literate TS|require|dependency|Bare ESM|❌ FAIL|
|Node|Literate TS|require|dependency|Bare TS|❌ FAIL|
|Node|Literate TS|require|dependency|Literate CJS|❌ FAIL|
|Node|Literate TS|require|dependency|Literate ESM|❌ FAIL|
|Node|Literate TS|require|dependency|Literate TS|❌ FAIL|
|Node|Literate TS|dynamic import|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|dynamic import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate CJS|❌ FAIL|
|Node|Literate TS|dynamic import|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|dynamic import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|static import|dependency|Literate CJS|❌ FAIL|
|Node|Literate TS|static import|dependency|Literate ESM|🟩 PASS|
|Node|Literate TS|static import|dependency|Literate TS|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare CJS|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare ESM|🟩 PASS|
|Node|Literate TS|import type|sibling|Bare TS|🟩 PASS|
|Node|Literate TS|import type|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|import type|sibling|Literate ESM|🟩 PASS|
|Node|Literate TS|import type|sibling|Literate TS|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare CJS|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare ESM|🟩 PASS|
|Node|Literate TS|import type|dependency|Bare TS|🟩 PASS|
|Node|Literate TS|import type|dependency|Literate CJS|❌ FAIL|
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
|Rollup|Bare MJS|static import|sibling|Literate CJS|❌ FAIL|
|Rollup|Bare MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate CJS|❌ FAIL|
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
|Rollup|Bare TS|static import|sibling|Literate CJS|❌ FAIL|
|Rollup|Bare TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate CJS|❌ FAIL|
|Rollup|Bare TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate CJS|❌ FAIL|
|Rollup|Bare TS|import type|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate CJS|❌ FAIL|
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
|Rollup|Literate MJS|static import|sibling|Literate CJS|❌ FAIL|
|Rollup|Literate MJS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate CJS|❌ FAIL|
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
|Rollup|Literate TS|static import|sibling|Literate CJS|❌ FAIL|
|Rollup|Literate TS|static import|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate CJS|❌ FAIL|
|Rollup|Literate TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate CJS|❌ FAIL|
|Rollup|Literate TS|import type|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate CJS|❌ FAIL|
|Rollup|Literate TS|import type|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate TS|🟩 PASS|

### Node_Bare_CJS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

```
(node:97138) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs


```

```
(node:97303) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_require_sibling_Bare_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97385) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_16_419Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97410) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_16_632Z-debug.log

```

### Node_Bare_MJS_require_sibling_Bare_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97435) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_16_844Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97460) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_17_049Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97485) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_17_256Z-debug.log

```

### Node_Bare_MJS_require_sibling_Literate_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97510) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_17_459Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97535) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_17_668Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97560) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_17_874Z-debug.log

```

### Node_Bare_MJS_require_dependency_Bare_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97585) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_18_089Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97610) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_18_295Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97635) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_18_510Z-debug.log

```

### Node_Bare_MJS_require_dependency_Literate_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97660) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_18_713Z-debug.log

```

### Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97767) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:97932) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_MJS_static_import_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:98096) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_22_168Z-debug.log

```

### Node_Bare_MJS_static_import_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs


```

```
(node:98261) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_23_458Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_CJS
```
1
```

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

```
(node:98343) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_24_144Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_ESM
```
1
```

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

```
(node:98375) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_24_383Z-debug.log

```

### Node_Bare_TS_require_sibling_Bare_TS
```
1
```

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

```
(node:98407) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_24_625Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_CJS
```
1
```

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

```
(node:98439) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_24_867Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_ESM
```
1
```

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

```
(node:98471) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_25_105Z-debug.log

```

### Node_Bare_TS_require_sibling_Literate_TS
```
1
```

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

```
(node:98503) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_25_346Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_CJS
```
1
```

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

```
(node:98535) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_25_589Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_ESM
```
1
```

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

```
(node:98567) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_25_829Z-debug.log

```

### Node_Bare_TS_require_dependency_Bare_TS
```
1
```

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

```
(node:98599) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_26_072Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_CJS
```
1
```

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

```
(node:98631) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_26_313Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_ESM
```
1
```

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

```
(node:98663) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_26_556Z-debug.log

```

### Node_Bare_TS_require_dependency_Literate_TS
```
1
```

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

```
(node:98695) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_26_795Z-debug.log

```

### Node_Bare_TS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:98823) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:99016) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Bare_TS_static_import_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:99208) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_30_619Z-debug.log

```

### Node_Bare_TS_static_import_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:99400) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_32_062Z-debug.log

```

### Node_Bare_TS_import_type_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:99594) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_33_496Z-debug.log

```

### Node_Bare_TS_import_type_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Bare_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts


```

```
(node:99787) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_34_933Z-debug.log

```

### Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

```
(node:100330) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_CJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.cjs.md


```

```
(node:100495) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_require_sibling_Bare_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100577) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_40_931Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100602) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_41_138Z-debug.log

```

### Node_Literate_MJS_require_sibling_Bare_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100627) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_41_342Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100652) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_41_547Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100677) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_41_751Z-debug.log

```

### Node_Literate_MJS_require_sibling_Literate_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_sibling_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100702) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_41_964Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100727) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_42_168Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100752) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_42_372Z-debug.log

```

### Node_Literate_MJS_require_dependency_Bare_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Bare_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100777) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_42_576Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100802) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_42_779Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_ESM
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_ESM
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100827) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_42_981Z-debug.log

```

### Node_Literate_MJS_require_dependency_Literate_TS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_require_dependency_Literate_TS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100852) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_43_185Z-debug.log

```

### Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:100959) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:101123) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_MJS_static_import_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:101287) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_46_607Z-debug.log

```

### Node_Literate_MJS_static_import_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_MJS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.mjs.md


```

```
(node:101451) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_47_900Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_CJS
```
1
```

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

```
(node:101533) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_48_592Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_ESM
```
1
```

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

```
(node:101565) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_48_834Z-debug.log

```

### Node_Literate_TS_require_sibling_Bare_TS
```
1
```

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

```
(node:101597) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_49_081Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_CJS
```
1
```

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

```
(node:101629) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_49_321Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_ESM
```
1
```

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

```
(node:101661) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_49_561Z-debug.log

```

### Node_Literate_TS_require_sibling_Literate_TS
```
1
```

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

```
(node:101693) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_49_803Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_CJS
```
1
```

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

```
(node:101725) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_50_047Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_ESM
```
1
```

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

```
(node:101757) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_50_289Z-debug.log

```

### Node_Literate_TS_require_dependency_Bare_TS
```
1
```

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

```
(node:101789) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_50_531Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_CJS
```
1
```

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

```
(node:101821) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_50_773Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_ESM
```
1
```

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

```
(node:101853) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_51_016Z-debug.log

```

### Node_Literate_TS_require_dependency_Literate_TS
```
1
```

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

```
(node:101885) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_51_255Z-debug.log

```

### Node_Literate_TS_dynamic_import_sibling_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_dynamic_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102014) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_dynamic_import_dependency_Literate_CJS
```
0
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_dynamic_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102207) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

```

### Node_Literate_TS_static_import_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102399) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_55_080Z-debug.log

```

### Node_Literate_TS_static_import_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_static_import_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102591) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_56_522Z-debug.log

```

### Node_Literate_TS_import_type_sibling_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_sibling_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102783) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_57_952Z-debug.log

```

### Node_Literate_TS_import_type_dependency_Literate_CJS
```
1
```

```

> source@ test /home/user/Lab/5/ganesha/tests/cases/Node_Literate_TS_import_type_dependency_Literate_CJS
> node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts.md


```

```
(node:102976) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
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
npm ERR!     /home/user/.npm/_logs/2021-12-26T12_48_59_394Z-debug.log

```

### Rollup_Bare_MJS_static_import_sibling_Literate_CJS
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
```
1
```

```
vite v2.7.6 building for production...
transforming...
✓ 4 modules transformed.

```

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
