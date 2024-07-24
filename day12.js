// 12. Error Handling

//1. Basic error handling with try catch.
//a.Write a function that intentionally throw an error and use a try catch block to handle the error.
function throwError (){
    try{
        throw new Error("this is the intentional error");
    }
    catch(error){
       // console.error("caught an error :" ,error.message)
    }
}

throwError();

//b.create a function that divides two number and throw an error if the denominator is zero.use try catch block to handle new error.
function divideNumber(a,b){
    let c = a/b;

    if(b===0){
        try{
            throw new Error("this is not possible.")
        }
        catch(error){
           // console.error("caught an error: ",error.message)
        }
    }

   // return c;
   // console.log(c);
}

divideNumber(4,2);
divideNumber(2,0);

//2.finally block
//a. write a script that include  a try catch and a finally block.log message in the try catch and finally block to observe the execution flow.
function demoTryCatchFinally(){
   // console.log("starting the script")

    try{
        //console.log("inside the try block")

        let result = 10/0;
        //console.log('result :' + result);
    }
   
   catch(error){
   // console.log('inside the catch block');
   // console.log('Error caught' + error.message);
   } 
   finally{
   // console.log('Inside the finally block');
   }

  // console.log('End of the script');
} 

demoTryCatchFinally();

//3. custom error
//a.create a custom error class that extends the built in class error. 
//Throw the instance of this custom error in a function and handle it using a try catch block

class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

//function that throw an instanceof the custom error

function throwErrorFunction(){
    try{
        throw new CustomError('this is a custom Error!');
    }
    catch(error){
        //handle the custom error
        if(error instanceof CustomError){
           // console.error('caught a custom error: ',error.message);
        }
        else{
            //handle other type of error if needed
           // console.error('caught an unexpected error:',error)
        }
    }
}

throwErrorFunction();

//b.write a function that validates user input (checking if a string is not empty) and throw a custom error if a validation fails.
//handle the custom error using a try error using a try catch block.

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = 'ValidationError';
    }
}

function validateInput(input){
 try{
    if(!input || input.trim()===""){
        throw new Error ("Input cannot be empty");
    }
   // console.log("input is valid:" , input)
    return input ;
 }
 catch(error){
    if(error instanceof ValidationError){
   //console.error("Error caught:",error.message);
    }else{
   // console.error("unexpected error:" , error);
    }
    return null;
 }
}

validateInput("");
validateInput("  ");
validateInput("Ram");

//4. Error handling in promises
///a. create a promises that randomly resolve or reject . use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise(){
    return new Promise((resolve , reject)=>{
        const isSuccess = Math.random()>0.5 ;

        setTimeout(()=>{
         if(isSuccess){
            resolve("promise is resolved successfully");
         }
         else{
            reject(new Error("promise rejected."));
         }
        },1000)
    })
}

//Call the randomPromise function and handle the result.
randomPromise()
.then((message)=>{
   // console.log(message);
})
.catch((error)=>{
    //console.error("Caught an error:",error.message);
})

//5 .graceful error handling in fetch
//a. use the fetch API to request data from an invalid URL within an async function and hadle the error using try catch . 

async function fetchData(){
    const url =  "https://invalid.url.example"; // Invalid URL

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`HTTP ERROR status: ${response.status}`);
        }
        const data = await response.json() ;
        console.log('fetching dtat', data);
    }
    catch(error){
        console.error("caught an error:", error.message);
    }
    
}

fetchData();