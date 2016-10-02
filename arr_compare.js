var arr1 = ['a', 'b', 'c', 'd', 'e']
var arr2 = ['a', 'c', 'e']
var arr3 = []
var countMatch = 0

for (var i = 0; arr1[i]; ++i) {
  for (var j = 0; arr2[j]; ++j) {
    if (arr1[i] === arr2[j]) {
      arr3.push(arr2[j])
      ++countMatch
    }
  }
}

console.log(arr3)
console.log(countMatch)

console.log(arr2 === arr3)
console.log(arr2[0] === arr3[0])
console.log(arr2[1] === arr3[1])
console.log(arr2[2] === arr3[2])

