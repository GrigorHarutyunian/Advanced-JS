const schema = {
  name: {
    value: "Charlito",
    writable: true,
    enumerable: true,
    validate: (value) => typeof value === "string",
  },

  age: {
    value: 41,
    writable: true,
    enumerable: false,
    validate: (value) => typeof value === "number" && value >= 18,
  },
};

const objectValidation = (schema) => {
  const valideObject = {};
  for (let key in schema) {
    if (schema[key].validate(schema[key].value)) {
      Object.defineProperty(valideObject, key, {
        ...schema[key],
      });
    }
  }
  return valideObject;
};
const res = objectValidation(schema);
console.log(Object.getOwnPropertyDescriptors(res));
