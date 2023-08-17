const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const turnRowsIntoColumns = (matrix) => {
  const newArr = [];
  for (let x = 0; x < matrix.length; x++) {
    let interNalArr = [];
    for (let y = 0; y < matrix[x].length; y++) {
      interNalArr.push(matrix[y][x]);
    }
    newArr.push(interNalArr);
  }
  return newArr;
};
const res = turnRowsIntoColumns(matrix);
