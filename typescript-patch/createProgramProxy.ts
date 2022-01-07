import { dirname, basename } from 'path'
import * as ts      from 'typescript/lib/tsserverlibrary'
import * as ganesha from 'vscode-ganesha-languageservice'
export function createProgramProxy ({
  options, host, rootNames, projectReferences,
}: ts.CreateProgramOptions) {
  if (!options.noEmit && !options.emitDeclarationOnly)
    return doThrow('js emit is not supported')
  if (!host)
    return doThrow('!options.host')
  if (!host.readDirectory)
    return doThrow('!options.host.readDirectory')
  const parseConfigHost: ts.ParseConfigHost = {
          useCaseSensitiveFileNames: host.useCaseSensitiveFileNames(),
          readDirectory: (path, extensions, exclude, include, depth) => {
            return host.readDirectory(path, ['.ganesha'], exclude, include, depth)
          },
          fileExists: fileName => host.fileExists(fileName),
          readFile:   fileName => host.readFile(fileName),
        }
      , fileNames = [...rootNames, ...getGaneshaFileNames()]
      , scriptSnapshots = new Map<string, ts.IScriptSnapshot>()
      , ganeshaLs = ganesha.createLanguageService({ typescript: ts }, {
          ...host,
          writeFile:              undefined,
          getCompilationSettings: () => options,
          getScriptFileNames:     () => fileNames,
          getScriptVersion:       () => '',
          getProjectVersion:      () => '',
          getProjectReferences:   () => projectReferences,
          getScriptSnapshot:      (fileName: string) => {
            const scriptSnapshot = scriptSnapshots.get(fileName)
            if (scriptSnapshot) {
              return scriptSnapshot
            }
            if (host.fileExists(fileName)) {
              const fileContent = host.readFile(fileName)
              if (fileContent !== undefined) {
                const scriptSnapshot = ts.ScriptSnapshot.fromString(fileContent)
                scriptSnapshots.set(fileName, scriptSnapshot)
                return scriptSnapshot
              }
            }
          },
        })
  return ganeshaLs.__internal__.tsProgramProxy
  function getGaneshaFileNames() {
    const tsConfig = options.configFilePath
    if (typeof tsConfig === 'string') {
      const tsConfigFile = ts.readJsonConfigFile(tsConfig, host.readFile)
      const { fileNames } = ts.parseJsonSourceFileConfigFileContent(
        tsConfigFile, parseConfigHost, dirname(tsConfig), options, basename(tsConfig)
      )
      return fileNames
    }
    return []
  }
}
function doThrow(msg: string) {
  console.error(msg)
  throw msg
}
