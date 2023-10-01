const obj1 = {
  name: "joe",
  age: 27,
  saysMth() {
    return this.name + " " + this.age;
  },
};

function myBind(obj) {
  obj.prop = this;
  return () => obj.prop();
}

Function.prototype.myBind = myBind;
const bind = obj1.saysMth.myBind({ name: "Goqor", age: 26 });
console.log(bind());
