1. Check for Case-Insensitive Match
Write a function that checks if two strings are equal, ignoring case. Use toLowerCase() to achieve this.

* console.log(isEqualIgnoreCase("Hello", "hello")); // true
* console.log(isEqualIgnoreCase("JavaScript", "JAVAscript")); // true
* console.log(isEqualIgnoreCase("Code", "Coding")); // false

2. Capitalize the First Letter
Write a function that takes a string and returns it with the first letter capitalized. Use charAt() and toLowerCase() for the rest of the string.

* console.log(capitalizeFirstLetter("hello")); // "Hello"
* console.log(capitalizeFirstLetter("javaScript")); // "JavaScript"
* console.log(capitalizeFirstLetter("world")); // "World"

3. Find Substring
Write a function that checks if a substring exists within a string using includes(). The function should return true or false.

* console.log(containsSubstring("I love programming", "love")); // true
* console.log(containsSubstring("JavaScript is fun", "python")); // false
* console.log(containsSubstring("Frontend development", "end")); // true



4. Case-Insensitive Substring Search
Enhance the previous exercise to make the search case-insensitive by using toLowerCase() with includes().

* console.log(containsSubstringIgnoreCase("JavaScript is awesome", "JAVASCRIPT")); // true
* console.log(containsSubstringIgnoreCase("Learning is fun", "FUN")); // true
* console.log(containsSubstringIgnoreCase("Coding is great", "python")); // false


5. Extract Initials
Write a function that takes a full name (e.g., "John Doe") and returns the initials (e.g., "J.D."). Use charAt() and toUpperCase() to extract the first letter of each name.

* console.log(getInitials("John Doe")); // "J.D."
* console.log(getInitials("jane smith")); // "J.S."
* console.log(getInitials("Ada Lovelace")); // "A.L."