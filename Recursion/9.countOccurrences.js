let num = 2;
const numbers = [2, 3, 4, 3, 5, 2, 6, 2];
const countOccurrences = (arr, n) => {
  if (arr.indexOf(n) === -1) {
    return 0;
  }

  return 1 + countOccurrences(arr.slice(arr.indexOf(n) + 1), n);
};
console.log(countOccurrences(numbers, 2));
