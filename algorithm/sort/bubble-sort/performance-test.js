import { bubbleSort } from "./index.js"

// 10w
// 一测: 16.9s
const arr1 = []
for (let i = 0; i < 100000; i++) {
  arr1.push(Math.random() * 1000000)
}
const start = new Date().getTime() / 1000
bubbleSort(arr1)
const end = new Date().getTime() / 1000
console.log(`冒泡排序, 10w个数, 耗时: ${end - start}s`)

// 50w
// 一测: 434.9s
// const arr2 = []
// for (let i = 0; i < 500000; i++) {
//   arr2.push(Math.random() * 5000000)
// }
// const start = new Date().getTime() / 1000
// bubbleSort(arr2)
// const end = new Date().getTime() / 1000
// console.log(`冒泡排序, 50w个数, 耗时: ${end - start}s`)