const curriedCalculator = () => {
  return (comman) => {
    return comman === "+"
      ? (n1, n2) => n1 + n2
      : comman === "-"
      ? (n1, n2) => n1 - n2
      : comman === "*"
      ? (n1, n2) => n1 * n2
      : comman === "/"
      ? (n1, n2) => n1 / n2
      : "invalide case ";
  };
};

const calculate = curriedCalculator();
const addition = calculate("+");
console.log(addition(1, 2));
