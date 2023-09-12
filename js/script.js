let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        return pokemonList.push(pokemon)
    }

    function showDetails(pokemon) {
        console.log(pokemon.name)
    }

    function addListItem(pokemon) {
        let unorderedList = document.querySelector('.pokemon-list');
        let unorderedListItem = document.createElement('li');
        let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('pokemon-button');
        unorderedListItem.appendChild(button);
        unorderedList.appendChild(unorderedListItem);

        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        })
    };


    return {
        getAll : getAll,
        add : add,
        addListItem : addListItem,
    };

})();

let pokemon = {name: 'Charizard', height: 25, type: 'fire'};

pokemonRepository.getAll();
pokemonRepository.add(pokemon);

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

// pokemonRepository.getAll().forEach(function(listItem) {
//     let unorderedList = document.querySelector('.pokemon-list');
//     let unorderedListItem = document.createElement('li');
//     let button = document.createElement('button');
//         button.innerText = listItem.name;
//         button.classList.add('pokemon-button');
//     unorderedListItem.appendChild(button);
//     unorderedList.appendChild(unorderedListItem);
// });

// pokemonRepository.getAll().forEach(function(listItem) {
//     document.write(`${listItem.name} <br> (height: ${listItem.height}) <br> (type: ${listItem.type}) <br>`);
//         if (listItem.height > 10) {
//                 document.write('<p>' + "This is a large Pokemon!" + "</p>");
//             }else if (listItem.height < 10 && listItem.height > 5){
//                 document.write('<p>' + "This is an average Pokemon!" + "</p>");
//         }else {
//             document.write('<p>' + "This is a small Pokemon!" + "</p>");
//         }
// });

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(`${pokemonList[i].name} <br> (height: ${pokemonList[i].height}) <br> (type: ${pokemonList[i].type})`);
//     if (pokemonList[i].height > 10) {
//         document.write('<p>' + "This is a large Pokemon!" + "</p>");
//     }else if (pokemonList[i].height < 10 && pokemonList[i].height > 5){
//         document.write('<p>' + "This is an average Pokemon!" + "</p>");
//     }else {
//         document.write('<p>' + "This is a small Pokemon!" + "</p>");
//     }
// }