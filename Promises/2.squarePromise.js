function squarePromise(prom) {
  return new Promise((resolve, reject) => {
    prom
      .then((res) => {
        if (typeof res === "number") {
          resolve(res ** 2);
        }
        if (!isNaN(res) && res !== "") {
          resolve((+res) ** 2);
        }
        if (typeof res === "string") {
          reject(`Cannot convert ${res} to anumber!`);
        }
      })
      .catch((res) => {
        reject(res);
      });
  });
}

squarePromise(Promise.resolve(4))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

squarePromise(Promise.resolve("14"))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

squarePromise(Promise.resolve("abc"))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

squarePromise(Promise.reject("error"))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
