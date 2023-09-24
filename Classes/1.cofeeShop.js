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
    let amount = 0;
    for (let x = 0; x < this.orders.length; x++) {
      for (let y = 0; y < this.manu.length; y++) {
        if (this.orders[x] === this.manu[y].name) {
          amount += this.manu[y].price;
          break;
        }
      }
    }
    return amount;
  }
  cheapestItem() {
    let theCheapest = Infinity;
    for (let key in this.manu) {
      if (this.manu[key].price < theCheapest) {
        theCheapest = this.manu[key].name;
      }
    }
    return theCheapest;
  }
  drinksOnly() {
    let onlyDrinks = [];
    for (let key in this.manu) {
      if (this.manu[key].type === "drink") {
        onlyDrinks = [...onlyDrinks, this.manu[key].name];
      }
    }
    return onlyDrinks;
  }
  foodOnly() {
    let onlyFoods = [];
    for (let key in this.manu) {
      if (this.manu[key].type === "food") {
        onlyFoods = [...onlyFoods, this.manu[key].name];
      }
    }
    return onlyFoods;
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
