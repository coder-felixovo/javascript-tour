// e.g.1
function Dog(name) {
  this.name = name;
}

const dog = new Dog("huskie");
console.log(dog.name); // "huskie"


// e.g.2
function Cat() {
  this.family = "Felidae";
  return {
    name: "garfield",
    context: this,
    getThis: function() {
      return this;
    }
  };
}
const cat = new Cat();
console.log(cat.family); // undefined
console.log(cat.name); // "garfield"
console.log(cat.context); // Cat { family: 'Felidae' }
console.log(cat.getThis()); // Function Cat returns object


// e.g.3
function ReturnSimple() {
  this.crop = "wheat";
  return 0;
}
const instance1 = new ReturnSimple();
console.log(instance1.crop); // "wheat"


// e.g.4
function ReturnNull() {
  this.crop = "carrot";
  return null;
}
const instance2 = new ReturnNull();
console.log(instance2.crop); // "carrot"