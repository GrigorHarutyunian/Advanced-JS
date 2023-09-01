const partial = (add, num3) => {
  return (...nums) => add(...nums, num3);
};
const add = (...nums) => nums.reduce((acc, val) => acc + val);
const add5 = partial(add, 4);
console.log(add5(1, 3, 5));
