//DAY -2  (OPERATOR)

// 1. Airthmatic operator

//(a). Write a program to add two number 

const a = 5;
const b = 2 ;
console.log(a+b);

//(b). Write a program to subtract two number 

var c = 9;
var d = 2;
console.log(c-d);

//(c). Write a program to multiply two number 

var e = 3.5;
var f = 2;
console.log(e*f);

//(d). Write a program to divide two number 

var g = 14 ;
var h = 2;
console.log(g/h);

//(e). Write a program to find remainder two number 
var i =15;
var j =8 ;
console.log(i%j);

// 2. Assignment Operator

//(a). Use the += operator to add a number to a variable and log the result to console

var k = 4;
var l = 5 ;
 k += l;
 console.log(k);

 //(a). Use the -= operator to add a number to a variable and log the result to console
 
 var m = 40;
var n = 5 ;
 m -= n;
 console.log(m);

 //3 . Comparison Operator

 //(a).write a program to compare two number using > and < and log the result to console.
 
 var o = 5;
 var p = 6;
 if(o>p) {
    console.log(o);
 }
 else{
    console.log(p);
 }

 //(b). write a program to compare two number using == and === and log the result to the console.
  var q = 7;
  var r = 7; 
  if(q==r){
    console.log("true");
  }
  else if(q===r){
    console.log("both are same");
  }
  else{
    console.log("false");
  }

  //4. Logical Opeartor

  //(a) . Write a program that uses the && operator to combine two condition
  var s = 7
  if (s>0 && s<10){
    console.log("yes");
  }
  else{
    console.log("false");
  }

  //(b) . Write a program that uses the || operator to combine two condition

  var t = "mango";
  if (t == "mango" || t == "lichi"){
    console.log("fruit");
  }
  else{
    console.log("Don't know");
  }

    //(c) . Write a program that uses the ! operator to combine two condition

    var u = 7;
    var v = "a";
    if(u!=v){
        console.log("both are different.");
    }
    else{
        console.log("same");
    }

    //5 . Ternary Operator

    //(a) . Write a program that uses the ternary operator to check if a number is positive or negative and log the result.

    var w = 14 ;
    (w%2==0)? console.log("Even") : console.log("odd");