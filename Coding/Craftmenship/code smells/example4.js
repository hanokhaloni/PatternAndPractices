class Animal {
  getName() {
    //code
  }

  getBreed() {
    //code
  }

  getOwner() {
    //code
  }
}

class Pet {
  constructor(animal) {
    this.animal = animal;
  }

  getName() {
    return animal.getName();
  }

  getBreed() {
    return animal.getBreed();
  }

  getOwner() {
    return animal.getOwner();
  }
}
