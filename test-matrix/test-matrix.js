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
    return { 'target.esm.md': `
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

  'absolute import' (source, target) {
    console.log('TODO')
  },

  'relative import' (source, target) {
    source = source('./target')
    target = target()

    writeFileSync('package.json', JSON.stringify({
      "package": "testcase",
      "scripts": {
        "foo": `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${Object.keys(source)[0]}`
      }
    }), 'utf8')
    for (const [name, content] of Object.entries(source)) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
    for (const [name, content] of Object.entries(target)) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
  },

  'package import'  (source, target) {
    source = source('./target')
    target = target()

    mkdirp('source')
    writeFileSync('source/package.json', JSON.stringify({
      "name": "source",
      "scripts": {
        "foo": `node -r @hackbg/ganesha-nodejs-loader/loader.cjs ${Object.keys(source)[0]}`
      }
    }), 'utf8')
    for (const [name, content] of Object.entries(source)) {
      writeFileSync(`source/${name}`, content.replace(/\n +/g, '\n'))
    }
    mkdirp('source/node_modules/target')
    writeFileSync('source/node_modules/target/package.json', JSON.stringify({
      "name": "target",
      "main": Object.entries(target)[0][0]
    }), 'utf8')
    for (const [name, content] of Object.entries(target)) {
      writeFileSync(`source/node_modules/target/${name}`, content.replace(/\n +/g, '\n'))
    }
  }

}

const Environments = {
  'Node'   () {
    console.log()
    require('child_process').spawnSync('pwd', [])
    require('child_process').spawnSync('cat', ['package.json'])
    require('child_process').spawnSync('ls', [])
    const {status} = require('child_process').spawnSync('npm', ['run', 'foo'])
    return status === 123
  },
  'Rollup' () {
    console.log('TODO')
  },
  'IDE'    () {
    console.log('TODO')
  }
}

process.chdir(__dirname)
mkdirp('testcases')
process.chdir('testcases')
const testCaseRoot = process.cwd()

const results = {}

let ok = 0
let fail = 0
let todo = 0

for (const environment in Environments) {
  results[environment] = {}
  for (const source in Sources) {
    results[environment][source] = {}
    for (const relation in Relations) {
      results[environment][source][relation] = {}
      for (const target in Targets) {
        results[environment][source][relation][target] = {}
        console.log(`test that [${source}] can [${relation}] [${target}] in [${environment}]`)
        const testCase = `${environment}/${source} ${relation} ${target}`.toLowerCase().replace(/ /g, '_')
        mkdirp(testCase)
        process.chdir(testCase)
        Relations[relation](Sources[source], Targets[target])
        const result = Environments[environment]()
        if (result === true)  { ok++ }
        if (result === false) { fail++ }
        if (result === undefined) { todo++ }
        process.chdir(testCaseRoot)
      }
    }
  }
}

console.log({ok, fail, todo})
