async function searchPokemon(){
    const pokemonName = document.getElementById('search').value.toLowerCase();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const pokemomDataDiv = document.getElementById('pokemon-data');

    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new Error('Pokemon não encontrado');
        }
        const data = await response.json();
        //Escrever os dados do Pokemon
        pokemonDataDiv.innerHTML = `
            <h2>${data.name} (# ${data.id})</h2>
            <p>Habilidades: ${data.abilities.map(abilitiesInfo =>  abilitiesInfo.ability.name).join(', ')}</p>

        `
    }catch(e){
        pokemomDataDiv.innerHTML = `<p sytle="color: red;">${e.message}</p>`;
    }
}