```typescript
import dependency1 from './dependency1.ts.md'
import Worker1 from './worker.ts?worker'
import Worker2 from './worker.ts.md?worker'
console.log({
  dependency1,
  worker1: new Worker1(),
  worker2: new Worker2()
})
```
