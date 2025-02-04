// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


function createPhonebook(names,numbers){
let phonebook = {};
for(let i = 0; i < names.length; i++){
phonebook[names[i]] = numbers[i];
}
return phonebook;
}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']))





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};