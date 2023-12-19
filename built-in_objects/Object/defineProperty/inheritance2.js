/*
  This example, in `get` and `set` methods, `this` points to the object which is used to access or modifiy the property.
*/
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(a.x); // 1
console.log(b.x); // undefined 