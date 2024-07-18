// day 6 - Arrays

//1. Array creation and Access.

//A . Create an array of number from 1 to 5 and log to the console.

 const arr = [1,2,3,4,5] ;
 for (let i= 0;i<arr.length; i++){
    console.log(arr[i]);          //Accessing each element of array
 }

 console.log(arr);

 //b. Access the first and last element of arrray.

 const arr1 = [1,2,3,4,5]
 console.log(
    `first element : ${arr[0]}`
 );
 console.log(
    `last element : ${arr[arr.length-1]}`
 );

 //2 .Array method

 //a. use a push method to add a number at the end of the array and log to the console.

 const arr3 = [2,3,4,5,6]
  arr3.push(7);
 console.log(arr3);

 //b .use the pop method to remove last element from the array

 const arr4 = [4,5,6,7,8];
 arr4.pop(arr.length -1);
 console.log(arr4);

 //c. use the shift method to remove first element from an array

 const arr5 = [1,2,3,4,5];
 arr5.shift();
 console.log(arr5);

 //d. use a unshift method to add a new number to the beginning

 const arr6 =[2,3,4,5];
 arr6.unshift(1);
 console.log(arr6);

//3.Array method (intermediate)

//a.use the map method to create a new array where each array number is doubled
const arrr =[2,3,4,5];

let newArr = arrr.map((i)=>{
   return i*2 ;
}

)

console.log(newArr);

//b. use the filter method to create a new array with only Even number 
 const arrr1 = [1,2,3,4,5,6];
 let newArr1 = arrr1.filter((ele)=>{
    return ele%2==0 ;
 })

 console.log(newArr1);

 //c. use the reduce method to calculate the sum of all element of array
  
 const arrr2 = [1,2,3,4,5];
 let newArr2 = arrr2.reduce((accumulator , currentValue)=>{
       return accumulator + currentValue 
 },0)

 console.log(newArr2);

 //4.Array iteration
 //a. use the forEach method to iterate over the array and log to the console.
  const arrr3 = [1,2,3,4,5];
  arrr3.forEach((e)=>{
   
     console.log(e);
  })

  //5. Multidimensional Array
  //a. create a 2D array log the matrix to console.
  //b Access and log any specific value form this 2d array
  let arr2d = [[1,2,3],[4,5,6],[7,8,9]]
  console.log(arr2d);  //a

  console.log(
    arr2d[2][2]    //b
  );
  
 
