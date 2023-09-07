const book = {
  page: 310,
  auther: "Gabriel García Márquez",
  name: "One Hundred Years of Solitude",
};

function myBind(obj, ...other) {
  return () => {
    return this(obj, ...other);
  };
}

function aboutBook(obj) {
  const myThis = obj;
  return `Books name ${myThis.name},auther ${myThis.auther},${myThis.page} pages`;
}
aboutBook.__proto__.myBind = myBind;
const newBinding = aboutBook.myBind(book);
console.log(newBinding());
