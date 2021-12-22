import * as path from 'path'
import { URI } from 'vscode-uri'
import { Language } from './interface'

export * from './interface'
export * from './parse'

type TSServerLibrary = typeof import('typescript/lib/tsserverlibrary')

export function loadTypeScript (typescriptPath: string): TSServerLibrary {

  const typescript = require(typescriptPath)

  const {
    resolveModuleName,
    // getResolvedModule,
    // getResolutionDiagnostic,
    createTypeChecker
  } = typescript

  Object.assign(typescript, {

    resolveModuleName: function resolveModuleName_ganesha (...args: any) {
      const resolved = resolveModuleName(...args)
      if (!resolved.resolvedModule) {
        for (const extension of [
          '.ts.md'
          /* TODO add remaining supported extensions */
        ]) {
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
    },

    createTypeChecker: function createTypeChecker_ganesha (...args: any) {
      const {getSourceFile} = args[0]
      args[0].getSourceFile = function getSourceFile_ganesha (...args: any) {
        const sourceFile = getSourceFile(...args)
        if (sourceFile && sourceFile.fileName.endsWith('.ts.md')) {
          const allocator    = typescript.objectAllocator
          const SymbolObject = allocator.getSymbolConstructor()
          sourceFile.symbol  = new SymbolObject(0, sourceFile.fileName)
        }
        return sourceFile
      }
      return createTypeChecker(...args)
    }

  })

  // eslint-disable-next-line
  return typescript;
}

export function uriToFsPath(uri: string) {
  return URI.parse(uri).fsPath;
}

export function fsPathToUri(fsPath: string) {
  return URI.file(fsPath).toString();
}

export function normalizeFileName(fileName: string) {
  return uriToFsPath(fsPathToUri(fileName));
}

export function toVirtualPath(fileName: string, index: number = 0, lang?: Language) {
  return `${fileName}.__${index}.${lang || 'tsx'}`;
}

export function filterEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export const languageIdMap = {
  typescript: 'typescript',
  javascript: 'javascript',
  ts:         'typescript',
  js:         'javascript',
  tsx:        'typescriptreact',
  jsx:        'javascriptreact',
};