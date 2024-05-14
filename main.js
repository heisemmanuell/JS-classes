class Animal {
  constructor(name, animalType) {
    this.name = name;
    this.animalType = animalType;
  }

  sayName() {
    console.log(`Name: ${this.name}`);
  }

  sayAnimalType() {
    console.log(`Animal Type: ${this.animalType}`);
  }
}

class Dog extends Animal {
  constructor(name, animalType) {
    super(name, animalType);
  }
}

// Example usage:
const animal = new Animal('Leo', 'Lion');
animal.sayName(); // Name: Leo
animal.sayAnimalType(); // Animal Type: Lion

const dog = new Dog('Max', 'Dog');
dog.sayName(); // Name: Max
dog.sayAnimalType(); // Animal Type: Dog