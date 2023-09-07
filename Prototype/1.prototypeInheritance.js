// const arr = [1, 2, 3]; ---> arr.__proto__ === Array.prototype ---> Array.prototype.__proto__ === Object.prototype ---> Object.prototype.__proto__ === null;

// const str = "" ---> str.__proto__ === String.prototype --->  String.prototype.__proto__ === Object.prototype ---> Object.prototype.__proto__ === null

/* const human = {
   isHuman: true,
 }

 const user = {
   name: "John",
   __proto__: human,
 }
 user.__proto__ === human ---> human.__proto__ === Object.prototype---> Object.prototype.__proto__ === null
*/

/* 
const car = {
  hasEngine: true,
};

const mercedes = {
  name: "mercedes",
  __proto__: car,
};
mercedes.__proto__ === car ---> car.__proto__ === Object.prototype ---> Object.prototype.__proto__ === null

*/

// const bmw = Object.create(null) ---> null

// const emptyObj = {} ---> emptyObj.__proto__ === Object.prototype ---> Object.prototype.__proto__ === null

/*function fn() {
  console.log("hello, world!");
}
fn.__proto__ === Function.prototype ---> Function.prototype.__proto__ === Object.prototype--->Object.prototype.__proto__ === null
*/

// const num = 12 ---> num.__proto__ === Number.prototype ---> Number.prototype.__proto__ === Object.prototype---> Object.prototype.__proto__ === null

// const isAuth = false ---> isAuth.__proto__ === Boolean.prototype ---> Boolean.prototype.__proto__ === Object.prototype---> Object.prototype.__proto__ === null

// const emptyWithoutProto = Object.create(null) ---> null
