var serialNum = {
  _n: 0,
  get next () { return this._n++ },
  set next (n) {
    if (n >= this._n) {
      this._n = n
    } else { console.log('serial number can only be set to a larger value') }
  }
}

console.log(serialNum.next)
console.log(serialNum.next)
console.log(serialNum.next)
console.log(serialNum.next)
console.log(serialNum.next)
console.log(serialNum.next)

serialNum.next = 67

console.log(serialNum.next)
console.log(serialNum.next)
console.log(serialNum.next)

serialNum.next = 44

console.log(serialNum.next)
