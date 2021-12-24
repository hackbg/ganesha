const Sources = {
  'CJS' (target) {
    return { 'source.cjs': `
      module.exports = require("${target}")
    ` }
  },
  'ESM' (target) {
    return { 'source.mjs': `
      import * as Target from "${target}"
      export default Target
    ` }
  },
  'TS'  (target) {
    return { 'source.ts': `
      import * as Target from "${target}"
      export default Target
    ` }
  },
  'CJS in MD' (target) {
    return { 'source.cjs.md': `
      \`\`\`javascript
      module.exports = require("${target}")
      \`\`\`
    ` }
  },
  'ESM in MD' (target) {
    return { 'source.mjs.md': `
      \`\`\`javascript
      import * as Target from "${target}"
      export default Target
      \`\`\`
    ` }
  },
  'TS in MD'  (target) {
    return { 'source.ts.md': `
      \`\`\`typescript
      import * as Target from "${target}"
      export default Target
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

const Environments = {
  'Node'   () {
  },
  'Rollup' () {
  },
  'IDE'    () {
  }
}

const {writeFileSync} = require('fs')
const {baseName} = require('path')
const mkdirp = require('mkdirp').sync

const Relations = {

  'absolute import' (source, target) {
  },

  'relative import' (source, target) {
    writeFileSync('package.json', JSON.stringify({
      "package": "testcase"
    }), 'utf8')
    for (const [name, content] of Object.entries(source('./target'))) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
    for (const [name, content] of Object.entries(target())) {
      writeFileSync(name, content.replace(/\n +/g, '\n'))
    }
  },

  'package import'  (source, target) {
    mkdirp('source')
    writeFileSync('source/package.json', JSON.stringify({
      "name": "source"
    }), 'utf8')
    for (const [name, content] of Object.entries(source('target'))) {
      writeFileSync(`source/${name}`, content.replace(/\n +/g, '\n'))
    }
    mkdirp('source/node_modules/target')
    writeFileSync('source/node_modules/target/package.json', JSON.stringify({
      "name": "target",
      "main": Object.entries(target())[0][0]
    }), 'utf8')
    for (const [name, content] of Object.entries(target())) {
      writeFileSync(`source/node_modules/target/${name}`, content.replace(/\n +/g, '\n'))
    }
  }

}

process.chdir(__dirname)
mkdirp('testcases')
process.chdir('testcases')
const testCaseRoot = process.cwd()

for (const environment in Environments) {
  for (const source in Sources) {
    for (const relation in Relations) {
      for (const target in Targets) {
        console.log(`TODO: test that [${source}] can [${relation}] [${target}] in [${environment}]`)
        const testCase = `${environment}/${source} ${relation} ${target}`.toLowerCase().replace(/ /g, '_')
        mkdirp(testCase)
        process.chdir(testCase)
        Environments[environment]()
        Relations[relation](Sources[source], Targets[target])
        process.chdir(testCaseRoot)
      }
    }
  }
}
