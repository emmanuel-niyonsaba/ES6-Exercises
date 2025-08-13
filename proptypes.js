
// this is for creatin the  proptype


// Parent Constructor
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Child Constructor
function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

// Child's own method
Dog.prototype.bark = function () {
  console.log(`${this.name} the ${this.breed} barks!`);
};

// Create instances
const dog1 = new Dog("Max", "Bulldog");
dog1.speak(); // Max makes a sound.
dog1.bark();  // Max the Bulldog barks!

// Object.create example
const animalMethods = {
  speak: function () {
    console.log(`${this.name} makes a sound.`);
  }
};
const rabbit = Object.create(animalMethods);
rabbit.name = "Bunny";
rabbit.speak(); // Bunny makes a sound.
