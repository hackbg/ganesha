const ts = require('.')(require('typescript'))
//console.log(Object.keys(ts).filter(x=>x.includes('eportErrors')))

//const sys = ts.sys

//const options = {}

//const host = ts.createCompilerHostWorker(options, undefined, sys)

// host.resolveModuleNames?

//debugger
//const program = ts.createProgram({
  //rootNames: ['test1.ts'],
  //options,
  //projectReferences: undefined,
  //host,
  //configFileParsingDiagnostics: undefined
//})

//const writeFile = (...args) => console.log('writeFile', ...args)
//const reportDiagnostic = (...args) => {}//console.log('reportDiagnostic', ...args)

//debugger
//const { emitResult, diagnostics } = ts.emitFilesAndReportErrors(program, reportDiagnostic)

//const { getLanguageVariant } = ts
//ts.getLanguageVariant = (...args) => {
  //const result = getLanguageVariant(...args)
  //console.trace('getLanguageVariant', ...args, '=', result)
  //return result
//}

//console.log(emitResult)

//const transpile = fileName =>
  //ts.transpileModule(require('fs').readFileSync(fileName, 'utf8'), { fileName })
//console.log(transpile('test1.ts'))
//console.log(transpile('test2.ts.md'))
//console.log(transpile('test3.md'))
//console.log(diagnostics)

const exitStatus = ts.emitFilesAndReportErrorsAndGetExitStatus(
  ts.createProgram({
    rootNames:                    ['test1.ts'],
    options:                      {},
    projectReferences:            undefined,
    host:                         ts.createCompilerHostWorker({}, undefined, ts.sys),
    configFileParsingDiagnostics: undefined
  }),
  (...args) => {
    console.log('\nDIAG', ...args)
  },
  (...args) => {
    console.log('\nWRITE', ...args)
  }
)

console.log({exitStatus})
