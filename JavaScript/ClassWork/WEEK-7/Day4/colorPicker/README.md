Activity Title: Interactive Color Picker
Objective:
Students will create a simple webpage where users can change the background color of a box by clicking buttons or using input fields.

* Instructions:
1. Setup Your HTML File
Create an HTML file named index.html
Include the following elements:
* * In the body I should see a header with the content 'Interactive Color Picker'
* * A box (<div>) with the CLASS 'color-box' and ID 'colorBox'. this div will change colors when users interact with it.
below the colorbox div create another (<div>) with the class 'controls'. Nested in this div is -->
   1. Three buttons with the id Red, Green, and Blue.
   2. An input field(with a type, id and placeholder attribute ) where users can type any color (e.g., "yellow" or "#123456"). don't forget to add a label for your input field.
   3. A button with the id 'applyColorButton' and the content 'Apply'. This will apply the color from the input field when clicked.
2. Style Your Page
Add some basic CSS to make your page look nice:
Make the box 200px by 200px.
* Center the box on the page ('margin:20px auto;').
* Add a light gray background to the box initially.
* add a border 2px solid black
* center the controls class using text-align center. 
* give the button and input element 5px of margin
3. Add JavaScript to Make It Interactive
Write a JavaScript file named script.js and connect it to your HTML file.
* Step 1
    create 6 variables for your color box and controls:
        colorBox, redButton, greenButton, blueButton, colorInput, applyColorButton
Use JavaScript to make the buttons and input field interactive:
When the Red button is clicked, the box should turn red.
When the Green button is clicked, the box should turn green.
When the Blue button is clicked, the box should turn blue.
When the user types a color in the input field and clicks the Apply button, the box should change to that color.HINT we will need to create another variable inside our function to store the color the user types
4. Test Your Work
Open your index.html file in a browser and test all the features.
Ensure the colors change correctly when you interact with the buttons or input field.
Hints and Tips:
Use getElementById or querySelector to select the HTML elements in your JavaScript.
Use addEventListener to listen for user actions like clicking buttons.
Use the .style.backgroundColor property to change the color of the box.
Challenges (Optional):
Add a Reset button that changes the box back to its original light gray color.
Add a hover effect for the buttons so they change slightly when the mouse is over them.
Add validation so that the user can’t enter an invalid color.