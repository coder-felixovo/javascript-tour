/*
  This example illustrates a non-configurable but writable data property, the property's `value` still can be changed, and `writable` can still be toggle from `true` to `false`.
*/

const o = {};

Object.defineProperty(o, "b", {
  configurable: false,
  writable: true,
});

console.log(o.b); // undefined

Object.defineProperty(o, "b", {
  value: 1,
});
// Even when `configurable` is false, because the object is writable, we may still replace the value.

console.log(o.b); // 1

o.b = 2;
// We can change the value with assignment operator as well.

console.log(o.b); // 2

// Toggle the property's writability
Object.defineProperty(o, "b", {
  writable: false,
});
try {
  Object.defineProperty(o, "b", {
    value: 3,
  });
} catch(e) {
  console.log(e.message);
  // Cannot redefine property: b
}
// throws a TypeError, because the property is neither writable nor configurable, it cannot be modified.

// At this point, there's no way to further modify "b" or restore its writability.



/*
  This exampel illustrates a configurable but non-writable data property. The property's value may still be replaced with defineProperty but not with assignment operator, and writable may be toggled.
*/
const p = {}

Object.defineProperty(p, "a", {
  configurable: true,
  writable: false
});
console.log(p.a); // undefined
Object.defineProperty(p, "a", {
  value: 3.14,
});
console.log(p.a); // 3.14

p.a = 2.71
console.log(p.a); // 3.14

try {
  "use strict";
  p.a = 0.618;
  console.log(p.a); // 3.14
} catch(e) {
  console.log(e.message);
}