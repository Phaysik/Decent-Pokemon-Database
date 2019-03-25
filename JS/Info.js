/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];
let val = '';
const urlPath = window.location.href.split('?');
const obj = {}; // an object to store properties and values in
let eq;

const datalist = document.getElementById('datalist');

for (let i = 0; i < pokemonList.length; i++) {
  pokemon.push(pokemonList[i].name);
  types.push(pokemonList[i].types);
  ids.push(pokemonList[i].nid);
}

window.onload = function() {
  if (urlPath[1]) { // if a ( ? ) was found in the split, use the second part after the ?
    $(document).attr('title', urlPath[1]);
    loadPokemon(urlPath[1]);
  } else { // If the page was not by the user clicking on a Pokemon image from another page
    window.location.replace('index.html?Bulbasaur'); // Replace URL to make later state pushing possible
    loadPokemon('Bulbasaur');
  }
};

function visibility(show) {
  if (show !== undefined && show !== 3) {
    $('.appendList').empty();
  } else {
    if (document.getElementsByClassName('appendList')[0].children.length === 0 && show !== undefined) {
      $('.appendList').append(datalist);
    } else if (show === undefined) {
      $('.appendList').empty();
    }
  }
}

function Search() {
  visibility(3);
  val = document.getElementById('myInput').value;
  const opts = document.getElementById('datalist').childNodes;
  for (let i = 0; i < opts.length; i++) {
    if (opts[i].value === toTitleCase(val)) {
      visibility(0);
      if (window.event.keyCode == '13') {
        if (window.location.href.indexOf(`index.html?${toTitleCase(val)}`) <= -1) { // Prevent multiple states of the same value being pushed
          window.history.pushState({ index: 'index' }, toTitleCase(val), `index.html?${toTitleCase(val)}`);
        }
        loadPokemon(toTitleCase(val));
      }
      break;
    }
  }
}

function loadDataList() {
  datalist.textContent = '';
  for (let i = 0; i < pokemon.length; i++) {
    const option = document.createElement('option');
    option.value = pokemon[i];
    datalist.appendChild(option);
  }
}

function loadPokemon(name) {
  loadDataList();
  $(document).attr('title', name);
}
