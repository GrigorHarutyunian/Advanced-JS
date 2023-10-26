const arr = [7, 42, 12, 5, 98, 11, 32];

function selectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let min = x;
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y] < arr[min]) {
        min = y;
      }
    }
    if (min !== x) {
      let d = arr[x];
      arr[x] = arr[min];
      arr[min] = d;
    }
  }
  return arr;
}
const res = selectionSort(arr);
console.log(res);
