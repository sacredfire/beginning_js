function Counter () {
  this.sum = 0
  this.count = 0
}

Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- Note
}

var obj = new Counter()

obj.add([2, 5, 9])

obj.count
// 3
obj.sum
// 16

// Since the thisArg parameter (this) is provided to forEach(), it is passed to
// callback each time it's invoked, for use as its this value.
