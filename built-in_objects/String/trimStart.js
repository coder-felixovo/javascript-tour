/*
  String.prototype.trimStart()

  trimStart()方法移除字符串开头的空白，返回新的字符串，不会修改原字符串
  trimLeft()是这个方法的别名

  空白被定义为空白字符+行结束符
  如果给定字符串开头没有空格，仍返回一个新字符串
*/

const greeting = "     Hello Wolrd     "
console.log(greeting)
// "     Hello World     "
console.log(greeting.trimStart())
// "Hello World     "
console.log(greeting.trimLeft())
// "Hello World     "