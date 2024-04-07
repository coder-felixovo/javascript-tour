/* 主线程同步代码执行完后，先执行微任务，再执行宏任务
*/

setTimeout(() => {
  console.log("setTimeout")
})

setImmediate(() => {
  console.log("setImmediate")
})

console.log("start");

Promise.resolve().then(() => {
  console.log("Promise.resolve")
})

console.log("end")