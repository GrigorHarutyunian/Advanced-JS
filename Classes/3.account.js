const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

class Account {
  #balance = 0;
  constructor(name, balance) {
    this.id = uid();
    this.name = name;
    this.#balance = balance;
  }
  set balance(money) {
    this.#balance -= money;
  }

  get balance() {
    return this.#balance;
  }
  credit(money) {
    this.#balance += money;
  }

  debit(money) {
    if (this.#balance >= money) {
      this.#balance -= money;
    } else {
      return "write valide number";
    }
  }
  transferTo(otherAccount, money) {
    if (otherAccount.balance >= money) {
      this.#balance += money;
      otherAccount.balance = money;
    } else {
      return "write valide number";
    }
  }
  static identifyAccounts(...accountes) {
    return accountes.map((val) => val.id);
  }
}

const joe = new Account("Joe", 1000);
const michael = new Account("Michael", 8000);
