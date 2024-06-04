const dog = {
  name: "Huskie",
  bark: function() {
    console.log(`${this.name} woof woof`);
  },
  cry: () => {
    console.log(`${this.name} woof woof`);
  },
  action: {
    run: function() {
      console.log(`${this.name} running...`);
    }
  }
};

dog.bark();

try {
  dog.cry();
} catch(e) {
  console.log(e.message); 
}

dog.action.run();