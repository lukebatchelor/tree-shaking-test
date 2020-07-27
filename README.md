# Tree Shaking Test

This repo was just for me to test out broken tree shaking which I eventually got working. Just exists as a reference now

Trying to get webpack, typescript and material-ui to finally work together.

## Setup

```
yarn add @material-ui/core react react-dom
yarn add --dev ts-loader typescript webpack-cli webpack-dev-server @types/material-ui @types/node @types/react @types/webpack @types/webpack-dev-server 
```

## Intial config

```
$ yarn build
$ du -sch dist/client/*.js484K    dist/client/1.js
4.0K    dist/client/main.js
488K    total
```

## Adding Terser

```
$ yarn build
$ du -sch dist/client/*.js484K    dist/client/1.js
4.0K    dist/client/main.js
488K    total
```

## Copying tsconfig.json from CRA

Removing `noEmit` key.

```
$ yarn build
$ du -sch dist/client/*.js484K    dist/client/1.js
76K    dist/client/1.js
4.0K    dist/client/main.js
 80K    total
 ```

 ## Taking out optimizations


```
$ yarn build
$ du -sch dist/client/*.js484K    dist/client/1.js
 72K    dist/client/main.js
 72K    total
 ```

 interesting...