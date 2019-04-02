/* eslint-disable no-unused-vars */
const pokemon = [];
const pokemonList = [];
const desc = [];
const types = [];
const ids = [];
const descriptions = [];
let val = '';
const urlPath = window.location.href.split('?');
let datalist;

window.onload = function() {
  datalist = document.getElementById('datalist');

  $.getJSON('../JSON/national.json', function(data) {
    for (let i = 0; i < data['pokemon'].length; i++) {
      pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    }

    datalist.textContent = '';
    for (let i = 0; i < pokemonList.length; i++) {
      pokemon.push(pokemonList[i].name);
      const option = document.createElement('option');
      option.value = pokemon[i];
      datalist.appendChild(option);
      types.push(pokemonList[i].types);
      ids.push(pokemonList[i].nid);
    }
    $('.appendList').empty();

    if (urlPath[1]) { // if a ( ? ) was found in the split, use the second part after the ?
      if (!pokemon.includes(toTitleCase(urlPath[1].split('=')[1].replace('%20', ' ')))) { // Redirect the user to a page not found if the query is not in the Pokemon list
        window.location = 'set redirect location to page not found when made';
      } else {
        const name = toTitleCase(urlPath[1].split('=')[1]);
        $(document).attr('title', name);
        loadPokemon(toTitleCase(name.replace('%20', ' ')));
      }
    } else { // If the page was not by the user clicking on a Pokemon image from another page
      history.replaceState({index: 'index'}, '', 'Index.html?Search=Bulbasaur'); // Replace URL to make later state pushing possible
      loadPokemon('Bulbasaur');
    }
  });

  $.getJSON('../JSON/descriptions.json', function(data) {
    $.each(data, function(key, val) {
      descriptions.push(val);
    });
  });
};

function visibility(show) {
  if (show === undefined || show === 0 || $('#myInput').val() === '') {
    $('.appendList').empty();
  } else if (document.getElementsByClassName('appendList')[0].children.length === 0 && show !== undefined) {
    $('.appendList').append(datalist);
  }
}

function Search() {
  visibility(3);
  val = document.getElementById('myInput').value;
  if (val !== '') {
    const opts = document.getElementById('datalist').childNodes;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].value === toTitleCase(val)) {
        visibility(0);
        if (window.event.keyCode == '13') {
          if (window.location.href.indexOf(`index.html?Search=${toTitleCase(val)}`) <= -1) { // Prevent multiple states of the same value being pushed
            window.history.pushState({index: 'index'}, toTitleCase(val), `index.html?Search=${toTitleCase(val)}`);
            loadPokemon(toTitleCase(val));
            $('#myInput').val('');
          }
        }
        break;
      }
    }
  }
}

function loadPokemon(name) {
  $('.appendList').empty();
  $(document).attr('title', name);
}
