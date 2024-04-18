/*
  String.prototype.toString()

  toString()方法返回this的字符串值
*/

const stringObj = new String("foo")
console.log(stringObj)
// [String: 'foo']
console.log(stringObj.toString())
// "foo"


/*
  String对象重写了toString()方法

  对于String值，toString()方法返回字符串本身（如果它是原语）或是字符串对象包装的字符串。
  toString()方法的实现与valueOf()方法相同

  toString()方法要求它的this值是一个String原语或包装对象，
  它会为其他this值抛出TypeError，而不会尝试将它们强制转换为字符串

  因为String没有[@@toPrimitive]()方法，当String对象在期望字符串的上下文中使用时，JavaScript会自动调用toSring()方法，例如在模板文字中。
  String原语不需要咨询toString()方法来强制将其转为字符串，因为它们已经是字符串。
*/
String.prototype.toString = () => "Overridden"
console.log(`${"foo"}`)
// "foo"
console.log(`${new String("foo")}`)
// "Overridden"