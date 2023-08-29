const arr = [1, 2, 3, 5, 6];
const arraySum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySum(arr.slice(1));
};

const res = arraySum(arr);
console.log(res);
