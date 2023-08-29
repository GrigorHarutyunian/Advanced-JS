const partial = (callBack, num) => {
  return (a, b) => callBack(a, b, num);
};
const add = (a, b, c) => a + b + c;

const add5 = partial(add, 5);
console.log(add5(10, 20));
console.log(add5(101, 211));
