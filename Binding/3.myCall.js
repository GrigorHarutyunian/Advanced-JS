const obj = {
  name: "Joe",
  age: 21,
  showPerson(city, street) {
    return this.name + " " + this.age + " " + city + " " + street;
  },
};

function showPerson(city, street) {
  return this.name + " " + this.age + " " + city + " " + street;
}

function myCall(context, ...other) {
  context.prop = this;
  return context.prop(...other);
}

Function.prototype.myCall = myCall;

const mushegh = { name: "mushegh", age: 22 };

console.log(obj.showPerson.myCall(mushegh, "Yerevan", "Arami 43"));
