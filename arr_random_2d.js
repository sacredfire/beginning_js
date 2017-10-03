
function b () {
  var a = Arr5x30()
  var target = 20
  var checksum1 = a[0][0] + a[1][0] + a[2][0] + a[3][0] + a[4][0]
  var checksum2 = a[0][1] + a[1][1] + a[2][1] + a[3][1] + a[4][1]
  var checksum3 = a[0][2] + a[1][2] + a[2][2] + a[3][2] + a[4][2]
  var checksum4 = a[0][3] + a[1][3] + a[2][3] + a[3][3] + a[4][3]
  var checksum5 = a[0][4] + a[1][4] + a[2][4] + a[3][4] + a[4][4]
  var checksum6 = a[0][5] + a[1][5] + a[2][5] + a[3][5] + a[4][5]

  if ((target === checksum1) && (checksum2 === target) && (checksum3 === target)) { // && (checksum4 === target)) { // && (checksum5 === target) && (checksum6 === target)) {
    console.log(a)
    console.log('got three!')
  } else {
    return b()
  }
}

console.log(b())

// function genSubArr1 () {
//   var subArr1 = []
//   for (var n = 0; n < 5; n++) {
//     subArr1.push(a[n][0])
//   }
//   return subArr1
// }

// function genSubArr2 () {
//   var subArr2 = []
//   for (var n = 0; n < 5; n++) {
//     subArr2.push(a[n][1])
//   }
//   return subArr2
// }

//
//
//
//
//

function Arr5x30 () {
  var x = new Array(5)
  for (var n = 0; n < 5; n++) {
    var rand = randomArray30()
    x[n] = rand
  }
  return x
}

function randomArray30 () {
  var target = 30
  var arr = randomArray(6, 9)

  if (arr.reduce((a, b) => a + b, 0) === target) {
    return arr
  } else {
    return randomArray30()
  }
}

function randomArray (length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round((Math.random() * max) + 1)
  })
}
