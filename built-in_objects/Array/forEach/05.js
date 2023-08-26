/**
 * 创建对象副本(MDN示例)
 * @param {object} obj 
 */
function copyObj(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)
  propNames.forEach(name => {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })
  return copy
}

const obj1 = { a: 1, b: 2}
const obj2 = copyObj(obj1)
console.log(obj2)
console.log(obj1 === obj2)
