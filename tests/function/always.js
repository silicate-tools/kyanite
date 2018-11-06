import always from '../../src/function/always'
import branch from '../../src/function/branch'
import concat from '../../src/list/concat'
import identity from '../../src/function/identity'
import isEmpty from '../../src/function/isEmpty'
import length from '../../src/list/length'
import pipe from '../../src/function/pipe'
import test from 'tape'

test('always -- Basic tests', t => {
  t.same(always([1, 2, 3], 1), [1, 2, 3])
  t.same(always({ a: 1 }, true), { a: 1 })
  t.same(always(12, false), 12)
  t.same(always('test', 'thing'), 'test')
  t.end()
})

test('always -- Is curried', t => {
  const a = always(1)

  t.is(a(2), 1)
  t.is(a(null), 1)
  t.end()
})

test('always -- Pipe handling', t => {
  const results = pipe([
    branch(always(isEmpty([])), concat(1), identity),
    length
  ], [])

  t.is(results, 1)
  t.end()
})
