const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  let pivot = arr[0];

  for (let x = 1; x < arr.length; x++) {
    if (pivot > arr[x]) {
      left.push(arr[x]);
    } else {
      right.push(arr[x]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([3, 2, 1, 53, 23, 11, 564, 21, 7, 0]));
