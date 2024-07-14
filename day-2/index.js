// Day 2: Operators
// Tasks/Activities:
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.
const a = 10;
const b = 5;

const sum = a + b;
console.log("Adding:", sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.
const sub = a - b;
console.log("Subtract:", sub);
// Task 3: Write a program to multiply two numbers and log the result to the console.
const mul = a * b;
console.log("Multiply:", mul);
// Task 4: Write a program to divide two numbers and log the result to the console.
const div = a / b;
console.log("Division:", div);
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
const rem = a % b;
console.log("Modulus:", rem);
// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let c = 10;
c += 5;
console.log("c:", c);
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
let d = 10;
d -= 5;
console.log("d:", d);
// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log("a > b:", a > b);
// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("a >= b:", a >= b);
// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
console.log("a == b:", a == b);
console.log("a === b:", a === b);
// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
console.log("a > b && a < b:", a > b && a < b);
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("a > b || a < b:", a > b || a < b);
// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("!a > b:", !a > b);
// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
const sumF = (a, b) => a + b;
console.log("Adding:", sumF(a, b));
const subF = (a, b) => a - b;
console.log("Subtract:", subF(a, b));
const mulF = (a, b) => a * b;
console.log("Multiply:", mulF(a, b));
const divF = (a, b) => a / b;
console.log("Division:", divF(a, b));

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
console.log(">", 12 > 10);
console.log(">=", 12 >= 10);
console.log("<", 12 < 10);
console.log("<=", 12 <= 10);
console.log("==", "10" == 10);
console.log("===", 10 === 10);
console.log("!=", 10 != 10);
console.log("!==", 10 !== 10);

// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
console.log(a > 0 ? "positive" : "negative");

// Achievement:
// By the end of these activities, students will:

// Understand and use arithmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.
// Use the ternary operator for concise conditional expressions.
