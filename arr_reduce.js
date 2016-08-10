var arr = [1, 2, 3, 4, 5]

var val = arr.reduce(function (x, y) {
  return x + y
})
console.log(val)

var val1 = arr.reduce(function (x, y) {
  return x * y
})
console.log(val1)

var a = [2, 3, 4]
// Compute 2^(3^4). Exponentiation has right-to-left precedence
var big = a.reduceRight(function (accumulator, value) {
  return Math.pow(value, accumulator)
})
console.log(big)
