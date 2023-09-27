const getWeekOfMonth = (a) => {
  let firstWeekDay = new Date(a.getFullYear(), a.getMonth(), 1).getDay() + 1;

  return Math.ceil((a.getDate() + firstWeekDay) / 7);
};
const result = getWeekOfMonth(new Date(1997, 8, 3));
console.log(result);
