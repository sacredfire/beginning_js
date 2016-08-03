function City (name, size, country, streets) {
  this.name = name
  this.size = size
  this.country = country
  this.streets = streets
}

City.prototype.whichCountry = function () {
  console.log('I\'m ' + this.name + ' and I\'m in ' + this.country)
}

City.prototype.listStreets = function () {
  this.streets.forEach(function (street) {
    console.log(street)
  })
}

var moscow = new City('Moscow', 'Large', 'Russia', ['Tverskaya', 'Yamskaya'])

moscow.whichCountry()

moscow.listStreets()
