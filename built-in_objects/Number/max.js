// 静态方法 `Math.max()` 返回作为输入参数给出的数字中的最大值

console.log(Math.max(1, 2, 3)) // 3

console.log(Math.max(-1, -2, -3)) // -1

console.log(Math.max(...[1, 2, 3])) // 3

// 没有输入参数返回-Infinity
console.log(Math.max()) // -Infinity

// 如果任一输入参数被转换为NaN，则返回NaN
console.log(Math.max(1, 2, {})) // NaN

console.log(Math.max(NaN, 1, 2)) // NaN

// 表明该方法被设计为至少处理两个参数
console.log(Math.max.length) // 2

// Math.min() 方法常被用于裁剪值，使其总小于或等于边界值
// e.g.
function foo(num) {}

const boundary = 100
let x = foo(101)
if (x > 100) {
  x = boundary
}

// 也可以这样写
x = Math.min(foo(101), boundary)