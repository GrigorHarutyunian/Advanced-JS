const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoization = () => {
  let data = new Map();
  return (n = 0) => {
    if (!data.get(n)) {
      data.set(n, fibonacci(n));
    }
    return data;
  };
};

const memo = memoization();
memo(7);
console.log(memo(7));
console.log(memo(17));
console.log(memo(17));
console.log(memo(7));
console.log(memo(1));
