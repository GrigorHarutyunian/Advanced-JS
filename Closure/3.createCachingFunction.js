const createCachingFunction = () => {
  const cache = {};
  return (value) => {
    if (!cache[value]) {
      cache[value] = value + value;
    }

    return cache[value];
  };
};
const cachedCalculation = createCachingFunction();
console.log(cachedCalculation(3));
console.log(cachedCalculation(3));
console.log(cachedCalculation(21));
console.log(cachedCalculation("G"));
console.log(cachedCalculation("G"));
