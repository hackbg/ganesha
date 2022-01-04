import { dirname, basename } from 'path'
import * as ts from 'typescript/lib/tsserverlibrary'
import { getShimmedHost, patchTypeScript, patchProgram } from './patches'

export function createProgramProxy (
  options: ts.CreateProgramOptions
) {
  validateOptions(options)
  patchTypeScript(ts as any)
  const langServHost = getShimmedHost(options.host as any, options, getFileNames(options))
  const langServ     = ts.createLanguageService(langServHost as any)
  const program      = patchProgram(langServ.getProgram())
  return program
}

function validateOptions (options: ts.CreateProgramOptions) {
	if (!options.options.noEmit && !options.options.emitDeclarationOnly) {
		return doThrow('js emit is not support')
  }
	if (!options.host) {
    return doThrow('!options.host')
  }
	if (!options.host.readDirectory) {
    return doThrow('!options.host.readDirectory')
  }
}

function getFileNames ({ host, options, rootNames }: ts.CreateProgramOptions): string[] {
  const { useCaseSensitiveFileNames, readDirectory, fileExists, readFile } = host
  const { configFilePath } = options
  if (typeof configFilePath === 'string') {
    const parseConfigHost: ts.ParseConfigHost = {
      useCaseSensitiveFileNames: useCaseSensitiveFileNames(),
      readDirectory (path, _extensions, exclude, include, depth) {
        return readDirectory(path, ['.ts.md'], exclude, include, depth);
      },
      fileExists (fileName) {
        return fileExists(fileName)
      },
      readFile (fileName) {
        return readFile(fileName)
      },
    }
    return rootNames.concat(ts.parseJsonSourceFileConfigFileContent(
      ts.readJsonConfigFile(configFilePath, readFile),
      parseConfigHost,
      dirname(configFilePath),
      options,
      basename(configFilePath)
    ).fileNames)
  } else {
    return [...rootNames]
  }
}

function doThrow (msg: string) {
	console.error(msg)
	throw msg
}
