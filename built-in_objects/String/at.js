/*
  String.prototype.at()

  at()方法接受一个整数作为参数，返回指定索引处由单个UTF-16代码单元组成的新字符串。
  如果参数为负整数，则从字符串最后一个字符开始倒数，-1表示字符串中最后一个字符。
*/

const str = "Hello JavaScript"
console.log(str.at(0))
// "H"
console.log(str.at(-1))
// "t"


// 如果指定索引未找到，返回undefined
console.log(str.at(str.length))
// undefined


// 比较不同方法获取倒数第二个字符
console.log(str.at(-2))
// "p"
console.log(str.slice(-2, -1))
// "p"
console.log(str.charAt(str.length - 2))
// "p"