let number1 = 18;
let number2 = 48;
const gcd = (n1, n2, n2Dif = Math.min(n1, n2)) => {
  let max = Math.max(n1, n2);
  let min = Math.min(n1, n2);
  if (max % min === 0 && n2Dif % min === 0) {
    return min;
  }
  return gcd(max, min - 1, n2Dif);
};

console.log(gcd(number1, number2));
