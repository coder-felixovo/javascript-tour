// forEach的第二个参数thisArg, 用作调用回调函数时的this

// MDN示例

class Counter {
  constructor() {
    this.sum = 0
    this.count = 0
  }
  add(array) {
    // 只有函数表达式才有自己的this绑定
    // 如果写成箭头函数, thisArg参数会被忽略, 箭头函数在词法上绑定了this
    array.forEach(function countEntry(entry) {
      this.sum += entry
      ++this.count
    }, this)
  }
}

const obj = new Counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16
