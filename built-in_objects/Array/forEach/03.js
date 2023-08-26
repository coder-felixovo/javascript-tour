// forEach期望回调函数是一个同步函数, 它不会等待异步函数

// MDN示例
const sumFuncAsync = async (a, b) => a + b

const numArr = [1, 2, 3]
let sum = 0

numArr.forEach(async (e) => {
  sum = await sumFuncAsync(sum, e)
})

// 期望输出: 6
// 实际输出: 0

console.log(sum)

// 如果希望按顺序或并发执行一系列操作, 可以使用Promise

// 对上述需求实现结果为6

async function handler() {
  let sum = 0

  const sumAsyncList = numArr.map(async (e) => await sumFuncAsync(sum, e))

  const res = await Promise.all(sumAsyncList)

  res.forEach(e => sum += e)

  console.log(sum)
}

handler()
