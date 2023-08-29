const nestedArray = [1, [2, [3, 4], 5], 6];
const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? [...acc, ...flattenArray(val)] : [...acc, val];
  }, []);
};
console.log(flattenArray(nestedArray));
