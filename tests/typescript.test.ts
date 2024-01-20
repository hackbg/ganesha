import * as Typedefs from './typedef.example.tjs'
import * as Typed from './typed.example.tjs'

const decorator = x => x

@decorator const decorated = "foo"

console.log({
  Typedefs,
  Typed
})
