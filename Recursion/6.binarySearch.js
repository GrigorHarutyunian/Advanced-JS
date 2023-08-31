const sortedArray = [1, 3, 5, 7, 11, 23, 42];
const binarySearch = (arr, num, index = Math.trunc(arr.length / 2)) => {
  if (
    arr.length === 0 ||
    (arr.length === 1 && arr[Math.trunc(arr.length / 2)] !== num)
  ) {
    return -1;
  } else if (num === arr[Math.trunc(arr.length / 2)]) {
    return index;
  } else if (num >= arr[Math.trunc(arr.length / 2)]) {
    return binarySearch(
      arr.slice(Math.trunc(arr.length / 2)),
      num,
      index + arr.slice(Math.trunc(arr.length / 2)).length / 2
    );
  } else {
    return binarySearch(
      arr.slice(0, Math.trunc(arr.length / 2)),
      num,
      index - Math.round(arr.slice(Math.trunc(arr.length / 2)).length / 2)
    );
  }
};
console.log(binarySearch(sortedArray, 1));
