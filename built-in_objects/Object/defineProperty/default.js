const o = {};

o.a = 1;
// is equivalent to
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// on the other hand
Object.defineProperty(o, "b", { value: 1 });
// is equivalent to
Object.defineProperty(o, "b", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
})