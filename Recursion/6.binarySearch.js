const sortedArray = [1, 3, 5, 7, 9, 11, 23, 41];
const binarySearch = (
  arr,
  num,
  midleElemenet = Math.trunc(arr.length / 2),
  length = midleElemenet + 1
) => {
  if (length === 0) {
    return -1;
  } else if (arr[midleElemenet] === num) {
    return midleElemenet;
  } else if (num >= arr[midleElemenet]) {
    return binarySearch(arr, num, midleElemenet + 1, length - 1);
  } else {
    return binarySearch(arr, num, midleElemenet - 1, length - 1);
  }
};
console.log(binarySearch(sortedArray, 2));
