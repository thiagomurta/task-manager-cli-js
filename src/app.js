import { sum as soma, subtract, multiply, divide } from "./utils/math.js";
import createUser from "./utils/user.js";

export { subtract } from "./utils/math.js";
// console.log(sum(2, 2))
console.log(soma(2, 2))
console.log(subtract(3, 2))
console.log(multiply(3, 3))
console.log(divide(9, 3))
console.log(createUser('thiago', 'thiago@gmail.com'))