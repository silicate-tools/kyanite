import _curry2 from '../_internals/_curry2'

/**
 * @name apply
 * @since v0.9.0
 * @category Function
 * @sig (a -> b) -> a -> b
 * @description Applies a function to a parameter/argument. Useful for creating a fixed-arity function
 * @param {Function} fn The function we want to apply to the data
 * @param {Array} a The parameter(s) to call the function with
 * @return {Any} The result of whatever fn(a) will be
 * @example
 *
 * apply(x => x * 2, [2]) // => 4
 * apply((a, b, c) => a + b + c, [1, 2, 3]) // => 6
 * apply(Math.max, [1, 2, 3, -99, 42, 6, 7]) // => 42
 *
 * // It's also curried
 * const fn = apply(2)
 *
 * fn(2) // => 4
 * fn(100) // => 200
 */
const apply = (fn, a) => fn(...a)

export default _curry2(apply)
