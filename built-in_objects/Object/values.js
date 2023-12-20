/*
  The object.values() static method returns an array of a given object's own enumerable string-keyed property values.
*/

const op = {
  a: 3.14,
  b: 2.71,
  c: 0.618,
}

const o = Object.create(
  op,
  {
    foo: {
      value: "apple",
      writable: true,
      enumerable: true,
      configurable: true
    },
    bar: {
      value: "banana",
      writable: true,
      enumerable: false,
      configurable: true
    }
  }
)
o.baz = "coconut"
console.log(Object.values(o));
// [ 'apple', 'coconut' ]

for (let e in o) {
  console.log(e);
}
/*
  foo
  baz
  a
  b
  c
*/



// e.g. Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" }
console.log(Object.values(arrayLikeObj1));
// [ 'a', 'b', 'c' ]



// e.g. Array-like object with random ordering
// when using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 15: "15", 25: "25", 5: "5" }
console.log(Object.values(arrayLikeObj2));
// [ '5', '15', '25' ]



// e.g. Using Object.values() on primitives

// strings have indices as enumerable own properties
console.log(Object.values("foo"));
// [ 'f', 'o', 'o' ]

// other primitives except null and undefined have no own properties
console.log(Object.values(100));
// []