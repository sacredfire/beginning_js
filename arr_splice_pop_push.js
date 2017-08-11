var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr1 = arr.splice(4, 2)
var arr2 = arr.splice(1)

console.log(arr1)
console.log(arr2)
console.log(arr)

var a = [1, 2, 3, 4, 5]
var a1 = a.splice(0, 2, 'a', 'b')
var a2 = a.splice(2, 0, 'c', 'd')

console.log(a1)
console.log(a2)
console.log(a)

var stack = []
stack.push(1, 2, 3)
console.log(stack)

var el = stack.pop()
console.log(el)
console.log(stack)

var el1 = stack.pop()
console.log(el1)
console.log(stack)

stack.unshift(2, 3)
console.log(stack)

stack.shift()
console.log(stack)

stack.shift()
console.log(stack)

var aa = [1, 2, 3, 4, 5]
var aaa = aa.toString()
console.log(aaa)

var aaaa = aaa.split(',')
console.log(aaaa)

var a5 = []
for (var i = 0; aaaa[i]; i++) {
  a5.push(parseInt(aaaa[i], 10))
}
console.log(a5)
