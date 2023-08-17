const matrix = [
  ["f", "o", "x"],
  ["c", "a", "t"],
  ["d", "a", "y"],
  ["o", "i", "l"],
  ["g", "o", "a"],
  ["b", "a", "t"],
];
const searchWord = "dog";

const haveFindValue = (matrix, trueWord) => {
  if (
    (trueWord.length <= matrix[0].length || trueWord.length <= matrix.length) &&
    searchWord
  ) {
    for (let x = 0; x < matrix.length; x++) {
      let columnWord = "";
      for (let y = 0; y < matrix.length; y++) {
        if (matrix[y][x] === undefined) {
          break;
        }
        columnWord += matrix[y][x];
      }
      if (
        matrix[x].join("").search(trueWord) > -1 ||
        columnWord.search(trueWord) > -1
      ) {
        return true;
      }
    }
  }
  return false;
};
const res = haveFindValue(matrix, searchWord);
