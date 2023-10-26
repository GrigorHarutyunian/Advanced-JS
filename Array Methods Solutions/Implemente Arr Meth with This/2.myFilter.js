const arr = [1, 2, 3, 4, 5, 6];

function myFilter(callBack) {
  let newArr = [];
  for (let x = 0; x < this.length; x++) {
    if (callBack(arr[x])) {
      newArr = [...newArr, arr[x]];
    }
  }
  return newArr;
}

function callBack(val) {
  return val % 2;
}
Array.prototype.myFilter = myFilter;
const s = arr.myFilter(callBack);
console.log(s);
