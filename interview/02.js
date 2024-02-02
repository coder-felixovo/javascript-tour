class B {}

class A extends B {}

console.log(A instanceof B)
// false

const aEntity = new A()
console.log(aEntity instanceof A)
// true
console.log(aEntity instanceof B)
// true