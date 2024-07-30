// Day 18 : Algorithm
//1.sorting algorithm

//a.write a bubble sort algorithm to sort an array in asceding order.
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce the range of comparison by 1 after each pass
        n--;
    } while (swapped);

    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));

//b.write a selection sort to sort an array in ascending order.
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage
let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", selectionSort(array1));

//write insertion sort to sort an array in ascending order.

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let array2 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", insertionSort(array2));

//2.searching algorithm
//a.implement the linear search algoritm to find a target value in array.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target value
        }
    }
    return -1; // Return -1 if the target value is not found
}

// Example usage
let arrays = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
let result = linearSearch(arrays, target);

if (result !== -1) {
    console.log(`Target value ${target} found at index ${result}`);
} else {
    console.log(`Target value ${target} not found in the array`);
}

//implement a binary search to find a target value in an array.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target value
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Return -1 if the target value is not found
}

// Example usage
let array3 = [11, 12, 22, 25, 34, 64, 90];
let targets = 22;
let results = binarySearch(array3, targets);

if (results !== -1) {
    console.log(`Target value ${target} found at index ${results}`);
} else {
    console.log(`Target value ${target} not found in the array`);
}

//3.string algorithm
//a.write a function to count the occurence of each character in a string.

function countCharacterOccurrences(str) {
    // Create an empty object to store character counts
    const charCount = {};

    // Iterate through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, add the character to the object with a count of 1
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage
let string = "hello world";
let resultt = countCharacterOccurrences(string);
console.log(resultt);

//b.write a function to find the longest substring without repeating character in a string.
function longestSubstringWithoutRepeatingChars(s) {
    let start = 0; // Start index of the current window
    let maxLength = 0; // Length of the longest substring found
    let charIndexMap = new Map(); // Map to store the index of each character

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If the character is already in the map, move the start to the right of the previous index
        if (charIndexMap.has(char)) {
            start = Math.max(start, charIndexMap.get(char) + 1);
        }

        // Update the index of the current character
        charIndexMap.set(char, end);

        // Update the maximum length if necessary
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
let strings = "abcabcbb";
let result1 = longestSubstringWithoutRepeatingChars(strings);
console.log(`Length of the longest substring without repeating characters: ${result1}`);

//4.Array algorithm
//a.write a function to rotate an array by k position . log the rotated array
function rotateArray(arr, k) {
    let n = arr.length;
    // Handle cases where k is greater than the length of the array
    k = k % n;

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, n - 1);
    // Reverse the first k elements
    reverse(0, k - 1);
    // Reverse the remaining n-k elements
    reverse(k, n - 1);

    return arr;
}

// Example usage
let arrayy = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotatedArray = rotateArray(arrayy, k);
console.log("Rotated array:", rotatedArray);

//b.write a function to merge the two sorted array into one sorted array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Iterate through both arrays and merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
let arrayy1 = [1, 3, 5, 7];
let arrayy2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(arrayy1, arrayy2);
console.log("Merged array:", mergedArray);

//optional => To be done 
//a.write a function to solve the fibonacci sequence using dynamic programming.
//b.write a function to solve the knapsack problem using dynamic programming.

