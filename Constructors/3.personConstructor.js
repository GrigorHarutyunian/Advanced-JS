function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, someFood];
  }
};

Person.prototype.poop = function () {
  return (this.stomach = []);
};

Person.prototype.toString = function () {
  return this.name + "," + this.age;
};

const personObject = new Person("Joe", 26);
