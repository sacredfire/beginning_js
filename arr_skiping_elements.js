var a = [1, 'b', undefined, null, 5, 'str', 999]
a.length = 8
console.log(a)

// Skip null, undefined, and nonexistent elements
var a1 = []
for (var j = 0; j < a.length; j++) {
  if (!a[j]) continue
// loop body here
  a1.push(a[j])
}
console.log(a1)

// Skip undefined + nonexistent elements
var a2 = []
for (var k = 0; k < a.length; k++) {
  if (a[k] === undefined) continue
// loop body here
  a2.push(a[k])
}
console.log(a2)

// Skip nonexistent elements only
var a3 = []
for (var l = 0; l < a.length; l++) {
  if (!(l in a)) continue
// loop body here
  a3.push(a[l])
}
console.log(a3)
