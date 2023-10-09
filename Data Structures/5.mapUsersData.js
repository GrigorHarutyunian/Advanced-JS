class Users {
  constructor(usersArr) {
    this.data = usersArr.reduce((acc, val) => {
      acc.set(val.id, val);
      return acc;
    }, new Map());
  }
  addUsers(newArr) {
    this.data = newArr.reduce((acc, val) => {
      acc.set(val.id, val);
      return acc;
    }, this.data);
  }
  getUserById(id) {
    return this.data.get(id) ? this.data.get(id) : "invalide ID";
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);

mappedUser.addUsers([
  { id: 3, name: "Ann", email: "ann@example.com" },
  { id: 4, name: "Michael", email: "michi@example.com" },
  { id: 5, name: "Jac", email: "JAck@example.com" },
  { id: 6, name: "Joe", email: "Jooooe@example.com" },
  { id: 7, name: "David", email: "Dav@example.com" },
  { id: 8, name: "Tony", email: "Toooniiiy@example.com" },
]);
console.log(mappedUser.getUserById(8));
