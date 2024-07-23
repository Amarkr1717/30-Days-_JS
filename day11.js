// 11. promises and Async/Await

//1. understanding promises
//a. create a promises that resolve with a message after a two second timeout .
 let promise = new Promise ((resolve)=>{
   setTimeout(()=>{
    resolve("message is resolved after two second.")
   },2000)
 });

 promise.then((e) =>{
    console.log(e);
 })

 //b. create a promise that rejects with an error message after a two second timeoutand handle the error using .catch()
 const promises = new Promise ((_ , reject)=>{
    setTimeout(()=>{
        reject(new Error("error is rejected after 2 sec"))
    },2000)
 });

 promises.catch((error) =>{
    console.log(error.message);
 })

 //2.chaining promises
 //a.create a sequence of promises that simulate fetching data from a server .chain the promise to log the message in a specific order.
 function fetchData(message , delay){
   
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(message)
        },delay)
    })
 }

 fetchData('fetching user data' , 1000)
 .then((message)=>{
    console.log(message);
    return fetchData('fetching post' , 2000)
 })
 .then ((message)=>{
    console.log(message);
    return fetchData('showing comments',3000);
 })
 .then((message)=>{
    console.log(message);
 })
 .catch((error)=>{
    console.error('An error occured:', error.message);
 })

 //3. using Async/Await
 //a. write an async function that waits for a promise to resolve and then resolve to the log value.
 function delayData(message , delay){
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
            reject(new Error(message))
        },delay)
    })
 }

 async function logvalue(){
    try {
        const message = await delayData('RESOLVED After waiting' , 3000);
        console.log(message);
    }
    catch(error){
        console.error('error occured:',error.message);
    }
 }

 logvalue();

 //b.write a async function that handles a rejected promise using try catch and log the error message.
   
 // Simulate a promise that rejects after a delay
function delayedRejection(message, delay) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(message));
        }, delay);
    });
}

async function handleRejection() {
    try {
        const result = await delayedRejection("Promise was rejected after waiting", 2000);
        console.log(result); // This line will not be executed because the promise is rejected
    } catch (error) {
        console.error("An error occurred:", error.message); // Log the error message
    }
}

// Usage example
handleRejection();

//4. Fetching Data from API.
//a. use the fetch api to get data from a public API and log the response data to the console using promises.

let url = 'https://jsonplaceholder.typicode.com/posts'

//fetch data from the url
fetch(url)
.then (response=>{
    if(!response.ok){
        throw new Error('network response is not ok' + response.statusText)
    }

    return response.json();
})
.then (data =>{
    console.log(data);
})
.catch(error =>{
    console.log('there is a problem with your fetch operation', error);
})

//b. use the fetch api to to get data from public api and log the response data to the console using async/await
// Example URL for a public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data using async/await
async function fetchData() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the JSON data from the response
    const data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Log any errors to the console
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Call the fetchData function
fetchData();

//5. concurrent promises
//a. use promise.all to wait for multiple promises to resolve and log all their values.
const promise1 = Promise.resolve(3);
const promise2 = 42 ;
const promise3 = new Promise((resolve , reject) => {
    setTimeout(resolve ,100, 'foo');
});

Promise.all([promise1 , promise2, promise3]).then((values)=>{
    console.log(values);
})

//b.use promise.race to log the values of the first promise that resolve among multipple promises.
const promises1 = new Promise ((resolve , reject) =>{
    setTimeout(resolve, 500, 'one');
})

const promises2 = new Promise ((resolve ,reject)=>{
    setTimeout(resolve ,200 ,'two');
})

Promise.race([promises1 , promises2]).then ((value)=>{
    console.log(value);
})