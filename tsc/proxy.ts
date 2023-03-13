import { resolve, dirname, extname, basename } from 'path'
import { writeFileSync } from 'fs'
import * as ts from 'typescript/lib/tsserverlibrary'
import { parseString, trace } from '@ganesha/core'

export function createProgramProxy (options: ts.CreateProgramOptions) {
  validateOptions(options)
  patchCompiler(ts as any)
  const host    = patchHost(options.host as any, options, getFileNames(options))
  const service = ts.createLanguageService(host as any)
  const program = service.getProgram()
  return patchProgram(program)
}

function validateOptions (options: ts.CreateProgramOptions) {
	if (!options.host) {
    return doThrow('!options.host')
  }
	if (!options.host.readDirectory) {
    return doThrow('!options.host.readDirectory')
  }
}

export function patchCompiler (ts: TypeScript): TypeScript {
  trace('patchCompiler')
  const { resolveModuleName } = ts
  ts.resolveModuleName = function patchedResolveModuleName (
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
    trace('patched resolveModuleName', moduleName, 'from', containingFile, '->', result.resolvedModule)
    if (result.resolvedModule === undefined) {
      /* TODO: try all extensions here */
      const literateModule = resolve(dirname(containingFile), moduleName + '.ts.md')
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
  }
  return ts
}

export function patchHost (
  host:      CompilerHost,
  options:   ts.CreateProgramOptions,
  fileNames: string[],
  snapshots: Map<string, ts.IScriptSnapshot> = new Map()
): CompilerHost {
  trace('patchHost')
  return {
    ...host,
		getCompilationSettings () {
      trace('patched getCompilationSettings')
      options.options.allowNonTsExtensions = true
      options.options.allowJs = true
      return options.options
    },
		getScriptFileNames () {
      trace('patched getScriptFileNames')
      return fileNames
    },
		getScriptVersion () {
      trace('patched getScriptVersion')
      return ''
    },
		getScriptSnapshot (fileName: string) {
      trace('patched getScriptSnapshot', fileName)
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
      trace('patched getProjectVersion')
      return ''
    },
		getProjectReferences () {
      trace('patched getProjectReferences')
      return options.projectReferences
    },
  }

}

function getFileNames ({ host, options, rootNames }: ts.CreateProgramOptions): string[] {
  trace('patched getFileNames')
  const { useCaseSensitiveFileNames, readDirectory, fileExists, readFile } = host
  const { configFilePath } = options
  if (typeof configFilePath === 'string') {
    const parseConfigHost: ts.ParseConfigHost = {
      useCaseSensitiveFileNames: useCaseSensitiveFileNames(),
      readDirectory (path, _extensions, exclude, include, depth) {
        return readDirectory(path, ['.ts.md'], exclude, include, depth);
      },
      fileExists (fileName) {
        return fileExists(fileName)
      },
      readFile (fileName) {
        return readFile(fileName)
      },
    }
    return rootNames.concat(ts.parseJsonSourceFileConfigFileContent(
      ts.readJsonConfigFile(configFilePath, readFile),
      parseConfigHost,
      dirname(configFilePath),
      options,
      basename(configFilePath)
    ).fileNames)
  } else {
    return [...rootNames]
  }
}

function doThrow (msg: string) {
	console.error(msg)
	throw msg
}

export function patchProgram (
  program: ts.Program
): ts.Program {
  trace('patchProgram')
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
      trace('patched emit', { sourceFile })
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

export type TypeScript = typeof import('typescript/lib/tsserverlibrary') & {
  getResolvedModule:  Function,
  resolveModuleName:  Function,
  emitFilesAndReportErrorsAndGetExitStatus: Function
}

