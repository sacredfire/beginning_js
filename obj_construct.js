function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

  this.color = theColor
  this.sweetness = theSweetness
  this.fruitName = theFruitName
  this.nativeToLand = theNativeToLand
  this.fixedProp = 'preFixed property'

  this.showName = function () {
    console.log('This is a ' + this.fruitName)
  }

  this.nativeTo = function () {
    console.log('Grow in: ')
    this.nativeToLand.forEach(function (eachCountry) {
      console.log(eachCountry)
    })
  }
}

var mango = new Fruit('yellow', 'sweet', 'Mango', ['India', 'Pakistan'])

for (var key in mango) {
  console.log(mango[key])
}

mango.showName()
mango.nativeTo()

console.log(mango.hasOwnProperty('nativeToLand'))
console.log(mango.hasOwnProperty('fixedProp'))


// Notes:
// — An inherited property is defined on the object’s prototype property.
// For example: someObject.prototype.firstName = “rich”

// — An own property is defined directly on the object itself, for example:
// Let’s create an object first:
// var aMango = new Fruit ();
// Now we define the mangoSpice property directly on the aMango object
// Because we define the mangoSpice property directly on the aMango object,
// it is an own property of aMango, not an inherited property.
// aMango.mangoSpice = “some value”;

function Fruit1 () {}

Fruit1.prototype.color = 'Yellow'
Fruit1.prototype.sweetness = 7
Fruit1.prototype.fruitName = 'Generic Fruit'
Fruit1.prototype.nativeToLand = 'USA'

Fruit1.prototype.showName = function () {
  console.log('This is a ' + this.fruitName)
}

Fruit1.prototype.nativeTo = function () {
  console.log('Grown in:' + this.nativeToLand)
}

var someFruit = new Fruit1()

for (var key in someFruit) {
  console.log(someFruit[key])
}

someFruit.showName()
someFruit.nativeTo()

// Prints true because schoolName is an own property on the object
console.log('color' in someFruit) // true

// Prints true because the school object inherited the toString method from
// Object.prototype.
console.log('toString' in someFruit)  // true

// Prints false because the property was inherited from prototype
console.log(someFruit.hasOwnProperty('nativeToLand')) // false

