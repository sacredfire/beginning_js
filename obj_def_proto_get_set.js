function Person (age, name) {
  this.name = name
  this.age = age
}

Object.defineProperty(Person.prototype, 'age', {
  get: function () {
    return this._age
  },
  set: function (num) {
    num = parseInt(num, 10)
    if (num > 0) {
      this._age = num
    }
  }
})

john = new Person(33, 'John Doe')
console.log(john)

john.age = 22
console.log(john)

john.age = -2
console.log(john)
