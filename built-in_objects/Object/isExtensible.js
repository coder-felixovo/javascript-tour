/*
  The object.isExtensible() static method determines if an object is extensible.
*/

const o = {}

// Objects are extensible by default
console.log(Object.isExtensible(o)); // true

// mark an object non-extensible
Object.preventExtensions(o);

console.log(Object.isExtensible(o)); // false



// An object can be marked as non-extensible using one of Object.preventExtensions(), Object.seal(), Object.freeze(), or Reflect.preventExtensions()

const sealedObj = Object.seal({});
console.log(Object.isExtensible(sealedObj)); // false

const frozenObj = Object.freeze({});
console.log(Object.isExtensible(frozenObj)); // false



/*
  In es5, if the argument is not an object, then it will cause a TypeError.
  In es2015, it will return false without any errors if a non-object argument is passed, since primitives are, by definition, immutable.
*/
console.log(Object.isExtensible(1)); // false