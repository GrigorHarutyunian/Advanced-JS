const dayOfYear = (dateString) => {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  return (date - startOfYear) / (24 * 3600 * 1000) + 1;
};
const res = dayOfYear("12/17/2020");
console.log(res);
