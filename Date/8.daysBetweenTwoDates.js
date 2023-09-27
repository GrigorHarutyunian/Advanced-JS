const start = 1998;
const finish = 2018;
const ageCalculator = (start, finish) =>
  (new Date(finish, 0, 1) - new Date(start, 0, 1)) / (24 * 3600 * 1000);

const res = ageCalculator(start, finish);
console.log(res);
