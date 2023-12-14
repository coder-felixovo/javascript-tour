/*
  String.prototype.at()
  接受一个整数作为参数，返回指定索引处由单个UTF-16代码单元组成的新字符串。
  如果参数为负整数，-1表示字符串中最后一个字符。
*/

let str = "Hello JavaScript";
console.log(str.at(0)); // "H"
console.log(str.at(-1)); // "t"

// 如果指定索引未找到，返回undefined
console.log(str.at(str.length)) // undefined