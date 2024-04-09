/* 
  Map对象保存键值对，并且能够记住键的原始插入顺序。
  任何JS值（对象或原始值）都可以作为键或值。
*/

/* 基本使用 */

/*
  Map()构造函数创建map实例
*/
const map = new Map()

// 注意：Map()只能使用new构造，直接调用Map()会抛出TypeError
try {
  Map()
} catch(e) {
  console.log(e.name)
  // output: "TypeError"
}


/*
  Map实例的set()方法向map添加或更新一个指定的键值对
*/
map.set(1, "one")
map.set("a", "A")
map.set({}, "empty common object")


// set()方法的返回值是map对象
const resSet = map.set(1, "一") // 更新键为1的value值
console.log(resSet)
// output: Map(3) { 1 => '一', 'a' => 'A', {} => 'empty common object' }


// 因此set()方法可以链式调用
map.set("a", "apple").set("b", "banana")


/*
  Map实例的get()方法返回map对象中与指定键关联的值
*/
console.log(map.get("a"))
// output: "apple"


// 如果key未找到，则返回undefined
console.log(map.get(""))
// output: undefined


// 如果与key关联的值是对象，你将获得该对象的引用
// 对该对象作出的任何更改将会有效地在map对象中修改它
map.set("array", ["a"])
map.get("array").push("b")
console.log(map.get("array"))
// output: [ 'a', 'b' ]


/*
  map对象保存着对原始对象的引用，意味着该对象不能够被垃圾回收，这可能导致意外的内存问题。
  如果你想存储在map中的对象与原始对象有着一样的生命周期，考虑使用WeakMap。
*/


/*
  Map实例的clear()方法移除map对象中的所有元素
*/
const resClear = map.clear()
console.log(resClear)
// output: undefined
console.log(map)
// output: Map(0) {}


/*
  Map实例的has()方法返回一个布尔值，表明指定键的元素是否存在于map对象中
*/
map.set("a", "apple")
console.log(map.has("a"))
// output: true
console.log(map.has("b"))
// output: false


/*
  Map实例的delete()方法按照键从map对象中移除指定元素。
  元素被移除返回true，元素不存在则返回false
*/
console.log(map.delete("a"))
// output: true
console.log(map.delete("b"))
// output: false


/*
  Map实例的size访问属性返回map对象中元素个数
*/
// 经过上面的示例，此时map中没有元素
console.log(map.size)
// output: 0


// 重新向map中添加一些元素
map.set("a", "apple")
map.set("b", "banana")


/*
  Map实例的keys()方法返回一个新的map迭代器对象，该对象按插入顺序包含map对象中每个元素的键
*/
const mapKeyIterator = map.keys()
console.log(mapKeyIterator.next().value)
// output: "a"
console.log(mapKeyIterator.next().value)
// output: "b"
console.log(mapKeyIterator.next().value)
// output: undefined


/*
  Map()实例的values()方法返回一个新的map迭代器对象，该对象按插入顺序包含map对象中每个元素的值
*/
const mapValueIterator = map.values()
console.log(mapValueIterator.next().value)
// output: "apple"
console.log(mapValueIterator.next().value)
// output: "banana"
console.log(mapValueIterator.next().value)
// output: "undefined"


/*
  Map()实例的entries()方法返回一个新的map迭代器对象，该对象按插入顺序包含map对象中每个元素的[key, value]对
*/
const mapEntriesIterator = map.entries()
console.log(mapEntriesIterator.next().value)
// output: ["a", "apple"]
console.log(mapEntriesIterator.next().value)
// output: ["b", "banana"]
console.log(mapEntriesIterator.next().value)
// output: undefined


/*
  Map()实例的forEach()方法对于map对象中每个键值对按插入顺序执行一次所提供的函数
*/
function logMapElements(value, key, map) {
  console.log(`map[${key}] = ${value}`)
}
const mapForEachRes = map.forEach(logMapElements)
// map[a] = "apple"
// map[b] = "banana"
console.log(mapForEachRes)
// output: undefined