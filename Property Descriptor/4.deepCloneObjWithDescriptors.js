const car = {
  name: "BMW",
  tank: 200,
  odometer: 2000,
  other: {
    color: "black",
    motor: 3.2,
    shine: {
      percent: 211,
    },
  },
  price: 7000,
};

const deepRules = (object) => {
  for (let key in object) {
    if (typeof object[key] !== "object") {
      Object.defineProperty(object, key, {
        writable: false,
        configurable: true,
        enumerable: true,
      });
    } else {
      deepRules(object[key]);
    }
  }
};

deepRules(car);

const deepCloneObj = (obj) => {
  const newObj = {};
  Object.defineProperties(newObj, {
    ...Object.getOwnPropertyDescriptors(obj),
  });
  return newObj;
};

const newCar = deepCloneObj(car);
console.log(Object.getOwnPropertyDescriptors(newCar.other.shine));
