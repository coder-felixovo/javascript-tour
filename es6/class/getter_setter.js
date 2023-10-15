class Student {
  
  constructor(name) {
    this.name = name
  }

  // get和set关键字, 对某个属性设置存值和取值函数, 拦截该属性的存取行为
  get age() {
    return 'getter'
  }

  set age(value) {
    console.log('setter: ' + value)
  }

}

const Amy = new Student('Amy')

Amy.age = 18
// setter: 18

console.log(Amy.age)
// getter