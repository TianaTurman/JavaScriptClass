// Ensure these lists contain elements before using them
const strikeThroughList = document.querySelectorAll('ol li');
const eraseList = document.querySelectorAll('ul li');
const dinos = document.querySelectorAll('img');

// Add event listeners once, not inside another listener
strikeThroughList.forEach(element => {
    element.addEventListener('click', function() {
        element.style.textDecoration = 'line-through';
    });
});

eraseList.forEach(element => {
    element.addEventListener('click', function() {
        element.style.opacity = 0;
    });
});

dinos.forEach(element => {
    element.addEventListener('click', function() {
        element.style.width = '0px';
    });
});

// This button might have another function, so ensure its intent is correct
document.querySelector('#destroy-all').addEventListener('click', function() {
    
    strikeThroughList.forEach(element => {
        element.style.textDecoration = 'line-through';
    });

    eraseList.forEach(element => {
        element.style.opacity = 0;
    });

    dinos.forEach(element => {
        element.style.width = '0px';
    });
});
