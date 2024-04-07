/*  Node应用程序启动后，并不会立即进入事件循环，而是先执行同步代码，从上到下依次执行。
    同步API立即执行，异步API交给C++维护的线程执行，异步API的回调函数被注册到对应的事件队列中。
    当所有同步代码执行完成后才会进入事件循环。
 */
setTimeout(() => {
  console.log("setTimeout 1")
})

console.log("start")

setTimeout(() =>{
  console.log("setTimeout 2")
})

setImmediate(() => {
  console.log("setImmediate 1")
})

// const sleep = (delay) => {
//   const START_TIME = Date.now()
//   while (Date.now() - START_TIME < delay) {
//     continue
//   }
// }

// sleep(2000)

/* 注释掉上面这段延迟代码，多次运行，可以发现setTimeout并不是每次都先于setImmediate执行
*/

console.log("end")

/* 将setTimeout、setImmediate放置在Timers和Check阶段之间执行
 */

const fs = require("fs")

fs.readFile("./lyric.txt", "utf8", (err, value) => {
  setTimeout(() => {
    console.log("setTimeout fs")
  })

  setImmediate(() => {
    console.log("setImmediate fs")
  })
})