//IIFE for generating and displaying pokemonList
let pokemonRepository = (function() {
    //empty array for pokemonList
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //function to return retrieved data to the pokemonList array
    function getAll() {
        return pokemonList;
    }

    //add pokemon to the pokemonList only if the item is an object and includes a name
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

    //add pokemon to the UL in the index body, with each list item being displayed as a button
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
        //calls the showDetails function when a button in the UL is clicked
        })
    };

    //retrieve data from the apiURL and return in json format
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            //each pokemon will be an object that includes the name and link to more details about the pokemon
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
    
    //load specific details (img, height, and types) from the detailsUrl of each pokemon added to the list
    function loadDetails(item) {
      let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        //modify this later on to include pokemon types in the modal
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        //close the modal by clicking outside of it
        });
      }

      //open and close modal using keyboard
    return {
        getAll : getAll,
        add : add,
        addListItem : addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };
})();
//end of pokemonRepository IIFE

//calling the functions in the pokemonRepository IIFE 
pokemonRepository.loadList().then(function() {   
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

pokemonRepository.getAll();
