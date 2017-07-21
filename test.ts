import test = require('tape')
import {isAbsolute} from '.'

test('isAbsolute()', t => {
  t.notOk(isAbsolute('/foo/1.0.0'))
  t.ok(isAbsolute('registry.npmjs.org/foo/1.0.0'))
  t.end()
})
