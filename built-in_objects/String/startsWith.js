/*
  String.prototype.startsWith()

  startsWith()方法确定字符串是否以指定字符串开头，返回true或false
*/

const str1 = "Saturday night plans"
console.log(str1.startsWith("Sat"))
// true
console.log(str1.startsWith("Sat", 3))
// false
console.log(str1.startsWith(""))
// true


/*
  第一个参数：在字符串开头所要搜索的字符串
  不能是正则表达式
  任何非正则表达式的值会被强制转换为字符串
  省略该参数或传递undefined将会搜索"undefined"
  如果参数值是一个正则表达式，抛出TypeError
*/
const str2 = "undefined-null"
console.log(str2.startsWith())
// true
console.log(str2.startsWith(undefined))
// true
try {
  const regexp = new RegExp("/app/")
  console.log(str2.startsWith(regexp))
} catch (e) {
  console.log(e)
  // TypeError: First argument to String.prototype.startsWith must not be a regular expression
}