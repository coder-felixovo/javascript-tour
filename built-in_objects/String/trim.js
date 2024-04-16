/*
  String.prototype.trim()

  trim()方法从字符串两端删除空白，返回一个新的字符串，而不修改原字符串

  空白被定义为空白字符+行结束符
  如果字符串两端没有任何空白，也会返回一个新的字符串
*/

const greeting = "  Hello World  "
console.log(greeting)
// "  Hello World  "
console.log(greeting.length)
// 15
const trimGreeting = greeting.trim()
console.log(trimGreeting)
// "Hello World"
console.log(trimGreeting.length)
// 11