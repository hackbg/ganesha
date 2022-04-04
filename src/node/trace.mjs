import { trace as _trace } from '@ganesha/core/trace.cjs'

let align = 0

export function mkTrace (prefix, ...args1) {
  if (prefix.length > align) align = prefix.length
  prefix = prefix.padEnd(align)
  return (...args2) => _trace(prefix, ...args1, ...args2)
}
