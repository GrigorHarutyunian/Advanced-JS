const myObj = { prop1: "value1" };
const extend = (obj) => {
  return Object.defineProperties(obj, {
    prop2: { value: "value2", writable: false, enumerable: true },
    prop3: {
      get() {
        return "computed";
      },
    },
  });
};
const res = extend(myObj);
console.log(Object.getOwnPropertyDescriptors(res));
