const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: 2,
  },
  g: 5,
};

const flattenedObject = (obj, parentKey = "") => {
  let newObj = {};
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      newObj = {
        ...newObj,
        ...flattenedObject(obj[key], newKey),
      };
    } else {
      newObj[newKey] = obj[key];
    }
  }

  return newObj;
};
const res = flattenedObject(nestedObject);
console.log(res);
