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
  return weeks[new Date(date).getDay()];
};
console.log(getDay("12/08/2011"));
