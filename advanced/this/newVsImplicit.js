function counter(num) {
  this.num = num;
}

const obj1 = {
  counter
};

obj1.foo(1);
console.log(obj1.num); // 1

const obj2 = new obj1.foo(2);
console.log(obj1.num); // 1
console.log(obj2.num); // 2

// 优先级：new绑定 > 隐式绑定