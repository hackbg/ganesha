import { TextDocument } from 'vscode-languageserver-textdocument'

import type { InitializeResult, InitializeParams } from 'vscode-languageserver/node'

import {
  createConnection,
  ProposedFeatures,
  TextDocumentSyncKind,
  TextDocuments,
  DidChangeConfigurationNotification,
} from 'vscode-languageserver/node'

import type { ServerInitializationOptions } from '@hackbg/ganesha-vscode-shared'

import type { Typescript } from './lib'

import { registerFeatures, uriToFsPath } from './lib'

let options: ServerInitializationOptions;

let folders: string[] = [];

const connection = createConnection(ProposedFeatures.all);

const documents = new TextDocuments(TextDocument);

connection.onInitialize(function onInitialize ({
  initializationOptions,
  workspaceFolders
}: InitializeParams): InitializeResult {

  if (initializationOptions) { options = initializationOptions as any }

  folders = (workspaceFolders || [])
    .map((folder) => folder.uri)
    .filter((uri) => uri.startsWith('file:/'))
    .map((uri) => uriToFsPath(uri))

  return { capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental } }

})

connection.onInitialized(async function onInitialized () {
  const ts = loadTypeScript(options.typescriptPath)
  registerFeatures(connection, ts, documents, folders)
  connection.client.register(DidChangeConfigurationNotification.type, undefined)
})

connection.listen()

documents.listen(connection)

export function loadTypeScript (typescriptPath: string): Typescript {
  const patchTypescript = require('@hackbg/ganesha-typescript-patch')
  return patchTypescript(require(typescriptPath))
}
