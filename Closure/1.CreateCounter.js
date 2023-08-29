const createCounter = () => {
  let count = 0;
  return () => ++count;
};
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
