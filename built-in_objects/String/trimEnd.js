/*
  String.prototype.trimEnd()

  trimEnd()方法移除字符串末尾的空白，返回一个新字符串，而不修改原字符串
  trimRight()是该方法的别名

  空白被定义为空白字符+行结束符
  如果给定字符串结尾没有空格，仍返回一个新字符串
*/

// 示例中添加"---"是为了更好地在终端观察到输出内容
const greeting = "  Hello World  "
console.log(greeting + "---")
// "  Hello World  "
console.log(greeting.trimEnd() + "---")
// "  Hello World"
console.log(greeting.trimRight() + "---")
// "  Hello World"