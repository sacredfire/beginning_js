
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

var emperor = new Emperor()
console.log(emperor.numLegs)

var newPenquin = new Penguin('Fucker', 2)

newPenquin.sayName()

for (var props in newPenquin) {
  console.log(newPenquin[props])
}

console.log(Object.keys(newPenquin))
