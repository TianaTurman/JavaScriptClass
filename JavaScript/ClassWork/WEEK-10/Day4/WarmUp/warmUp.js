//1. Creating an Object
//Create a JavaScript object called student with the following properties:
//name: "Alex"
//age: 14
//grade: "8th"
//Then, log the object to the console.
let student = {
    name: "Alex",
    age: 14,
    grade: "8th"
};
console.log(student)


//2. Accessing Object Properties
//Given the following object:
let carModels= ['Toyota',   ]
const car = {
  brand: ["Toyota",'Mazda','Honda'],
  model: "Corolla",
  year: 2022

};
// Write JavaScript code to print:
// The brand of the car 
console.log(car.brand[1])
console.log(car.model)
// The model of the car





//3. Updating an Object Property
//You have the following object:

const book = {
  title: "The Great Adventure",
  author: "John Smith",
  yearPublished: 2001
};
//Change the yearPublished property to 2020 and print the updated object.
book.yearPublished = 2020;
console.log(book.yearPublished)



//4. Adding a New Property to an Object
//Given the object below, add a new property called isAvailable with the value true.
const laptop = {
  brand: "Dell",
  model: "XPS 15",
  price: 1200
};
//Then, print the updated object.
laptop.isAvailable = true;
console.log(laptop)



//5.  BONUS Looping Through an Object
//Use a for...in loop to print all the properties and values of the following object:

const person = {
  name: "Sarah",
  age: 25,
  city: "New York"
};

