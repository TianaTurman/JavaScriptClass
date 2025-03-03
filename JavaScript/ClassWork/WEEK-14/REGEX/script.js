// 1. Find if a String Contains "JavaScript" (Case-Insensitive)
//  Write a function that returns true if the text contains "JavaScript", ignoring case.

// function findWordsStartingWithJ(text) {
//    let regex = /javaScript/i;
//    return regex.test(text).map(Number)
// }

// console.log(findWordsStartingWithJ("JavaScript is Just great")); 


// 
// 2. Extract All Numbers from a String// 
 function extractNumbers(numbers) {
  let regex = /\d+/g;  // Matches all numbers
  return numbers.match(regex).map(Number);
}

console.log(extractNumbers("Order 50 apples, 30 bananas")); 
// Output: [50, 30]




// // 3. Validate a Phone Number
// //  A valid phone number follows (123) 456-7890 or 123-456-7890. Write a regex to check if a given phone number is valid.
// function isValidPhoneNumber(phone) {
//     let regex = /^\(?\d{3}\)?[- ]\d{3}[- ]\d{4}$/;
//     return regex.test(phone);


//    }
   
//    console.log(isValidPhoneNumber("(123) 456-7890")); // true
//    console.log(isValidPhoneNumber("123-456-7890"));   // true
//    console.log(isValidPhoneNumber("1234567890"));     // false
//    console.log(isValidPhoneNumber("12-3456-7890"));   // false




// // 4. Replace All Spaces with Dashes
// //  Convert "Hello World" into "Hello-World".

// function startsWithHello(text) {
//   if(/^Hello world/.test(text)){
//     return text.replace(/ /g, "-");
//   }else {
//     return "Text does not start with 'Hello'";
//   }
// }

// console.log(startsWithHello("Hello world girl how are you doing")); // true
// console.log(startsWithHello("world Hello")); // false


// // 5. Check If a String Starts with "The"
// // Return true if the string starts with "The", ignoring case.

// function startsWithThe(text) {
//     let regex = /^the/i;
//     return regex.test(text);
// }

// console.log(startsWithThe("The quick brown fox")); // true
// console.log(startsWithThe("the lazy dog"));       // true
// console.log(startsWithThe("A story about The king")); // false
// console.log(startsWithThe("They are coming"));    // false
