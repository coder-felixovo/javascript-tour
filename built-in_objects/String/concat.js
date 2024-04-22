/*
  String.prototype.concat()

  concat()方法将字符串参数连接到调用方法的字符串，返回一个新的字符串

  字符串参数可以是一个或多个

  如果给定的参数不是字符串，会将它们转换为字符串再连接
*/

// example from MDN
const str1 = "Hello"
const str2 = "World"
console.log(str1.concat(" ", str2))
// "Hello World"


// example from MDN
const greetList = ["Hello", " ", "Venkat", "!"]
"".concat(...greetList)
// "Hello Venkat!"


// example from MDN
console.log("".concat({}))
// "[object Object]"
console.log("".concat([]))
// ""
console.log("".concat(null))
// "null"
console.log("".concat(true))
// "true"
console.log("".concat(4, 5))
// "45"