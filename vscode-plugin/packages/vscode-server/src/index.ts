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
import { loadTypeScript, uriToFsPath } from '@hackbg/ganesha-vscode-shared';
import { register as registerApiFeatures } from './registers/registerApiFeatures';
import { register as registerMdTsFeatures } from './features/mdTsFeatures';

let options: ServerInitializationOptions;
let folders: string[] = [];

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

connection.onInitialize(function onInitialize({
  initializationOptions,
  workspaceFolders
}: InitializeParams): InitializeResult {

  if (initializationOptions) {
    options = initializationOptions as any;
  }
  
  folders = (workspaceFolders || [])
    .map((folder) => folder.uri)
    .filter((uri) => uri.startsWith('file:/'))
    .map((uri) => uriToFsPath(uri))
    
  return {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
    },
  };
});

connection.onInitialized(async function onInitialized() {
  registerApiFeatures(connection);

  const ts = loadTypeScript(options.typescriptPath);

  registerMdTsFeatures(
    connection,
    ts,
    documents,
    folders,
  );

  connection.client.register(
    DidChangeConfigurationNotification.type,
    undefined,
  );
});

connection.listen();

documents.listen(connection);



