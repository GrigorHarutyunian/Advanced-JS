function upperCaseString(val) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (typeof val === "string") {
          resolve(val.toUpperCase());
        } else {
          reject(val);
        }
      },
      500,
      val
    );
  });
}

upperCaseString("erevan")
  .then((res) => console.log(res))
  .catch((er) => console.log(er));
