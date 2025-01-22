//1. String Method - toUpperCase()
//Write a function that takes a string as input and returns it in uppercase.
//The .toUpperCase() method converts all characters in a string to uppercase.

function toUpperCaseString(str) {
 
}

console.log(toUpperCaseString("hello")); // Output: "HELLO"
console.log(toUpperCaseString("JavaScript")); // Output: "JAVASCRIPT"


//2. Array Method - push()
//The .push() method adds an element to the end of the array and modifies the original array.
//Write a function that adds a new item to the end of an array.
const myArray = [1, 2, 3];
function addItemToArray(arr, item) {
 
}

addItemToArray(myArray, 4);
console.log(myArray); // Output: [1, 2, 3, 4]


//3. Array Method - map()
//The .map() method applies a callback function to each element in the array and returns a new array with the modified values.
//Write a function that takes an array of numbers and returns a new array with each number doubled.
function doubleNumbers(arr) {

}

console.log(doubleNumbers([1, 2, 3])); // Output: [2, 4, 6]
console.log(doubleNumbers([4, 5, 6])); // Output: [8, 10, 12]

//4. String Method - includes()
//Write a function that checks if a specific word is included in a given sentence.
//The .includes() method checks if a substring exists within a string and returns true or false.

function containsWord(sentence, word) {
  
}

console.log(containsWord("JavaScript is fun", "fun")); // Output: true
console.log(containsWord("I love coding", "Python")); // Output: false


//5. Array Method - filter()
//Write a function that filters out all numbers less than 5 from an array.
//The .filter() method returns a new array containing elements that satisfy the given condition (i.e., num >= 5).
function filterNumbers(arr) {
  
}

console.log(filterNumbers([1, 6, 3, 8, 4, 7])); // Output: [6, 8, 7]
console.log(filterNumbers([10, 2, 5, 1])); // Output: [10, 5]