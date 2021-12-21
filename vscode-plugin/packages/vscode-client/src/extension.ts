import * as vscode from 'vscode';
import * as lsp from 'vscode-languageclient/node';
import * as path from 'path';
import type { ServerInitializationOptions } from '@ts-in-markdown/shared';

let client: lsp.LanguageClient;

export async function activate(context: vscode.ExtensionContext) {

  const module = context.asAbsolutePath(
    path.join('node_modules', '@ts-in-markdown', 'vscode-server', 'out', 'index.js'),
  );

  const transport = lsp.TransportKind.ipc;

  const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  client = new lsp.LanguageClient(
    'Ganesha Markdown',
    'Ganesha Markdown',
    {
      run:   { module, transport },
      debug: { module, transport, options: debugOptions, },
    },
    {
      documentSelector: [
        { scheme: 'file', language: 'markdown' },
        { scheme: 'file', language: 'typescript' },
        { scheme: 'file', language: 'typescriptreact' },
        { scheme: 'file', language: 'javascript' },
        { scheme: 'file', language: 'javascriptreact' },
      ],
      initializationOptions: { appRoot: vscode.env.appRoot } as ServerInitializationOptions
    }
  );

  client.start();

  return client;
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop();
}
