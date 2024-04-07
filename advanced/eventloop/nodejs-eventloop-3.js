/* 微任务中，nextTick优先级最高
*/

// setTimeout(() => {
//   console.log("setTimeout")
// })

// setImmediate(() => {
//   console.log("setImmediate")
// })

// console.log("start")

Promise.resolve().then(() => {
  console.log("Promise.resolve")
})

process.nextTick(() => {
  console.log("process.nextTick")
})

// console.log("end")