const dogObj = {
  name: "Graf",
  age: 3,
};

function myApply(obj, other) {
  let res = this(obj, ...other);
  return res;
}

function aboutDog(obj, owner) {
  const myThis = obj;
  return `Dogs name is ${myThis.name},he is ${myThis.age},his owner is ${owner}`;
}
aboutDog.__proto__.myApply = myApply;
console.log(aboutDog.myApply(dogObj, ["Jack"]));
