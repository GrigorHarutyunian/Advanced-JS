let january = new Date(2017, 1, 11);
let march = new Date(2017, 2, 1);

const monthsInterval = (m1, m2) => {
  const arr = [
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
  const firstMonts = arr[m1.getMonth()];
  const lastMonts = arr[m2.getMonth()];
  const getfisrtYear = m1.getFullYear();
  const getSeconf = m2.getFullYear();
  let year = 0;
  if (getSeconf > getfisrtYear) {
    year = getSeconf - getfisrtYear;
  } else if (getfisrtYear > getSeconf) {
    year = getfisrtYear - getSeconf;
  }
  let prevMonth = lastMonts;
  let nexMonth = firstMonts;
  let prevMonthIndex = m2.getMonth();
  let nexMonthIndex = m1.getMonth();
  if (m1.getMonth() > m2.getMonth()) {
    prevMonth = firstMonts;
    nexMonth = lastMonts;
    let prevMonthIndex = m1.getMonth();
    let nexMonthIndex = m2.getMonth();
  }
  let res = "";
  if (year === 0) {
    res = arr.slice(prevMonthIndex, nexMonthIndex);
  }
  return res;
};
const res = monthsInterval(january, march);
console.log(res);
