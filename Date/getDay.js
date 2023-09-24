const getDay = (date) => {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const index = new Date(date).getDay();
  return weeks[index];
};
const res = getDay("09/04/2016");
console.log(res);
