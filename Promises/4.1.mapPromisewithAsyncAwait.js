function firstPromise() {
  return new Promise((resolve, reject) => {
    resolve("123");
  });
}

async function mapPromise(prom, transformer) {
  let res = await prom();
  return new Promise((resolve, reject) => {
    resolve(transformer(res));
  });
}

async function generator(mapPromise, firstPromise, timesTwo) {
  try {
    let res = await mapPromise(firstPromise, timesTwo);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

const timesTwo = (val) => {
  return val * 2;
};

generator(mapPromise, firstPromise, timesTwo);
