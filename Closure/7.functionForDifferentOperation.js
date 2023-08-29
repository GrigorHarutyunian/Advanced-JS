const createCalculator = (operation) => {
  return (x, y) => {
    if (operation === "add") {
      return x + y;
    } else if (operation === "subtract") {
      return x - y;
    } else if (operation === "multiply") {
      return x * y;
    } else if (operation === "divide") {
      return x / y;
    }
  };
};

const add = createCalculator("add");
console.log(add(5, 3));
