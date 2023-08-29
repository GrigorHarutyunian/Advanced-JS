const privateVariable = (num) => {
  let privateValue = num;
  return {
    get: () => privateValue,
    set: (newNum) => {
      privateValue = newNum;
    },
  };
};
const secretValue = privateVariable(42);
console.log(secretValue.get());
secretValue.set(23);
console.log(secretValue.get());
