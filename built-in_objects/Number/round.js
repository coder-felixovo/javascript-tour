// 静态方法 `Math.round()` 返回给定数字四舍五入到最接近整数的数值

console.log(Math.round(0.9)) // 1

console.log(Math.round(0.1)) // 0

console.log(Math.round(5.5), Math.round(5.51), Math.round(5.49))
// 6 6 5

console.log(Math.round(-5.5), Math.round(-5.51), Math.round(-5.49))
// -5 -6 -5

console.log(Math.round(-0)) // -0

console.log(Math.round(0)) // 0

console.log(Math.round(-Infinity)) // -Infinity

console.log(Math.round(Infinity)) // Infinity

// Math.round(x) 和 Math.floor(x+0.5) 并不完全一致
// 对于x为-0，或者-0.5≤x≤0
// Math.round(x) 返回 -0
// Math.floo(x+0.5) 返回 0

console.log(Math.round(-0.1)) // -0
console.log(Math.floor(-0.1 + 0.5)) // 0
console.log(-0 == 0) // true
console.log(-0 === 0) // true

// 若忽略这种差异和潜在的精度误差，可以认为Math.round(x)与Math.floor(x+0.5)一般等效