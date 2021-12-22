import { URI } from 'vscode-uri'
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
