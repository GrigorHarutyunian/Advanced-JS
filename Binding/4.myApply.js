const obj1 = {
  name: "joe",
  age: 27,
  saysMth(city, street) {
    return this.name + " " + this.age + " " + city + " " + street;
  },
};

function myApply(obj, args) {
  obj.prop = this;
  return obj.prop(...args);
}

Function.prototype.myApply = myApply;
console.log(
  obj1.saysMth.myApply({ name: "Goqor", age: 26 }, ["Yeravan", "Muratsan 17"])
);
