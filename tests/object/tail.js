import tail from '../../src/object/tail'
import test from 'tape'

test('Returns the last value of an object (simple)', t => {
  const result = tail({ a: 1, b: 2, c: 3 })

  t.same(result, 3)
  t.end()
})

test('Returns the last value complex data', t => {
  const result = tail({ a: 4, d: { b: 2, c: 3 } })

  t.same(result, { b: 2, c: 3 })
  t.end()
})
