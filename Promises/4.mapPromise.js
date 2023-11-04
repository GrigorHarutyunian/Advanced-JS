const myPromise = new Promise((resolve, reject) => {
  resolve(2);
});
const timesTwo = (val) => {
  throw new Error("oops!");
};

function mapPromise(prom, transformer) {
  return new Promise((resolve, reject) => {
    prom
      .then((result) => {
        resolve(transformer(result));
      })
      .catch((res) => reject(res));
  });
}

mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch((err) => console.log("err", err));
