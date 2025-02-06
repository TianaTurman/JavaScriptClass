//1️⃣ Call a Function with Different Objects
// //Question: What will be the output of the two call() statements?
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function introduce() {
    console.log(`Hi, my name is ${this.name}`);
}

introduce.call(person1);  // What will this output?
introduce.call(person2);  // What will this output?




//2️⃣ Passing Arguments Using call()
//Question: What does call() do in this case, and what will be logged?

const user1 = { name: "Charlie" };

function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

greet.call(user1, "Hello", "!");  




//3️⃣ Using apply() with an Array of Arguments
//Question: What is the difference between call() and apply() here?
const user2 = { name: "David" };

function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

greet.apply(user2, ["Hi", "."]);





//4️⃣ Using apply() with Math.max()
//Question: What will be logged, and why is apply() useful here?

const numbers = [3, 8, 1, 15, 6];

const max = Math.max.apply(null, numbers);
console.log(max);




//5️⃣ Borrowing a Method from Another Object
//Question: What will be logged, and why does call() change the value of this?

const user3 = { name: "Emma" };
const user4 = { name: "Daniel" };

const userInfo = {
    name: "Unknown",
    getName: function() {
        return this.name;
    }
};

console.log(userInfo.getName.call(user3));  
console.log(userInfo.getName.call(user4));  





//6️⃣ Using call() in a Constructor Function
//Question: What will student1 contain, and how does call() help here?

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

const student1 = new Student("Sophia", 21, "A");
console.log(student1);





//7️⃣ Using apply() to Merge Arrays
//Question: What will be the final value of arr1, and why does apply() work here?

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1);




//8️⃣ Setting this in a Delayed Function
//Question: Will this work correctly? If not, how can you fix it?

const user = {
    name: "Mia",
    sayHello: function() {
        setTimeout(function() {
            console.log(`Hello, my name is ${this.name}`);
        }.call(this), 1000);
    }
};

user.sayHello();




//9️⃣ Converting arguments into an Array Using apply()
//Question: What does this function do, and why do we use apply()?

function sumAll() {
    const numbers = Array.prototype.slice.apply(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(2, 4, 6, 8));




//🔟 Using call() with Object Methods
//Question: What will be logged, and why does call() work

const person = {
    name: "Jack",
    introduce: function(city) {
        console.log(`Hi, I'm ${this.name} from ${city}.`);
    }
};

const anotherPerson = { name: "Olivia" };
person.introduce.call(anotherPerson, "New York");
