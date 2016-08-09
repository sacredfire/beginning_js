var a = [1, 2, 3, 4, 5]

a.every(function (x) { return x < 10 }) // => true: all values < 10.
a.every(function (x) { return x % 2 === 0 }) // => false: not all values even.

var a1 = [1, 2, 3, 4, 5]
a1.some(function (x) { return x % 2 === 0 }) // => true a has some even numbers.
a1.some(isNaN) // => false: a has no non-numbers.
