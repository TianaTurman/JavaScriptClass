document.getElementById('submit-button').addEventListener('click', function() {
    const input = document.getElementById('translator-input').value;
    const resultElement = document.getElementById('results');
    const selectedOption = document.querySelector('input[name="translation-section"]:checked').value;
   let result;

    switch(selectedOption){
        case 'encode': 
            result = encode(input);
            break;
        case 'translate':
            result = translate(input);
            break;
        case 'madlib': 
            result = madlib(input);
            break;
        case 'search': 
        const searchResults = search(input);
        resultElement.innerHTML = '';  // Clear previous results
        if(searchResults.length === 0){
            resultElement.innerText = 'No emojis found';
        }else{
            searchResults.forEach(emoji => {
                const p =document.createElement('p')
                p.innerText = emoji.symbol;
                resultElement.appendChild(p);
            });
        }
        return;
        case 'random':
        const randomIndex = Math.floor(Math.random() * 4);
        const options = ['encode', 'translate', 'madlib', 'search'];
        const randomOption = options[randomIndex];
        document.querySelector(`input[value="${randomOption}"]`).checked = true;
        document.getElementById('submit-button').click();
        return;
    }

resultElement.innerText = result;
});