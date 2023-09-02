const obj1 = {}

// e.g.1
const res1 = JSON.stringify(obj1) === '{}'
console.log(res1)

// e.g.2
const res2 = Object.keys(obj1).length === 0
console.log(res2)

// e.g.3
const res3 = Object.entries(obj1).length === 0
console.log(res3)

// e.g.4
const res4 = Object.getOwnPropertyNames(obj1).length === 0
console.log(res4)

// 以上4种方式无法检测到使用Symbol作为属性名
// 不过较少遇到在对象中使用Symbol作为属性名

const symbolProp = Symbol('symbolProp')
const obj2 = {
  [symbolProp]: 'symbolProp'
}
const res5 = Reflect.ownKeys(obj2).length !== 0
console.log(res5)

