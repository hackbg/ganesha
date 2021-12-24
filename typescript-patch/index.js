const { parseString } = require('../core/parse.cjs')

const path = require('path')

const EXTENSIONS = [ '.ts.md', '.md', /*TODO add remaining ones*/ ]

module.exports = function patchTypescript (typescript) {

  const {
    resolveModuleName,
    //getResolvedModule,
    //createTypeChecker,
    createSourceFile
  } = typescript

  const patch = {
    resolveModuleName: GANESHA_resolveModuleName,
    //getResolvedModule: GANESHA_getResolvedModule,
    //createTypeChecker: GANESHA_createTypeChecker,
    createSourceFile:  GANESHA_createSourceFile
  }

  Object.assign(typescript, patch)

  return typescript

  function GANESHA_resolveModuleName (...args) {
    //if (!args[0].startsWith('@typescript')) {
      //console.trace('\nGANESHA resolveModuleName', ...args)
    //}
    context = args[3]
    const resolved = resolveModuleName(...args)
    if (!resolved.resolvedModule) {
      for (const extension of EXTENSIONS) {
        const filename         = `${args[0]}${extension}`
        const resolvedFileName = path.resolve(path.dirname(args[1]), filename)
        if (args[3].fileExists(resolvedFileName)) {
          resolved.resolvedModule = {
            resolvedFileName,
            originalPath:            undefined,
            extension:               '.ts',
            isExternalLibraryImport: false,
            packageId:               undefined
          }
          resolved.failedLookupLocations = []
        }
      }
    }
    return resolved
  }

  function GANESHA_getResolvedModule (sourceFile, moduleNameText, mode) {
    const resolved = getResolvedModule(sourceFile, moduleNameText, mode)
    //console.log('\n----------------------------------------------\n')
    //console.trace('getResolvedModule', {sourceFile, moduleNameText, mode}, '=', resolved)
    if (!resolved && moduleNameText.startsWith('.')) {
      for (const extension of EXTENSIONS) {
        if (moduleNameText.endsWith(extension)) {
          const filename = path.resolve(path.dirname(sourceFile.fileName), moduleNameText)
          //console.log('========+>trying', filename)
          if (context.fileExists(filename)) {
            //console.log('========+>found', filename)
            return {
              resolvedFileName: filename,
              exports: {}
            }
          }
        }
      }
    }
    return resolved
  }

  function GANESHA_createSourceFile (name, text, ...args) {
    //console.trace('GANESHA createSourceFile', name, text, ...args)
    if (name.endsWith('.md')) {
      text = parseString(text)
    }
    const sourceFile = createSourceFile(name, text, ...args)
    return sourceFile
  }

  function GANESHA_createTypeChecker (...args) {

    const {getSourceFile} = args[0] /* host */
    args[0].getSourceFile = function GANESHA_getSourceFile (resolvedFileName) {
      //console.log('getSourceFile', resolvedFileName)
      let sourceFile = getSourceFile(resolvedFileName)
      const allocator = typescript.objectAllocator
      for (const extension of EXTENSIONS) {
        if (resolvedFileName.endsWith(extension)) {
          if (!sourceFile) {
            const SourceFile = allocator.getSourceFileConstructor()
            sourceFile = new SourceFile(303 /* SyntaxKind.SourceFile */, -1, -1)
          }
          if (!sourceFile.GANESHA) {
            const SymbolObject = allocator.getSymbolConstructor()
            sourceFile.symbol  = new SymbolObject(0, sourceFile.fileName)
            sourceFile.symbol.exports = new typescript.Map();
            sourceFile.text = parseString(sourceFile.text)
            sourceFile.GANESHA = true
          }
        }
      }
      //console.log('\n----------------------------------------------\n')
      //console.trace('getSourceFile', args[0], sourceFile ? sourceFile.symbol : '???')
      return sourceFile
    }

    const checker = createTypeChecker(...args)
    const {getSymbolAtLocation} = checker
    checker.getSymbolAtLocation = function GANESHA_getSymbolAtLocation (node, ignoreErrors) {

      //const ts = typescript
      //const { kind } = node.parent
      //if (
        //(kind === 265 [> ImportDeclaration */ || kind === 271 /* ExportDeclaration <])
        //&& node.parent.moduleSpecifier === node
      //) {

      //}

      const result = getSymbolAtLocation(node, ignoreErrors)
      //console.log('\n----------------------------------------------\n')
      //console.trace('getSymbolAtLocation', { node, ignoreErrors, }, '=', result )
      return result
    }

    return checker
  }


}
