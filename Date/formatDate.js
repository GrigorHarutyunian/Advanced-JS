const formatDate = (date) => {
  const weeks = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const res = `${date.getDate()} ${
    weeks[date.getMonth()]
  } ${date.getFullYear()}`;
  return res;
};

console.log("Actual output: ", formatDate(new Date("2020-05-14")));
