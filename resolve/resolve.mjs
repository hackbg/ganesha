import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { stat } from 'node:fs/promises'

const debug = (...args) => process.env.GANESHA_DEBUG &&
  process.stderr.write(args.join(' ') + '\n')

export async function resolve (specifier, context, next) {
  context.conditions = ['source', ...context.conditions.filter(x=>x!=='source')]
  debug('Resolve:  ', specifier)
  try {
    return await next(specifier, context, next)
  } catch (e) {
    if (specifier.startsWith('./') || specifier.startsWith('../')) {
      const path = fileURLToPath(new URL(specifier, context?.parentURL).href)
      const extension = extname(path).toLowerCase()
      if (!(typeScriptExtensions.includes(extension))) {
        const [asFile, asDir] = [`${path}.ts`, `${path}/index.ts`]
        const notFound = e => { if (e.code ==='ENOENT') return false; throw e }
        let isFile, isDir
        try {
          [isFile, isDir] = await Promise.all([
            stat(asFile).then(stat=>stat.isFile()).catch(notFound),
            stat(asDir).then(stat=>stat.isFile()).catch(notFound),
          ])
        } catch (e) {
          throw Object.assign(e, { parentURL: context?.parentURL })
        }
        if (isFile && isDir) {
          throw Object.assign(new Error(`Ambiguous import: "${path}"\n is "${asFile}"\n or "${asDir}"?`), {
            path, asFile, asDir, specifier, parentURL: context?.parentURL
          })
        }
        if (isFile) {
          return { shortCircuit: true, url: pathToFileURL(asFile).href }
        }
        if (isDir) {
          return { shortCircuit: true, url: pathToFileURL(asDir).href }
        }
        throw Object.assign(new Error(`Not found: "${path}"\n at "${asFile}"\n or "${asDir}"?`), {
          path, asFile, asDir, specifier, parentURL: context?.parentURL
        })
      }
    }
    throw Object.assign(e, { specifier, context })
  }
}
