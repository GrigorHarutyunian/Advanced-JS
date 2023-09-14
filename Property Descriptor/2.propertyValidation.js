const book = {
  name: "Sapiens",
  auter: "Yuval Noah Harari",
  page: 464,
};
const validatiRules = {
  writable: false,
  enumberable: true,
  configurable: true,
};
const propertyValidation = (obj, rules) => {
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      value: obj[key],
      ...rules,
    });
  }
  return obj;
};
const res = propertyValidation(book, validatiRules);
console.log(Object.getOwnPropertyDescriptors(book));
