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

var car0 = new Car()
var car1 = new Car('audi', 'a4')
var car2 = new Car('bmw', '335i', 2014, 31766)
car0.milage = 23
car1.milage = 10000
car2.milage = 10000

car0.sayHi()
car1.sayHi()
car2.sayHi()

console.log(car0.permitCategory)

function Truck (tonnage, fuelType) {
  this.tonnage = (tonnage || '20 ton')
  this.fuelType = (fuelType || 'diesel')
}
Truck.prototype = new Car()
Truck.prototype.model = 'generic truck'
Truck.prototype.truckSayHi = function () {
  console.log('I\'m ' + this.tonnage + ' ' + this.fuelType + ' ' + this.model.charAt(0).toLocaleUpperCase() + this.model.slice(1) + '.')
}
Truck.prototype.permitCategory = ['d']

var truck0 = new Truck('30 ton')
var truck1 = new Truck()
truck1.make = 'volvo'
truck1.milage = 100000

truck0.sayHi()
truck0.truckSayHi()

console.log(truck0.permitCategory)

function TractorTrailer (length) {
  this.length = (length || '90 foot')
}
TractorTrailer.prototype = new Truck()
TractorTrailer.prototype.model = 'generic trailer'
TractorTrailer.prototype.trailerSayHi = function () {
  console.log('I\'m ' + this.fuelType + ' ' + this.length + ' long ' + this.model.charAt(0).toLocaleUpperCase() + this.model.slice(1) + '.')
}
TractorTrailer.prototype.permitCategory = ['e']

var trailer0 = new TractorTrailer('100 foot')
trailer0.milage = -33
trailer0.milage = 33

trailer0.sayHi()
trailer0.truckSayHi()
trailer0.trailerSayHi()

console.log(trailer0.permitCategory)

function Driver (name, category) {
  this.name = name
  this.category = category
}

var bob = new Driver('Bob', ['a', 'b'])
var bill = new Driver('Bill', ['b', 'c', 'd', 'e'])

car1.canDriveMe(bob)
truck1.canDriveMe(bob)
trailer0.canDriveMe(bob)
car1.canDriveMe(bill)
truck1.canDriveMe(bill)
trailer0.canDriveMe(bill)

console.log(Object.getOwnPropertyDescriptor(car2, 'make'))

console.log(Object.getPrototypeOf(car0))
console.log(Object.getPrototypeOf(truck0))
console.log(Object.getPrototypeOf(trailer0))

console.log(Car.prototype.isPrototypeOf(car0))
console.log(Truck.prototype.isPrototypeOf(car0))
console.log(TractorTrailer.prototype.isPrototypeOf(car0))

console.log(Car.prototype.isPrototypeOf(truck0))
console.log(Truck.prototype.isPrototypeOf(truck0))
console.log(TractorTrailer.prototype.isPrototypeOf(truck0))

console.log(Car.prototype.isPrototypeOf(trailer0))
console.log(Truck.prototype.isPrototypeOf(trailer0))
console.log(TractorTrailer.prototype.isPrototypeOf(trailer0))
