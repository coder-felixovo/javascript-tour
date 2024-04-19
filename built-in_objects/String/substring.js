/*
  String.prototype.substring()

  substring()返回给定字符串的部分，从开始索引到结束索引（不包括结束索引）
*/

const str = "Mozilla"

/*
  返回给定字符串部分，不包括结束索引处的字符
*/
console.log(str.substring(1, 3))
// "oz"


/*
  省略结束索引，提取开始索引到字符串末尾部分
*/
console.log(str.substring(2))
// "zilla"


/*
  开始索引等于结束索引，返回空串
*/
console.log(str.substring(3, 3))
// ""


/*
  开始索引大于结束索引，则交换参数
*/
console.log(str.substring(3, 1))
// "oz"


/*
  小于0的参数被视为0，大于str.length的参数被视为str.length
*/
console.log(str.substring(-1, 3))
// "Moz"
console.log(str.substring(str.length - 2, str.length + 1))
// "la"


/*
  NaN参数值被视为0
*/
console.log(str.substring(NaN, 3))
// "Moz"


/*
  substring()与substr()区别
  1. substr()两个参数分别为start和length；substring()两个参数分别为start和end
  2. substr()如果start参数为负数，则换行到字符串末尾；substring()会将其视为0
  3. substr()如果length参数为负数，则被视为0；substring()如果end小于start，则交换

  substr()是过时的方法，因避免使用
*/
const text = "apple"
console.log(text.substring(1, 3))
// "pp"
console.log(text.substr(1, 2))
// "pp"


/*
  substring()与slice()区别
  1. start > end，substring()会交换参数，slice()返回空串
  2. 参数为负数或NaN，substring()将其视为0，slice()将NaN视为0，负数则从字符串末尾向后计数查找索引（最后一个字符为-1）
*/
const str3 = "strawberry"

console.log(str3.substring(5, 2))
// "raw"
console.log(str3.slice(5, 2))
// ""

console.log(str3.substring(-1, 3))
// "straw"
console.log(str3.substring(-1, -3))
// ""

console.log(str3.slice(-5, 1))
// ""
console.log(str3.slice(-5, -1))
// "berr"