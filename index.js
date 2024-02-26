let a = 2000;
let b = 100;
function divide(a, b) {
  return a / b;
}

console.log(divide(a, b));

// First Arrow-Function
const square = (num) => num * num;
console.log(`arrow function of square: `, square(2));

console.log(`arrow function of square: `, square(16));
// Second Arrow-Function
const add = (num1, num2) => num1 + num2;
console.log(`arrow function of add: `, add(3, 4));
console.log(`arrow function of add: `, add(321, 845));
