const arr = [1, 2, 3, 4, 5, 6];

function myMap(callBack) {
  let newArr = [];
  for (let x = 0; x < this.length; x++) {
    newArr = [...newArr, callBack(arr[x])];
  }
  return newArr;
}

function callBack(val) {
  return val * 2;
}
Array.prototype.myMap = myMap;
const s = arr.myMap(callBack);
console.log(s);
