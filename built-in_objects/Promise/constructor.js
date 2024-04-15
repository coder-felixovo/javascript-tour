/*
  ES6规定，Promise是一个构造函数，用于生成Promise实例。
  它接受一个函数作为参数，该函数有两个函数参数resolve和reject（由JS引擎提供） 。
  resolve将Promise实例状态由pending变为【fulfilled】，将异步操作【成功】的结果作为参数传递出去。
  reject将Promise实例状态由pending变为【rejected】，将异步操作【失败】的结果作为参数传递出去。
  Promise实例生成以后，可以用then方法分别指定fulfilled和rejected状态的回调函数。
*/

new Promise((resolve, reject) => {
  // Promise构造函数接受的参数（一个函数）作为同步代码执行
  console.log("immediately execute")
  const asynTaskRes = true // 异步操作是否成功
  asynTaskRes ? resolve(asynTaskRes) : reject(asynTaskRes)

  // 调用resolve或reject后并不会终结参数函数的执行
  // 但是不建议在resolve或reject之后继续添加代码，应放在then方法中执行后续操作
  console.log("console after resolve() or reject()")
})
.then((value) => {
  // fulfilled
  console.log(value)
}, (reason) => {
  // rejecetd
  console.log(reason)
})

console.log("Hi, Promise")

/* 输出顺序
"immediately execute"
"console after resolve() or reject()"
"Hi, Promise"
true
*/



