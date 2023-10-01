const textFormatter = () => {
  return (comman) => {
    return comman === "uppercase"
      ? (name) => name.toUpperCase()
      : comman === "lowercase"
      ? (name) => name.toLowerCase()
      : comman === "titlecase"
      ? (name) => {
          let newName = "";
          name.split(" ").forEach((val) => {
            newName += val[0].toUpperCase() + val.slice(1) + " ";
          });
          return newName;
        }
      : "is not Valid";
  };
};

const format = textFormatter()("titlecase")("Jack Grelish");
console.log(format);
