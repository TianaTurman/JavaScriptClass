1. Fix this For Loop
* * Hint: Why does the value of i cause an error here?

for (let i = 0; i < 5; i++);
{
  console.log("The value of i is: " + i);
}

2. Fix this For-Of Loop
* * Hint: What's missing before fruit?

const fruits = ["apple", "banana", "cherry"];
for (fruit of fruits) {
  console.log("Fruit: " + fruit);
}


3. Logical Error in Nested Loop
* * Hint: Check the loop conditions and the if statement.
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      console.log("Match found: " + i);
    }
  }
}
// Expected: Logs when i and j are equal.
// Output: Doesn't behave as expected.


