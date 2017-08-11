function createPerson (name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer')
var person2 = createPerson('Greg', 27, 'Doctor')

console.log(Object.keys(person1))

for (var key in person1) {
  console.log(key + ' : ' + person1[key])
}

console.log(JSON.stringify(person2, null, 2))
