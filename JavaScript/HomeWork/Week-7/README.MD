Lesson Plan: Understanding and Practicing JavaScript Operators and Methods

Use comparison operators (<, >, ===, !==).

Use logical operators (&&, ||).

Chain Boolean expressions.

Use the typeof operator.

Use the toString method.

Use the parseInt and Number functions.

1. Comparison Operators (<, >, ===, !==):

Explanation:

<: Checks if the left value is less than the right value.

Example: 5 < 10 evaluates to true.

>: Checks if the left value is greater than the right value.

Example: 10 > 5 evaluates to true.

===: Checks if two values are strictly equal (same value and type).

Example: 5 === 5 evaluates to true, but 5 === '5' evaluates to false.

!==: Checks if two values are not strictly equal.

Example: 5 !== '5' evaluates to true.
CREATE A script.js file in the week-7 folder and place your answers there.
* * Exercise:

Write a function to check if a number is greater than 10.

Write a function to compare if a given string is strictly equal to 'hello'.

Write a function to verify that a number is not strictly equal to '5'.

2. Logical Operators (&&, ||):

Explanation:

&& (AND): Returns true only if all conditions are true.

Example: 5 > 3 && 10 > 5 evaluates to true.

|| (OR): Returns true if at least one condition is true.

Example: 5 > 10 || 10 > 5 evaluates to true.

Exercise:

Write a function to check if the number 8 is both greater than 5 and less than 15.

Write a function to check if the string 'apple' is equal to 'orange' or 'apple'.

Write a function thats Combines && and || to create a condition where at least one of two conditions is true, and a third condition is also true.

3. Chaining Booleans:

Explanation:

You can chain multiple Boolean expressions using && and ||.

Example: (5 > 3 && 10 > 5) || 15 < 20 evaluates to true because the first part is true.

Exercise:

Write a chained Boolean expression that checks if:

A number is greater than 5.

The number is less than 20.

Or, it is equal to 25.

Test your expression with different numbers (e.g., 10, 25, 30).

4. typeof Operator:

Explanation:

typeof: Checks the data type of a value.

Example: typeof 5 returns 'number'.

Example: typeof 'hello' returns 'string'.

Exercise:

Write code to check the type of:

A number (e.g., 42).

A string (e.g., 'JavaScript').

A Boolean value (e.g., true).

Test typeof with different types of data (e.g., arrays, objects, functions).

5. toString Method:

Explanation:

toString: Converts a value into a string.

Example: 123..toString() returns '123'.

Example: (true).toString() returns 'true'.

Exercise:

Convert the number 100 to a string and log it.

Convert the Boolean value false to a string and log it.

Write a program that asks the user for a number and converts it to a string using toString.

6. parseInt and Number Functions:

Explanation:

parseInt: Converts a string to an integer.

Example: parseInt('42') returns 42.

It stops at the first non-numeric character: parseInt('42px') returns 42.

Number: Converts a string to a number.

Example: Number('42') returns 42.

If the string is not numeric, it returns NaN.

Exercise:

Convert the string '123' to a number using both parseInt and Number.

Use parseInt to extract the number from the string '50px'.

Test Number with a string that cannot be converted (e.g., 'hello') and observe the result.

Bonus Challenge:

Create a small program that asks the user for their age:

Use prompt to get the input as a string.

Convert the input into a number using Number or parseInt.

Check if the input is a valid number (not NaN) using typeof.

If valid, check if the age is greater than 18 and log a message based on the result.

