# Ganesha Test Matrix

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

The [`Literacy`](#literate-modules) modifier applies here.

Each function returns the names and contents of files that will be created
in the directory of the particular test case.

```javascript
const Sources = {
  'CJS': {
    'require'        (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.cjs.md': 'source.cjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${main}`
          }
        }),
        [main]: literacy(`
          process.exit(require("${target}").default)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.cjs.md': 'source.cjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${main}`
          }
        }),
        [main]: literacy(`
          import("${target}").then(target=>process.exit(target.default))
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
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${main}`
          }
        }),
        [main]: literacy(`
          process.exit(require("${target}").default)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.mjs.md': 'source.mjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${main}`
          }
        }),
        [main]: literacy(`
          import("${target}").then(target=>process.exit(target.default))
        `)
      }
    },
    'static import'    (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.mjs.md': 'source.mjs'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${main}`
          }
        }),
        [main]: literacy(`
          import exitCode from "${target}"
          process.exit(exitCode)
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
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${main}`
          }
        }),
        [main]: literacy(`
          process.exit(require("${target}").default)
        `)
      }
    },
    'dynamic import' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
          }
        }),
        [main]: literacy(`
          import("${target}").then(target=>process.exit(target.default))
        `)
      }
    },
    'static import'    (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
          }
        }),
        [main]: literacy(`
          import exitCode from "${target}"
          process.exit(exitCode)
        `)
      }
    },
    'import type'      (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'source.ts.md': 'source.ts'
      return {
        'package.json': JSON.stringify({
          name: "source",
          scripts: {
            "test": `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs source.ts`
          }
        }),
        [main]: literacy(`
          import type ExitCode from "${target}"
          import exitCode from "${target}"
          const theExitCode: ExitCode = exitCode
          process.exit(exitCode)
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
          module.exports = 123
        `)
      }
    },
    'ESM' (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.mjs.md': 'target.mjs'
      return {
        [main]: literacy(`
          export default 123
        `)
      }
    },
    'TS'  (literacy, target) {
      const main = (literacy.name === 'Literate') ? 'target.ts.md': 'target.ts'
      return {
        [main]: literacy(`
          export default 123
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
          module.exports = 123
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
          export default 123
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
          export default 123
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
const { resolve, dirname } = require('path')
const stdio = ['ignore','inherit','inherit']

const Environments = {

  'Node' () {
    spawnSync('pwd', [], { stdio })
    spawnSync('ls',  [], { stdio })
    spawnSync('cat', ['package.json'], { stdio })
    const {status} = spawnSync('npm', ['run', 'test'], { stdio })
    return status === 123
  },

  'Rollup' () {
    writeFileSync('index.html', `
      <script src="./source" type="module"></script>
    `, 'utf8')
    writeFileSync('vite.config.js', `
      import { defineConfig } from 'vite'
      import ganesha from '../../../rollup-plugin/index.js'
      export default defineConfig({ plugins: [ ganesha() ] })
    `, 'utf8')
    const vite = resolve(__dirname, '../node_modules/.bin/vite')
    const {status} = spawnSync(vite, ['build'], { stdio })
    return status === 0 /* TODO check that one of the output files contains the string "123" */
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

const header = `
# Ganesha
`

let report = `
## Test Matrix Results

|Environment|Source module|Import type|Relation type|Target module|Result|
|-----------|-------------|-----------|-------------|-------------|------|
`

let i = 0
for (const [environment, runTestInEnvironment] of Object.entries(Environments)) {
  for (const [sourceLiteracy, setSourceLiteracy] of Object.entries(Literacy)) {
    for (const [source, importTypes] of Object.entries(Sources)) {
      for (const [importType, setupSource] of Object.entries(importTypes)) {
        for (const [relation, relationTargets] of Object.entries(Targets)) {
          for (const [targetLiteracy, setTargetLiteracy] of Object.entries(Literacy)) {
            for (const [target, setupTarget] of Object.entries(relationTargets)) {

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
                targetName = `./target.${extension}`
              } else if (relation === 'dependency') {
                targetName = 'target'
              } else {
                throw new Error(`unknown relation ${relation}`)
              }

              for (let [name, content] of Object.entries(
                setupSource(setSourceLiteracy, targetName)
              )) {
                const path = resolve(process.cwd(), name)
                console.log('writing', path)
                mkdirp(dirname(path))
                writeFileSync(path, content)
              }

              for (let [name, content] of Object.entries(
                setupTarget(setTargetLiteracy)
              )) {
                const path = resolve(process.cwd(), name)
                console.log('writing', path)
                mkdirp(dirname(path))
                writeFileSync(path, content)
              }

              const result = runTestInEnvironment()
              report += `|${environment}|${sourceLiteracy} ${source}|${importType}|${relation}|${targetLiteracy} ${target}|`
              if (result === true) {
                ok++
                report += '🟩 PASS'
                console.log('ok')
              } else if (result === false) {
                fail++
                report += '❌ FAIL'
                console.log('fail')
              }
              report += '|\n'

              process.chdir(cases)
            }
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

/*
const running = []
    for (const relation in Relations) {
      for (const target in Targets) {
        const testCase = `${environment}/${source} ${relation} ${target}`.toLowerCase().replace(/ /g, '_')

        running.push(require('tap').test(testCase, async({ assert })=>{

          total++
          mkdirp(testCase)
          process.chdir(testCase)
          Relations[relation](source, target)
          const result = Environments[environment]()

          if (result === undefined) {
            report += `\n|${environment}|${relation}|${source}|${target}|⏳ TODO|`
            todo++
          } else {
            console.log(`\n\n[${source}] can [${relation}] [${target}] in [${environment}]`)
            console.log(`${result?'OK':'FAIL'}`)
            if (result === true)  {
              report += `\n|${environment}|${relation}|${source}|${target}|🟩 OK|`
              ok++
            }
            if (result === false) {
              report += `\n|${environment}|${relation}|${source}|${target}|❌ FAIL|`
              fail.push(testCase)
            }
          }

          process.chdir(cases)

          assert(result, testCase)

        }))

      }
    }

  }

}

Promise.all(running).then(()=>{
  console.log({ok, fail: fail.length, todo, total})
  console.log({fail})
  const output = require('path').resolve(__dirname, 'README.md')
  writeFileSync(output, report+'\n')
  console.log(`Done. Wrote ${output}.`)
})*/
```
