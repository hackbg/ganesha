import * as vscode from 'vscode';
import * as lsp from 'vscode-languageclient/node';
import * as path from 'path';
import type { ServerInitializationOptions } from '@hackbg/ganesha-vscode-shared';

let client: lsp.LanguageClient;

export async function activate(context: vscode.ExtensionContext) {

  const module = context.asAbsolutePath(
    path.join('vscode-plugin', 'packages', 'vscode-server', 'out', 'index.js'),
  );

  const transport = lsp.TransportKind.ipc;

  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  const clientOptions ={
    run:   { module, transport },
    debug: { module, transport, options: debugOptions, },
  }

  let useBuiltinTypescript = false
  const typescripts = {
    builtin: path.join(vscode.env.appRoot, 'extensions', 'node_modules', 'typescript'),
    ours:    'typescript'
  }

  const serverOptions = {
    documentSelector: [
      { scheme: 'file', language: 'markdown' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'typescriptreact' },
      { scheme: 'file', language: 'javascript' },
      { scheme: 'file', language: 'javascriptreact' },
    ],
    initializationOptions: {
      typescriptPath: useBuiltinTypescript ? typescripts.builtin : typescripts.ours
    } as ServerInitializationOptions
  }

  client = new lsp.LanguageClient(
    'Ganesha Markdown',
    'Ganesha Markdown',
    clientOptions,
    serverOptions
  );

  client.start();

  return client;
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
