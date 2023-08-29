const curry = (add) => {
  return function curried(...args) {
    return args.length === add.length
      ? add(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  };
};

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add);
console.log(curriedAdd(1, 3)(2));
console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1)(3, 2));
