const obj = {
  name: "Jon",
  lastName: "Smith",
};
function myCall(obj, ...other) {
  let res = this(obj, ...other);
  return res;
}

function person(obj, city, age) {
  let myThis = obj;
  return `I am ${myThis.name}  ${myThis.lastName},I live in ${city}, i am ${age}`;
}

person.__proto__.myCall = myCall;
console.log(person.myCall(obj, "Yeravan", 32));
