class myPromise {
  resolve = (res) => res;
  reject = (err) => err;
  constructor(fun) {
    try {
      fun(this.resolve);
      this.then = (res) => {
        return new myPromise((resolve, reject) => {
          return resolve(res(fun(this.resolve)));
        });
      };
    } catch (er) {
      this.catch = (res) => res(fun(this.resolve, this.reject));
    }
  }
}
const p = new myPromise((resolve, reject) => {
  return resolve(134);
});
p.then((res) => res + 1)
  .then((res) => res + 42)
  .then((res) => console.log(res));
