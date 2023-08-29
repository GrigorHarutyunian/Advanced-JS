const power = (num, pow) => {
  if (pow === 0) {
    return 1;
  }
  return num * power(num, pow - 1);
};
const res = power(3, 4);
console.log(res);
