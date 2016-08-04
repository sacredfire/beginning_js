function StaffMember (name, discountPercent) {
  this.name = name
  this.discountPercent = discountPercent
}

var sally = new StaffMember('Sally', 5)
var bob = new StaffMember('Bob', 10)

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember('me', 20)

var cashRegister = {
  total: 0,
  lastTransaction: 0,

  applyStaffDiscount: function (emploee) {
    this.total *= ((100 - emploee.discountPercent) / 100)
  },

  add: function (itemCost) {
    this.total += itemCost
    this.lastTransaction = itemCost
  },

  voidLastTransaction: function () {
    this.total -= this.lastTransaction
  },

  scan: function (item, quantity) {
    switch (item) {
      case 'eggs':
        this.add(0.98 * quantity)
        break

      case 'milk':
        this.add(1.23 * quantity)
        break

        // Add other 2 items here
      case 'magazine':
        this.add(4.99 * quantity)
        break

      case 'chocolate':
        this.add(0.45 * quantity)
        break

    }
    return true
  }
}

cashRegister.scan('magazine', 4)
console.log('Your bill is ' + cashRegister.total)

cashRegister.voidLastTransaction()
cashRegister.scan('magazine', 5)
console.log('Your bill is ' + cashRegister.total)

cashRegister.applyStaffDiscount(bob)
console.log('Your bill is ' + cashRegister.total)
