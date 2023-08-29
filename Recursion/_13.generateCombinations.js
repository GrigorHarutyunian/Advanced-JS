const inputArray = [1, 2, 3, 4];
const generateCombinations = (arr, n) => {
  let newArr = [];
  if (n === 1) {
    return arr.map((val) => [val]);
  } else {
    let s = n - 1;
    if (arr.length === 1) {
      return newArr;
    }

    for (let x = 1; x < arr.length; x++) {
      if (x + s > arr.length) {
        break;
      }
      newArr.push([arr[0], ...arr.slice(x, x + s)]);
    }

    newArr.push(...generateCombinations(arr.slice(1), n));
    return newArr;
  }
};
console.log(generateCombinations(inputArray, 2));
