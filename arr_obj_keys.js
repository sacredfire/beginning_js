function Car (make, model, year, milage) {
  this.make = (make || 'generic make')
  this.model = (model || 'model')
  this.year = (year || 2016)
  this.milage = (milage || 0)
  this.permitCategory = ['b']
}
Car.prototype.sayHi = function () {
  console.log('Hi, I\'m ' + this.make.toUpperCase() + ' ' + this.model.charAt(0).toUpperCase() + this.model.slice(1) + ' of ' + this.year + ' and I have ' + this.milage + ' miles on my clock!')
}
Car.prototype.canDriveMe = function (driver) {
  var matchCategory = 0
  for (var i = 0; driver.category[i]; ++i) {
    if (driver.category[i].toUpperCase() === this.permitCategory[0].toUpperCase()) {
      console.log('Driver ' + driver.name + ' can drive ' + this.make.toUpperCase() + ' ' + this.model.charAt(0).toUpperCase() + this.model.slice(1))
      matchCategory++
      break
    }
  }
  if (matchCategory === 0) {
    console.log('Driver ' + driver.name + ' is NOT allowed to drive ' + this.make.toUpperCase() + ' ' + this.model.charAt(0).toUpperCase() + this.model.slice(1))
  }
}
Object.defineProperty(Car.prototype, 'milage', {
  get: function () { return this._milege },
  set: function (newMilage) {
    if (newMilage < this._milege) {
      console.log('Milage can not be rolled back!')
    } else {
      this._milege = newMilage
    }
  }
})

var car2 = new Car('bmw', '335i', 2014, 31766)

var keys = Object.keys(car2)
var values = []
for (var i = 0; keys[i]; ++i) {
  values.push(car2[keys[i]])
}
console.log(keys)
console.log(values)

var keys1 = []
var values1 = []
for (var key in car2) {
  if (!car2.hasOwnProperty(key)) continue
  keys1.push(key)
  values1.push(car2[key])
}
console.log(keys1)
console.log(values1)

console.log(values1[4][0])

