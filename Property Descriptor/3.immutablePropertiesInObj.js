class Immutable {
  name = "Jack";
  age = 32;
  proffesion = "Doctor";
  ImmutableProperties() {
    Object.freeze(this);
  }
}

const obj = new Immutable();
obj.ImmutableProperties();
console.log(Object.getOwnPropertyDescriptors(obj));
