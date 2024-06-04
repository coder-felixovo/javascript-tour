function printNum() {
  console.log(this.num);
}

const obj1 = {
  num: 1,
  printNum
};

const obj2 = {
  num: 2
};

obj1.printNum(); // 1
obj1.printNum.call(obj2); // 2

// 优先级：显示绑定 > 隐式绑定