```typescript
export type Numeric = number
export type Textual = string

export function valid (n: Numeric) { return n }
export function invalid (t: Textual) { return t }

valid(1)
invalid(1)
```
