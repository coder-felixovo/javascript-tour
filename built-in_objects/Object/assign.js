/*
  静态方法 Object.assign() 从一个或多个源对象上复制全部自有的、可枚举的属性到目标对象上，返回修改的目标对象
*/

const target = { a: 1, b: 2 }
const source = { c: 3, d: 4 }

const returnedTarget = Object.assign(target, source)
console.log("returnedTarget", returnedTarget)
console.log("target", target)
// 上面两行输出一致
// { a: 1, b: 2, c: 3, d: 4 }
console.log(target === returnedTarget)
// true



// source对象会覆盖target对象中一样的属性，较后的属性覆盖先前的属性
const t1 = { a: 1, b: 2 }
const s1 = { a: 2 }
const s2 = { a: 3 }
const returnedT1 = Object.assign(t1, s1, s2)
console.log("returnedT1", returnedT1)
// { a: 3, b: 2 }



// source对象为null或undefined，不会抛出错误
const t2 = { foo: "bar" }
const s3 = null
const s4 = undefined
const returnedT2 = Object.assign(t2, s3, s4)
console.log("returnedT2", returnedT2)
// { foo: 'bar' }



// String和Symbol属性会被复制
const o1 = { a: 1 }
const o2 = { [Symbol("foo")]: 2 }
const obj = Object.assign(o1, o2)
console.log(obj)
// { a: 1, [Symbol(foo)]: 2 }
console.log(Object.getOwnPropertySymbols(obj))
// [ Symbol(foo) ]



{
  const obj = Object.create(
    // 
    { foo: 1 },
    {
      bar: {
        value: 2 // bar is a non-enumerable property
      },
      baz: {
        value: 3,
        enumerable: true // baz is an own enumerable property
      }
    }
  )
  
  const copy = Object.assign({}, obj)
  console.log(copy)
  // { baz: 3 }
}
