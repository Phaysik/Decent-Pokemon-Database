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
    sessionStorage.setItem('title', urlPath[1]); // If a Pokemon was loaded from another page, then it will save it's name to the local Storage
  } else { // If the page was not by the user clicking on a Pokemon image from another page
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
  if ($('#datalist option').filter(function() {
    return this.value.toUpperCase() === val.toUpperCase();
  }).length) {
    visibility(0);
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
