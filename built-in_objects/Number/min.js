// 静态方法 `Math.min()` 返回作为输入参数给出的数字中的最小值

console.log(Math.min(1, 2, 3)) // 1

console.log(Math.min(-1, -2, -3)) // -3

console.log(Math.min(...[1, 2, 3])) // 1

// 如果没有输入参数，返回Infinity
console.log(Math.min()) // Infinity

// 如果任一输入参数被转换为NaN，返回NaN
console.log(Math.min(1, 2, {})) // NaN

console.log(Math.min(NaN, 1, 2)) // NaN

// 表明该方法被设计为至少处理两个参数
console.log(Math.min.length) // 2