const countdownTimer = (date) => {
  const days = Math.trunc(
    (new Date().getTime() - date.getTime()) / (24 * 3600 * 1000)
  );
  const hours = Math.trunc(
    ((new Date().getTime() - date.getTime()) % (24 * 3600 * 1000)) /
      (3600 * 1000)
  );
  const minutes = Math.trunc(
    ((new Date().getTime() - date.getTime()) % (3600 * 1000)) / (60 * 1000)
  );
  const seconds = Math.trunc(
    ((new Date().getTime() - date.getTime()) % (60 * 1000)) / 1000
  );
  return `${days}:${hours}:${minutes}:${seconds}`;
};
const res = countdownTimer(new Date(2023, 4, 12, 3, 4, 5));
console.log(res);
