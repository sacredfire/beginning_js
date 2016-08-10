var str = 'JavaScript'

console.log(str[0])
console.log(str[2])

console.log(Array.prototype.filter.call(str, function (x) {
  return x === 'a'
}))

console.log(Array.prototype.filter.call(str, function (x) {
  return x.match(/[^aeiou]/)
}).join(''))
