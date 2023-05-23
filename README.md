## hardhat-proxy-breaks-regexps

When using RegExp in user config, it causes error below.
```
Error: Method RegExp.prototype.exec called on incompatible receiver [object Object]
```

https://github.com/NomicFoundation/hardhat/issues/2181#issue-1086238739

The error happens because userConfig and its frields are accessed via Proxy and Proxy's getter method fails when target is a function. In order to avoid the error, we would have to bind the right object so that `this` references the object.
```
get(target, property, receiver): any {
  let result = Reflect.get(target, property, receiver);
  if (result instanceof Function) {
    result = result.bind(target)
  }
  return result
}
```

Run the command below to reproduce the error.
```
pnpm i
pnpm run dev
```

Or npm:

```
npm i
npm run dev
```

Check out `src/index.ts`