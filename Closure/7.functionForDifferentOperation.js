const cachedCalculation = (operation) => {
  const obj = {
    add: (n1, n2) => n1 + n2,
    multiply: (n1, n2) => n1 * n2,
    subtract: (n1, n2) => n1 / n2,
    separation: (n1, n2) => n1 / n2,
  };
  return obj[operation];
};

const multiply = cachedCalculation("multiply");
console.log(multiply(5, 6));
const add = cachedCalculation("add");
console.log(add(4, 5));
