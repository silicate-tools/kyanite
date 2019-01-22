import _curry2 from '../_internals/_curry2'
import _assocǃ from '../_internals/_assocǃ'
import reduce from '../function/reduce'

/**
 * @name countBy
 * @function
 * @since v0.10.0
 * @category Array
 * @sig (a -> String) -> [a] -> {*}
 * @description
 * Counts the elements of a list according to how many match each value of a key generated by the supplied function
 * @param {Function} fn The function to apply to each piece of data during iteration
 * @param {Array} arr The array to iterate and count through
 * @return {Object} A new object of counted values { value: count }
 * @example
 * import { countBy } from 'kyanite'
 *
 * const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2]
 * const letters = ['a', 'b', 'A', 'a', 'B', 'c']
 *
 * countBy(Math.floor, numbers) // => { '1': 3, '2': 2, '3': 1 }
 * countBy(x => x.toLowerCase(), letters) // => { 'a': 3, 'b': 2, 'c': 1 }
 *
 * // It's also curried
 * const fn = countBy(Math.floor)
 *
 * fn(numbers) // => { '1': 3, '2': 2, '3': 1 }
 */
const countBy = (fn, arr) =>
  reduce((a, acc) => {
    const k = fn(a)
    const _an = _assocǃ(acc, k)

    return acc.hasOwnProperty(k) ? _an(acc[k] + 1) : _an(1)
  }, {}, arr)

export default _curry2(countBy)
