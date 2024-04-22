/*
  String.prototype.charCodeAt()

  charCodeAt()方法返回一个介于0到65535之间的整数，表示给定索引处的UTF-16代码单元。
  该方法总将字符串索引为UTF-16代码单元序列，因此它可能返回单独的代理。
  获取给定索引处完整的Unicode码点，请使用String.prototype.codePointAt()
*/

const str = "apple"
const index = 0
console.log(`Character code ${str.charCodeAt(index)} is equal to ${str.charAt(index)}`)
// Character code 97 is equal to a


// 如果提供的索引为undefined，则被转换为0
console.log(str.charCodeAt(undefined))
// 97
console.log(str.charCodeAt())
// 97


// 如果提供的索引在0~str.length - 1之外，则返回NaN
console.log(str.charCodeAt(-1))
// NaN
console.log(str.charCodeAt(str.length))
// NaN


// 可能返回单独的代理，但不是有效的Unicode字符
// example in MDN
const str1 = "𠮷𠮾";
console.log(str1.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
console.log(str1.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character
// 获取完整的Unicode码点
console.log(str1.codePointAt(0))
// 134071