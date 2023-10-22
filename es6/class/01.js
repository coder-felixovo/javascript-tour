// 在JavaScript中，生成实例对象的传统方法是通过构造函数
function Teacher(name) {
  this.name = name
}

Teacher.prototype.speak = function () {
  console.log(`My name is ${this.name}.`)
}

const Amy = new Teacher("Amy")
Amy.speak()
// "My name is Amy."

// ES6可通过class关键字定义类
class Student {

  // 类有且只有一个constructor方法
  // 如果未显示定义, 则默认提供一个无参构造方法
  constructor(name) {
    this.name = name // this -> 实例对象
  }

  // 类中的方法前无需加关键字function
  speak () {
    console.log(`Hello, my name is ${this.name}, I'm a student.`)
  }
}

// 使用new创建实例对象
const stu = new Student("Brown")
stu.speak()
// "Hello, my name is Brown, I'm a student."

console.log(stu.constructor === Student.prototype.constructor) 
// true

// 类的数据类型为function
console.log(typeof Teacher) 
// "function"

console.log(Teacher === Teacher.prototype.constructor) 
// true
