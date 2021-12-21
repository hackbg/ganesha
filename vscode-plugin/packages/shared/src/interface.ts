export interface ServerInitializationOptions {
  appRoot: string;
}

export type Language = 'jsx' | 'js' | 'javascript' | 'tsx' | 'ts' | 'typescript';

export interface VirtualFile {
  uri: string;
  lang: Language
}
