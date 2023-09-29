/*
  ES6提供了新的数据结构Set，其特点是没有重复的值。
 */


// Set本身是一个构造函数
console.log(typeof Set)
// "function"


// 生成Set数据结构
const s = new Set()


// add添加值，返回Set结构本身
const addRes = s.add(1)
console.log(addRes)
// Set(1) { 1 }


// 连续添加
s.add(2).add(3).add(1)


// 数字1虽然被添加了两次，但Set中只有一个1


// size返回Set实例成员总数
console.log(s.size)
// 3


// delete删除值，返回一个布尔值
const delRes = s.delete(1)
console.log(delRes)
// true


// has返回一个布尔值，表示该值是否为Set中的成员
const hasRes = s.has(1)
console.log(hasRes)
// false


// clear清除Set中所有成员，没有返回值
const clearRes = s.clear()
console.log(clearRes)
// undefined


// Set可以接受一个数组，或者具有iterable接口的数据结构作为参数，进行初始化
const arr = [1, 2, 3, 1]
const s1 = new Set(arr)
const res = [...s1]
console.log(res)
// [ 1, 2, 3 ]


// Array.from方法可以将Set结构转为数组
const arr1 = Array.from(s1)
console.log(arr1)
// [ 1, 2, 3 ]


// Set去除字符串中的重复字符
console.log([...new Set("aabbcc")])
// [ 'a', 'b', 'c' ]


// 向Set中添加值时，不会发生类型转换
const s2 = new Set()
s2.add(1).add("1")
console.log(s2)
// Set(2) { 1, '1' }


// 注意1：向Set中添加NaN时，会认为等于自身
const s3 = new Set().add(NaN).add(NaN)
console.log(s3)
// Set(1) { NaN }


// 注意2：向Set中添加对象（地址不同）则认为不相等
const s4 = new Set().add({}).add({})
console.log(s4)
// Set(2) { {}, {} }