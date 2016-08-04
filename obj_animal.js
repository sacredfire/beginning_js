// // create your Animal class here
// function Animal (name, numLegs) {
//   this.name = name
//   this.numLegs = numLegs
// }

// // create the sayName method for Animal

// Animal.prototype.sayName = function () {
//   console.log('Hi my name is ' + this.name)
// }

// // provided code to test above constructor and method
// var penguin = new Animal('Captain Cook', 2)
// penguin.sayName()


function Animal (name, numLegs) {
  this.name = name
  this.numLegs = numLegs
}

Animal.prototype.sayName = function () {
  console.log('Hi my name is ' + this.name)
}

// create a Penguin constructor here
function Penguin (name) {
  this.name = name
  this.numLegs = 2
}

Penguin.prototype = new Animal()
// create a sayName method for Penguins here

// our test code
var penguin = new Penguin('Captain Cook', 2)
penguin.sayName()

// create your Emperor class here and make it inherit from Penguin
function Emperor (name) {
  this.name = name
}
Emperor.prototype = new Penguin()

// create an "emperor" object and print the number of legs it has
emperor = new Emperor()
console.log(emperor.numLegs)
