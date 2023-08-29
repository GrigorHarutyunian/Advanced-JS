const word = "racecar";
const isPalindrome = (word) => {
  if (word.length <= 1) {
    return true;
  }
  let s = word[0] === word[word.length - 1];
  return s && isPalindrome(word.slice(1, -1));
};
const res = isPalindrome(word);
console.log(res);
