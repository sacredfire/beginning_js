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

someFruit.showName()
someFruit.nativeTo()

for (var key in someFruit) {
  console.log(key + ' : ' + someFruit[key])
}

var keys = (Object.keys(someFruit))
console.log(keys)
console.log(Object.getOwnPropertyNames(someFruit))

console.log(Object.getPrototypeOf(someFruit))

console.log(Object.getOwnPropertyNames(Fruit1.prototype))
console.log(Object.getOwnPropertyDescriptor(Fruit1.prototype, 'color'))
console.log(Object.getOwnPropertyDescriptor(Fruit1.prototype, 'showName'))

var keys = Object.getOwnPropertyNames(Fruit1.prototype)
var keyValuesPairs = []
for (var i = 0; keys[i]; ++i) {
  keyValuesPairs.push(keys[i] + ' : ' + Fruit1.prototype[keys[i]])
}

console.log(keyValuesPairs)
