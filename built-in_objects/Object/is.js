// The Object.is() static method determines whether two values are the same value.

// Two values are the same if one of the following holds:

// both undefined
console.log(Object.is(undefined, undefined)) 

// both null
console.log(Object.is(null, null))

// both true or false
console.log(Object.is(true, true))
console.log(Object.is(false, false))

// both strings of the same length with the same characters in the same order
console.log(Object.is("abc", "abc"))

// both the same object(it means both values reference the same object in memory)
const objA = {}
const objB = objA
console.log(Object.is(objA, objB))

// both BigInts with the same numeric value


// both symbols reference the same symbol value
console.log(Object.is(Symbol.for("foo"), Symbol.for("foo")))

// both +0, -0, NaN
console.log(Object.is(+0, +0))
console.log(Object.is(-0, -0))
console.log(Object.is(NaN, NaN))
console.log(Object.is(NaN, 0 / 0))
console.log(Object.is(NaN, Number.NaN))

// both non-zero, not NaN and have the same value
console.log(Object.is(100, 100))
console.log(Object.is(-50, -50))