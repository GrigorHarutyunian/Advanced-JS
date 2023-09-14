function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toPlay = function () {
  return `Playing with ${this.favoriteToy},${this.favoriteToy}  being the favorite toy`;
};

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
const bob = new Baby("Bob", 1, "lego");
console.log(bob.toPlay());
