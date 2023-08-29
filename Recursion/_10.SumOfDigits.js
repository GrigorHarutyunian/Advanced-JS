const sumOfDigits = (digits) => {
  if (digits === 0) {
    return 0;
  }
  return (digits % 10) + sumOfDigits(Math.trunc(digits / 10));
};
console.log(sumOfDigits(12121212345));
