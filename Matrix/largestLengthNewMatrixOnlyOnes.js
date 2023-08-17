const matrix = [
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
const maximalSquare = function (matrix) {
  const mat = matrix.map((arr) => {
    return [...arr];
  });
  let max = 0;

  for (let x = 0; x < mat.length; x++) {
    for (let y = 0; y < mat.length; y++) {
      if (mat[x][y] === 0) continue;
      if (x > 0 && y > 0) {
        mat[x][y] += Math.min(mat[x - 1][y], mat[x][y - 1], mat[x - 1][y - 1]);
      }
      if (max < mat[x][y]) {
        max = mat[x][y];
      }
    }
  }
  return max;
};
const res = maximalSquare(matrix);
