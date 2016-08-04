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
