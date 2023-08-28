let pokemonList = [
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