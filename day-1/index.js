console.log("Day 1");

// Activity 1: Variables Declaration
// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var a;
a = 0;

console.log("a", a);

// Declare a variable using let , assign it a string, and log the value to the console.
let b;
b = "hello";

console.log("b", b);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

const c = true;
console.log("c", c);

// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let d = 0;
let e = "hello";
let f = true;
let g = ["hello", "world"];
let h = {
  name: "sahil",
  age: 69,
};
console.log("d", typeof d);
console.log("e", typeof e);
console.log("f", typeof f);
console.log("g", typeof g);
console.log("h", typeof h);

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
let i = 0;
console.log("i", i);
i = 69;
console.log("i", i);
// Activity 5: Understanding const
// • Task 6: Try reassigning a variable declared with const and observe the error.
const j = 0;
console.log("j", j);
j = 69; // error
console.log("j", j);

// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
function variableTypesConsoleLog(v) {
  console.log(v, typeof v);
}

variableTypesConsoleLog(0);
variableTypesConsoleLog("hello");
variableTypesConsoleLog(true);
variableTypesConsoleLog(["hello", "world"]);
variableTypesConsoleLog({ name: "sahil", age: 69 });

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Demo for let
let test1 = 0;
console.log("test1", test1);
test1 = 69;
console.log("test1", test1);

// Demo for const
const test2 = 0;
console.log("test2", test2);
test2 = 69;
console.log("test2", test2); // error

// Achievement:
// By the end of these activities, you will:
// Know how to declare variables using var , let , and const .
// •
// Understand the different data types in JavaScript.
// •
// • Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.
// •
