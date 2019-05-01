var friends = {}
friends.bill = {}
friends.steve = {}

friends.bill.firstName = 'Bill'
friends.bill.lastName = 'Fucker'
friends.bill.number = '33839393'
friends.bill.address = ['One Microsoft Way', 'Redmond', 'WA', '98052']

friends.steve.firstName = 'Steve'
friends.steve.lastName = 'Fu'
friends.steve.number = '1111111'
friends.steve.address = ['Fuckington', 'Redmond', 'WA', '98052']

function list (obj) {
  for (var key in obj) {
    console.log(key)
  }
}

list(friends)

function search (name) {
  for (var key in friends) {
    if (friends[key].firstName === name) {
      console.log(friends[key])
      return friends[key]
    }
  }
}

search('Steve')

function list1 (obj) {
  console.log(Object.keys(obj))
}

list1(friends)
