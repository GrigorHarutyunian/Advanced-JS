const getWeekOfMonth = (a) => {
  let firstWeekDay = new Date(a.getFullYear(), a.getMonth(), 1).getDay() + 1;
  let result = Math.ceil((a.getDate() + firstWeekDay) / 7);
  return result;
};
const result = getWeekOfMonth(new Date(2024, 5, 5));
console.log(result);
