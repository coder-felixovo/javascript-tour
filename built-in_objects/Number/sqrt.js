// 静态方法 `Math.sqrt()` 返回给定数字的算术平方根

// 计算直角三角形的斜边
function calcHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b)
}

console.log(calcHypotenuse(3, 4)) // 5

console.log(calcHypotenuse(5, 12)) // 13

console.log(calcHypotenuse(0, 0)) // 0

//
console.log(Math.sqrt(0)) // 0

console.log(Math.sqrt(1)) // 1

console.log(Math.sqrt(2)) // 1.414...

console.log(Math.sqrt(9)) // 3

//
console.log(Math.sqrt(-0)) // -0

// 如果给定数字小于0，返回NaN
console.log(Math.sqrt(-1)) // NaN

console.log(Math.sqrt(-Infinity)) // NaN

console.log(Math.sqrt(NaN)) // NaN

console.log(Math.sqrt(-NaN)) // NaN

//
console.log(Math.sqrt(Infinity)) // Infinity
