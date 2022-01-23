| ext1 | ext2 | front matter | format               | literate |
| ---- | ---- | ------------ | -------------------- | -------- |
| .md  | .mjs | -            | module               | yes      |
| .md  | .cjs | -            | commonjs             | yes      |
| .md  | .ts  | -            | tsconfig/packagejson | yes      |
| .md  | .js  | -            | tsconfig/packagejson | yes      |
| .md  | -    | commonjs     | commonjs             | yes      |
| .md  | -    | ecmascript   | commonjs             | yes      |
| .md  | -    | typescript   | commonjs             | yes      |
| .md  | -    | -            | error                | yes      |
| .ts  | -    | -            | tsconfig/packagejson | no       |
