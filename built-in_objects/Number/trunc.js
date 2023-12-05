// 静态方法 `Math.trunc()` 通过删除任何小数位数返回数字的整数部分

console.log(Math.trunc(99.99)) // 99

console.log(Math.trunc(-99.99)) // -99

console.log(Math.trunc(0.123)) // 0

console.log(Math.trunc(-0.123)) // -0

console.log(Math.trunc(-Infinity)) // -Infinity

console.log(Math.trunc(Infinity)) // Infinity

console.log(Math.trunc(0)) // 0

console.log(Math.trunc(-0)) // -0

console.log(Math.trunc("1.23")) // 1

console.log(Math.trunc("-1.23")) // -1

console.log(Math.trunc(NaN)) // NaN

console.log(Math.trunc(-NaN)) // NaN