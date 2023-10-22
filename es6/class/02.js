class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(`A ${this.name} is yelling...`)
  }
}



Animal.prototype.run = function () {
  console.log(`A ${this.name} is running...`)
}



Object.assign(Animal.prototype, {
  walk() {
    console.log(`A ${this.name} is walking...`)
  },
})



const dog = new Animal("dog")
dog.speak()
dog.run()
dog.walk()


// 类内部定义的方法都是不可枚举的
console.log(Object.keys(Animal.prototype))
// [ 'run', 'walk' ]

console.log(Object.getOwnPropertyNames(Animal.prototype))
// [ 'constructor', 'speak', 'run', 'walk' ]