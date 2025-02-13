// Step 1: Get references to the input field, button, and list
let input = document.getElementById("item-input");
let addButton = document.getElementById("add-btn");
let list = document.getElementById("item-list");

// Step 2: Add an event listener to the button
addButton.addEventListener("click", function () {
    
    // Step 3: Check if the input field is not empty
    if (input.value.trim() !== "") {

        // Step 4: Create a new <li> element
        let newItem = document.createElement("li");

        // Step 5: Set the text of the new list item
        newItem.textContent = input.value;

        // Step 6: Add the new item to the list
        list.appendChild(newItem);

        // Step 7: Clear the input field after adding an item
        input.value = "";
    }
});