var topObject = typeof window !== "undefined" ? window : typeof global === "object" ? global : this
console.log(topObject)