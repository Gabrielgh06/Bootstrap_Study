async function searchPokemon() {
    const pokemonName = document.getElementById('Pokemon-name').value.toLowerCase();
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const pokemonDataDiv = document.getElementById('pokemon-data');

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }
        const data = await response.json();

        // Exibir dados básicos do Pokémon
        pokemonDataDiv.innerHTML = `
            <h2>${data.name} (#${data.id})</h2>
            <p>Tipo: ${data.types.map(tipo => tipo.type.name).join(', ')}</p>
            <p>Habilidades: ${data.abilities.map(abilitiesInfo => abilitiesInfo.ability.name).join(', ')}</p>
            <div class="pokemon-images">
                <div class="pokemon-image ">
                    <p>Gif:</p>
                    <img src="${data.sprites.other.showdown.front_default}" style="border: 2px solid black; border-radius: 10px;" alt="${data.name}">
                </div>
                <div class="pokemon-image">
                    <p>Versão Shiny:</p>
                    <img src="${data.sprites.other.showdown.front_shiny}" style="border: 2px solid black; border-radius: 10px" alt="${data.name} Shiny">
                </div>
            </div>
        `;

        // Exibir tipos do Pokémon bem como forças e fraquezas
        const types = data.types.map(tipo => tipo.type.name);
        let strengthsWeaknessesHTML = '';

        for (const type of types) {
            const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const typeData = await typeResponse.json();

            const forteContra = typeData.damage_relations.double_damage_to.map(forte => forte.name).join(', ');
            const fracoContra = typeData.damage_relations.double_damage_from.map(fraco => fraco.name).join(', ');

            // Exibir forças e fraquezas lado a lado
            strengthsWeaknessesHTML += `
                <h2> <span class="fw-bold">Tipo:</span> ${type.charAt(0).toUpperCase() + type.slice(1)} </h2>
                <div class="strength-weakness row border border-3 border-dark">
                    <div class="col-6">
                        <h3>Forças:</h3>
                        <p>${forteContra || 'Nenhuma'}</p>
                    </div>
                    <div class="col-6">
                        <h3>Fraquezas:</h3>
                        <p>${fracoContra || 'Nenhuma'}</p>
                    </div>
                </div>
            `;
        }

        // Adicionando ao HTML do pokemonDataDiv
        pokemonDataDiv.innerHTML += strengthsWeaknessesHTML;

    } catch (e) {
        pokemonDataDiv.innerHTML = `<p style="color: red;">${e.message}</p>`;
    }
}
