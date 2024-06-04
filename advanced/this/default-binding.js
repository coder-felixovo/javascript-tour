function foo() {
  console.log(this); // undefined
  console.log(this === undefined); // true
}

foo();

(() => {
  console.log(this); // undefined
  console.log(this === undefined); // true
})();