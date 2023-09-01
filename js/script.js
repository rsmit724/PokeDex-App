let pokemonRepository = (function() {
    let pokemonList = [
        {
            name: 'Bulbasaur', 
            height: 11, 
            type: ['grass', ' poison']
        },
        {
            name: 'Pikachu',
            height: 4, 
            type: 'electric'
        },
        {
            name: 'Charmander',
            height: 6, 
            type: 'fire'
        },
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        return pokemonList.push(pokemon)
    }

    return {
        getAll : getAll,
        add : add,
    };
})();

let pokemon = {name: 'Charizard', height: 25, type: 'fire'};

    
pokemonList.forEach(function(listItem) {
    document.write(`${listItem.name} <br> (height: ${listItem.height}) <br> (type: ${listItem.type}) <br>`);
        if (listItem.height > 10) {
                document.write('<p>' + "This is a large Pokemon!" + "</p>");
            }else if (listItem.height < 10 && listItem.height > 5){
                document.write('<p>' + "This is an average Pokemon!" + "</p>");
        }else {
            document.write('<p>' + "This is a small Pokemon!" + "</p>");
        }
});
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