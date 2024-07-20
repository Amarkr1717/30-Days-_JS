//Day 8 - ES6+ Features.

//1. Template literals
//A . use template literal to create a string that includes variable for a person name and age, and log to the console.

const names = "Amar";
const age = 20 ;

const message = `My name is ${names} and I am ${age} years old`

console.log(
    message
);

//b .create a multi line string ussing template literals and log it to the console.

const multiLineString = `this is the first line
this is the second line
this is the third line`;

console.log(multiLineString);

//2.Destructuring
//a. use Array destructuring to extract the first and second elements from an array of number and log to the console.

const numbers = [1,2,3,4,5];
const [first , second] = numbers ;

console.log(first);
console.log(second);

//b. use object destructuring to extract the title and author from a book object.
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
  };

  const {title , author} = book;

  console.log(
    `The title of book is ${title} and its author is ${author}`
  );

  //3.spread and rest operator.
  //a. use a spread operator to create a new array that includes all element of an existing array plus additonal element.

  const originalArr = [1,2,3];
  const newArr = [...originalArr ,4,5,6]

  console.log(newArr);

  //b. use the rest operator in a function to accept an arbitrary number of argument , sum them , and return the result.
  function sum(...theArgs){
    let total = 0;
    for(const args of theArgs){
        total+= args ;
    }

    return total ;
  }

  console.log(
    sum(1,2,3)
  );

  //.DEfault parameter.
  //a. write a function that takes two parameter and return their product, with a second parameter ahving a default value of 1.
  function mutiply(a ,b=1){
    return a*b;
  }

  console.log(
    mutiply(5,2)   //10
  );
  console.log(mutiply(7));  //1

  //5. Enhanced object literal
  //a. use enhanced object literal to create a object with method and property ,a nd log to the console.
  var name1 = "Rohit";
  var age1 = 10;
  var course= "Btech"

  var student = {name1 ,age1, course};
  console.log(student);

  //b. Create an object with computed property names based on variable.

const propName1 = "firstName"
const propName2 = "secondName"

const person ={
[propName1] :"Chai",
[propName2] :"Code",
 year : 5
};

console.log(person);