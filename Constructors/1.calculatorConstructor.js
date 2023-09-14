function Calculator() {}

Calculator.prototype.add = (n1, n2) => n1 + n2;
Calculator.prototype.subtract = (n1, n2) => n1 - n2;
Calculator.prototype.multiply = (n1, n2) => n1 * n2;
Calculator.prototype.divide = (n1, n2) => n1 / n2;

const calculator = new Calculator();
console.log(calculator.add(1, 3));
console.log(calculator.divide(1, 3));
console.log(calculator.subtract(1, 3));
console.log(calculator.multiply(1, 3));
