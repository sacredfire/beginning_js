
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

var penguin = new Penguin('Captain Cook', 2)
penguin.sayName()

function Emperor (name) {
  this.name = name
}
Emperor.prototype = new Penguin()

emperor = new Emperor()
console.log(emperor.numLegs)
