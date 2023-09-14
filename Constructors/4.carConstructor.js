function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallon) {
  this.tank += gallon;
};
Car.prototype.drive = function (distance) {
  if (this.tank >= distance * this.milesPerGallon) {
    this.tank -= distance * this.milesPerGallon;
    this.odometer += distance;
    return `everything is fine we are on our way and we have fuel`;
  } else {
    this.odometer += this.tank / this.milesPerGallon;
    let res = `I ran out of foul at ${this.tank / this.milesPerGallon} miles,${
      this.odometer
    } being odometer `;
    this.tank = 0;
    return res;
  }
};
const bmw = new Car("BMW", 20);
