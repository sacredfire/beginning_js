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
  console.log('I have streets like so:')
  this.streets.forEach(function (street) {
    console.log(street)
  })
}

var moscow = new City('Moscow', 'Large', 'Russia', ['Tverskaya', 'Yamskaya'])

moscow.whichCountry()

moscow.listStreets()

console.log(moscow.hasOwnProperty('listStreets'))
console.log('listStreets' in moscow)
console.log(moscow.size !== undefined)

for (var key in moscow) {
  console.log(key + ': ' + moscow[key])
}

console.log(Object.keys(moscow))
console.log(Object.getOwnPropertyNames(moscow))
