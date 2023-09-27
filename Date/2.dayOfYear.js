const dayOfYear = (date) =>
  (new Date(date) - new Date(date).setMonth(0, 0)) / (24 * 3600 * 1000);

console.log(dayOfYear("12/31/2000"));
