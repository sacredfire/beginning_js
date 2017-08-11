var data = [1, 2, 3, 4, 5] // This is the array we want to iterate
var sumOfSquares = 0 // We want to compute the sum of the squares of data
data.forEach(function (x) { // Pass each element of data to this function
  sumOfSquares += x * x // add up the squares
})
console.log(sumOfSquares)

var arr = [ '1', '2', '3', '4', '5' ]
arr.forEach(function (v, i, a) {
  a[i] = v + 1
})
console.log(arr)

var arr1 = [ '1', '2', '3', '4', '5' ]
arr1.forEach(function (v, i, a) {
  a[i] = parseInt(v, 10)
})
console.log(arr1)
