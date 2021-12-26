
# Ganesha


## Test Matrix Results

|Environment|Source module|Import type|Relation type|Target module|Result|
|-----------|-------------|-----------|-------------|-------------|------|
|Node|Bare CJS|require()|sibling|Bare CJS|🟩 PASS|
|Node|Bare CJS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Bare CJS|require()|sibling|Bare TS|❌ FAIL|
|Node|Bare CJS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Bare CJS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Bare CJS|require()|sibling|Literate TS|❌ FAIL|
|Node|Bare CJS|require()|dependency|Bare CJS|🟩 PASS|
|Node|Bare CJS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Bare CJS|require()|dependency|Bare TS|❌ FAIL|
|Node|Bare CJS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Bare CJS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Bare CJS|require()|dependency|Literate TS|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Bare CJS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Bare CJS|dynamic import()|dependency|Literate TS|❌ FAIL|
|Node|Bare MJS|require()|sibling|Bare CJS|❌ FAIL|
|Node|Bare MJS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Bare MJS|require()|sibling|Bare TS|❌ FAIL|
|Node|Bare MJS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Bare MJS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Bare MJS|require()|sibling|Literate TS|❌ FAIL|
|Node|Bare MJS|require()|dependency|Bare CJS|❌ FAIL|
|Node|Bare MJS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Bare MJS|require()|dependency|Bare TS|❌ FAIL|
|Node|Bare MJS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Bare MJS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Bare MJS|require()|dependency|Literate TS|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Bare MJS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Bare MJS|dynamic import()|dependency|Literate TS|❌ FAIL|
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
|Node|Bare TS|require()|sibling|Bare CJS|❌ FAIL|
|Node|Bare TS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Bare TS|require()|sibling|Bare TS|❌ FAIL|
|Node|Bare TS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Bare TS|require()|sibling|Literate TS|❌ FAIL|
|Node|Bare TS|require()|dependency|Bare CJS|❌ FAIL|
|Node|Bare TS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Bare TS|require()|dependency|Bare TS|❌ FAIL|
|Node|Bare TS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Bare TS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Bare TS|require()|dependency|Literate TS|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Bare TS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Bare TS|dynamic import()|dependency|Literate TS|❌ FAIL|
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
|Node|Literate CJS|require()|sibling|Bare CJS|🟩 PASS|
|Node|Literate CJS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Literate CJS|require()|sibling|Bare TS|❌ FAIL|
|Node|Literate CJS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Literate CJS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Literate CJS|require()|sibling|Literate TS|❌ FAIL|
|Node|Literate CJS|require()|dependency|Bare CJS|🟩 PASS|
|Node|Literate CJS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Literate CJS|require()|dependency|Bare TS|❌ FAIL|
|Node|Literate CJS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Literate CJS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Literate CJS|require()|dependency|Literate TS|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Literate CJS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Literate CJS|dynamic import()|dependency|Literate TS|❌ FAIL|
|Node|Literate MJS|require()|sibling|Bare CJS|❌ FAIL|
|Node|Literate MJS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Literate MJS|require()|sibling|Bare TS|❌ FAIL|
|Node|Literate MJS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Literate MJS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Literate MJS|require()|sibling|Literate TS|❌ FAIL|
|Node|Literate MJS|require()|dependency|Bare CJS|❌ FAIL|
|Node|Literate MJS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Literate MJS|require()|dependency|Bare TS|❌ FAIL|
|Node|Literate MJS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Literate MJS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Literate MJS|require()|dependency|Literate TS|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Literate MJS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Literate MJS|dynamic import()|dependency|Literate TS|❌ FAIL|
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
|Node|Literate TS|require()|sibling|Bare CJS|❌ FAIL|
|Node|Literate TS|require()|sibling|Bare ESM|❌ FAIL|
|Node|Literate TS|require()|sibling|Bare TS|❌ FAIL|
|Node|Literate TS|require()|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|require()|sibling|Literate ESM|❌ FAIL|
|Node|Literate TS|require()|sibling|Literate TS|❌ FAIL|
|Node|Literate TS|require()|dependency|Bare CJS|❌ FAIL|
|Node|Literate TS|require()|dependency|Bare ESM|❌ FAIL|
|Node|Literate TS|require()|dependency|Bare TS|❌ FAIL|
|Node|Literate TS|require()|dependency|Literate CJS|❌ FAIL|
|Node|Literate TS|require()|dependency|Literate ESM|❌ FAIL|
|Node|Literate TS|require()|dependency|Literate TS|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Bare CJS|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Bare ESM|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Bare TS|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Literate CJS|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Literate ESM|❌ FAIL|
|Node|Literate TS|dynamic import()|sibling|Literate TS|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Bare CJS|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Bare ESM|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Bare TS|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Literate CJS|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Literate ESM|❌ FAIL|
|Node|Literate TS|dynamic import()|dependency|Literate TS|❌ FAIL|
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
|Rollup|Bare CJS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare CJS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare CJS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|static import|sibling|Literate ESM|❌ FAIL|
|Rollup|Bare MJS|static import|sibling|Literate TS|❌ FAIL|
|Rollup|Bare MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare MJS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|static import|sibling|Literate ESM|❌ FAIL|
|Rollup|Bare TS|static import|sibling|Literate TS|❌ FAIL|
|Rollup|Bare TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate CJS|🟩 PASS|
|Rollup|Bare TS|import type|sibling|Literate ESM|❌ FAIL|
|Rollup|Bare TS|import type|sibling|Literate TS|❌ FAIL|
|Rollup|Bare TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate CJS|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate ESM|🟩 PASS|
|Rollup|Bare TS|import type|dependency|Literate TS|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate CJS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|static import|sibling|Literate ESM|❌ FAIL|
|Rollup|Literate MJS|static import|sibling|Literate TS|❌ FAIL|
|Rollup|Literate MJS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate MJS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|require()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|require()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Literate ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import()|sibling|Literate TS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|dynamic import()|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|static import|sibling|Literate ESM|❌ FAIL|
|Rollup|Literate TS|static import|sibling|Literate TS|❌ FAIL|
|Rollup|Literate TS|static import|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|static import|dependency|Literate TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate CJS|🟩 PASS|
|Rollup|Literate TS|import type|sibling|Literate ESM|❌ FAIL|
|Rollup|Literate TS|import type|sibling|Literate TS|❌ FAIL|
|Rollup|Literate TS|import type|dependency|Bare CJS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Bare TS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate CJS|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate ESM|🟩 PASS|
|Rollup|Literate TS|import type|dependency|Literate TS|🟩 PASS|
