const matrix = [["mercedes", "bmw"], ["mazda", "toyota", "ferari"], ["niva"]];
const trueCar = "bmw";

const haveFindValue = (matrix, trueCar) => {
  for (let x = 0; x < matrix.length; x++) {
    if (matrix[x].some((str) => trueCar === str)) {
      return true;
    }
  }
  return false;
};
const res = haveFindValue(matrix, trueCar);
