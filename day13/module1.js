// 13. Module :JavaScript Modules enables you to divide your code into multiple files which makes it easier to maintain a code-base.

//1. creating and exporting modulo.
//a. create a module that exports a function to add two numbers, import and use the module in other function.
//function add (a,b){
//     return a+b ;
// }

module.exports  =add ;

//b.create a module that exports an object representing a person with properties and method .import and use this module in other script.
const person = {
   name : 'Chai',
   age :30,
   greet(){
    console.log(`Hello ! my name is ${this.name} and I am ${this.age} years old`);
   }
};

module.exports = person ;

//2. Named and default export
//a.create a module that exports a single function using default export,import and use this function in other script.
// function multiply(a,b){
//     return a*b;
// }

// export default multiply;

//3. importing entire module
//a. create a module that exports multiple constant and function . import the entire module as an object in other script and use this property.
// utils.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

