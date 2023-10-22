// 类的属性名可以使用表达式形式

let methodNameSpeak = 'speak'

class Student {

  constructor(name) {
    this.name = name
  }

  [methodNameSpeak]() {
    console.log(`My name is ${this.name}.`)
  }

}

const Amy = new Student('Amy')
Amy.speak()
// "My name is Amy."



// 类表达式
const MyCourse = class Course {
  getClassName() {
    // Course只能在类的内部使用, 指向当前类
    return Course.name
  }
}

// 在类的外部, 由MyCourse引用
const instance = new MyCourse()
console.log(instance.getClassName())
// "Course"

Course.name
// ReferenceError: Course is not defined

