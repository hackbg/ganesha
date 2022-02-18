# Ganesha: Known Elephants in the Room 🐘

**PRs welcome!**

<table>
<tr><td>

### Nested code blocks

Did you know Markdown supported nested code blocks?

Neither did I. Currently, you're limited to the garden variety
three-backtick code blocks.

This is implemented in [`@ganesha/core/parse.cjs`](../src/core/parse.cjs).

</td><td>

`````markdown
````
```
like this
```
````
`````

</td></tr>
<tr><!--spacer--></tr>
<tr><td>

### Dynamic import of CommonJS modules handles `default` differently

There is a difference in the behavior of `module.exports`
between bare and literate CJS modules
when using dynamic `import()` calls.

This is due to [this hardcoded conditional in Node's `lib/internal/modules/esm/translators.js`](https://github.com/nodejs/node/blob/7af8896d99f5e61704c887c993ec2e8446f390ad/lib/internal/modules/esm/translators.js#L266).

Blame whoever introduced ESM `default` and made it
correspond to CommonJS `module.exports.default`,
instead of `module.exports`.

As this breaks the isomorphism of modules,
a PR cleanly fixing this would be *most* welcome.

</td><td>

Consider the following export:

````javascript
# target.cjs.md
```javascript
module.exports.hello = 'world'
```
````

And the following import:

```javascript
import('./target.cjs.md').then(console.log)
```

This will print:

```
[Module: null prototype] { default: { hello: "world" } }
```

As opposed to the expected:

```
[Module: null prototype] { default: { hello: "world" }, hello: "world" }
```

It's not fatal, but requires you to change the imports when using literate modules,
e.g. this:

```javascript
import('./target.cjs.md').then(({hello})=>console.log(hello))
```

should become this:

```javascript
import('./target.cjs.md').then(({default:{hello}})=>console.log(hello))
```

</td></tr>
<tr><!--spacer--></tr>
<tr><td>

## Node.js doesn't allow usage of `require` in ES modules.

Sheesh, they really want to kill off CommonJS, don't they.

Maybe 5 years from now after enough people have complained,
you'll finally be able to do with `import` the things you
used to be able to do with `require`. If they haven't nerfed
the language beyond usability of course.

In the meantime, you can try getting [this patch](../scr/node-legacy/patch.cjs)
to run. (It did work in an earler version.) As always, PRs welcome.

</td><td>

![](./1.jpg)

</td></tr></table>
