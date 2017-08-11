var bob = {
  firstName: 'Bob',
  lastName: 'Jones',
  phoneNumber: '(650) 777-7777',
  email: 'bob.jones@example.com'
}

var mary = {
  firstName: 'Mary',
  lastName: 'Johnson',
  phoneNumber: '(650) 888-8888',
  email: 'mary.johnson@example.com'
}

var contacts = [bob, mary]

function printPerson (person) {
  console.log(person.firstName + ' ' + person.lastName)
}

function list () {
  var contactsLength = contacts.length
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i])
  }
}

function search (lastName) {
  var contactsLength = contacts.length
  for (var i = 0; i < contactsLength; i++) {
    if (lastName === contacts[i].lastName) {
      printPerson(contacts[i])
    }
  }
}

search('Jones')

// function Contact (firstName, lastName, phoneNumber, email) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.phoneNumber = phoneNumber
//   this.email = email
// }

function add (firstName, lastName, phoneNumber, email) {
  var newContact = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
  }
  contacts.push(newContact)
}

add('CJK', 'mhv', '875875', 'luhg@jmbg.com')

list()
