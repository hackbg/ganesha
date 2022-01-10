import { resolve, dirname, extname } from 'path'
import { writeFileSync } from 'fs'
import * as ts from 'typescript/lib/tsserverlibrary'
import { parseString } from '@ganesha/core/parse.cjs'

export function patchProgram (
  program: ts.Program
): ts.Program {
  //console.log('patchProgram')
  const { getSourceFile, getSourceFiles, emit } = program
  return Object.assign(program, {
    emit (
      sourceFile?:        ts.SourceFile,
      writeFileCallback?: ts.WriteFileCallback,
      cancellationToken?: ts.CancellationToken,
      emitOnlyDtsFiles?:  boolean,
      transformers?:      ts.CustomTransformers,
    ) {
      if (!writeFileCallback) {
        writeFileCallback = (path: string, text: string) => {
          writeFileSync(path, text, 'utf8')
        }
      }
      const result = emit(
        sourceFile,
        writeFileCallback,
        cancellationToken,
        emitOnlyDtsFiles,
        transformers,
      )
      return result
    },
    GANESHA: true,
    //getSourceFile (fileName: string) {
      //if (!fileName.includes('node_modules')) {
        //console.log('program.getSourceFile', fileName)
      //}
      //return getSourceFile(fileName)
    //},
    //getSourceFiles (...args: any) {
      //console.log('program.getSourceFiles', args, Object.keys(getSourceFiles()))
      //console.log(getSourceFiles.toString())
      //throw new Error('program.getSourceFiles: unimplemented')
    //},
  })
}

export type CompilerHost = ts.CompilerHost & {
  getCompilationSettings: () => any
  getProjectVersion:      () => string
  getScriptFileNames:     () => string[]
  getScriptVersion:       () => string
  getScriptSnapshot:      (fileName: string) => ts.IScriptSnapshot|undefined,
  getProjectReferences:   () => any
}

export function getShimmedHost (
  host:      CompilerHost,
  options:   ts.CreateProgramOptions,
  fileNames: string[],
  snapshots: Map<string, ts.IScriptSnapshot> = new Map()
): CompilerHost {

  return {
    ...host,

		//writeFile (...args: any) {
      //console.log('writeFile', args)
      //throw new Error('writeFile: unimplemented')
    //},

    //getSourceFile (...args: any) {
      //console.log('getSourceFile', args)
      //throw new Error('getSourceFile: unimplemented')
    //},

		getCompilationSettings () {
      options.options.allowNonTsExtensions = true
      options.options.allowJs = true
      //console.log({options})
      return options.options
    },

		getScriptFileNames () {
      return fileNames
    },

		getScriptVersion () {
      return ''
    },

		getScriptSnapshot (fileName: string) {

      // Return a snaphot if it already exists
      const snapshot = snapshots.get(fileName);
      if (snapshot) {
        return snapshot
      }

      // Create a snapshot if it doesn't exist
      if (host.fileExists(fileName)) {
        let fileContent = host.readFile(fileName);
        if (fileContent !== undefined) {

          // If it's a literate module, flip it
          if (fileName.endsWith('.ts.md')) {
            fileContent = parseString(fileContent)
          }

          const snapshot = ts.ScriptSnapshot.fromString(fileContent);
          snapshots.set(fileName, snapshot);
          return snapshot;
        }
      }

    },

		getProjectVersion () {
      return ''
    },

		getProjectReferences () {
      return options.projectReferences
    },

    //resolveModuleNames (
      //moduleNames:         string[],
      //containingFilename:  string,
      //reusedNames:         string[],
      //redirectedReference: ts.ResolvedProjectReference,
      //options:             ts.CompilerOptions,
      //containingFile:      ts.SourceFile
    //): ts.ResolvedModuleFull[] {
      //console.trace('resolveModuleNames', {
        //moduleNames,
        //containingFilename,
        //reusedNames
      //})
      //const containingDir = dirname(containingFilename)
      //process.exit(123)
      //return moduleNames.map(moduleName=>({
        //resolvedFileName:        resolve(containingDir, moduleName),
        //extension:               ts.Extension.Ts,
        //packageId:               undefined,
        //isExternalLibraryImport: undefined
      //}))
    //}

  }

}

export type TypeScript = typeof import('typescript/lib/tsserverlibrary') & {
  getResolvedModule:  Function,
  resolveModuleName:  Function,
  emitFilesAndReportErrorsAndGetExitStatus: Function
}

export function patchTypeScript (
  ts: TypeScript
): TypeScript {

  const { getResolvedModule, emitFilesAndReportErrorsAndGetExitStatus, resolveModuleName } = ts

  return Object.assign(ts, {

    resolveModuleName (
      moduleName:           string,
      containingFile:       string,
      compilerOptions:      ts.CompilerOptions,
      host:                 ts.ModuleResolutionHost,
      cache?:               ts.ModuleResolutionCache,
      redirectedReference?: ts.ResolvedProjectReference,
      resolutionMode?:      ts.ModuleKind.CommonJS | ts.ModuleKind.ESNext
    ): ts.ResolvedModuleWithFailedLookupLocations {

      const result = resolveModuleName(
        moduleName, containingFile, compilerOptions,
        host, cache, redirectedReference, resolutionMode
      )

      if (result.resolvedModule === undefined) {
        /* TODO: try all extensions here */
        const literateModule = resolve(dirname(containingFile), moduleName)
        if (host.fileExists(literateModule)) {
          Object.assign(result, {
            resolvedModule: {
              resolvedFileName:        literateModule,
              originalPath:            undefined,
              extension:               '.ts',
              isExternalLibraryImport: false,
              packageId:               undefined
            }
          })
        } else {
          (result as any).failedLookupLocations.push(literateModule)
        }
      }

      return result

    },

    //emitFilesAndReportErrorsAndGetExitStatus (
      //program:             ts.Program,
      //reportDiagnostic:    ts.DiagnosticReporter,
      //write?:              (s: string) => void,
      //reportSummary?:      ts.ReportEmitErrorSummary,
      //writeFile?:          ts.WriteFileCallback,
      //cancellationToken?:  ts.CancellationToken,
      //emitOnlyDtsFiles?:   boolean,
      //customTransformers?: ts.CustomTransformers
    //) {
      //if (!writeFile) {
        //console.trace('no writefile')
      //}
      //return emitFilesAndReportErrorsAndGetExitStatus(
        //program,
        //reportDiagnostic,
        //write,
        //reportSummary,
        //writeFile,
        //cancellationToken,
        //emitOnlyDtsFiles,
        //customTransformers
      //)
    //},

    // the error `Cannot_find_module_0_or_its_corresponding_type_declarations`
    // is used in resolveExternalModuleName
    // which calls resolveExternalModuleWorker
    // which calls resolveExternalModule
    // which calls ts.getResolvedModule
    //         and ts.getResolutionDiagnostic
    // if the first one returns truthy and the second returns falsy,
    // resolveExternalModule calls calls host.getSourceFile
    // which calls host.readFile
    //         and ts.createSourceFile(fileName, text, ..)
    // either of which can be patched to return the processed text.
    //
    // ts.getResolvedModule(sourceFile, moduleNameText, ..)
    // expects sourceFile and sourceFile.resolvedModules to be truthy
    // and calls sourceFile.resolvedModules.get(moduleNameText, ..)
    // 
    // sourceFile is retrieved by calling ts.getSourceFileOfNode(location)
    // from resolveExternalModule.
    // location is passed from resolveExternalModuleName.
    // so, who calls resolveExternalModuleName?
    // resolveExternalModule is within the closure of ts.createTypeChecker.
    // resolveExternalModuleName is called 20 times,
    // with first argument either `node` or something that looks like a string
    //
    // getSourceFileOfNode climbs the node.parent chain
    // until it reaches a node with node.kind = 303 (SourceFile)
    //
    // sourceFile.resolvedModules is created if missing
    // in ts.setResolvedModule,
    // which is called by processImportedModules
    // which is called by findSourceFileWorker
    // which is called by findSourceFile
    // which is called by getSourceFileFromReferenceWorker,
    //   which uses a getSourceFile from its parent closure
    //   which calles getSourceFileByPath
    //   which looks in filesByName which is internal to the closure
    //     but exposed via getFilesByNameMap
    //   filesByName is populated in two places
    //     one is tryReuseStructureFromOldProgram
    //     the other is addFileToFilesByName
    //       which is called by parseProjectReferenceConfigFile
    //       and by findSourceFileWorker
    // which is called by processSourceFile
    // which is called by processRootFile
    //
    // looks like the crux is in resolveModuleName
    // 
    // resolveModuleNamesReusingOldState
    // calls resolveModuleNamesWorker
    // which calls actualResolveModuleNamesWorker
    // which calls host.resolveModuleNames !!! if present
    // otherwise it calls ts.loadWithModeAwareCache !!!
    // which uses a loader that calls ts.resolveModuleName !!!
    // which has an attached GH issue #18217 (irrelevant)
    //
    // processImportedModules ->
    //  collectExternalModuleReferences
    //  getModuleNames
    //  resolveModuleNamesReusingOldState
    //
    //

    //getResolvedModule (...args:any) {
      //console.log('grm',...args)
      //return getResolvedModule(...args)
      //throw 2
    //},
    //resolveModuleName (...args:any) {
      //const result = resolveModuleName(...args)
      //console.log('rmn',args[0],'=',result.resolvedModule)
      //return result
    //}
    //getResolutionDiagnostic (...args:any) {
      //console.log(...args)
      //throw 1
    //},
    //createNodeFactory (...args:any) {
      //console.log('cnf', ...args)
    //},
    //attachFileToDiagnostics (...args:any) {
      // called from Parser.parseSourceFile
      //console.log('aftd', ...args)
    //}
    //createSourceFile (...args: any) {
      //console.log('createSourceFile', ...args)
      //throw new Error('bambam')
    //},
    //getResolvedModule (...args: any) {
      // does sourceFile.resolvedModules.get...
      // where is resolvedModules populated?
      // there is a ts.setResolvedModule...
      // called from processImportedModules
      //console.log('getResolvedModule', ...args)
      //throw new Error('bambam')
    //}
  })

}
