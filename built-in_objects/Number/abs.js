// 静态方法 `Math.abs()` 返回给定数字的绝对值

console.log(Math.abs(-Infinity)) // Infinity

console.log(Math.abs(Infinity)) // Infinity

console.log(Math.abs(0)) // 0

console.log(Math.abs(-0)) // 0

console.log(Math.abs(-1)) // 1

console.log(Math.abs(1)) // 1

// 强制将参数转为数字，非强制则转为NaN
console.log(Math.abs("-1")) // 1

console.log(Math.abs(null)) // 0

console.log(Math.abs("")) // 0

console.log(Math.abs([])) // 0

console.log(Math.abs([2])) // 2

console.log(Math.abs([1, 2])) // NaN

console.log(Math.abs({})) // NaN

console.log(Math.abs("string")) // NaN

console.log(Math.abs(NaN)) // NaN

console.log(Math.abs()) // NaN