type Foo = string

interface Bar { foo: Foo }

const baz: Bar = { foo: "123" }

throw new Error('this should be on line 7')
