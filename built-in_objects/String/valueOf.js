/*
  String.prototype.valueOf()

  valueOf()方法给定String对象的原始值
  这个方法相当于String.prototype.toString()
  该方法通常由JavaScript内部调用，而不是在代码中显示调用
*/

const greet = new String("Hello World")
console.log(greet.valueOf())
// "Hello World"