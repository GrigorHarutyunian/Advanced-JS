const arr = [1, 2, 3, 4, 5, 6];

function myReduce(callBack, sum) {
  let y = 0;
  if (sum === undefined) {
    sum = this[0];
    y = 1;
  }
  for (let x = y; x < this.length; x++) {
    sum = callBack(sum, this[x]);
  }
  return sum;
}
function callBack(acc, val) {
  acc += val;
  return acc;
}
Array.prototype.myReduce = myReduce;
const s = arr.myReduce(callBack);
console.log(s);
