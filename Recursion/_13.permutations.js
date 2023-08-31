const permutations = (str, result = []) => {
  if (str.length === 1) {
    return [str];
  }
  const stringArray = str.split("");

  stringArray.forEach((letter, letterIndex) => {
    const filteredArray = stringArray.filter((l, i) => i !== letterIndex);
    const fitleredString = filteredArray.join("");
    const permutadedArray = permutations(fitleredString);

    permutadedArray.forEach((word) => {
      if (!result.includes(letter + word)) {
        result.push(letter + word);
      }
    });
  });

  return result;
};
const res = permutations("hello");
console.log(res);
