function counter(num) {
  this.num = num;
}

const obj1 = {};
const funA = counter.bind(obj1);
funA(1);
console.log(obj1.num); // 1

const obj2 = new funA(2);
console.log(obj1.num); // 1
console.log(obj2.num); // 2

// 优先级：new绑定 > 显示绑定