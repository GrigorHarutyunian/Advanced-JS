const fibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
const res = fibonacci(7);
console.log(res);
