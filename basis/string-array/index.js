/* 字符串与数组比较 */

/*
  字符串经常被当成字符数组，字符串内部实现是否使用数组并不好说，
  但JavaScript中的字符串和字符数组并不是一回事，只是看着相似
*/

/* eslint-disable */
var a = "foo"
var b = ["f", "o", "o"]

// 都具有length属性、indexOf()方法【ES5支持】、concat()方法
console.log(a.length) // 3
console.log(b.length) // 3

console.log(a.indexOf("o")) // 1
console.log(b.indexOf("o")) // 1

/* eslint-disable */
var c = a.concat("bar")
var d = b.concat(["b", "a", "r"])
console.log(c) // "foobar"
console.log(d) // [ 'f', 'o', 'o', 'b', 'a', 'r' ]

console.log(a === c) // false
console.log(b === d) // false


// 但这不意味着它们都表示“字符数组”
a[1] = "0"
b[1] = "0"
console.log(a) // "foo"
console.log(b) // [ 'f', '0', 'o' ]


/*
  JavaScript中字符串是不可变的，是指成员函数不会改变其原始值，而是创建并返回一个新的字符串
  数组是可变的，数组的成员函数都是在其原始值上进行操作
*/
c = a.toUpperCase()
console.log(a === c) // false
console.log(a, c) // "foo" "FOO"

b.push("!")
console.log(b) // [ 'f', '0', 'o', '!' ]


/*
  许多数组方法用于处理字符串非常方便，虽然字符串没有这些方法，但可以间接使用
*/
console.log(typeof a.join === "undefined") // true
console.log(typeof a.map === "undefined") // true

/* eslint-disable */
var c = Array.prototype.join.call(a, "-")
var d = Array.prototype.map.call(a, function(v) {
  return v.toUpperCase() + "."
}).join("")

console.log(c) // "f-o-o"
console.log(d) // "F.O.O."

// 字符串反转
console.log(typeof a.reverse) // "undefined"
b.reverse()
console.log(b) // [ '!', 'o', '0', 'f' ]
// 但是此时不能向上面那样借用数组的方法
