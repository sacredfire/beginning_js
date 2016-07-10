/*
var names = ['Bob', 'Bill', 'Clara', 'Carl', 'Fil']

for (var i = 0; i < names.length; i++) {
  console.log('I know someone called ' + i)
}

function whileLoop () {
  var cond = 1
  while (cond) {
    console.log('while loop')
    cond = 0
  }
}

whileLoop()

function forLoop () {
  for (var i = 0; i < 10; i++) {
    console.log(i)
  }
}

forLoop()

var getToDaChoppa = function () {
  // Write your do/while loop here!
  var i = 0
  do {
    console.log('fuck')
    i++
  }
    while (i < 10)
}

getToDaChoppa()
*/

var cars = ['BMW', 'Volvo', 'Saab', 'Ford']
var i = 0
var arr = []

for (;cars[i];) {
  arr.push(cars[i])
  i++
}

console.log(arr.toString().replace(/,/g, ', '))
