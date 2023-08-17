const matrix = [
  [12, 31, 41],
  [13, 4, -5000, 10],
  [6, 7, 81, 9],
];
const indexOfTheLargestSumOfArrs1 = (matrix) => {
  let minNum = -Infinity;
  let resIndex = 0;
  for (let x = 0; x < matrix.length; x++) {
    let sum = 0;
    for (let y = 0; y < matrix[x].length; y++) {
      sum += matrix[x][y];
    }
    if (sum > minNum) {
      minNum = sum;
      resIndex = x;
    }
  }
  return resIndex;
};
const res = indexOfTheLargestSumOfArrs1(matrix);
