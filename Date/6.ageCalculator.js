const birthdate = "1974/4/20";
const ageCalculator = (date) => {
  const birthdate = new Date(date);
  const now = new Date();
  const year = now.getFullYear() - birthdate.getFullYear();
  return birthdate.getMonth() <= now.getMonth() &&
    birthdate.getDate() <= now.getDate()
    ? year
    : year - 1;
};
const res = ageCalculator(birthdate);
console.log(res);
