// C1-A2: Mathematical and Comparison Operations, and Type Conversions

// 1. Initialize variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // Note: d is a string, not a number
const e = 15;

// 2. Perform operations and display results

// a. Sum of variables and constant
let sum = a + b + c + parseInt(d) + e; //parseInt converts string d to integer
console.log("Sum:", sum);


// b. Compare variable d and constant e
console.log("d > e:", d > e); //false because d is a string
console.log("d < e:", d < e); //false because d is a string
console.log("d >= e:", d >= e); //false because d is a string
console.log("d <= e:", d <= e); //false because d is a string
console.log("d === e:", d === e); //false because d is a string and e is a number


// c. Declare new variables and perform operations
let subtractionResult = a - b - c - parseInt(d) - e;
let multiplicationResult = (a * c) / e;
let exponentResult = Math.pow(e, c); //Math.pow calculates exponent
let reassignmentResult;

c = 3;
reassignmentResult = e; //Reassign the value of c (which is now 3) to e, then display the result.

console.log("Subtraction:", subtractionResult);
console.log("Multiplication:", multiplicationResult);
console.log("Exponent:", exponentResult);
console.log("Reassignment:", reassignmentResult);