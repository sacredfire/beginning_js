var foo = []
var foo1 = []
var sum = 0
var sum1 = 0
var delta = 0

for (var i = 1; i <= 2001; i++) {
  if (i % 2 === 0) {
    foo.push(i)
  }
}

for (var y = 0; y < foo.length; y++) {
  sum = sum + foo[y]
}

for (var l = 1; l <= 2001; l++) {
  if (l % 2 !== 0) {
    foo1.push(l)
  }
}

for (var d = 0; d < foo1.length; d++) {
  sum1 = sum1 + foo1[d]
}

console.log('even arr sum =', (sum))
console.log('odd arr sum =', (sum1))

delta = Math.abs(sum - sum1)

if (sum < sum1) {
  console.log('odd arr sum is bigger than even arr sum by', (delta))
} else {
  console.log('even arr sum is bigger than odd arr sum by', (delta))
}
