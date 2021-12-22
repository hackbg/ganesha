import * as path from 'path';
import { URI } from 'vscode-uri';
import { Language } from './interface';

export * from './interface';
export * from './parse';

type TSServerLibrary = typeof import('typescript/lib/tsserverlibrary')

export function loadTypeScript(appRoot: string): TSServerLibrary {

  const typescript = require(path.join(appRoot, 'extensions', 'node_modules', 'typescript'));
  const { resolveModuleName, resolveExternalModule } = typescript
  Object.assign(typescript, {

    resolveModuleName (...args: any) {
      const resolved = resolveModuleName(...args)
      if (!resolved.resolvedModule) {
        for (const extension of [
          '.ts.md'
          /* TODO add the rest of them in proper order */
        ]) {
          const filename = `${args[0]}${extension}`
          console.log('trying', { filename })
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
      console.log('resolveModuleName', args, resolved)
      return resolved
    },

    resolveExternalModule (...args: any) {
      const resolved = resolveExternalModule(...args)
      console.log('resolveExternalModule', args, resolved)
      return resolved
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
