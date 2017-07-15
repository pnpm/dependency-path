# dependency-path

> Utilities for working with symlinked node_modules

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/dependency-path.svg)](https://www.npmjs.com/package/dependency-path) [![Build Status](https://img.shields.io/travis/pnpm/dependency-path/master.svg)](https://travis-ci.org/pnpm/dependency-path)
<!--/@-->

Like `path` but for packages in a symlinked `node_modules`. Symlinked `node_modules` is a unique dependencies layout that
[pnpm](https://github.com/pnpm/pnpm) creates.

## Installation

```sh
npm i -S dependency-path
```

## Usage

<!--@example('./example.js')-->
```js
const dependencyPath = require('dependency-path')

const registry = 'https://registry.npmjs.org/'

// it is confusing currently because relative starts with /.
// It will be changed in the future to vice versa
console.log(dependencyPath.resolve(registry, '/foo/1.0.0'))
//> registry.npmjs.org/foo/1.0.0

console.log(dependencyPath.relative(registry, 'registry.npmjs.org/foo/1.0.0'))
//> /foo/1.0.0

console.log(dependencyPath.refToAbsolute('1.0.1', 'foo', registry))
//> registry.npmjs.org/foo/1.0.1

console.log(dependencyPath.refToAbsolute('github.com/foo/bar/twe0jger043t0ew', 'foo', registry))
//> github.com/foo/bar/twe0jger043t0ew

console.log(dependencyPath.refToRelative('1.0.1', 'foo', registry))
//> /foo/1.0.1
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
