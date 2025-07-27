import { fileURLToPath, pathToFileURL } from 'node:url'
import { extname } from 'node:path'
import { stat } from 'node:fs/promises'
import { env, stderr } from 'node:process'
export const TS_EXTENSIONS = ['.ts', '.mts', '.cts']
export async function resolve (specifier, context, next) {
  addConditions(context, ['source'])
  try {
    debug(PREFIX.RESOLVE, specifier)
    return await next(specifier, context, next)
  } catch (error) {
    if (
      (error.code === 'ERR_MODULE_NOT_FOUND') &&
      (specifier.startsWith('./') || specifier.startsWith('../'))
    ) {
      debug(PREFIX.RESOLVE_SPEC,    specifier)
      debug(PREFIX.RESOLVE_CONTEXT, JSON.stringify(context))
      return resolveRelativeImport(specifier, context, next)
    }
    rethrow(e, { specifier, context })
  }
}
function addConditions (ctx, before = [], after = []) {
  ctx.conditions = [...before.filter(x=>!ctx.conditions.includes(x)), ...ctx.conditions]
  ctx.conditions = [...ctx.conditions, ...after.filter(x=>!ctx.conditions.includes(x))]
}
function resolveRelativeImport (specifier, context, next) {
  const path = fileURLToPath(new URL(specifier, context?.parentURL).href)
  const extension = extname(path).toLowerCase()
  if (!(TS_EXTENSIONS.includes(extension))) return resolveAmbiguity(specifier, context, next)
  return next(specifier, context, next)
}
async function resolveAmbiguity (specifier, context, next) {
  const path = fileURLToPath(new URL(specifier, context?.parentURL).href)
  const [asFile, asDir] = [`${path}.ts`, `${path}/index.ts`]
  const notFound = e => { if (e.code ==='ENOENT') return false; throw e }
  let isFile, isDir
  try {
    [isFile, isDir] = await Promise.all([
      stat(asFile).then(stat=>stat.isFile()).catch(notFound),
      stat(asDir).then(stat=>stat.isFile()).catch(notFound),
    ])
  } catch (e) {
    rethrow(e, { parentURL: context?.parentURL })
  }
  if (isFile && isDir) {
    rethrow(new Error(`Ambiguous import: "${path}"\n is "${asFile}"\n or "${asDir}"?`), {
      path, asFile, asDir, specifier, parentURL: context?.parentURL
    })
  }
  if (isFile) {
    return { shortCircuit: true, url: pathToFileURL(asFile).href }
  }
  if (isDir) {
    return { shortCircuit: true, url: pathToFileURL(asDir).href }
  }
  rethrow(new Error(`Not found: "${path}"\n at "${asFile}"\n or "${asDir}"?`), {
    path, asFile, asDir, specifier, parentURL: context?.parentURL
  })
}
export const rethrow = (e, ...args) => { throw Object.assign(e, args) }
export const debug = (...args) => env.GANESHA_DEBUG && stderr.write(args.join(' ') + '\n')
export const PREFIX = { RESOLVE:         'Resolve:   '
                      , RESOLVE_SPEC:    '   Spec:   '
                      , RESOLVE_CONTEXT: '   Context:' }
