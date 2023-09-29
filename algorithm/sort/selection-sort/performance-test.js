import { selectionSort } from "./index.js"

// 10w
// 一测: 5.45s; 二测: 5.74s; 三测: 5.69s
// const arr1 = []
// for (let i = 0; i < 100000; i++) {
//   arr1.push(Math.random() * 1000000)
// }
// const start = new Date().getTime() / 1000
// selectionSort(arr1)
// const end = new Date().getTime() / 1000
// console.log(`插入排序, 10w个数, 耗时: ${end - start}s`)



// 50w
// 一测: 139.72s; 二测: 143.24s
const arr2 = []
for (let i = 0; i < 500000; i++) {
  arr2.push(Math.random() * 5000000)
}
const start = new Date().getTime() / 1000
selectionSort(arr2)
const end = new Date().getTime() / 1000
console.log(`插入排序, 50w个数, 耗时: ${end - start}s`)