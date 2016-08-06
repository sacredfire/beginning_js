// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluated.
var random = {
  get octet () { return Math.floor(Math.random() * 256) },
  get uint16 () { return Math.floor(Math.random() * 65536) },
  get int16 () { return Math.floor(Math.random() * 65536) - 32768 }
}

console.log(random.octet)
console.log(random.uint16)
console.log(random.int16)
