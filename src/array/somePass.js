import _curry2 from '../_internals/_curry2'
import reduce from '../function/reduce'
import reduced from '../function/reduced'

/**
 * @name somePass
 * @function
 * @since v0.12.0
 * @category Array
 * @sig [(a -> Boolean)] -> a -> Boolean
 * @description
 * Takes a value and passes it through an array of functions until a function returns true, or the end of the array is met
 * @param {Array} fns The array of functions to pass the value to
 * @param {Any} data The data value to give to each function
 * @return {Boolean} If any function passed then returns true, otherwise returns false
 *
 * @example
 * import { somePass } from 'kyanite'
 *
 * somePass([x => x > 2, x => x < 4], 3) // => true
 * somePass([x => x > 7, x => x < 3], 5) // => true
 * somePass([x => x === 4, x => x === 6], 5) // => false
 *
 * // It is also curried
 *
 * const fn = somePass([x => x > 0, x => x < 4])
 *
 * fn(3) // => true
 * fn(2) // => true
 * fn(0) // => false
 */
const somePass = (fns, data) => reduce((f, acc) => f(data) ? reduced(true) : acc, false, fns)

export default _curry2(somePass)
