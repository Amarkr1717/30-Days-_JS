
//function

//1.Function Declaration.
//(a).write a function to check if a number is even or odd

function EvenOdd(a){
    (a%2==0) ? console.log("Even") : console.log("odd");
}

EvenOdd(6)
EvenOdd(9)

//(b).Write a function to calculate the square of a number.

function square(n){
    return n*n
}


console.log(`square  :  ${square(7)}`
   
);

//2. function Expression
//A. Write a function expression to find the maximum of two number
 
function maxofTwo(a,b){
    if(a>b) return a;
    else return b;
}

console.log(
    maxofTwo(6,7)
);

//B. write a  function expression to concate two string

function concateStr(str1 , str2){
    let str3 = str1 + str2 ;

    return str3 ;
}

console.log(
    concateStr("Good ","night")
);

//3. Arrow function
//a. write an arrow function to calculate the sum of two number.

const sum = (a,b) =>{
  return a+b ;
}

console.log(
    sum(2,5)
);

//b. write a arrow function to check if a string contains a specific character. and return a boolean value.

const checkString = (string , char) =>{
  return string.includes(char) ;
}

console.log(
    checkString("mahiBhai" , "B")
);

//4. function parameter and Default values

//a. write a functio that takes two parameter and return their product.provide a default value for the second parameter.

const product = (a,b) =>{
  return a*b;
}

console.log(
    product(4,5)
);

//b.write a function that take person's name and age and return a greeting message.
 function greeting (name ,age){
    return `Hello ${name} , you are ${age} years old`;
 }

 console.log(
    greeting( "Amar" , 20)
 );


 //5. High order function

 //a . write a high order function that takes a function and a number , and calls the function many times.

 const repeatFunction = (func , times) =>  {
    for(let i = 0;i<times ;i++){
        func();
    }
 };
    const sayHello =() => {
       console.log("Hello Bhai");
    };
 

 repeatFunction(sayHello ,3);

 //b. write a high order,function that takes two function and a value , applies the first function to the value , and then applied t
 //the second function to the value .
 
const applyFunction = (func1 , func2 , val) => {
 const firstResult = func1(val) ;
 const secondResult = func2(firstResult) ;
 return secondResult ;
};

const double = (n) => n*2 ;
const squares = (n) => n*n ;

const result = applyFunction(double ,squares ,10);
console.log(result);