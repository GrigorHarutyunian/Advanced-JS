let december = new Date(2017, 11, 1);
let january = new Date(2018, 0, 1);

const monthsInterval = (m1, m2) => {
  const months = [
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
  let nextMonth = m1.getTime() > m2.getTime() ? m1 : m2;
  let prevMonth = m1.getTime() < m2.getTime() ? m1 : m2;

  if (nextMonth.getFullYear() === prevMonth.getFullYear()) {
    return months.slice(prevMonth.getMonth(), nextMonth.getMonth() + 1);
  } else if (
    (nextMonth.getTime() - prevMonth.getTime()) / (24 * 3600 * 1000) <
    365
  ) {
    return [
      ...months.slice(0, nextMonth.getMonth() + 1),
      ...months.slice(prevMonth.getMonth()),
    ];
  } else {
    return months;
  }
};
const res = monthsInterval(december, january);
console.log(res);
