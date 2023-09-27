class Menu {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

const espresso = new Menu("Espresso", "drink", 200);
const cappuccino = new Menu("Cappuccino", "drink", 300);
const cake = new Menu("Cake", "food", 500);

const menuArr = [espresso, cappuccino, cake];

class CoffeeShop {
  constructor(name, manu) {
    this.name = name;
    this.manu = manu;
    this.productNames = this.manu.map((obj) => obj.name);
    this.orders = [];
  }
  addOrder(order) {
    if (this.productNames.includes(order)) {
      this.orders = [...this.orders, order];
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    return this.orders.length
      ? `The ${this.orders.shift()} is ready`
      : `All orders have been fulfilled!`;
  }
  dueAmount() {
    return this.orders.reduce((acc, val) => {
      const order = this.manu.find((order) => order.name === val);

      return order ? acc + order.price : 0;
    }, 0);
  }
  cheapestItem() {
    let theCheapest = Infinity;
    let res = "";
    this.manu.forEach((val) => {
      if (theCheapest > val.price) {
        theCheapest = val.price;
        res = val.name;
      }
    });
    return res;
  }
  drinksOnly() {
    return this.manu
      .filter((val) => {
        return val.type === "drink";
      })
      .map((drink) => drink.name);
  }
  foodOnly() {
    return this.manu
      .filter((val) => {
        return val.type === "food";
      })
      .map((food) => food.name);
  }
}

const starbucks = new CoffeeShop("Starbucks", menuArr);
starbucks.addOrder("Cake");
starbucks.addOrder("Cappuccino");
starbucks.addOrder("hot cocoa");
console.log(starbucks.orders);
console.log(starbucks.dueAmount());
console.log(starbucks.fulfillOrder());
console.log(starbucks.fulfillOrder());
console.log(starbucks.fulfillOrder());
console.log(starbucks.orders);
console.log(starbucks.foodOnly());
console.log(starbucks.cheapestItem());
console.log(starbucks.drinksOnly());
console.log(starbucks.foodOnly());
