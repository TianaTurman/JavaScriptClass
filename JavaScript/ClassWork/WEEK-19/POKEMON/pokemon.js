// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error('could not fetch resource')
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));
// fetchData()
// async function fetchData() {
//     try {
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//         if (!response.ok) {
//             throw new Error("could not fetch resource");
//         }
//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const image = document.getElementById("pokemonSprite");


//         image.src = pokemonSprite;
//         image.style.display = "block";

        
//     }
//     catch (error) {
//         console.error(error);
//     }
// }


async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        // Get Pokémon sprite
        const pokemonSprite = data.sprites.front_default;
        const image = document.getElementById("pokemonSprite");
        image.src = pokemonSprite;
        image.style.display = "block";

        // Get Pokémon name
        const name = data.name;
        document.getElementById("pokemonInfo").innerText = `Name: ${name.charAt(0).toUpperCase() + name.slice(1)}`;

        // Get Pokémon abilities
        const abilities = data.abilities.map(ability => ability.ability.name).join(", ");
        document.getElementById("pokemonAbilities").innerText = `Abilities: ${abilities}`;

          // Show the card
          document.getElementById("pokemonCard").style.display = "flex";

    } catch (error) {
        console.error(error);
    }
}
