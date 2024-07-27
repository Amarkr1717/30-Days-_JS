//Closures

//a
//1. understading closures
//a. write a function that returns another function, where the inner function access a variable from the outer function.
function names(){
    const name = "Chai";
    function displayName(){
        console.log(name);
    }
    return displayName();
}
 names() ;

 //b. creates a closure that maintain a private counter. implement functions to increment and get the current value of counter.
 function createCounter(){
    let count = 0;

    return {
        increment : function(){
            count++ ;
        },
        getValue:function(){
            return count ;
        }
    };
 }

 const myCount = createCounter();

 myCount.increment();
 console.log(myCount.getValue());

 myCount.increment();
 console.log(myCount.getValue());

 //2.practical closures.
 //a. write a function that generates unique IDs . use a closure to keep track of the last generated IDand incremet it with each call.
 function createUniqueIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}

const generateUniqueId = createUniqueIdGenerator();

console.log(generateUniqueId()); 
console.log(generateUniqueId()); 
console.log(generateUniqueId()); 

//b.create a closure that capture a users name and returns a function that greets the user by name.
function createGreetting(name){
    return function(){
        return ` hello ${name}`
    };
}

const greetJohn = createGreetting('John');
console.log(greetJohn());

//3. closure in loop
//a. write a loop that creates an array of function. Each function should log its index when called.
//use a closure to ensure each function log the correct index.

function createLoggingFunction(n){
    let functions = [];

    for(let i = 0;i<n;i++){
        functions.push((function(index){
            return function (){
                console.log(index);
            };
        })(i));
    }
    return functions ;
}

const loggingFunctions = createLoggingFunction(5);
loggingFunctions[0]();
loggingFunctions[1]();
loggingFunctions[2]();
loggingFunctions[3]();
loggingFunctions[4]();

//4.module patteren .
//use closures to create a simple module for managing a collection of item.implement methods to add, renove , and list items.
function createItemManager() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice();
        }
    };
}

const itemManager = createItemManager();

itemManager.addItem('Apple');
itemManager.addItem('Banana');
itemManager.addItem('Orange');

console.log(itemManager.listItems()); // Output: ['Apple', 'Banana', 'Orange']

itemManager.removeItem('Banana');
console.log(itemManager.listItems()); // Output: ['Apple', 'Orange']

//5.memoization
//a. write a function that memoizes the result of another function. Use a closure to store the result of previous computations.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Example usage
function slowFunction(num) {
    console.log('Computing...');
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Output: Computing... 10
console.log(memoizedSlowFunction(5)); // Output: 10 (retrieved from cache)
console.log(memoizedSlowFunction(10)); // Output: Computing... 20
console.log(memoizedSlowFunction(10)); // Output: 20 (retrieved from cache)


//b. create a memoized version of a function that calculates the factorial of number. 
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(10)); 