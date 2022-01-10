# Ganesha Test Matrix

## Current issues

* Using `require()` from TypeScript is not supported, see https://github.com/evanw/esbuild/issues/566
* Semantics of exports vary between literate and non-literate modules in some cases.

## Overview

This module generates a number of test cases under the `cases/` directory.
Each case corresponds to a different combination of conditions for importing
a JavaScript module. After the first run (using `npm run test:matrix`),
the full test matrix is printed to the console and saved in in `README.md`.
You can go into individual directories in `cases/` and run the test with
`npm run test`.

## Literate modules

Ganesha introduces the concept of **literate modules**, that is, executable code wrapped in
Markdown. The Markdown format already has a native `code block` primitive; however,
extracting the code from the code block is the [easy part](../core/parse.cjs).

```javascript
const Literacy = {
  'Bare'     (source) {
    return trimIndentation(source)
  },
  'Literate' (source) {
    return '```\n'+trimIndentation(source)+'\n```'
  }
}

function trimIndentation (source) {
  return source.replace(/\n +/g, '\n')
}
```

The difficulty comes from making this code available in the surrounding ecosystem,
where multiple code loading methods proliferate. While in CommonJS modules you only
have `require()`, and, in newer Node versions, the asynchronous `import()`, ES modules
introduce a static `import` statement, and TypeScript introduces `import type`.
Furthermore, TypeScript has opinions about when extensions are allowed, further
complicating the matter.

![](https://imgs.xkcd.com/comics/standards.png)

Below, we try to test all supported combinations of ways to import a module,
in order to make sure Ganesha fits seamlessly in the module ecosystem.

**NOTE**: Currently, the `{"type":"module"}` flag in `package.json` is not tested,
instead this is defined on a per-file basis (by using `.cjs` and `.mjs` extensions).
In the future, this should also be covered by the tests.

## Sources

This is the module that imports the [target](#targets) module.

In order to test the import workflow end-to-end, the test checks that
running the source module exits with the exit code of `123` exported by the target module.

**Warning**: There is a difference in the behavior of `module.exports`
between bare and literate CJS modules, when using dynamic `import()` calls.

The current problem with some of the tests involves different handling of default exports.
This is under investigation.

The [`Literacy`](#literate-modules) modifier applies here.

Each function returns the names and contents of files that will be created
in the directory of the particular test case.

```javascript
const { resolve } = require('path')
const node = `${resolve(__dirname, '..', 'nodejs-loader', 'ganesha')} --unhandled-rejections=throw`
const Sources = {
  'CJS': {
    'require'        (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.cjs.md': 'source.cjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          const process = require("process")
          const target = require("${target}")
          console.log(target)
          process.exit(target.exitCode)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.cjs.md': 'source.cjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          const process = require('process')
          import("${target}").then(target=>{
            console.log(target)
            process.exit(target.exitCode||target.default.exitCode)
          })
        `)
      }
    }
  },
  'MJS': {
    'require'        (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.mjs.md': 'source.mjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          const process = require('process')
          const target = require("${target}")
          console.log(target)
          process.exit(target.exitCode)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.mjs.md': 'source.mjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          import process from 'process'
          import("${target}").then(target=>{
            console.log(target)
            process.exit(target.exitCode||target.default.exitCode)
          })
        `)
      }
    },
    'static import'    (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.mjs.md': 'source.mjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          import process from 'process'
          import * as target from "${target}"
          process.exit(target.exitCode||target.default.exitCode)
        `)
      }
    },
  },
  'TS': {
    'require'        (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          const process = require('process')
          const target = require("${target}")
          console.log(target)
          process.exit(target.exitCode)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          import process from 'process'
          import("${target}").then(target=>{
            console.log(target)
            process.exit(target.exitCode||target.default.exitCode)
          })
        `)
      }
    },
    'static import'    (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          import process from 'process'
          import * as target from "${target}"
          process.exit(target.exitCode||target.default.exitCode)
        `)
      }
    },
    'import type'      (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `${node} ${main}`
          }
        }),
        [main]: literacy(`
          import process from 'process'
          import type { exitCode as ExitCode } from "${target}"
          import { exitCode } from "${target}"
          const theExitCode: ExitCode = exitCode
          process.exit(theExitCode)
        `)
      }
    },
  }
}
```

## Targets

The target module exports an exit code value (`123`),
which is imported by the [source](#sources) module.
The test process must exit with this value for the test to pass.

The target module can be either a **sibling** (imported by path)
or a **dependency** (imported by package name in node_modules).

The [`Literacy`](#literate-modules) modifier applies here, too.

Each function returns the names and contents of files that will be created
in the directory of the particular test case.

```javascript
const Targets = {
  'sibling': {
    'CJS' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.cjs.md': 'target.cjs'
      return {
        [main]: literacy(`
          module.exports.exitCode = 123
        `)
      }
    },
    'ESM' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.mjs.md': 'target.mjs'
      return {
        [main]: literacy(`
          export const exitCode = 123
        `)
      }
    },
    'TS'  (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.ts.md': 'target.ts'
      return {
        [main]: literacy(`
          export const exitCode = 123
        `)
      }
    },
  },
  'dependency': {
    'CJS' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.cjs.md': 'target.cjs'
      return {
        'node_modules/target/package.json': JSON.stringify({
          name: 'target',
          main
        }),
        [`node_modules/target/${main}`]: literacy(`
          module.exports.exitCode = 123
        `)
      }
    },
    'ESM' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.mjs.md': 'target.mjs'
      return {
        'node_modules/target/package.json': JSON.stringify({
          name: 'target',
          main
        }),
        [`node_modules/target/${main}`]: literacy(`
          export const exitCode = 123
        `)
      }
    },
    'TS'  (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.ts.md': 'target.ts'
      return {
        'node_modules/target/package.json': JSON.stringify({
          name: 'target',
          main
        }),
        [`node_modules/target/${main}`]: literacy(`
          export const exitCode = 123
        `)
      }
    },
  }
}
```

## Environments

So far, we have 9 source types * 2 literacy modes * 6 target types * 2 literacy modes,
totaling **216** combinations. To make things even more complicated, the module system
of Node.js does not translate to the browser. Instead, modern Web apps are compiled
with the use of a bundler, such as Browserify, Webpack, Parcel, Rollup, Esbuild, Vite
(which uses Rollup in development and Esbuild in production, or something like that), Rome, etc.

It is those bundlers that make it possible to write in different dialects of JavaScript,
such as TypeScript, Vue, React, etc., and then publish for browsers, which only understand
JavaScript. However, each bundler has its own logic for understanding the contents of a module,
extracting dependencies, etc.

Therefore, a different plugin implementation must be written for each bundler that we need to
support. And, the 216 test cases above must be run for each such plugin. Here, we test vanilla
Node.js, and Vite via a custom Rollup plugin, resulting in 432 combinations that need to be tested.

A third environment that needs to be taught to understand literate modules,
besides the server and the browser, is the IDE. Though I write most of my code
in good old Vim, and consider IDEs to be needlessly complex and unpredictable beasts,
I can't neglect the fact that Microsoft has successfully hooked the majority of Web
developers onto VS Code by introducing the Language Server Protocol, which allows
an IDE integration to be written once and reused across all IDEs that support LSP.

Thus, in the near future, this test suite will grow by **216 more** test cases,
which make sure that you don't get any distracting red underlines in your IDE of choice
when working with literate modules.

```javascript
const { writeFileSync } = require('fs')
const { spawnSync, execFileSync } = require('child_process')
const { dirname } = require('path')
const stdio = ['ignore','pipe','pipe']

const Environments = {

  'Node' () {
    spawnSync('pwd', [], { stdio })
    spawnSync('ls',  [], { stdio })
    spawnSync('cat', ['package.json'], { stdio })
    const {status, stdout, stderr} = spawnSync('npm', ['run', 'test'], { stdio })
    if (status === 123) {
      return [true]
    } else {
      return [false, status, stdout, stderr]
    }
  },

  'Vite' () {
    writeFileSync('index.html', `
      <script src="./source" type="module"></script>
    `, 'utf8')
    writeFileSync('vite.config.js', `
      import { defineConfig } from 'vite'
      import ganesha from '../../../rollup-plugin/index.js'
      export default defineConfig({ plugins: [ ganesha() ] })
    `, 'utf8')
    const vite = resolve(__dirname, '../node_modules/.bin/vite')
    const {status, stdout, stderr} = spawnSync(vite, ['build'], { stdio })
    if (status === 0) {
      /* TODO check that one of the output files contains the string "123" */
      return [true]
    } else {
      return [false, status, stdout, stderr]
    }
  },

  //'VSCode LSP'    () {
  //}
}
```

## Running the tests

![](now.gif)

Now comes the part where we iterate over all the possible combinations,
create the files defined by the [source](#sources) and [target](#targets) modules
in a subdirectory under `cases/` corresponding to the combinations,
and try to execute `npm run test` in that directory.

```javascript
const mkdirp = require('mkdirp').sync
process.chdir(__dirname)
mkdirp('cases')
process.chdir('cases')
const cases = process.cwd()
```

The result (ok/fail) of each test is recorded in a Markdown table which is added
to the README of this directory.

```javascript
let ok    = 0
let fail  = []
let todo  = 0
let total = 0
let failures = {}

const header = `
# Test matrix results
`

const environmentNames = Object.keys(Environments).join('|')
const environmentSeparators = Object.keys(Environments).map(()=>'---').join('|')

let report = `
|Source module|Import type|Relation type|Target module|${environmentNames}|
|-------------|-----------|-------------|-------------|${environmentSeparators}|
`

let i = 0
for (const [sourceLiteracy, setSourceLiteracy] of Object.entries(Literacy)) {
  for (const [source, importTypes] of Object.entries(Sources)) {
    for (const [importType, setupSource] of Object.entries(importTypes)) {
      for (const [relation, relationTargets] of Object.entries(Targets)) {
        for (const [targetLiteracy, setTargetLiteracy] of Object.entries(Literacy)) {
          for (const [target, setupTarget] of Object.entries(relationTargets)) {

            report += `|${sourceLiteracy} ${source}|${importType}|${relation}|${targetLiteracy} ${target}|`

            for (const [environment, runTestInEnvironment] of Object.entries(Environments)) {

              console.log(
                '\ncase', ++i,
                environment, sourceLiteracy, source, importType, relation, targetLiteracy, target
              )

              const testCase =
                `${environment}_${sourceLiteracy}_${source}_${importType}_${relation}_${targetLiteracy}_${target}`
                  .replace(/ /g,'_')

              mkdirp(testCase)
              process.chdir(testCase)

              let targetName
              if (relation === 'sibling') {
                let extension = target.toLowerCase()
                if (extension === 'esm') extension = 'mjs'
                if (targetLiteracy === 'Literate') extension += `.md`
                targetName = `./target.${extension}`
              } else if (relation === 'dependency') {
                targetName = 'target'
              } else {
                throw new Error(`unknown relation ${relation}`)
              }

              for (let [name, content] of Object.entries({
                ...setupSource(setSourceLiteracy, targetName),
                ...setupTarget(setTargetLiteracy)
              })) {
                const path = resolve(process.cwd(), name)
                //console.log('writing', path)
                mkdirp(dirname(path))
                writeFileSync(path, content)
              }

              const [result, status, stdout, stderr] = runTestInEnvironment()
              if (result === true) {
                ok++
                report += '🟩 PASS|'
                console.log('ok')
              } else if (result === false) {
                fail++
                report += `[❌ FAIL](./FAIL.md#${testCase.toLowerCase()})|`
                console.log(`fail: expected exit code 123, got ${status}`)
                failures[testCase] = { status, stdout, stderr }
                process.stdout.write(stdout)
                process.stderr.write(stderr)
              }

              process.chdir(cases)
            }

            report += '\n'
          }
        }
      }
    }
  }
}

console.log(report)
console.log({ total: i, ok, fail })

const output = require('path').resolve(__dirname, 'README.md')
writeFileSync(output, `${header}\n${report}`)
console.log(`Done. Wrote ${output}.`)

let failReport = ''
if (Object.entries(failures).length > 0) {

  failReport += '\n# Test failures\n'

  for (const [testCase, { status, stdout, stderr }] of Object.entries(failures)) {
    failReport += '\n## '+ testCase
    failReport += '\nExit code\n```\n' + status + '\n```\n'
    failReport += '\nStdout\n```\n' + stdout + '\n```\n'
    failReport += '\nStderr\n```\n' + stderr + '\n```\n'
  }

  const output = require('path').resolve(__dirname, 'FAIL.md')
  writeFileSync(output, `${header}\n${report}`)
  console.log(`Wrote output of ${fail} failed tests to ${output}.`)
}
```
