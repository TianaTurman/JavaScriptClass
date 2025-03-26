
 Step 1: Add an Event Listener to the Button
 First, we need to make sure our button actually does something when clicked.

 👉 We pass in a function called fetchUsernames as the 2nd parameter of our addEventListener
 it should look something like this:
document.getElementById("fetch-button").addEventListener("click", fetchUsernames);
✅ What does this do?

- It selects the button with id="fetch-button".

- It listens for a "click" event.

- When clicked, it runs the fetchUsernames function.

Step 2: Create the fetchUsernames Function
Now, let's define what happens when the button is clicked.

👉 define a function named fetchUsernames. inside the function let's console log to make sure it's running: console.log("Fetching usernames...")

✅ What does this do?

- It creates a function called fetchUsernames.

- Inside, we log "Fetching usernames..." to the console, so we know it's running.

Step 3: Make an API Request with fetch()
Now, we need to get data from the API.

👉 Write this inside fetchUsernames():

    fetch("https://jsonplaceholder.typicode.com/users") 
✅ What does this do?

- It sends a request to "https://jsonplaceholder.typicode.com/users", a free test API.

- The API responds with user data in JSON format.

Step 4: Handle the API Response
We need to process the response to make sure everything works correctly.

👉 Write this right after fetch() inside fetchUsernames():

    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
✅ What does this do?

- .then(response => {...}) runs when the API responds.

- It checks if the response is OK (response.ok). If not, it throws an error.

- If everything is fine, we convert the response into JSON format so we can use it.

Step 5: Use the API Data
Now that we have the data, let's display it on the webpage.

👉 Write this after the .then(response => {...}) block:

    .then(data => {
        console.log("Data received:", data); // Debugging log
✅ What does this do?

- It logs the received data to the console, so we can see what it looks like.

Step 6: Select the <ul> List in HTML
Now, we need to select the <ul> where we’ll display usernames.

👉 Add this next:
        const list = document.getElementById("user-list");
        list.innerHTML = ""; // Clear previous data
✅ What does this do?

- document.getElementById("user-list") selects the <ul> where we'll put usernames.

- list.innerHTML = "" clears old data before adding new ones.

Step 7: Loop Through the Data and Display Usernames
Now, we go through each user and add their username to the list.

👉 Add this inside the .then(data => {...}) block:

        data.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.username; // Display usernames
            list.appendChild(listItem);
        });
    })
✅ What does this do?

- data.forEach(user => {...}) loops through each user in the response.

- document.createElement("li") creates a new list item for each username.

- listItem.textContent = user.username; sets the username as text.

- list.appendChild(listItem); adds it to the <ul> list.

Step 8: Handle Errors
Finally, we catch any errors that might happen.

👉 Add this at the end:

    .catch(error => console.error("Error fetching data:", error));

✅ What does this do?

- If something goes wrong, it logs an error to the console instead of breaking the code.

Final Code (Everything Together)

document.getElementById("fetch-button").addEventListener("click", fetchUsernames);

function fetchUsernames() {
    console.log("Fetching usernames..."); // Debugging log

    fetch("https://jsonplaceholder.typicode.com/users") 
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); // Debugging log

        const list = document.getElementById("user-list");
        list.innerHTML = ""; // Clear previous data
        data.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.username; // Display usernames
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error fetching data:", error));
}
What Happens When You Click the Button?
✅ The button calls fetchUsernames().
✅ It fetches data from the API.
✅ The data is converted to JSON.
✅ Usernames are added to the list on the page.
✅ If something fails, an error is shown in the console.

Next Steps
🔹 Run the code in your browser.
🔹 Open Developer Tools → Console (Right Click → Inspect → Console) and check for logs.
🔹 If you see usernames appear, it’s working! 🎉 🚀
