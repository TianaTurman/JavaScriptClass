document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let usernameRegex = /^[a-zA-Z0-9]{5,12}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

    document.getElementById("usernameError").textContent = usernameRegex.test(username) ? "" : "Invalid username!";
    document.getElementById("passwordError").textContent = passwordRegex.test(password) ? "" : "Invalid password!";
    document.getElementById("emailError").textContent = emailRegex.test(email) ? "" : "Invalid email!";
    document.getElementById("phoneError").textContent = phoneRegex.test(phone) ? "" : "Invalid phone number!";

    if (usernameRegex.test(username) && passwordRegex.test(password) && emailRegex.test(email) && phoneRegex.test(phone)) {
        alert("Registration Successful!");
    }
});


//1.Handling Form Submission & Preventing Default Behavior


// 2. Preventing Form Submission




// 3.Accessing Form Elements



//4.Defining Validation Rules with Regular Expressions



//5.Displaying Error Messages




//6. Successful Form Submission



