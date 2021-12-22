import { URI } from 'vscode-uri'
import type { Language } from '@hackbg/ganesha-vscode-shared'

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
