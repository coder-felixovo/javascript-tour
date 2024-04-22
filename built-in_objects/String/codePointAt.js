/*
  String.prototype.codePointAt()

  codePointAt()方法返回一个非负整数，表示从给定索引处开始的字符的Unicode码点值。
  注意：索引仍然基于UTF-16代码单元，而不是Unicode码点值。
*/


// example from MDN
const icons = '☃★♲';
console.log(icons.codePointAt(1));
// 9733


// 如果给定的索引为undefined，则被转换为0
console.log(icons.codePointAt())
// 9731
console.log(icons.codePointAt(undefined))
// 9731
console.log(icons.codePointAt(0))
// 9731


// 如果给定索引在0~str.length-1范围之外，返回undefined
console.log(icons.codePointAt(-1))
// undefined
console.log(icons.codePointAt(icons.length))
// undefined


// 如果索引处的元素是UTF-16前导代理元素，则返回代理元素对的码点
// 如果索引处的元素是UTF-16后导代理元素，则返回代理元素的代码单元