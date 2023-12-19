/*
  Object.definedProperty(obj, prop, descriptor)

  属性描述符（descriptor）有两种形式：数据描述符（data descriptor）和访问描述符（accessor descriptor）。描述符必须是二者之一。两种修饰符都是Object，共享以下可选键：
    configurable
      描述：当某个属性的configurable被设置为false，则不能切换该属性的描述符，该属性不能被删除，修饰符其他的属性不能被修改（然而，如果数据描述符中的writable键为true，那么value可以被修改，同时，writable也可以被修改为false）。
      
      默认值：false

    enumerable
      描述：当某个属性的enumberable被设置为true，该属性会出现在枚举对象属性中。

      默认值：false
*/