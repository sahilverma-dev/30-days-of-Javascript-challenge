// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const checkNumber = (num) => {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
};

checkNumber(0);

checkNumber(10);

checkNumber(-10);

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const checkAge = (age) => {
  if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
};

checkAge(17);
checkAge(18);
// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const findLargest = (a, b, c) => {
  if (a > b && a > c) {
    console.log("Largest:", a);
  } else if (b > a && b > c) {
    console.log("Largest:", b);
  } else {
    console.log("Largest:", c);
  }
};
findLargest(1, 2, 3);
findLargest(3, 2, 1);
// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const dayOfWeek = (num) => {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid input");
  }
};

dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(8);

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const assignGrade = (score) => {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
};
assignGrade(90);
assignGrade(80);
// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const checkEvenOdd = (num) => {
  num % 2 === 0 ? console.log("Even") : console.log("Odd");
};
checkEvenOdd(2);
checkEvenOdd(3);

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const checkLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    console.log("Leap year");
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
};
checkLeapYear(2024);
checkLeapYear(2020);
checkLeapYear(1900);
// Activity 6: Number Check, Voting Eligibility, Day of the Week, Grade Assignment, Leap Year Check, and Achievement
// Feature Request:
// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
const numberCheck = (num) => {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
};
numberCheck(0);
numberCheck(1);
numberCheck(-1);
// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
const checkVotingEligibility = (age) => {
  if (age >= 18) {
    console.log("Eligible");
  } else {
    console.log("Not Eligible");
  }
};
checkVotingEligibility(17);
checkVotingEligibility(18);
// Activity 7: Number Check, Voting Eligibility, Day of the Week, Grade Assignment, Leap Year Check, and Achievement
// Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:

// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for concise condition checking.
// Combine multiple conditions to solve more complex problems.
