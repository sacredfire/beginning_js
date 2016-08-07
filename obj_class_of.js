function classof (obj) {
  if (obj === null) return 'Null'
  if (obj === undefined) return 'Undefined'
  return Object.prototype.toString.call(obj).slice(8, -1)
}

console.log(classof(null))
console.log(classof(1))
console.log(classof(''))
console.log(classof(false))
console.log(classof({}))
console.log(classof([]))
console.log(classof(/./))
console.log(classof(new Date()))
