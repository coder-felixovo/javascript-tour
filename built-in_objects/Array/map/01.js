/*
  Array.prototype.map()

  数组实例的map()方法创建一个新数组，其成员由原数组每个元素调用所提供的函数的结果组成
*/

const arr = [1, 2, 3]
const arrMap = arr.map((x) => x + 100)
console.log(arrMap)
// [101, 102, 103]


// 在稀疏数组上调用map()方法，只对已经赋值的数组索引调用回调函数，跳过空槽
const sparseArr = [1, , 3]
const sparseArrMap = sparseArr.map((x) => x + 100)
console.log(sparseArrMap)
console.log(sparseArrMap[1])
// undefined