// Determine if o is an array-like object.
// Strings and functions have numeric length properties, but are
// excluded by the typeof test. In client-side JavaScript, DOM text
// nodes have a numeric length property, and may need to be excluded
// with an additional o.nodeType != 3 test.

function isArrayLike (o) {
  if (o && // o is not null, undefined, etc.
  typeof o === 'object' && // o is an object
  isFinite(o.length) && // o.length is a finite number
  o.length >= 0 && // o.length is non-negative
  o.length === Math.floor(o.length) && // o.length is an integer
  o.length < 4294967296) { // o.length < 2^32
    return true // Then o is array-like
  } else {
    return false // Otherwise it is not
  }
}

var a = {'0': 'a', '1': 'b', '2': 'c', length: 3} // An array-like object
console.log(isArrayLike(a))

console.log(Array.prototype.join.call(a, '+'))
console.log(Array.prototype.slice.call(a, 1, -1))
console.log(Array.prototype.pop.call(a, 1))
console.log(Array.prototype.map.call(a, function (x) {
  return x.toUpperCase()
}))

