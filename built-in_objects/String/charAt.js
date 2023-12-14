/*
  String.prototype.charAt()
  接受一个整数作为参数，返回指定索引处由单个UTF-16代码单元组成的新字符串  
*/

let str = "Hello JavaScript";
console.log(str.charAt(0)); // "H"

// 参数undefined被视为0
console.log(str.charAt(undefined)); // "H"

// 如果参数超出 0 - str.length - 1 范围，返回空字符串
console.log(str.charAt(str.length)); // ""