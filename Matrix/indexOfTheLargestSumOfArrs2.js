const matrix = [
  [1, 200],
  [13, 4, 5000, 10],
  [6, 7, 1008, 9],
];
const indexOfTheLargestSumOfArrs1 = (matrix) => {
  let minNum = -Infinity;
  let resIndex = 0;
  matrix.forEach((arr, i) => {
    let sumOfNums = arr.reduce((acc, val) => {
      return acc + val;
    });
    if (sumOfNums > minNum) {
      minNum = sumOfNums;
      resIndex = i;
    }
  });
  return resIndex;
};
const res = indexOfTheLargestSumOfArrs1(matrix);
console.log(res);
