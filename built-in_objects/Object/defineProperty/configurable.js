/*
  configurable attribute
*/

const o = {};

Object.defineProperty(o, "a", {
  get() {
    return 3.14;
  },
  configurable: false,
});


try {
  Object.defineProperty(o, "a", {
    configurable: true,
  }); // throws TypeError
} catch(e) {
  console.log(e.message);
  // Cannot redefine property: a
}


try {
  Object.defineProperty(o, "a", {
    enumerable: true,
  }); // throws TypeError
} catch(e) {
  console.log(e.message);
  // Cannot redefine property: a
}


try {
  Object.defineProperty(o, "a", {
    set() {}
  }); // throws TypeError (set was undefined previously)
} catch(e) {
  console.log(e.message);
  // Cannot redefine property: a
}


try {
  Object.defineProperty(o, "a", {
    get() {
      return 1;
    },
  }); // throws TypeError
} catch (e) {
  console.log(e.message);
  // Cannot redefine property: a
}


try {
  Object.defineProperty(o, "a", {
    value: 0.618,
  }); // throws TypeError
} catch (e) {
  console.log(e.message);
  // Cannot redefine property: a
}
// `value` can't be changed when `configurable` is false, but only when the property is a writable data property.


console.log(o.a); // 3.14
delete o.a; // Nothing happens; throws an error in strict mode
console.log(o.a); // 3.14

(() => {
  "use strict";
  try {
    delete o.a; // throws an TypeError
  } catch(e) {
    console.log(e.message);
    // Cannot delete property 'a' of #<Object>
  }
})();