import * as path from 'path'
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

const { parseString } = require('@hackbg/ganesha-core/parse.cjs');

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
  return { capabilities: { textDocumentSync: TextDocumentSyncKind.Incremental } };
});

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

  const typescript = require(typescriptPath)

  const {
    resolveModuleName,
    getResolvedModule,
    // getResolutionDiagnostic,
    createTypeChecker,
  } = typescript

  const EXTENSIONS = [ '.ts.md', '.md', /*TODO add remaining ones*/ ]
  let context: any

  Object.assign(typescript, {

    resolveModuleName: function GANESHA_resolveModuleName (...args: any) {
      context = args[3]
      const resolved = resolveModuleName(...args)
      if (!resolved.resolvedModule) {
        for (const extension of EXTENSIONS) {
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

    getResolvedModule: function GANESHA_getResolvedModule (sourceFile: any, moduleNameText: any, mode: any) {
      const resolved = getResolvedModule(sourceFile, moduleNameText, mode)
      //console.log('\n----------------------------------------------\n')
      //console.trace('getResolvedModule', {sourceFile, moduleNameText, mode}, '=', resolved)
      if (!resolved && moduleNameText.startsWith('.')) {
        for (const extension of EXTENSIONS) {
          if (moduleNameText.endsWith(extension)) {
            const filename = path.resolve(path.dirname(sourceFile.fileName), moduleNameText)
            //console.log('========+>trying', filename)
            if (context.fileExists(filename)) {
              //console.log('========+>found', filename)
              return { resolvedFileName: filename }
            }
          }
        }
      }
      return resolved
    },

    createTypeChecker: function GANESHA_createTypeChecker (...args: any) {

      const {getSourceFile} = args[0] /* host */
      args[0].getSourceFile = function GANESHA_getSourceFile (resolvedFileName: any) {
        console.log('getSourceFile', resolvedFileName)
        let sourceFile = getSourceFile(resolvedFileName)
        const allocator = typescript.objectAllocator
        for (const extension of EXTENSIONS) {
          if (resolvedFileName.endsWith(extension)) {
            if (!sourceFile) {
              const SourceFile = allocator.getSourceFileConstructor()
              sourceFile = new SourceFile(303 /* SyntaxKind.SourceFile */, -1, -1)
            }
            if (!sourceFile.GANESHA) {
              const SymbolObject = allocator.getSymbolConstructor()
              sourceFile.symbol  = new SymbolObject(0, sourceFile.fileName)
              sourceFile.text = parseString(sourceFile.text)
              sourceFile.GANESHA = true
            }
          }
        }
        //console.log('\n----------------------------------------------\n')
        //console.trace('getSourceFile', args[0], sourceFile ? sourceFile.symbol : '???')
        return sourceFile
      }

      const checker = createTypeChecker(...args)
      const {getSymbolAtLocation} = checker
      checker.getSymbolAtLocation = function GANESHA_getSymbolAtLocation (node: any, ignoreErrors: any) {

        const ts = typescript
        const { kind } = node.parent
        if (
          (kind === 265 /* ImportDeclaration */ || kind === 271 /* ExportDeclaration */)
          && node.parent.moduleSpecifier === node
        ) {

        }

        const result = getSymbolAtLocation(node, ignoreErrors)
        //console.log('\n----------------------------------------------\n')
        //console.trace('getSymbolAtLocation', { node, ignoreErrors, }, '=', result )
        return result
      }

      return checker
    },


  })

  // eslint-disable-next-line
  return typescript;
}
