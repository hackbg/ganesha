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
      module.exports = require("${target}")
      \`\`\`
    ` }
  },
  'ESM in MD' (target) {
    return { 'target.esm.md': `
      \`\`\`javascript
      import * as Target from "${target}"
      export default Target
      \`\`\`
    ` }
  },
  'TS in MD'  (target) {
    return { 'target.ts.md': `
      \`\`\`typescript
      import * as Target from "${target}"
      export default Target
      \`\`\`
    ` }
  }
}

const Environments = {
  'Node'   () {},
  'Rollup' () {},
  'IDE'    () {}
}

const Relations = {
  'absolute import' () {},
  'relative import' () {},
  'package import'  () {}
}

process.chdir(__dirname)
require('mkdirp').sync('snapshots')
process.chdir('snapshots')

for (const environment in Environments) {
  for (const source in Sources) {
    for (const relation in Relations) {
      for (const target in Targets) {
        console.log(`TODO: test that [${source}] can [${relation}] [${target}] in [${environment}]`)
        const testCase = `${environment}/${source} ${relation} ${target}`.toLowerCase().replace(/ /g, '_')
        require('mkdirp').sync(testCase)
      }
    }
  }
}
