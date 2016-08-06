var book = {
  name: 'Fuck',
  author: 'F. Fucker',
  edition: 1,
  _year: 2004,
  get year () { return this._year },
  set year (val) {
    if (val > 2004) {
      this._year = val
      this.edition += val - 2004
    }
  }
}

console.log(book)

console.log(book.year)
console.log(book.edition)

book.year = 2007

console.log(book.year)
console.log(book.edition)
