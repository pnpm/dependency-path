import test = require('tape')
import {
  isAbsolute,
  parse,
} from 'dependency-path'

test('isAbsolute()', t => {
  t.notOk(isAbsolute('/foo/1.0.0'))
  t.ok(isAbsolute('registry.npmjs.org/foo/1.0.0'))
  t.end()
})

test('parse()', t => {
  t.throws(() => parse(undefined as any), /got `undefined`/)
  t.throws(() => parse(1 as any), /got `number`/)

  t.deepEqual(parse('/foo/1.0.0'), {
    isAbsolute: false,
    name: 'foo',
    version: '1.0.0',
    host: undefined,
  })

  t.deepEqual(parse('/@foo/bar/1.0.0'), {
    isAbsolute: false,
    name: '@foo/bar',
    version: '1.0.0',
    host: undefined,
  })

  t.deepEqual(parse('registry.npmjs.org/foo/1.0.0'), {
    isAbsolute: true,
    name: 'foo',
    version: '1.0.0',
    host: 'registry.npmjs.org',
  })

  t.deepEqual(parse('registry.npmjs.org/@foo/bar/1.0.0'), {
    isAbsolute: true,
    name: '@foo/bar',
    version: '1.0.0',
    host: 'registry.npmjs.org',
  })

  t.deepEqual(parse('github.com/kevva/is-positive'), {
    isAbsolute: true,
    host: 'github.com',
  })

  t.deepEqual(parse('example.com/foo/1.0.0'), {
    isAbsolute: true,
    name: 'foo',
    version: '1.0.0',
    host: 'example.com',
  })

  t.throws(() => parse('/foo/bar'), /\/foo\/bar is an invalid relative dependency path/)

  t.end()
})
