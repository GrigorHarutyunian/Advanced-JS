const Airplane = {
  name: "MIG-23",
  isFlaying: false,
  takeOf() {
    this.isFlaying = true;
    return this;
  },
  land() {
    this.isFlaying = false;
    return this;
  },
};
Airplane.takeOf().land().takeOf().takeOf().land();
