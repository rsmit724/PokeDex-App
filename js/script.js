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

for (let i = 0; i < pokemonList.length; i++) {
    document.write(`${pokemonList[i].name} <br> (height: ${pokemonList[i].height}) <br> (type: ${pokemonList[i].type})`);
    if (pokemonList[i].height > 10) {
        document.write('<p>' + "This is a large Pokemon!" + "</p>");
    }else if (pokemonList[i].height < 10 && pokemonList[i].height > 5){
        document.write('<p>' + "This is an average Pokemon!" + "</p>");
    }else {
        document.write('<p>' + "This is a small Pokemon!" + "</p>");
    }
}    
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