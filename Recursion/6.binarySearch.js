const sortedArray = [1, 3, 5, 7, 11, 23, 42];
const binarySearch = (arr, num, index = Math.trunc(arr.length / 2)) => {
  const midleElem = Math.trunc(arr.length / 2);
  if (arr.length === 0 || (arr.length === 1 && arr[midleElem] !== num)) {
    return -1;
  } else if (num === arr[midleElem]) {
    return index;
  } else if (num >= arr[midleElem]) {
    return binarySearch(
      arr.slice(midleElem),
      num,
      index + arr.slice(midleElem).length / 2
    );
  } else {
    return binarySearch(
      arr.slice(0, midleElem),
      num,
      index - Math.round(arr.slice(midleElem).length / 2)
    );
  }
};
console.log(binarySearch(sortedArray, 42));
