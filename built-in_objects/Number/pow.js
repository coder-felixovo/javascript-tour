// 静态方法 `Math.pow()` 返回x^y，第一个参数为基数，第二个参数为指数

// 简单示例
console.log(Math.pow(3, 3)) // 27
console.log(Math.pow(2, 8)) // 256

console.log("----------")

// 指数为小数
console.log(Math.pow(4, 0.5)) // 2
console.log(Math.pow(8, 1 / 3)) // 2

console.log("----------")

// 指数为负数
console.log(Math.pow(4, -0.5)) // 0.5
console.log(Math.pow(8, -(1/3))) // 0.5
console.log(Math.pow(3, -1)) // 0.333...

console.log("----------")

// 以下情况返回NaN

// 指数为NaN
console.log(Math.pow(2, NaN)) // NaN

// 基数为NaN，指数非0
console.log(Math.pow(NaN, 0)) // 1
console.log(Math.pow(NaN, 1)) // NaN

// 基数＜0，指数不是整数
console.log(Math.pow(-4, 0.5)) // NaN

// 基数为±1，指数为±Infinity
console.log(Math.pow(1, Infinity)) // NaN
console.log(Math.pow(1, -Infinity)) // NaN
console.log(Math.pow(-1, Infinity)) // NaN
console.log(Math.pow(-1, -Infinity)) // NaN

console.log("----------")

// 0和Infinity的情况
console.log(Math.pow(Infinity, 0.1)) // Infinity
console.log(Math.pow(Infinity, -1)) // 0
console.log(Math.pow(Infinity, 1)) // Infinity
console.log(Math.pow(-Infinity, 1)) // -Infinity
console.log(Math.pow(-Infinity, 1.5)) // Infinity
console.log(Math.pow(-Infinity, -1)) // -0
console.log(Math.pow(-Infinity, -1.5)) // 0
console.log(Math.pow(0, 1)) // 0
console.log(Math.pow(0, -1)) // Infinity
console.log(Math.pow(-0, 1)) // -0
console.log(Math.pow(-0, 1.5)) // 0
console.log(Math.pow(-0, -1)) // -Infinity
console.log(Math.pow(-0, -1.5)) // Infinity
console.log(Math.pow(0.9, Infinity)) // 0
console.log(Math.pow(1.1, Infinity)) // Infinity
console.log(Math.pow(0.9, -Infinity)) // Infinity
console.log(Math.pow(1.1, -Infinity)) // 0

