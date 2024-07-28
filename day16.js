//Day 16 : Recursion
//1.Basic Recursion

//a. write a recursive function to calculate the factorial of a number.

function factorial(n){
    while(n>=0){
    if(n==0 || n==1) return 1;

    return (n)*factorial(n-1);
    }
}
let result = factorial(5);
//console.log(result);


//b. write a recursive function to calculate the nth fubonacci series.
function fibonacci(n){
if(n<=1) return n;
    else  {
        return fibonacci(n-1) + fibonacci(n-2) ;
    }

}
for(let i =0; i<5 ; i++){
   // console.log(fibonacci(i));
}

//2. recursion with array
//a. write a recursion function to find the sum of all element in an array.

function findSum(arr){
   if(arr.length=== 0) return 0;

   else{
    return arr[0] + findSum(arr.slice(1));
   }
}

let arr = [1,2,3,4,5];
//console.log(findSum(arr));

//b. write a recursion function to find the maximum element in an array.
function maxArray(arr){
    if(arr.length===0) return 0;

    else{

        const restMax = maxArray(arr.slice(1));
        return arr[0]>restMax ? arr[0] : restMax ;
    }
}
let array = [2,9,4,10,8]
//console.log(maxArray(array));

//3.string manupulation with recursion
//a.write a recursive function to reverse a string.
function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it as is
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: take the last character and append the reverse of the rest of the string
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

// Example usage:
const originalString = "hello";
//console.log(reverseString(originalString)); // Output: "olleh"

//b. 
function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// Example usage:
const string1 = "racecar";
const string2 = "hello";
console.log(isPalindrome(string1)); // Output: true
console.log(isPalindrome(string2)); // Output: false

//4.recursive search
//a. write a recursive function to perform a binary search on a sorted array.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index exceeds the right, the target is not in the array
    if (left > right) {
        return -1;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is smaller than the middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is larger than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
console.log(binarySearch(sortedArray, target)); // Output: 4


//b. write a recursive to count the occurence of a target element in an array.

function countOccurrences(arr, target, index = 0) {
    // Base case: if the index reaches the length of the array, return 0
    if (index === arr.length) {
        return 0;
    }

    // Check if the current element is equal to the target
    const match = arr[index] === target ? 1 : 0;

    // Recursive case: add the match (0 or 1) to the count from the rest of the array
    return match + countOccurrences(arr, target, index + 1);
}

// Example usage:
const array1 = [1, 2, 3, 4, 2, 5, 2, 6];
const targets = 2;
console.log(countOccurrences(array1, targets)); // Output: 3



