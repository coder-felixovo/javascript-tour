// 静态方法

class User {

  // 加static关键字表示静态方法, 不会被实例继承, 直接通过类调用
  static printMyClassName() {
    console.log("Class name: user")
    console.log(this) // this -> User类
  }

  static userBasicMethod() {
    console.log("The basic method of class User.")
  }

  // 非静态方法可以和静态方法重名
  printMyClassName() {
    console.log("Non-static, class name: User")
  }

}

User.printMyClassName()

const user1 = new User()

try {
  user1.printMyClassName()
} catch (e) {
  console.log(e)
  // TypeError: user1.printMyClassName is not a function
}

// 子类可以继承父类的静态方法
class VipUser extends User {

  static vipBaseMethod() {
    // 静态方法也可以从super对象上调用
    return super.userBasicMethod()
  }

}

VipUser.printMyClassName()

VipUser.vipBaseMethod()
