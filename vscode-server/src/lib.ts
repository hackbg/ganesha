import * as fg from 'fast-glob';
import * as path from 'path';

import { LanguageServiceHost } from 'typescript'

import { parse, ParsedMarkdown as CodeBlock, Language } from '@hackbg/ganesha-vscode-shared'

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

export function registerFeatures (
  connection: Connection,
  ts:         Typescript,
  documents:  TextDocuments<TextDocument>,
  folders:    string[],
) {

  // okay so apparently this runs two copies of the TypeScript language service?
  const tsService = createTypeScriptService(ts, documents, folders)
  const service   = createLanguageService(ts, tsService.host, tsService.languageService)

  for (const folder of folders) {
    ts.sys.watchDirectory!(folder, () => { tsService.update() }, true);
  }

  // This function performs the "proxying" between MD and TS:
  // it tries to get a virtual TS file corresponding to the
  // processed MD file, and, if it finds one, it runs the callback.
  function withVirtualFile <T> (uri: string, cb: (vf: VirtualFile)=>T) {
    const virtualFile = tsService.getVirtualFile(uri)
    if (virtualFile) {
      return cb(virtualFile)
    }
  }

  documents.onDidChangeContent(({ document }) => {

    tsService.onDocumentUpdate(document)

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
      withVirtualFile(uri, ({ uri, lang })=>{
        if (lang === 'tsx' || lang === 'ts' || lang === 'typescript') {
          diagnostics.push(...service.doValidation(uri, diagnosticOptions))
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
    withVirtualFile(uri, ({ uri }) =>
      service.doComplete(uri, position, {
        ...context,
        triggerCharacter: context?.triggerCharacter as ts.CompletionsTriggerCharacter }) ))
  connection.onCompletionResolve(item =>
    service.doCompletionResolve(item))

  // Rename feature
  connection.client.register(RenameRequest.type, {
    documentSelector: markdownReg.documentSelector,
    prepareProvider:  true })
  connection.onPrepareRename(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, ({ uri })=>
        service.prepareRename(uri, position)))
  connection.onRenameRequest(
    async ({ textDocument: { uri }, position, newName }) =>
      withVirtualFile(uri, async ({ uri }) => {
        const tsResult = await service.doRename(uri, position, newName)
        if (tsResult) {
          const { changes = {} } = tsResult
          const mdChanges: { [uri: string]: TextEdit[] } = {}
          for (const changeUri of Object.keys(changes)) {
            mdChanges[tsService.getOriginUri(changeUri)] = changes[changeUri]
          }
          return { ...tsResult, changes: mdChanges } } }))

  // Hover feature
  connection.client.register(HoverRequest.type, markdownReg)
  connection.onHover(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, async ({ uri }) =>
        service.doHover(uri, position)))

  // Formatting feature: This one doesn't need to be registered or what?
  connection.onDocumentFormatting(
    async ({ textDocument: { uri }, options }) =>
      withVirtualFile(uri, async ({ uri })=>{
        const textEdits: TextEdit[] = []
        const edits = await service.doFormatting(uri, options)
        textEdits.push(...edits)
        return textEdits}))

  // Go to type definition
  connection.client.register(TypeDefinitionRequest.type, markdownReg)
  connection.onTypeDefinition(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, ({ uri })=>
        service.findTypeDefinition(uri, position).map((tsLink) => ({
          ...tsLink,
          targetUri: tsService.getOriginUri(tsLink.targetUri)}))))

  // Go to definition
  connection.client.register(DefinitionRequest.type, markdownReg)
  connection.onDefinition(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, ({ uri })=>
        service.findDefinition(uri, position).map((tsLink) => ({
          ...tsLink,
          targetUri: tsService.getOriginUri(tsLink.targetUri)}))))

  // References
  connection.client.register(ReferencesRequest.type, markdownReg)
  connection.onReferences(
    ({ textDocument: { uri }, position }) =>
      withVirtualFile(uri, ({ uri })=>
        service.findReferences(uri, position).map((tsLoc) => ({
          ...tsLoc,
          uri: tsService.getOriginUri(tsLoc.uri) }))))

  // Folding ranges
  connection.client.register(FoldingRangeRequest.type, markdownReg)
  connection.onFoldingRanges(
    ({ textDocument: { uri } }) =>
      withVirtualFile(uri, ({ uri })=>
        service.getFoldingRanges(uri)))

}

export interface VirtualFile { uri: string; lang: Language }

type Snapshot = { version: string; snapshot: ts.IScriptSnapshot; }
type TSFile   = { version: number; fileName: string }
type MDFile   = { version: number; fileName: string; codeBlocks?: CodeBlock[]; }
type VFile    = { version: number; originUri: string; blockIndex: number; }

const TS_CONFIG_NAMES = ['tsconfig.json', 'jsconfig.json']

export function createTypeScriptService (
  ts:        Typescript,
  documents: TextDocuments<TextDocument>,
  folders:   string[],
): any {

  /* Cache of script snapshots.
   * Looks like it's used to detect changes to content? */
  const snapshots  = new Map<string, Snapshot>()

  /* Collection of Markdown files.
   * Used for caching the extraction of code blocks. */
  const mdMap      = new Map<string, MDFile>()

  /* Collection of virtual files.
   * These correspond to the TypeScript extracted from the Markdown. */
  const virtualMap = new Map<string, VFile>()

  /* Collection of TypeScript files.
   * So how do raw TS files fit into this picture? */
  const tsFiles    = new Map<string, TSFile>()

  const tsConfigs = [...new Set(
    folders
      .map((folder) => ts.sys.readDirectory(folder, TS_CONFIG_NAMES, undefined, ['**/*']))
      .flat()
  )].filter((tsConfig) => TS_CONFIG_NAMES.includes(path.basename(tsConfig)))

  let projectVersion = 0

  let parsedCommandLine: ts.ParsedCommandLine | undefined

  const host: LanguageServiceHost = {

    getNewLine:                () => ts.sys.newLine,
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,

    readFile:        ts.sys.readFile,
    writeFile:       ts.sys.writeFile,
    directoryExists: ts.sys.directoryExists,
    getDirectories:  ts.sys.getDirectories,
    readDirectory:   ts.sys.readDirectory,
    realpath:        ts.sys.realpath,

    fileExists: (_fileName: string) => {
      const fileName = normalizeFileName(
        ts.sys.realpath?.(_fileName) ?? _fileName,
      )
      return !!ts.sys.fileExists?.(fileName);
    },

    getCompilationSettings: () => parsedCommandLine?.options ?? {},

    getProjectVersion: () => `${projectVersion}`,

    getScriptFileNames: () => [
      ...(parsedCommandLine?.fileNames || []),
      ...[...mdMap.values()]
        .map(({ fileName })=>toVirtualPath(fileName))
        .flat(),
    ],

    getScriptVersion: (fileName: string) => {
      const virtual = virtualMap.get(fileName);
      return `${(virtual ? virtual.version : tsFiles.get(fileName)?.version) || 0}`;
    },

    getCurrentDirectory: () => (tsConfigs[0] ? path.dirname(tsConfigs[0]) : ''),

    getScriptSnapshot: (fileName: string) => {
      const version = host.getScriptVersion(fileName)
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
    },

    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),

  }

  const documentRegistry = ts.createDocumentRegistry()

  const languageService = ts.createLanguageService(host, documentRegistry)

  const service = {

    update () {

      // Get all unique Markdown files from the project
      const mdSet = new Set(folders
        .map((folder: string) =>
          [...fg.sync(`${folder}/**/*.md`, { ignore: ['**/node_modules/**'] })])
        .flat())

      // Remove from mdMap files that have disappeared
      for (const [fileName] of mdMap) {
        if (!mdSet.has(fileName)) {
          const value = mdMap.get(fileName)
          value?.codeBlocks?.forEach(({ language }, i) => {
            virtualMap.delete(toVirtualPath(fileName, i, language))
          })
          mdMap.delete(fileName)
        }
      }

      let changed = false

      // Add to mdMap files that have appeared
      mdSet.forEach(fileName => {
        if (mdMap.has(fileName)) return
        mdMap.set(fileName, { fileName, version: 0 })
        changed = true
      })

      // If there's a TypeScript config in the project
      if (tsConfigs[0]) {
        parsedCommandLine = parseCommandLine(ts, tsConfigs[0])
        const tsSet = new Set(parsedCommandLine.fileNames)

        // Remove TypeScript files that have disappeared
        for (const [fileName] of tsFiles) {
          if (!tsSet.has(fileName)) {
            tsFiles.delete(fileName)
          }
        }

        // Add TypeScript files that have appeared
        tsSet.forEach(fileName=>{
          if (!tsFiles.has(fileName)) {
            tsFiles.set(fileName, {version: 0, fileName})
            changed = true
          }
        })
      }

      if (changed) {
        projectVersion++
      }

    },

    /* This function returns the "virtual file" corresponding to
       the code extracted from the markdown. */
    getVirtualFile (uri: string, position?: Position): VirtualFile|null {
      const fsPath = uriToFsPath(uri)
      const file = mdMap.get(fsPath)
      if (!file) return null
      const { codeBlocks = [] } = file
      return {
        uri:  fsPathToUri(toVirtualPath(fsPath, -1)),
        lang: codeBlocks[0].language,
      }
    },

    host,

    languageService,

    onDocumentUpdate (document: TextDocument) {

      const fsPath   = uriToFsPath(document.uri)
      const mdFile = mdMap.get(fsPath)
      const fileNames: string[] = []
      if (mdFile) {
        const codeBlocks = parse(document.getText(), true)
        if (codeBlocks.length) {
          Object.assign(mdFile, { codeBlocks })
          codeBlocks.forEach((_, blockIndex) => {
            const fileName = toVirtualPath(fsPath, blockIndex);
            if (!virtualMap.has(fileName)) {
              virtualMap.set(fileName, { originUri: document.uri, blockIndex, version: 0 })
            }
            fileNames.push(fileName)
          })
        }
      } else {
        fileNames.push(fsPath)
      }

      let changed = false
      for (const fileName of fileNames) {
        const snapshot = snapshots.get(fileName)
        if (snapshot) {

          const snapshotLength = snapshot.snapshot.getLength()
          const documentText = mdFile
            ? (mdFile.codeBlocks || [])[virtualMap.get(fileName)!.blockIndex].content
            : document.getText()

          if (
            snapshotLength === documentText.length
            && snapshot.snapshot.getText(0, snapshotLength) === documentText
          ) {
            continue;
          }

          changed = true

          const vFile = virtualMap.get(fileName) ?? tsFiles.get(fsPath);
          if (vFile) {
            vFile.version++
          }

        } else {
          changed = true;
        }
      }

      if (changed) {
        projectVersion++
      }

    },

    getOriginUri (uri: string) {
      return virtualMap.get(uriToFsPath(uri))?.originUri ?? uri
    },

    dispose () {
      languageService.dispose()
    },
  }

  service.update()

  return service

  function getScriptText(fileName: string): string | undefined {

    const virtual = virtualMap.get(fileName)
    if (virtual) {
      const { originUri, blockIndex } = virtual
      const mdFile = mdMap.get(uriToFsPath(originUri))
      if (mdFile) {
        const { codeBlocks = [] } = mdFile
        return codeBlocks[blockIndex].content
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
}

export function parseCommandLine (
  ts:       Typescript,
  tsConfig: string,
) {
  const realTsConfig = ts.sys.realpath!(tsConfig)
  const parsedCommandLine = ts.parseJsonSourceFileConfigFileContent(
    ts.readJsonConfigFile(realTsConfig, ts.sys.readFile),
    {
      ...ts.sys,
      readDirectory: ts.sys.readDirectory
    },
    path.dirname(realTsConfig),
    {},
    path.basename(realTsConfig),
  )
  parsedCommandLine.options.outDir = undefined
  parsedCommandLine.fileNames = parsedCommandLine.fileNames.map(normalizeFileName)
  return parsedCommandLine
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

export function toVirtualPath (fileName: string, index: number = 0, lang: Language = 'ts') {
  return `${fileName}.ganesha.${lang}`;
}
