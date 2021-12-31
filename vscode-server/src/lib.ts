import * as fg from 'fast-glob'
import * as path from 'path'
import { LanguageServiceHost } from 'typescript'
import { Language } from '@hackbg/ganesha-vscode-shared'
import { URI } from 'vscode-uri'
import type { FoldingRange, TextEdit, Diagnostic } from 'vscode-languageserver'
import { createLanguageService } from 'vscode-typescript-languageservice'

import {
  CompletionRequest,
  Connection,
  DefinitionRequest,
  FoldingRangeRequest,
  HoverRequest,
  Position,
  ReferencesRequest,
  RenameRequest,
  TextDocument,
  TextDocumentRegistrationOptions,
  TextDocuments,
  TypeDefinitionRequest,
} from 'vscode-languageserver/node'

export type Typescript = typeof import('typescript/lib/tsserverlibrary')

export interface Position { offset: number; line: number; column: number; }

export function registerFeatures (
  connection: Connection,
  ts:         Typescript,
  documents:  TextDocuments<TextDocument>,
  folders:    string[],
) {

  // okay so apparently this runs two copies of the TypeScript language service?
  // one as `tsService` and one as `ganeshaService.languageService`?
  const ganeshaService = createGaneshaService(ts, documents, folders)
  const tsService = createLanguageService(ts, ganeshaService.host, ganeshaService.languageService)

  for (const folder of folders) {
    ts.sys.watchDirectory!(folder, () => { ganeshaService.onProjectUpdate() }, true);
  }

  // This function performs the "proxying" between MD and TS:
  // it tries to get a virtual TS file corresponding to the
  // processed MD file, and, if it finds one, it runs the callback.
  function withVirtualFile <T> (uri: string, cb: (vf: VirtualFile)=>T) {
    const virtualFile = ganeshaService.getVirtualFile(uri)
    if (virtualFile) {
      return cb(virtualFile)
    }
  }

  documents.onDidChangeContent(({ document }) => {

    ganeshaService.onDocumentUpdate(document)

    // Collect all opened markdown documents
    const openedMarkdownDocs: TextDocument[] = []
    documents.all().forEach((doc) => {
      if (doc.languageId === 'markdown') {
        openedMarkdownDocs.push(doc)
      }
    })

    // Emit diagnostics for them
    const diagnosticOptions = {
      semantic:    true,
      syntactic:   true,
      suggestion:  true,
      declaration: true,
    }
    for (const { uri } of openedMarkdownDocs) {
      const diagnostics: Diagnostic[] = []
      withVirtualFile(uri, function diagnose ({ uri, lang }) {
        if (lang === 'tsx' || lang === 'ts' || lang === 'typescript') {
          diagnostics.push(...tsService.doValidation(uriToFsPath(uri), diagnosticOptions))
        }
      })
      connection.sendDiagnostics({ uri, diagnostics })
    }

  })

  // Register features and define callbacks for Markdown files
  const scheme   = 'file'
  const language = 'markdown'
  const markdownReg: TextDocumentRegistrationOptions = { documentSelector: [{ scheme, language }] }

  // Completions
  connection.client.register(CompletionRequest.type, {
    documentSelector:  markdownReg.documentSelector,
    triggerCharacters: ['.', '\'', '"', '`'],
    resolveProvider:   true })
  connection.onCompletion(({ textDocument: { uri }, position, context }) =>
    withVirtualFile(uri, function onCompletion ({ uri }) {
      return tsService.doComplete(uri, position, {
        ...context,
        triggerCharacter: context?.triggerCharacter as ts.CompletionsTriggerCharacter }) } ))
  connection.onCompletionResolve(item =>
    tsService.doCompletionResolve(item))

  // Rename feature
  connection.client.register(RenameRequest.type, {
    documentSelector: markdownReg.documentSelector,
    prepareProvider:  true })
  connection.onPrepareRename(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, function onPrepareRename ({ uri }) {
        return tsService.prepareRename(uri, position) }))
  connection.onRenameRequest(
    async ({ textDocument: { uri }, position, newName }) =>
      withVirtualFile(uri, async ({ uri }) => {
        const tsResult = await tsService.doRename(uri, position, newName)
        if (tsResult) {
          const { changes = {} } = tsResult
          const mdChanges: { [uri: string]: TextEdit[] } = {}
          for (const changeUri of Object.keys(changes)) {
            mdChanges[ganeshaService.getOriginUri(changeUri)] = changes[changeUri]
          }
          return { ...tsResult, changes: mdChanges } } }))

  // Hover feature
  connection.client.register(HoverRequest.type, markdownReg)
  connection.onHover(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, async function onHover ({ uri }) {
        return tsService.doHover(uri, position) }))

  // Formatting feature: This one doesn't need to be registered or what?
  connection.onDocumentFormatting(
    async ({ textDocument: { uri }, options }) =>
      withVirtualFile(uri, async function onDocumentFormatting ({ uri }) {
        const textEdits: TextEdit[] = []
        const edits = await tsService.doFormatting(uri, options)
        textEdits.push(...edits)
        return textEdits }))

  // Go to type definition
  connection.client.register(TypeDefinitionRequest.type, markdownReg)
  connection.onTypeDefinition(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, function onTypeDefinition ({ uri }) {
        return tsService.findTypeDefinition(uri, position).map((tsLink) => ({
          ...tsLink,
          targetUri: ganeshaService.getOriginUri(tsLink.targetUri)})) }))

  // Go to definition
  connection.client.register(DefinitionRequest.type, markdownReg)
  connection.onDefinition(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, function onDefinition ({ uri }) {
        return tsService.findDefinition(uri, position).map((tsLink) => ({
          ...tsLink,
          targetUri: ganeshaService.getOriginUri(tsLink.targetUri)})) }))

  // References
  connection.client.register(ReferencesRequest.type, markdownReg)
  connection.onReferences(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, function onReferences ({ uri }) {
        return tsService.findReferences(uri, position).map((tsLoc) => ({
          ...tsLoc,
          uri: ganeshaService.getOriginUri(tsLoc.uri) })) }))

  // Folding ranges
  connection.client.register(FoldingRangeRequest.type, markdownReg)
  connection.onFoldingRanges(
    ({ textDocument: { uri } }) =>
      withVirtualFile(uri, function getFoldingRanges ({ uri }) {
        return tsService.getFoldingRanges(uri) }))

}

export type Language = 'jsx' | 'js' | 'javascript' | 'tsx' | 'ts' | 'typescript';
export interface VirtualFile { uri: string; lang: Language }

type Snapshot = { version: string; snapshot: ts.IScriptSnapshot }
type TSFile   = { version: number; fileName: string }
type MDFile   = { version: number; fileName: string }
type VFile    = { version: number; originUri: string }

const TS_CONFIG_NAMES = ['tsconfig.json', 'jsconfig.json']

export function createGaneshaService (
  ts:        Typescript,
  documents: TextDocuments<TextDocument>,
  folders:   string[],
): {
  host:                                 any
  languageService:                      any
  onProjectUpdate  ():                  void
  getVirtualFile   (uri: string):       VirtualFile|null
  onDocumentUpdate (doc: TextDocument): void
  getOriginUri     (uri: string):       string
  dispose          ():                  void
} {

  /** This gets incremented on every change. */
  let projectNonce = 0

  /* Collections of Markdown and TypeScript files.
   * Both are kept track of, because the "real" TypeScript service
   * asks this one for both TS and MD files (by passing the `host`). */
  const mdFiles = new Map<string, MDFile>()
  const tsFiles = new Map<string, TSFile>()

  /** All TypeScript configs from the project (even though we only need the first one).
    * Used to determine the TypeScript command line and current directory. */
  const tsConfigs = [...new Set(
    folders
      .map((folder) => ts.sys.readDirectory(folder, TS_CONFIG_NAMES, undefined, ['**/*']))
      .flat()
  )].filter((tsConfig) => TS_CONFIG_NAMES.includes(path.basename(tsConfig)))

  /* Cache of script snapshots.
   * Looks like it's used to detect changes to content? */
  const snapshots = new Map<string, Snapshot>()

  /* Collection of virtual files.
   * These correspond to the TypeScript extracted from the Markdown. */
  const vfMap = new Map<string, VFile>()

  /** This is the TypeScript command line for something or other? */
  let parsedCommandLine: ts.ParsedCommandLine | undefined

  /** This is the host object, which is a sort of a shim? */
  const host: LanguageServiceHost = {
    getScriptVersion,
    getScriptSnapshot,
    getScriptFileNames,
    getNewLine:                () => ts.sys.newLine,
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
    readFile:        ts.sys.readFile,
    writeFile:       ts.sys.writeFile,
    directoryExists: ts.sys.directoryExists,
    getDirectories:  ts.sys.getDirectories,
    readDirectory:   ts.sys.readDirectory,
    realpath:        ts.sys.realpath,
    fileExists (_fileName: string) {
      const fileName = normalizeFileName(ts.sys.realpath?.(_fileName) ?? _fileName)
      return !!ts.sys.fileExists?.(fileName)
    },
    getCompilationSettings: () => parsedCommandLine?.options ?? {},
    getProjectVersion:      () => `${projectNonce}`,
    getCurrentDirectory:    () => (tsConfigs[0] ? path.dirname(tsConfigs[0]) : ''),
    getDefaultLibFileName:  (options) => ts.getDefaultLibFilePath(options),
  }

  /* This is interesting. It gives precedence to virtual TS files over real ones
   * when the host's `getScriptVersion` is called externally. */
  function getScriptVersion (fileName: string) {
    const virtual = vfMap.get(toVirtualUri(fileName));
    const version = virtual ? virtual.version : tsFiles.get(fileName)?.version
    return `${version || 0}`;
  }

  /* This is the function that populates the snapshot cache.
   * It is called externally via the `host`. */
  function getScriptSnapshot (fileName: string) {
    fileName = normalizeFileName(fileName)
    const version  = getScriptVersion(fileName)
    const snapshot = snapshots.get(fileName)
    if (snapshot?.version === version) {
      return snapshot.snapshot
    }
    const text = getScriptText(fileName)
    if (text !== undefined) {
      const snapshot = ts.ScriptSnapshot.fromString(text)
      snapshots.set(fileName, { version: `${version}`, snapshot })
      return ts.ScriptSnapshot.fromString(text)
    }
  }

  function getScriptFileNames () {
    return [
      ...(parsedCommandLine?.fileNames || []),
      ...[...mdFiles.values()].map(({ fileName })=>toVirtualUri(fileName)).flat()
    ]
  }

  onProjectUpdate()

  const shimmedTSLanguageService = ts.createLanguageService(host, ts.createDocumentRegistry())

  return {
    languageService: shimmedTSLanguageService,
    dispose () { shimmedTSLanguageService.dispose() },
    host: Object.assign(host, { GANESHA: true }),
    getVirtualFile,
    onProjectUpdate,
    getOriginUri,
    onDocumentUpdate,
  }

  /* This function returns the virtual TS file
   * corresponding to a processed MD file */
  function getVirtualFile (uri: string, position?: Position): VirtualFile | null {
    const fsPath = uriToFsPath(uri)
    const file = mdFiles.get(fsPath)
    if (!file) return null
    return { uri: toVirtualUri(fsPath), lang: 'typescript' }
  }

  /* This function is called when the project contents update.
   * It takes an inventory of all the Markdown and TypeScript files
   * in the project directory, populating `mdFiles` and `tsFiles`,
   * and increments the project nonce if any new ones were added. */
  function onProjectUpdate () {
    // Check for updates to the Markdown files
    const mdNames = folders
      .map((folder: string) =>
        [...fg.sync(`${folder}/**/*.md`, { ignore: ['**/node_modules/**'] })])
      .flat()
    const changedMD = collectFiles(mdFiles, mdNames)
    mdFiles.forEach(mdFile=>{
      const vfPath = toVirtualUri(mdFile.fileName)
      if (!vfMap.has(vfPath)) {
        vfMap.set(vfPath, { originUri: fsPathToUri(mdFile.fileName), version: 0 })
      }
    })
    // Check for updates to the TypeScript files
    let changedTS = false
    if (tsConfigs[0]) {
      parsedCommandLine = parseCommandLine(tsConfigs[0])
      changedTS = collectFiles(tsFiles, parsedCommandLine.fileNames)
    }
    // If either side changed, increment the project nonce.
    if (changedMD || changedTS) {
      projectNonce++
    }
  }

  function getOriginUri (uri: string) {
    return vfMap.get(toVirtualUri(uri))?.originUri ?? uri
  }

  function parseCommandLine (tsConfig: string,) {
    const realTsConfig = ts.sys.realpath!(tsConfig)
    const parsedCommandLine = ts.parseJsonSourceFileConfigFileContent(
      ts.readJsonConfigFile(realTsConfig, ts.sys.readFile),
      { ...ts.sys, readDirectory: ts.sys.readDirectory },
      path.dirname(realTsConfig),
      {},
      path.basename(realTsConfig),
    )
    parsedCommandLine.options.outDir = undefined
    parsedCommandLine.fileNames = parsedCommandLine.fileNames.map(normalizeFileName)
    return parsedCommandLine
  }

  /* So many possible entry points for integrating this into TypeScript.
   * Starting to wonder whether `ts.sys.readFile` isn't optimal.
   * Just parse the files at the point at which they enter the TS machine,
   * and it only ever sees the processed versions?
   * Anyway, why is this function doing the same thing in so many ways.
   * Doesn't seem like the caching still works after the updates, either. */
  function getScriptText (fileName: string): string | undefined {
    const virtualFile = vfMap.get(toVirtualUri(fileName))
    if (virtualFile) {
      const { originUri } = virtualFile
      const mdFile = mdFiles.get(uriToFsPath(originUri))
      if (mdFile) {
        return require('@hackbg/ganesha-core').parseString(ts.sys.readFile(fileName, 'utf8'))
      }
    }
    const doc = documents.get(fsPathToUri(fileName))
    if (doc) {
      return doc.getText()
    }
    if (ts.sys.fileExists(fileName)) {
      return ts.sys.readFile(fileName, 'utf8')
    }
  }

  /* This function is called when a file changes.
   * It adds virtual files to vfMap, and optionally
   * increments versions in vfMap and tsFiles,
   * and increments the projectNonce counter. */
  function onDocumentUpdate (document: TextDocument) {
    // The canonical FS path of the updated Markdown document.
    // Used as a cache key, and to generate the name of the virtual file.
    const fsPath = uriToFsPath(document.uri)
    // The corresponding virtual filename of the extracted code.
    const vfPath = toVirtualUri(fsPath)
    // If this file is in the mdFiles, it's a Markdown file.
    // If it's not in the vfMap yet, add it with version 0
    const mdFile = mdFiles.get(fsPath)

    if (mdFile) {
      if (!vfMap.has(vfPath)) {
        vfMap.set(vfPath, { originUri: document.uri, version: 0 })
      }
    }

    // If there is no snapshot, or if the snapshot contents don't match,
    // this means the contents have been changed. If so, increment projectNonce
    let changed = false
    const snapshot = snapshots.get(fsPath)
    if (!snapshot) {
      changed = true
    } else {
      const snapshotLength = snapshot.snapshot.getLength()
      const snapshotText   = snapshot.snapshot.getText(0, snapshotLength)
      const documentText   = document.getText()
      if ((
        snapshotLength !== documentText.length ||
        snapshotText   !== documentText
      )) {
        changed = true
        const vFile = vfMap.get(vfPath) ?? tsFiles.get(fsPath)
        if (vFile) {
          vFile.version++
        }
      }
    }
    if (changed) {
      projectNonce++
    }
  }

}

function collectFiles (
  files:    Map<string, any>,
  nameList: string[]
) {
  let changed = false
  const names = new Set(nameList)
  // Remove files that have disappeared
  for (const [fileName] of files) {
    if (!names.has(fileName)) {
      files.delete(fileName)
    }
  }
  // Add files that were not previously there
  names.forEach(fileName => {
    if (files.has(fileName)) return
    files.set(fileName, { fileName, version: 0 })
    changed = true
  })
  return changed
}

export function uriToFsPath(uri: string) {
  return URI.parse(uri).fsPath;
}

export function fsPathToUri(fsPath: string) {
  return URI.file(fsPath).toString();
}

const SUFFIX = '.__ganesha.ts'

export function normalizeFileName (fileName: string) {
  fileName = uriToFsPath(fsPathToUri(fileName))
  if (fileName.endsWith(SUFFIX)) fileName = fileName.slice(0, -SUFFIX.length)
  return fileName
}

export function toVirtualUri (uri: string, index: number = 0, lang: Language = 'ts') {
  return `${uriToFsPath(uri)}${SUFFIX}`;
}
