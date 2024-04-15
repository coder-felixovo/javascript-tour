/*
  静态方法Promise.reject()返回一个被给定原因拒绝的Promise实例，状态为rejected
*/

Promise.reject("error")
.then(null, (reason) => {
  console.log(reason)
  // "error"
})

// 等同于：new Promise((_, reject) => reject("error"))



// 注意：Promise.reject()接受的参数，会原封不动地作为reject的原因，作为后续方法的参数
const thenable = {
  then(_, reject) {
    reject("error")
  }
}
Promise.reject((thenable))
.catch((reason) => {
  console.log(reason === thenable)
  // true
})