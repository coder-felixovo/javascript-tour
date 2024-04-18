/*
  String.prototype.toUppercase()

  toUppercase()方法将字符串转为大写
*/

const a = "apple"
console.log(a.toUpperCase())
// "APPLE"
console.log(a)
// "apple"


// 当你将该方法的this设置为非字符串值时，该方法会将任何非字符串值转为字符串
const c = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef"
  }
})

const d = String.prototype.toUpperCase.call(true)
console.log(c, d)
// "ABCDEF TRUE"