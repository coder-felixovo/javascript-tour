/*
  Unlike accessor properties, data properties are always set on the object itself, not on a prototype. However, if a non-writable data property is inherited, it is still prevented from beging modified on the object.
*/
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1
});

const a = new MyClass();
a.x = 3.14;
console.log(a.x); // 3.14
console.log(MyClass.prototype.x); // 1

a.y = 2.71; // ignored, throws an error in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1