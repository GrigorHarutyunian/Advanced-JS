const arr = [1, 2, 3, 4, 1, 1, 3, 2, 4, 1, 13, 4, 2, 1, 4];
const removeDuplicates = (array) => [...new Set([...array])];
const res = removeDuplicates(arr);
console.log(res);
