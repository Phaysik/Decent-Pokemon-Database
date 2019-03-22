/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];
let val = '';
let urlPath = window.location.href.split('?');
const obj = {}; // an object to store properties and values in
let eq;

const datalist = document.getElementById('datalist');

for (let i = 0; i < pokemonList.length; i++) {
  pokemon.push(pokemonList[i].name);
  types.push(pokemonList[i].types);
  ids.push(pokemonList[i].nid);
}

window.onload = function() {
  const title = localStorage.getItem('title'); // On reload or pageload, get the name of a Pokemon if it was loaded from another page or default to '' respectively
  if (title !== '') {
    loadPokemon(title);
  } else {
    loadPokemon();
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
  if (urlPath[1]) { // if a ( ? ) was found in the split, use the second part after the ?
    urlPath = unescape(urlPath[1]).split('&'); // split urlPath into array of strings containing url variables=values
    for (let i = 0; i < urlPath.length; i++) {
      eq = urlPath[i].split('='); // get values from both sides of ( = ) sign
      obj[eq[0]] = eq[1]; // insert properties and values into object
    }
    $(document).attr('title', Object.values(obj));
    window.history.replaceState({index: 'index'}, Object.values(obj), 'index.html');
  } else if (name !== 'Bulbasaur') {
    $(document).attr('title', name);
  } else {
    $(document).attr('title', 'Bulbasaur');
  }
}

window.onbeforeunload = function() { // Prevent use of Bulbasaur defaulting on reload
  localStorage.setItem('title', Object.values(obj)); // If a Pokemon was loaded from another page, then it will save it's name to the local Storage
};
