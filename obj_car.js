function Car (make, model, year, milage) {
  this.make = (make || 'generic make')
  this.model = (model || 'model')
  this.year = (year || 2016)
  this.milage = (milage || 0)
}

Car.prototype.sayHi = function () {
  console.log('Hi, I\'m ' + this.make.toUpperCase() + ' ' + this.model.charAt(0).toLocaleUpperCase() + this.model.slice(1) + ' of ' + this.year + ' and I have ' + this.milage + ' miles on my clock!')
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

function Truck (tonnage, fuelType) {
  this.tonnage = (tonnage || '20 ton')
  this.fuelType = (fuelType || 'diesel')
}

Truck.prototype = new Car()
Truck.prototype.model = 'generic truck'

Truck.prototype.truckSayHi = function () {
  console.log('I\'m ' + this.tonnage + ' ' + this.fuelType + ' ' + this.model.charAt(0).toLocaleUpperCase() + this.model.slice(1) + '.')
}

var truck0 = new Truck('30 ton')
var truck1 = new Truck()
truck1.make = 'volvo'
truck1.milage = 100000

function TractorTrailer (length) {
  this.length = (length || '90 foot')
}

TractorTrailer.prototype = new Truck()
TractorTrailer.prototype.model = 'generic trailer'

TractorTrailer.prototype.trailerSayHi = function () {
  console.log('I\'m ' + this.fuelType + ' ' + this.length + ' long ' + this.model.charAt(0).toLocaleUpperCase() + this.model.slice(1) + '.')
}

var trailer0 = new TractorTrailer('100 foot')

trailer0.milage = -33
trailer0.milage = 33

trailer0.sayHi()
trailer0.truckSayHi()
trailer0.trailerSayHi()
