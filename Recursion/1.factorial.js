const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
const res = factorial(5);
console.log(res);
