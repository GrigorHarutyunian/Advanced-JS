const bubleSort = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    let swapid = false;
    for (let y = 0; y < arr.length - x - 1; y++) {
      if (arr[y] > arr[y + 1]) {
        let temp = arr[y];
        arr[y] = arr[y + 1];
        arr[y + 1] = temp;
        swapid = true;
      }
    }
    if (!swapid) break;
  }
  return arr;
};
console.log(bubleSort([1, 2, 3, 4, 5, 6]));
