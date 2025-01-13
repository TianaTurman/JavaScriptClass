function isEqualIgnoreCase(str1, str2) {
    // Your code here
  }






function capitalizeFirstLetter(str) {
 return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
capitalizeFirstLetter("Kaiden");



function containsSubstring(str, substring) {
   
  }




function containsSubstringIgnoreCase(str, substring) {
    return str.toLowerCase().includes(substring.toLowerCase());
  }




  
function getInitials(fullName) {
    const names = fullName.split(" "); // split the full name 
    let initials = "";

    for (const name of names ) {
      initials += name.charAt(0).toUpperCase() + ".";
    }
    return initials;
  }

  console.log(getInitials("John Doe")); // "J.D."