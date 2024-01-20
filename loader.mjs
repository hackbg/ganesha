import * as OXCLoader from './pkg/ganesha_oxc.js'

const transformer = new OXCLoader.ModuleTransformer()

export async function initialize (context) {
  console.log({ context, transformer })
}

export async function resolve (specifier, context, next) {
  console.log({specifier, context, next})
  return next(specifier, context, next)
}

export async function load (url, context, next) {
  console.log({url, context, next})
  return next(url, context, next)
}
