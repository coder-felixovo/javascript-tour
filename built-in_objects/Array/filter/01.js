/*
  Array.prototype.filter()

  数组实例的filter()方法创建给定数组部分的浅拷贝，只保留通过给定回调函数测试的元素。
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter((v) => v % 2 == 0)
console.log(evenNumbers)
// [2, 4, 6, 8, 10]


// 如果没有元素通过回调函数测试，则返回一个空数组
const oddNumbers = evenNumbers.filter((v) => v % 2 == 1)
console.log(oddNumbers)
// []


// 在稀疏数组上调用filter()方法，只有赋值的数组索引才会调用回调函数，跳过空槽
const words = ["apple", ,"banana",, "coconut"]
let invokeCallbackFnTimes = 0
const wordsLenghtMoreThanFive = words.filter((v) => {
  invokeCallbackFnTimes++
  return v.length > 5 ? true : false
})
console.log(words.length)
// 5
console.log(invokeCallbackFnTimes)
// 3
console.log(wordsLenghtMoreThanFive)
// ["banana", "coconut"]


// 在非数组对象上调用filter()方法，会读取this的length属性，然后访问键为小于length的非负整数的每个属性
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d"
}
const filterArrayLike = Array.prototype.filter.call(arrayLike, (v) => v)
console.log(filterArrayLike)
// ["a", "b", "c"]