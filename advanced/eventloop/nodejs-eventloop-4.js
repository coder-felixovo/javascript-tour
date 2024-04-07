/* 微任务穿插在各个阶段中执行
*/

// Timers Stage
setTimeout(() => {
  console.log("setTimeout")

  Promise.resolve().then(() => {
    console.log("setTimeout Promise.resolve")
  })
})

// Check Stage
setImmediate(() => {
  console.log("setImmediate")
  Promise.resolve().then(() => {
    console.log("setImmediate Promise.resolve")
  })
})

// Micro task
Promise.resolve().then(() => {
  console.log("Promise.resolve")
})

// Micro task
process.nextTick(() => {
  console.log("process.nextTick")
  Promise.resolve().then(() => {
    console.log("nextTick Promise.resolve")
  })
})