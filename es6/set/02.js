/** Set的遍历方法 */

const s = new Set().add(1).add(2).add(3)

// keys()
for (let item of s.keys()) {
  console.log(item)
}
// 1 2 3

console.log("**********")

// values()
for (let item of s.values()) {
  console.log(item)
}
// 1 2 3

console.log("**********")

// entries()
for (let item of s.entries()) {
  console.log(item)
}
// [ 1, 1 ]
// [ 2, 2 ]
// [ 3, 3 ]

console.log("**********")

// Set实例默认可遍历，其默认遍历器生成函数就是它的value方法
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)
// true

console.log("**********")

// 这意味着可以省略values方法，可以直接使用for...of遍历Set
for (let item of s) {
  console.log(item)
}
// 1 2 3

console.log("**********")

// Set实例也可以使用forEach方法
// 处理函数参数依次为：键值、键名、Set集合本身
// 但对于Set结构来说，键值和键名是同一个值
s.forEach((value, key) => {
  console.log(key + ":" + value)
})
// 1:1
// 2:2
// 3:3