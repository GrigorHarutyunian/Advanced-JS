const matrix = [
  [1, -20],
  [13, 4, 5000, 10],
  [6, -7, 1008, 9],
  [1, -2],
];
const newArrWithMinNumbers = (matrix) => {
  const newArr = [];
  matrix.forEach((arr) => {
    let firstNum = arr[0];
    for (let x = 1; x < arr.length; x++) {
      if (firstNum > arr[x]) {
        firstNum = arr[x];
      }
    }
    newArr.push(firstNum);
  });
  return newArr;
};
const res = newArrWithMinNumbers(matrix);
