const inputArray = [3, 1, 1, 0, 7, 5, 0, 1, 11];
const subsetSum = (arr, num) => {
  let sum = 0;
  for (let x = 0; x < arr.length; x++) {
    sum += arr[x];
    if (sum === num) {
      return true;
    } else if (sum > num) {
      return subsetSum(arr.slice(1), num);
    }
  }
  return false;
};
console.log(subsetSum(inputArray, 14));
