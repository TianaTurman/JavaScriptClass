//1. Toggle Dark Mode
//Create a button that toggles a "dark mode" class on the body when clicked.
//💡 Hint: Use .toggleClass()



// 2. Append List Items with Animation
// Create an input field and a button that when clicked adds a new item to a list with a fade-in effect.

// 💡 Hint: Use .append() and .fadeIn(). You will need to create a variable to hold the user inputs value


// 3. Show a Hidden Tooltip on Hover 
// When hovering over a button, display a tooltip that fades in and disappears when the mouse leaves.
// 💡 Hint: Use .fadeIn(), .fadeOut(), and .hover(). You will have two functions nested in your jquery function one to fade in and one to fade out.



// 4. Filter a List Dynamically
// Create a search bar that filters a list based on user input.

// 💡 Hint: Use .each(), .text(), and .hide()/show()
$(function(){
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $("#names li").each(function() {
          $(this).text().toLowerCase().includes(value) ? $(this).show() : $(this).hide();
        });
      });
})