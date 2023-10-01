const add2 = (n) => n * 2;
const square = (n) => n * n;
const compose = (...funs) => {
  return (arg) =>
    funs.reduceRight((acc, val) => {
      arg = val(arg);
      return arg;
    }, arg);
};
const res = compose(square, add2)(4);
console.log(res);
