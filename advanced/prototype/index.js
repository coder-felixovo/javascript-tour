// 构造函数
function Foo() {}

// 在JavaScript中，每个函数都具有一个prototype属性，该属性是一个对象，即原型对象
console.log(Foo.prototype); // {}
console.log(typeof Foo.prototype); // "object"

// 原型对象有一个constructor属性，指向原型对象所在函数
console.log(Foo.prototype.constructor); // [Function: Foo]
console.log(Foo.prototype.constructor === Foo); // true

// 生成实例
const animal = new Foo();

// 实例对象的__proto__指向构造函数的原型对象
console.log(animal.__proto__); // {}
console.log(animal.__proto__ === Foo.prototype); // true

// 函数也是一个对象，通过Function构造函数创建
console.log(Foo.__proto__); // {}
console.log(Foo.__proto__ === Function.prototype); // true

// 原型对象通过Object构造函数创建
console.log(Foo.prototype.__proto__); // [Object: null prototype] {}
console.log(Foo.prototype.__proto__ === Object.prototype); // true

// Object对象通过Function函数创建
console.log(Object.__proto__); // {}
console.log(Object.__proto__ === Function.prototype); // true

// Object的原型对象上有__proto__属性，指向null，为原型链顶端
console.log(Object.prototype.__proto__ === null); // true

// Function.prototype 和 Function.__proto__同时指向内置函数
console.log(Function.prototype === Function.__proto__); // true

/**
总结
1. prototype相对函数而言
2. __proto__相对实例而言
3. 一切对象继承于Object对象
4. Object对象继承于Function
 */