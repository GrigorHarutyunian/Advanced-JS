const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoize = (fib) => {
  const cache = {};
  return (chackedVal) => {
    if (!cache[chackedVal]) {
      cache[chackedVal] = fib(chackedVal);
    }

    return cache[chackedVal];
  };
};
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(10));
console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(11));
console.log(memoizedFibonacci(12));
console.log(memoizedFibonacci(12));
