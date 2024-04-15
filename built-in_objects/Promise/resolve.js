/*
  静态方法Promise.resolve()将值转为Promise对象
  1. 如果value是promise，则返回该promise
  2. 如果value是thenable，将其转为promise，然后执行thenable的then方法
*/


// e.g.1
const p = new Promise((resolve) => {
  resolve("original promise")
})
const res = Promise.resolve(p)
res.then((v) => { console.log(v)} )
// "original promise"


// e.g.2
const thenable = {
  then: function(resolve) {
    resolve("thenable")
  }
}
const p2 = Promise.resolve(thenable)
p2.then((v) => {
  console.log(v)
  // "thenable"
})


// e.g.3
const p3 = Promise.resolve("abc")
p3.then((v) => {
  console.log(v)
  // "abc"
})


// e.g.4
const p4 = Promise.resolve()
p4.then((v) => {
  console.log(v)
  // undefined
})