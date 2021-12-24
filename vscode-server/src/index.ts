import { TextDocument } from 'vscode-languageserver-textdocument';
import type { InitializeResult, InitializeParams } from 'vscode-languageserver/node';
import {
  createConnection,
  ProposedFeatures,
  TextDocumentSyncKind,
  TextDocuments,
  DidChangeConfigurationNotification,
} from 'vscode-languageserver/node';
import type { ServerInitializationOptions } from '@hackbg/ganesha-vscode-shared';
import { uriToFsPath } from './shared';
import { register as registerApiFeatures } from './registerApiFeatures';
import { register as registerMdTsFeatures } from './mdTsFeatures';
const patchTypescript = require('@hackbg/ganesha-typescript-patch');
let options: ServerInitializationOptions;
let folders: string[] = [];
const connection = createConnection(ProposedFeatures.all);
connection.onInitialize(function onInitialize ({
  initializationOptions,
  workspaceFolders
}: InitializeParams): InitializeResult {
  if (initializationOptions) { options = initializationOptions as any }
  folders = (workspaceFolders || [])
    .map((folder) => folder.uri)
    .filter((uri) => uri.startsWith('file:/'))
    .map((uri) => uriToFsPath(uri))
  return { capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental } };
});
const documents = new TextDocuments(TextDocument);
connection.onInitialized(async function onInitialized () {
  registerApiFeatures(connection);
  const ts = loadTypeScript(options.typescriptPath);
  registerMdTsFeatures(connection, ts, documents, folders);
  connection.client.register(DidChangeConfigurationNotification.type, undefined,);
});
connection.listen();
documents.listen(connection);
type TSServerLibrary = typeof import('typescript/lib/tsserverlibrary')
export function loadTypeScript (typescriptPath: string): TSServerLibrary {
  return patchTypescript(require(typescriptPath))
}