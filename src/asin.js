
import pointwise from './pointwise'
import spPointwise from './spPointwise'
import Sparse from './Sparse'

const asin = pointwise(Math.asin)
const sasin = spPointwise(Math.asin)

function casin(x) {
  throw new Error('mathlab.asin: no asin for complex number')
}

/**
 * Pointwise Math.asin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * asin(1)
 * // returns Math.asin(1)
 * asin([1, 2])
 * // returns [Math.asin(1), Math.asin(2)]
 * asin([[1,2],[1,3]])
 * // returns [ [Math.asin(1), Math.asin(2)], [Math.asin(1), Math.asin(3)] ]
 */
export default function (m) {
  switch (m.constructor.name) {
    case 'Complex':
      return casin(m);
    case 'Sparse':
      return sasin(m);
    default:
      return asin(m);
  }
}
