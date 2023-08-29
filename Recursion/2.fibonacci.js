const fibonacci = (num) => {
  if (num === 0 || num === 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
const res = fibonacci(20);
console.log(res);
