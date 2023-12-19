/*
  enumerable attribute

  enumerable的值决定了属性是否被Object.assign()或 ...运算符所考虑
  对于非Symbol属性，它还决定了属性是否出现在for...in循环和Object.keys()中
*/

const o = {};

Object.defineProperty(o, "a", {
  value: 3.14,
  enumerable: true,
});

Object.defineProperty(o, "b", {
  value: 2.71,
  enumerable: false,
});

Object.defineProperty(o, "c", {
  value: 0.618,
}); // enumerable defaults to false

o.d = 6.62; // enumerable defaults to true when creating property by setting it.

Object.defineProperty(o, Symbol.for("e"), {
  value: "foo",
  enumerable: true,
});

Object.defineProperty(o, Symbol.for("f"), {
  value: "bar",
  enumerable: false,
});

const p = { ...o }
console.log(p.a); // 3.14
console.log(p.b); // undefined
console.log(p.c); // undefined
console.log(p.d); // 6.62
console.log(p[Symbol.for("e")]); // foo
console.log(p[Symbol.for("f")]); // undefined

console.log("-----");

const j = Object.assign({}, o);
console.log(j);
// { a: 3.14, d: 6.62, [Symbol(e)]: 'foo' }

console.log("-----");

for (const i in o) {
  console.log(i);
}
// a d

console.log("-----");

console.log(Object.keys(o));
// [ 'a', 'd' ]

console.log("-----");

console.log(o.propertyIsEnumerable("a")); // true
console.log(o.propertyIsEnumerable("b")); // false
console.log(o.propertyIsEnumerable("c")); // false
console.log(o.propertyIsEnumerable("d")); // true
console.log(o.propertyIsEnumerable(Symbol.for("e"))); // true
console.log(o.propertyIsEnumerable(Symbol.for("f"))); // false