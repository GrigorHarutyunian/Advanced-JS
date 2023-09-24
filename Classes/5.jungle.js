class Jungle {
  animals = [];
  addAnimals(animal) {
    this.animals = [...this.animals, animal];
  }
  soundOff() {
    let newText = ``;
    this.animals.forEach((animal) => {
      newText += `${animal.name} say  ${animal.sound()} energy ${
        animal.energy
      }.`;
    });
    return newText;
  }
}

class Animal {
  constructor(name, species, energy) {
    this.name = name;
    this.species = species;
    this.energy = energy;
  }
  sound() {
    if (this.energy >= 3) {
      this.energy -= 3;
      return this.sound_;
    } else {
      return "I have not energy";
    }
  }

  eat() {
    this.energy += 5;
  }

  sleep() {
    this.energy += 10;
  }
}

class Tiger extends Animal {
  sound_ = `roar`;

  eat(food) {
    if (food?.name === "grain") {
      return `I can’t eat that.`;
    }
    this.energy += 5;
  }

  sleep() {
    this.energy += 5;
  }
}
class Monkey extends Animal {
  sound_ = `chatter`;

  eat() {
    this.energy += 2;
  }

  play() {
    if (this.energy > 8) {
      this.energy -= 8;
      return `Oooo ooo`;
    }
    return `I’m too tired`;
  }
}
class Snake extends Animal {
  sound_ = `Fsshh`;
}

class Food {
  constructor(name, type) {
    this.type = name;
    this.name = type;
  }
}
class Fish extends Food {}
class Grain extends Food {}
class Meat extends Food {}

const tiger = new Tiger("Shere Khan", "tiger", 25);
const snake = new Snake("Kaa", "snake", 14);
const monkey = new Monkey("mowgli", "monkey", 31);
const tiger1 = new Tiger("Shere Khan", "tiger", 25);
const snake1 = new Snake("Kaa", "snake", 14);
const monkey1 = new Monkey("mowgli", "monkey", 31);
const jungle = new Jungle();
jungle.addAnimals(tiger);
jungle.addAnimals(snake);
jungle.addAnimals(monkey);
const chicken = new Meat("chichken", "meat");
const tuna = new Fish("tuna", "fish");
const bulgur = new Grain("bulgur", "grain");
console.log(tiger.eat(bulgur));
console.log(tiger.eat());
console.log(tiger.energy);
console.log(jungle.soundOff());
console.log(jungle.soundOff());
