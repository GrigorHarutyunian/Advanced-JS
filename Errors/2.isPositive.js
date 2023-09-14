const integer = 1;
const isPositive = (num) => {
  try {
    if (num < 0) throw new Error("Negative Error");
    if (num === 0) throw new Error("Zero Error");
    return "Yes";
  } catch (error) {
    return error.message;
  }
};
const res = isPositive(integer);
console.log(res);
