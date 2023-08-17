const matrix = [
  [1, 200],
  [13, -4, 5000, 10],
  [-6, 7, 1008, 9],
  [1, 2],
];
const newArrWithMinNumbers2 = (matrix) => {
  return matrix.map((arr) => {
    return Math.min(...arr);
  });
};
const res = newArrWithMinNumbers2(matrix);
