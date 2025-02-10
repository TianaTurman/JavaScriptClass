//1. Create a Prototype Method
// Create a constructor function Person with a name property. Then, add a method greet() to its prototype that logs:
// "Hello, my name is [name]!"





// 2. Add a Prototype Method to an Existing Constructor
// Create a Car constructor with brand and year properties. Then, add a prototype method getInfo() that returns:
// "This is a [brand] from [year]."




// 3. Modify a Built-in Prototype
// Extend JavaScript’s String prototype by adding a method reverse() that returns the string in reverse order.



console.log("hello".reverse()); // "olleh"
console.log("world".reverse()); // "dlrow"


// 4. Create a Prototype Inheritance Chain
// Create a Shape constructor with a type property. Then, create a Rectangle constructor that inherits from Shape. Add a method describe() to the Shape prototype.
// Set up inheritance and test it





// 5. Add a Method to the Array Prototype
// Extend the Array prototype to add a method first() that returns the first element of an array.


// Add prototype method here

console.log([1, 2, 3].first()); // 1
console.log(["a", "b", "c"].first()); // "a"



// 6. Check If an Object Has a Prototype Method
// Write a function hasPrototypeMethod(obj, methodName) that checks if a method exists on an object’s prototype (not directly on the object).


function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return "Hello!";
};

// Write the function here



const dog = new Animal("Dog");
console.log(hasPrototypeMethod(dog, "speak")); // true
console.log(hasPrototypeMethod(dog, "toString")); // false


// 7. Override a Prototype Method
// Modify the Array prototype so that toString() returns "Custom Array" instead of the default.


// Override prototype method here

console.log([1, 2, 3].toString()); // "Custom Array"


// 8. Prevent Prototype Modification
// Create an object User with a prototype method login(). Then, freeze the prototype so that no further methods can be added.


function User(username) {
    this.username = username;
}

// Add prototype method here

const user1 = new User("Alice");
Object.freeze(User.prototype);

// Try adding a new method after freezing (should not work)
User.prototype.logout = function() {
    console.log("Logging out...");
};

console.log(user1.login()); // "User logged in."
console.log(user1.logout); // undefined

// 9. Use the Prototype Chain
// Create a Vehicle constructor with a method move(). Then, create a Bike constructor that inherits from Vehicle and adds a method ringBell().

function Vehicle(type) {
    this.type = type;
}

// Add prototype method here



function Bike(brand) {
    Vehicle.call(this, "Bike");
    this.brand = brand;
}

// Set up inheritance

const myBike = new Bike("Giant");
console.log(myBike.move()); // "The Bike is moving."
console.log(myBike.ringBell()); // "Ring! Ring!"



// 10. Add a Prototype Getter Method
// Create a Book constructor with title and author. Add a getter method description to return:
"[title] by [author]"