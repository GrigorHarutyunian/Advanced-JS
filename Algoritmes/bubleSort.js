const arr = [31, 12, 4, 56, 7, 86, 3, 0, 8];
const bubbleSort = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length - x - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        let temp = arr[y + 1];
        arr[y + 1] = arr[y];
        arr[y] = temp;
      }
    }
  }
  return arr;
};
const res = bubbleSort(arr);
console.log(res);
