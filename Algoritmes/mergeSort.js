const merge = (left, rigth) => {
  const newArr = [];
  while (left.length && rigth.length) {
    if (left[0] < rigth[0]) {
      newArr.push(left.shift());
    } else {
      newArr.push(rigth.shift());
    }
  }
  return [...newArr, ...left, ...rigth];
};

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, Math.floor(arr.length / 2));
  return merge(mergeSort(left), mergeSort(arr));
};

const res = mergeSort([1, 41, 4, 12, 5, 65, 23, 6]);
console.log(res);
