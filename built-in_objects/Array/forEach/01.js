/** forEach方法的基本使用 */

// 对数组的每个元素执行一次给定的函数
const arr = [1, 2, 3]
arr.forEach(e => console.log(e))

console.log('----------')

/*
  回调函数可依次传入三个参数
  1. 当前元素
  2. 当前元素的索引
  3. 数组本身

  返回值: undefined
*/
const arr1 = ['a', 'b', 'c']
const res1 = arr1.forEach((e, i, arr) => {
  console.log(e, i, arr)
})
console.log(res1)

console.log('----------')

// 仅对数组中已赋值的元素调用回调函数, 对于空槽则不会调用
const arr2 = ['A', /* empty */ , 'B', /* empty */  , 'C']
arr2.forEach(e => {
  console.log(e)
})
console.log(arr2[1], arr2[3])

console.log('----------')

// 在首次调用回调函数之前, 数组的长度已经确定下来, 因此, 即使在回调函数中向该数组添加元素, 也不会访问超出数组初始长度的元素
const arr3 = ['apple', 'banana', 'coconut']
arr3.forEach(e => {
  console.log(e)
  arr3.push(e + '-plus')
})
console.log(arr3)

console.log('----------')

// 变更已访问过的数组元素, 不会导致回调函数再访问它
const arr4 = ['dog', 'cat']
arr4.forEach((e, i, arr) => {
  if (i === 0) {
    arr[i] = 'Husky'
  }
  console.log(e)
  
})
console.log(arr4)

console.log('----------')

// 如果回调函数更改了已经存在但未访问的元素, 那么传递给回调函数的值将是访问该元素时的值
const arr5 = ['a', 'b', 'c']
arr5.forEach((e, i, arr) => {
  if (i === 0) {
    arr[i + 1] = 'banana'
  }
  console.log(e)
})

console.log('----------')

// 已经被删除的元素不会被访问
const arr6 = ['a', 'b', 'c']
arr6.forEach((e, i, arr) => {
  if (i === 0) {
    delete arr[1]
  }
  console.log(e)
})

console.log('----------')

// forEach不会改变调用它的数组, 但可以在回调函数中更改数组
let arr7 = ['a', 'b', 'c']
arr7.forEach(e => {
  if (e === 'a') {
    arr7 = 1
  }
  console.log(arr7)
})
console.log('aar7', arr7)

console.log('----------')

// 非数组对象上调用forEach
const arrLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c'
}
Array.prototype.forEach.call(arrLike, e => console.log(e))