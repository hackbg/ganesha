import * as path from 'path';
import { URI } from 'vscode-uri';
import { Language } from './interface';

export * from './interface';
export * from './parse';

export function loadTypeScript(
  appRoot: string,
): typeof import('typescript/lib/tsserverlibrary') {
  const tsPath = path.join(appRoot, 'extensions', 'node_modules', 'typescript');
  const typescript = require(tsPath);
  const { resolveModuleName, resolveExternalModule } = typescript
  Object.assign(typescript, {
    resolveModuleName (...args: any) {
      console.log('resolveModuleName', args)
      return resolveModuleName(...args)
    },
    resolveExternalModule (...args: any) {
      console.log('resolveExternalModule', args)
      return resolveExternalModule(...args)
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
