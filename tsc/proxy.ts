import * as path from 'path'
import * as ts from 'typescript/lib/tsserverlibrary'
import { parseString } from '@ganesha/core/parse.cjs'

export function createProgramProxy(options: ts.CreateProgramOptions) {

	if (!options.options.noEmit && !options.options.emitDeclarationOnly)
		return doThrow('js emit is not support');

	if (!options.host)
		return doThrow('!options.host');

	if (!options.host.readDirectory)
		return doThrow('!options.host.readDirectory');

	const host = options.host;
	const readDirectory = options.host.readDirectory;
	const parseConfigHost: ts.ParseConfigHost = {
		useCaseSensitiveFileNames: host.useCaseSensitiveFileNames(),
		readDirectory: (path, extensions, exclude, include, depth) => {
			return readDirectory(path, ['.ts.md'], exclude, include, depth);
		},
		fileExists: fileName => host.fileExists(fileName),
		readFile: fileName => host.readFile(fileName),
	};

	const fileNames = [
		...options.rootNames,
		...getFileNames(),
	];
	const scriptSnapshots = new Map<string, ts.IScriptSnapshot>();

  return ts.createLanguageService({
		...host,
		writeFile: undefined,
		getCompilationSettings:   () => {
      options.options.allowNonTsExtensions = true
      return options.options
    },
		getScriptFileNames: () => fileNames,
		getScriptVersion:   () => '',
		getScriptSnapshot (fileName: string) {

      // Return a snaphot if it already exists
      const scriptSnapshot = scriptSnapshots.get(fileName);
      if (scriptSnapshot) {
        return scriptSnapshot
      }

      // Create a snapshot if it doesn't exist
      if (host.fileExists(fileName)) {
        let fileContent = host.readFile(fileName);
        if (fileContent !== undefined) {

          // If it's a literate module, flip it
          if (fileName.endsWith('.ts.md')) {
            fileContent = parseString(fileContent)
          }

          const scriptSnapshot = ts.ScriptSnapshot.fromString(fileContent);
          scriptSnapshots.set(fileName, scriptSnapshot);
          return scriptSnapshot;
        }
      }

    },
		getProjectVersion:    () => '',
		getProjectReferences: () => options.projectReferences,
	}).getProgram()

	function getFileNames() {
		const tsConfig = options.options.configFilePath;
		if (typeof tsConfig === 'string') {
			const tsConfigFile = ts.readJsonConfigFile(tsConfig, host.readFile);
			const { fileNames } = ts.parseJsonSourceFileConfigFileContent(tsConfigFile, parseConfigHost, path.dirname(tsConfig), options.options, path.basename(tsConfig));
			return fileNames;
		}
		return [];
	}


}

function doThrow(msg: string) {
	console.error(msg);
	throw msg;
}
