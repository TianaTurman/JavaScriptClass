//1. Checking if a Property Exists
//Given the following object:
const user = {
  username: "coder123",
  email: "coder@example.com"
};
//Write JavaScript code to check if the object has a property called "password" and print true or false.
console.log('password' in user);
//2. Deleting a Property from an Object
//Given the object below:

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
};

//Write JavaScript code to remove the "year" property from the movie object and then print the updated object.

//3. Copying an Object Using Spread Operator
//Given the following object:

const original = { a: 1, b: 2, c: 3 };
//Create a new object copy that contains the same properties and values as original using the spread operator.

//4. Counting the Number of Properties in an Object
//Given the following object:
const animal = {
  type: "Dog",
  breed: "Labrador",
  age: 3,
  color: "Golden"
};
//Write JavaScript code to count how many properties the animal object has and print the count.

//5. Merging Two Objects Together
//You have two objects:

const person1 = { firstName: "Alice", age: 30 };
const person2 = { lastName: "Smith", city: "New York" };
//Write JavaScript code to merge person1 and person2 into a single object called fullPerson and print the result.