const createPerson = (name, age) => {
  const privateObj = {
    privatName: name,
    privatAge: age,
  };
  return {
    getName: () => privateObj.privatName,

    getAge: () => privateObj.privatAge,

    setName: (newName) => {
      privateObj.privatName = newName;
    },
    setAge: (newAge) => {
      privateObj.privatAge = newAge;
    },
  };
};

const person = createPerson("Alice", 30);
console.log(person.getName());
person.setName("Goqor");
person.setAge(26);
console.log(person.getName());
console.log(person.getAge());
