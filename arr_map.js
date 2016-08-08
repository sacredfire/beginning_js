var arr = [ '1', '2', '3', '4', '5' ]

var arr1 = arr.map(function (x) {
  return parseInt(x, 10)
})
console.log(arr1)

var arr2 = arr.map(function (x) {
  return x + 1
})
console.log(arr2)

var arr3 = arr1.map(function (x) {
  return x * x
})
console.log(arr3)
