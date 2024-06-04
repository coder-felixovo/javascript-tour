function getName() {
  console.log(this.name);
}

try {
  getName();
} catch(e) {
  console.log(e.message);
}

const person = {
  name: "Felix",
};

getName.call(person);