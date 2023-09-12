let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon
        ) {
            return pokemonList.push(pokemon);
        }  else {
            console.log('not a valid pokemon');
        }
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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
    

    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
      }

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