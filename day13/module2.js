
//1.a. 
const add = require('./module1.mjs')

function calculateSum(x, y){
    return add(x,y);
}

const result = calculateSum(3,4);
console.log(`sum : ${result}`);

//1.b
const person = require('./module1.js')

console.log(person.name);
console.log(person.age);
person.greet();

//2.a
import {multiply} from './module1.js'
function calculateMul(x,y){
    return multiply(x,y);
}

const results = calculateMul(4,5);
console.log(`result:${results}`);

//3.
import * as module1 from './module1.mjs'
function calculateOperation(x,y){
  console.log(`addition : ${module1.add(x,y)}`);
}

calculateOperation(2,3);