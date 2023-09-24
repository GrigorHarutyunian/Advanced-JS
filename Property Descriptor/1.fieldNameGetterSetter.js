const person = {
  set name(names) {
    this._name = names.split(",").map((name) => {
      let arr = [name, name.length];
      return arr;
    });
  },
  get name() {
    return this._name;
  },
};

person.name = "Hamlet,Artavazd";
console.log(person.name);
