/*
  String.prototype.endsWith()

  endsWith()方法确定调用字符串是否以给定字符串结束，返回true或false
*/

// example from MDN
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"))
// true

// 第二个参数：期望找到搜索字符串的结束位置，默认为str.length
console.log(str1.endsWith("best", 17))
// true

const str2 = "Is this a question?"
console.log(str2.endsWith("question"))
// false


/*
  要搜索的字符串不能是正则表达式，其他非正则表达式的值将被强制转换为字符串
*/

try {
  console.log(str1.endsWith(/best/))
} catch(e) {
  console.log(e)
  // TypeError: First argument to String.prototype.endsWith must not be a regular expression
}


console.log(str1.endsWith())
// false
console.log(str1.endsWith(undefined))
// false


console.log(str1.endsWith(""))
// true