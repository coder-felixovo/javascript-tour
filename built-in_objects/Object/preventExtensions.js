/*
  The Object.preventExtensions() static method prevents new properties from ever being added to an object. It also prevents the object's prototype from being re-assigned.
*/

const op = {
  a: 3.14,
  b: 2.71,
};

const o = Object.create(
  op,
  {
    foo: {
      value: 1,
      writable: true,
      enumerable: true,
      configurable: true
    },
    bar: {
      value: 2,
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
)

console.log(o);
// { foo: 1, bar: 2 }

// Objects are extensible by default
console.log(Object.isExtensible(o)); // true

// marks an object non-extensible
// Object.preventExtensions returns the object being made non-extensible.
const oNonExtensible = Object.preventExtensions(o);
console.log(Object.isExtensible()); // false
console.log(o === oNonExtensible); // true

// Object.definedProperty throws when adding a new property to a non-extensible object
try {
  Object.defineProperty(o, 'baz', {
    value: 3
  });
} catch(e) {
  console.log(e.message);
  // Cannot define property foo, object is not extensible
}

o.q = 4; // non-extensible
console.log(o.q); // undefined

function fail() {
  "use strict";
  try {
    o.w = 5; // throw a TypeError
  } catch(e) {
    console.log(e.message);
    // Cannot add property w, object is not extensible
  }
}
fail();



// In general, non-extensible object's properties can still be deleted
delete o.foo;
console.log(o);
// { bar: 2 }



// Only prevents addition of own properties.
// Properties can still be added to the object prototype.
Object.defineProperty(
  o.__proto__,
  "c",
  {
    value: 0.618,
    writable: true,
    configurable: true,
    enumerable: true
  }
)
console.log(op);
// { a: 3.14, b: 2.71, c: 0.618 }