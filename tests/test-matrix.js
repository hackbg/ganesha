const Sources = {
  'CJS' (target) {
    return { 'source.cjs': `
      process.exit(require("${target}"))
    ` }
  },
  'ESM' (target) {
    return { 'source.mjs': `
      import Target from "${target}"
      process.exit(Target)
    ` }
  },
  'TS'  (target) {
    return { 'source.ts': `
      import Target from "${target}"
      process.exit(Target)
    ` }
  },
  'CJS in MD' (target) {
    return { 'source.cjs.md': `
      \`\`\`javascript
      process.exit(require("${target}"))
      \`\`\`
    ` }
  },
  'ESM in MD' (target) {
    return { 'source.mjs.md': `
      \`\`\`javascript
      import Target from "${target}"
      process.exit(Target)
      \`\`\`
    ` }
  },
  'TS in MD'  (target) {
    return { 'source.ts.md': `
      \`\`\`typescript
      import Target from "${target}"
      process.exit(Target)
      \`\`\`
    ` }
  }
}

const Targets = {
  'CJS' (target) {
    return { 'target.cjs': `
      module.exports = 123
    ` }
  },
  'ESM' (target) {
    return { 'target.mjs': `
      export default 123
    ` }
  },
  'TS'  (target) {
    return { 'target.ts': `
      export default 123
    ` }
  },
  'CJS in MD' (target) {
    return { 'target.cjs.md': `
      \`\`\`javascript
      module.exports = 123
      \`\`\`
    ` }
  },
  'ESM in MD' (target) {
    return { 'target.mjs.md': `
      \`\`\`javascript
      export default 123
      \`\`\`
    ` }
  },
  'TS in MD'  (target) {
    return { 'target.ts.md': `
      \`\`\`typescript
      export default 123
      \`\`\`
    ` }
  }
}

const {writeFileSync} = require('fs')
const {baseName} = require('path')
const mkdirp = require('mkdirp').sync

const Relations = {

  //'absolute import' (source, target) {
  //},

  'relative import' (srcType, tgtType) {
    const source = Sources[srcType]('./target')
    const target = Targets[tgtType]()

    writeFileSync('package.json', JSON.stringify({
      "package": "testcase",
      "type": srcType.includes('CJS') ? undefined : 'module',
      "scripts": {
        "test": srcType.includes('CJS')
          ? `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${Object.keys(source)[0]}`
          : `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${Object.keys(source)[0]}`
      },
    }), 'utf8')

    for (const [name, content] of Object.entries(source)) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
    for (const [name, content] of Object.entries(target)) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
  },

  'package import' (srcType, tgtType) {
    const source = Sources[srcType]('target')
    const target = Targets[tgtType]()

    writeFileSync('package.json', JSON.stringify({
      "name": "source",
      "type": srcType.includes('CJS') ? undefined : 'module',
      "scripts": {
        "test": srcType.includes('CJS')
          ? `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${Object.keys(source)[0]}`
          : `node --unhandled-rejections=throw --experimental-loader @hackbg/ganesha-nodejs-loader/loader.mjs ${Object.keys(source)[0]}`
      },
    }), 'utf8')
    for (const [name, content] of Object.entries(source)) {
      writeFileSync(`${name}`, content.replace(/\n +/g, '\n'))
    }
    mkdirp('node_modules/target')
    writeFileSync('node_modules/target/package.json', JSON.stringify({
      "name": "target",
      "main": Object.entries(target)[0][0],
      "type": tgtType.includes('CJS') ? undefined : 'module'
    }), 'utf8')
    for (const [name, content] of Object.entries(target)) {
      writeFileSync(`node_modules/target/${name}`, content.replace(/\n +/g, '\n'))
    }
  }

}

const { spawnSync, execFileSync } = require('child_process')

const Environments = {

  'Node' () {
    require('child_process').spawnSync('pwd', [], { stdio: 'inherit' })
    require('child_process').spawnSync('ls', [], { stdio: 'inherit' })
    require('child_process').spawnSync('cat', ['package.json'], { stdio: 'inherit' })
    const {status} = spawnSync('npm', ['run', 'test'], { stdio: 'inherit' })
    return status === 123
  },

  'Rollup' () {
    writeFileSync('index.html', `
      <script src="./source" type="module"></script>
    `, 'utf8')
    writeFileSync('vite.config.js', `
      import { defineConfig } from 'vite'
      import ganesha from '../../../../rollup-plugin/index.js'
      export default defineConfig({ plugins: [ ganesha() ] })
    `, 'utf8')
    const vite = require('path').resolve(__dirname, '../node_modules/.bin/vite')
    const {status} = spawnSync(vite, ['build'], { stdio: 'inherit' })
    return status === 0 /* TODO check that one of the output files contains the string "123" */
  },

  //'VSCode LSP'    () {
  //}
}

process.chdir(__dirname)
mkdirp('testcases')
process.chdir('testcases')
const testCaseRoot = process.cwd()

const results = {}

let ok = 0
let fail = []
let todo = 0
let total = 0

for (const environment in Environments) {
  results[environment] = {}
  for (const source in Sources) {
    results[environment][source] = {}
    for (const relation in Relations) {
      results[environment][source][relation] = {}
      for (const target in Targets) {
        results[environment][source][relation][target] = {}
        const testCase = `${environment}/${source} ${relation} ${target}`.toLowerCase().replace(/ /g, '_')

        require('tap').test(testCase, async({ assert })=>{

          total++
          mkdirp(testCase)
          process.chdir(testCase)
          Relations[relation](source, target)
          const result = Environments[environment]()

          if (result === undefined) {
            todo++
          } else {
            console.log(`\n\n[${source}] can [${relation}] [${target}] in [${environment}]`)
            console.log(`${result?'OK':'FAIL'}`)
            if (result === true)  { ok++ }
            if (result === false) { fail.push(testCase) }
          }

          process.chdir(testCaseRoot)

          assert(result, testCase)

        })

      }
    }
  }
}

console.log({ok, fail: fail.length, todo, total})
console.log({fail})
