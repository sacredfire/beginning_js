var a = [5, 4, 3, 2, 1]

var lessThanThree = a.filter(function (x) {
  return x < 3
})
console.log(lessThanThree)

var even = a.filter(function (x) {
  return (x % 2 === 0)
})
console.log(even)

var odd = a.filter(function (x) {
  return !(x % 2 === 0)
})
console.log(odd)
