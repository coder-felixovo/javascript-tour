/*
  The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
*/

const obj = { a: 3.14, b: 2.71 };
console.log(Object.entries(obj));
// [ [ 'a', 3.14 ], [ 'b', 2.71 ] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike));
// [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder));
// [ [ '2', 'b' ], [ '7', 'c' ], [ '100', 'a' ] ]

const obj1 = Object.create(
  obj,
  {
    c: {
      value: 1.414,
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
)
obj1.d = 0.618;
console.log(Object.entries(obj1));
// [ [ 'c', 1.414 ], [ 'd', 0.618 ] ]
for (let item in obj1) {
  console.log(item);
  // c d a b
}



// Only strings may have own enumerable properties
console.log(Object.entries("foo"));
// [ [ '0', 'f' ], [ '1', 'o' ], [ '2', 'o' ] ]



// Other primitives except undefined and null have no own properties
console.log(Object.entries(100));
// []



// undefined and null cannot be coerced to objects and throw a TypeError
try {
  Object.entries(null);
} catch(e) {
  console.log(e.message);
  // Cannot convert undefined or null to object
}



// converting an Object to a map
const o = { foo: 3.14, bar: 2.71, baz: 0.618 };
const map = new Map(Object.entries(o));
console.log(map);
// Map(3) { 'foo' => 3.14, 'bar' => 2.71, 'baz' => 0.618 }



// iterating through an Object
const o1 = { a: 1, b: 2, c:3 };

for (const [key, value] of Object.entries(o1)) {
  console.log(`${key} ${value}`);
}
// a 1
// b 2
// c 3

Object.entries(o1).forEach(([key, value]) => {
  console.log(`${key} ${value}`);
})
// a 1
// b 2
// c 3