# Ganesha

## Test Matrix Results

|Environment|Import mode|Source module type|Target module type|Result|
|-----------|-----------|------------------|------------------|------|
|Node|relative import|CJS|CJS|🟩 OK|
|Node|relative import|CJS|ESM|❌ FAIL|
|Node|relative import|CJS|TS|❌ FAIL|
|Node|relative import|CJS|Literate CJS|❌ FAIL|
|Node|relative import|CJS|Literate ESM|❌ FAIL|
|Node|relative import|CJS|Literate TS|❌ FAIL|
|Node|package import|CJS|CJS|🟩 OK|
|Node|package import|CJS|ESM|❌ FAIL|
|Node|package import|CJS|TS|❌ FAIL|
|Node|package import|CJS|Literate CJS|❌ FAIL|
|Node|package import|CJS|Literate ESM|❌ FAIL|
|Node|package import|CJS|Literate TS|❌ FAIL|
|Node|relative import|ESM|CJS|🟩 OK|
|Node|relative import|ESM|ESM|🟩 OK|
|Node|relative import|ESM|TS|🟩 OK|
|Node|relative import|ESM|Literate CJS|❌ FAIL|
|Node|relative import|ESM|Literate ESM|🟩 OK|
|Node|relative import|ESM|Literate TS|🟩 OK|
|Node|package import|ESM|CJS|🟩 OK|
|Node|package import|ESM|ESM|🟩 OK|
|Node|package import|ESM|TS|🟩 OK|
|Node|package import|ESM|Literate CJS|❌ FAIL|
|Node|package import|ESM|Literate ESM|🟩 OK|
|Node|package import|ESM|Literate TS|🟩 OK|
|Node|relative import|TS|CJS|🟩 OK|
|Node|relative import|TS|ESM|🟩 OK|
|Node|relative import|TS|TS|🟩 OK|
|Node|relative import|TS|Literate CJS|❌ FAIL|
|Node|relative import|TS|Literate ESM|🟩 OK|
|Node|relative import|TS|Literate TS|🟩 OK|
|Node|package import|TS|CJS|🟩 OK|
|Node|package import|TS|ESM|🟩 OK|
|Node|package import|TS|TS|🟩 OK|
|Node|package import|TS|Literate CJS|❌ FAIL|
|Node|package import|TS|Literate ESM|🟩 OK|
|Node|package import|TS|Literate TS|🟩 OK|
|Node|relative import|Literate CJS|CJS|🟩 OK|
|Node|relative import|Literate CJS|ESM|❌ FAIL|
|Node|relative import|Literate CJS|TS|❌ FAIL|
|Node|relative import|Literate CJS|Literate CJS|❌ FAIL|
|Node|relative import|Literate CJS|Literate ESM|❌ FAIL|
|Node|relative import|Literate CJS|Literate TS|❌ FAIL|
|Node|package import|Literate CJS|CJS|🟩 OK|
|Node|package import|Literate CJS|ESM|❌ FAIL|
|Node|package import|Literate CJS|TS|❌ FAIL|
|Node|package import|Literate CJS|Literate CJS|❌ FAIL|
|Node|package import|Literate CJS|Literate ESM|❌ FAIL|
|Node|package import|Literate CJS|Literate TS|❌ FAIL|
|Node|relative import|Literate ESM|CJS|🟩 OK|
|Node|relative import|Literate ESM|ESM|🟩 OK|
|Node|relative import|Literate ESM|TS|🟩 OK|
|Node|relative import|Literate ESM|Literate CJS|❌ FAIL|
|Node|relative import|Literate ESM|Literate ESM|🟩 OK|
|Node|relative import|Literate ESM|Literate TS|🟩 OK|
|Node|package import|Literate ESM|CJS|🟩 OK|
|Node|package import|Literate ESM|ESM|🟩 OK|
|Node|package import|Literate ESM|TS|🟩 OK|
|Node|package import|Literate ESM|Literate CJS|❌ FAIL|
|Node|package import|Literate ESM|Literate ESM|🟩 OK|
|Node|package import|Literate ESM|Literate TS|🟩 OK|
|Node|relative import|Literate TS|CJS|🟩 OK|
|Node|relative import|Literate TS|ESM|🟩 OK|
|Node|relative import|Literate TS|TS|🟩 OK|
|Node|relative import|Literate TS|Literate CJS|❌ FAIL|
|Node|relative import|Literate TS|Literate ESM|🟩 OK|
|Node|relative import|Literate TS|Literate TS|🟩 OK|
|Node|package import|Literate TS|CJS|🟩 OK|
|Node|package import|Literate TS|ESM|🟩 OK|
|Node|package import|Literate TS|TS|🟩 OK|
|Node|package import|Literate TS|Literate CJS|❌ FAIL|
|Node|package import|Literate TS|Literate ESM|🟩 OK|
|Node|package import|Literate TS|Literate TS|🟩 OK|
|Rollup|relative import|CJS|CJS|❌ FAIL|
|Rollup|relative import|CJS|ESM|❌ FAIL|
|Rollup|relative import|CJS|TS|❌ FAIL|
|Rollup|relative import|CJS|Literate CJS|❌ FAIL|
|Rollup|relative import|CJS|Literate ESM|❌ FAIL|
|Rollup|relative import|CJS|Literate TS|❌ FAIL|
|Rollup|package import|CJS|CJS|❌ FAIL|
|Rollup|package import|CJS|ESM|❌ FAIL|
|Rollup|package import|CJS|TS|❌ FAIL|
|Rollup|package import|CJS|Literate CJS|❌ FAIL|
|Rollup|package import|CJS|Literate ESM|❌ FAIL|
|Rollup|package import|CJS|Literate TS|❌ FAIL|
|Rollup|relative import|ESM|CJS|🟩 OK|
|Rollup|relative import|ESM|ESM|🟩 OK|
|Rollup|relative import|ESM|TS|🟩 OK|
|Rollup|relative import|ESM|Literate CJS|🟩 OK|
|Rollup|relative import|ESM|Literate ESM|🟩 OK|
|Rollup|relative import|ESM|Literate TS|🟩 OK|
|Rollup|package import|ESM|CJS|🟩 OK|
|Rollup|package import|ESM|ESM|🟩 OK|
|Rollup|package import|ESM|TS|🟩 OK|
|Rollup|package import|ESM|Literate CJS|🟩 OK|
|Rollup|package import|ESM|Literate ESM|🟩 OK|
|Rollup|package import|ESM|Literate TS|🟩 OK|
|Rollup|relative import|TS|CJS|🟩 OK|
|Rollup|relative import|TS|ESM|🟩 OK|
|Rollup|relative import|TS|TS|🟩 OK|
|Rollup|relative import|TS|Literate CJS|🟩 OK|
|Rollup|relative import|TS|Literate ESM|🟩 OK|
|Rollup|relative import|TS|Literate TS|🟩 OK|
|Rollup|package import|TS|CJS|🟩 OK|
|Rollup|package import|TS|ESM|🟩 OK|
|Rollup|package import|TS|TS|🟩 OK|
|Rollup|package import|TS|Literate CJS|🟩 OK|
|Rollup|package import|TS|Literate ESM|🟩 OK|
|Rollup|package import|TS|Literate TS|🟩 OK|
|Rollup|relative import|Literate CJS|CJS|❌ FAIL|
|Rollup|relative import|Literate CJS|ESM|❌ FAIL|
|Rollup|relative import|Literate CJS|TS|❌ FAIL|
|Rollup|relative import|Literate CJS|Literate CJS|❌ FAIL|
|Rollup|relative import|Literate CJS|Literate ESM|❌ FAIL|
|Rollup|relative import|Literate CJS|Literate TS|❌ FAIL|
|Rollup|package import|Literate CJS|CJS|❌ FAIL|
|Rollup|package import|Literate CJS|ESM|❌ FAIL|
|Rollup|package import|Literate CJS|TS|❌ FAIL|
|Rollup|package import|Literate CJS|Literate CJS|❌ FAIL|
|Rollup|package import|Literate CJS|Literate ESM|❌ FAIL|
|Rollup|package import|Literate CJS|Literate TS|❌ FAIL|
|Rollup|relative import|Literate ESM|CJS|🟩 OK|
|Rollup|relative import|Literate ESM|ESM|🟩 OK|
|Rollup|relative import|Literate ESM|TS|🟩 OK|
|Rollup|relative import|Literate ESM|Literate CJS|🟩 OK|
|Rollup|relative import|Literate ESM|Literate ESM|🟩 OK|
|Rollup|relative import|Literate ESM|Literate TS|🟩 OK|
|Rollup|package import|Literate ESM|CJS|🟩 OK|
|Rollup|package import|Literate ESM|ESM|🟩 OK|
|Rollup|package import|Literate ESM|TS|🟩 OK|
|Rollup|package import|Literate ESM|Literate CJS|🟩 OK|
|Rollup|package import|Literate ESM|Literate ESM|🟩 OK|
|Rollup|package import|Literate ESM|Literate TS|🟩 OK|
|Rollup|relative import|Literate TS|CJS|🟩 OK|
|Rollup|relative import|Literate TS|ESM|🟩 OK|
|Rollup|relative import|Literate TS|TS|🟩 OK|
|Rollup|relative import|Literate TS|Literate CJS|🟩 OK|
|Rollup|relative import|Literate TS|Literate ESM|🟩 OK|
|Rollup|relative import|Literate TS|Literate TS|🟩 OK|
|Rollup|package import|Literate TS|CJS|🟩 OK|
|Rollup|package import|Literate TS|ESM|🟩 OK|
|Rollup|package import|Literate TS|TS|🟩 OK|
|Rollup|package import|Literate TS|Literate CJS|🟩 OK|
|Rollup|package import|Literate TS|Literate ESM|🟩 OK|
|Rollup|package import|Literate TS|Literate TS|🟩 OK|
