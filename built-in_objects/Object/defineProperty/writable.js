/*
  writable attribute
*/

const o = {};

Object.defineProperty(o, "a", {
  value: 3.14,
  writable: false
});

console.log(o.a); // 3.14
o.a = 2.71; // does nothing
console.log(o.a); // 3.14

// strict mode
(() => {
  "use strict";
  try {
    o.a = 0.618; // throws TypeError 
  } catch(e) {
    console.log(e.message)
  }
})();