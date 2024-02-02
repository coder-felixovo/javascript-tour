let obj = { num1: 111 };

let ref = obj;

obj.child = obj = { num2: 222 };

console.log(obj.child); 
// undefined

console.log(ref); 
// { num1: 111, child: { num2: 222 } }
