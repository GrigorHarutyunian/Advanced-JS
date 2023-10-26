const arr = [42, 1, 52, 3, 5, 98, 2, 100, -1, 0, 32]; // 1 42 3 52

function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    let currentIndex = x;
    for (let y = x - 1; y >= 0; y--) {
      if (arr[currentIndex] < arr[y]) {
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[y];
        arr[y] = temp;
        currentIndex--;
      } else {
        break;
      }
    }
  }
  return arr;
}
const res = insertionSort(arr);
console.log(res);
