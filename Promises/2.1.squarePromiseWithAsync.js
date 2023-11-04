async function firstPromis(val) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve(val);
      },
      1000,
      val
    );
  });
}

async function squarePromise(firstPromis, val) {
  const res = await firstPromis(val);
  return new Promise((resolve, reject) => {
    if (typeof res === "number") {
      resolve(res ** 2);
    }
    if (!isNaN(res)) {
      resolve((+res) ** 2);
    }
    if (typeof res === "string") {
      reject(`Cannot convert ${res} to anumber!`);
    }
  });
}

async function otherFunction(squarePromise, firstPromis, val) {
  try {
    let res = await squarePromise(firstPromis, val);
    console.log(res);
  } catch (res) {
    console.log(res);
  }
}
otherFunction(squarePromise, firstPromis, "11");
