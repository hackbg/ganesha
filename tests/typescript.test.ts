type Foo = string

interface Bar { foo: Foo }

const baz: Bar = { foo: "123" }

console.log({baz})
