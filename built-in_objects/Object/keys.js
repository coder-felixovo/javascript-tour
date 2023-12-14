// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.

// e.g.1
const obj = {
  c: "coconut",
  b: "banana",
  a: "apple"
}
console.log(Object.keys(obj))
// [ 'c', 'b', 'a' ]


// e.g.2
const arr = ["a", "b", "c"]
console.log(Object.keys(arr))
// [ '0', '1', '2' ]


// e.g.3
const anObj = { 7: "c", 100: "a", 2: "b" }
console.log(Object.keys(anObj))
// [ '2', '7', '100' ]


// e.g.4
const myObj = Object.create(
  {},
  {
    foo: {
      value: "foo", // foo is a non-enumerable property
    },
    bar: {
      value: "bar",
      enumerable: true
    }
  }
)
myObj.baz = 1
console.log(Object.keys(myObj))
// [ 'bar', 'baz' ]


// e.g.5
// Cannot convert `undefined` or `null` to object
try {
  Object.keys(null)
} catch(e) {
  console.log("Passing `null` to Object.keys() threw a TypeError")
}

try {
  Object.keys(undefined)
} catch(e) {
  console.log("Passing `undefined` to Object.keys() threw a TypeError")
}


// e.g.6
// Passing primitive value to Object.keys()
// Only strings may have own enumerable properties.
console.log(Object.keys("abc"))
// [ '0', '1', '2' ]
console.log(Object.keys(100))
// []
console.log(Object.keys(true))
// []