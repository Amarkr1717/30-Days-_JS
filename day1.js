// Activity 1 - variable Declaration.

//Task1 : Declare a variable using var  , assign it a number  , and log the value to the console.
 var num = 7 ;     //Thala for a reason
 console.log(num) ;

 //Task2:  Declare a variable using let  , assign it a string , and log the value to the console.
 let str = "Chai or Code";
 console.log(str);

 //Activity 2 - constant Declarartion

 //Task 3 : Declare a variable using const , assign it a boolean value , and log the value to constant
 const isDone = true ;
 console.log(isDone);

 //Activity 3 - Data types
  //Task 4 : create variable of different data type (number , string , object , array) and log each variable u
  //using the type of operator

  const num1 = 7;
  const cool = "Thala"
  const obj = {
      name : "Amar",
      Age :20,
      hobby : "coding"
   };
  
   const arr = ["2" ,"3" ,"4" ,"5"]

   console.log(typeof(num1));
   console.log(typeof(cool));
   console.log(typeof(obj));
   console.log(typeof(arr));

   //Activity 4 - Reassigning value

   //Task 5 : Declare a variable using let , assign it an initial value , reassign a new value ,
   //and log both value to the console.

   let digit = 5;
   console.log(digit);
    digit = 7;
    console.log(digit);

    //Activity 5 - UnderStanding constant
    //Task 6 : Do the same as task 5 with const

    const digit1 = 5;
    console.log(digit1);
     digit1 = 7;
     console.log(digit1); //this is a error , because we cant do it with const dataType.