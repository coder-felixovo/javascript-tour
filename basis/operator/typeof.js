// "boolean"
console.log(typeof true)
console.log(typeof false)
// Boolean() will convert values based on if they're truthy or falsy
console.log(typeof Boolean(1))
console.log(typeof !1)

console.log("----------")

// "number"
console.log(typeof 100)
console.log(typeof -50)
console.log(typeof 3.14)
console.log(typeof Math.LN2)
console.log(typeof Infinity)
console.log(typeof NaN)
console.log(typeof Number("1")) // Number tries to parse values into numbers
console.log(typeof Number("apple")) // including values that cannot be type coerced to a number

console.log("----------")

// "string"
console.log(typeof "")
console.log(typeof "foo")
console.log(typeof `bar`)
console.log(typeof "1")
console.log(typeof typeof 1) // typeof always returns a string
console.log(typeof String(1)) // String() converts anything into a string, safer thant to string
console.log(typeof String(Symbol("baz")))

console.log("----------")

// "undefined"
console.log(typeof undefined)
let declareButUndefinedVariable
console.log(typeof declareButUndefinedVariable)
console.log(typeof undeclareVariable)

console.log("----------")

// "symbol"
console.log(typeof Symbol())
console.log(typeof Symbol("far"))
console.log(typeof Symbol.for("bar"))
console.log(typeof Symbol.iterator)

console.log("----------")

// "object"
console.log(typeof null) // notice
console.log(typeof {})

// use Array.isArray() or Object.prototype.toString.call
// to different regular objects from arrays
console.log(typeof [])

console.log(typeof new Date())
console.log(typeof /regex/)

// The following are confusing, dangerous, and wasteful. Avoid them
console.log(typeof new Boolean(true))
console.log(typeof new Number(1))
console.log(typeof new String("foo"))

console.log("----------")

// "function"
console.log(typeof function () {})
console.log(typeof class C {})
console.log(typeof Math.sin)