// Strict Mdoe 
// "use strict";  // Defines that JavaScript code should be executed in "strict mode".

// example 1 

// Without Strict Mode:
function exampleWithoutStrict() {
    x = 10;  // Undeclared variable (global scope) is created.
    console.log(x);  // Outputs 10.

    // This doesn't throw an error and creates a global variable y.
    y = "Hello, World!";
    console.log(y);  // Outputs "Hello, World."
}

exampleWithoutStrict();

// In non-strict mode, the variables x and y are global.
console.log(x);  // Outputs 10.
console.log(y);  // Outputs "Hello, World."

// exmaple 2 

"use strict";

function exampleWithStrict() {
    x = 10;  // Uncaught ReferenceError: x is not defined
    console.log(x);  // This line is never reached due to the error.

    // This will also throw an error.
    y = "Hello, World!";
    console.log(y);  // This line is never reached due to the error.
}

exampleWithStrict();

// In strict mode, the variables x and y are not created globally.
console.log(x);  // Uncaught ReferenceError: x is not defined
console.log(y);  // Uncaught ReferenceError: y is not defined