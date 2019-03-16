/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];
let value = 0;
let val = '';

const datalist = document.getElementById('datalist');

for (let i = 0; i < pokemonList.length; i++) {
  pokemon.push(pokemonList[i].name);
  types.push(pokemonList[i].types);
  ids.push(pokemonList[i].nid);
}

function visibility(show) {
  if (show !== undefined && show !== 3) {
    $('.appendList').empty();
  } else {
    if (value === 0) {
      loadDataList();
      value++;
    } else if (document.getElementsByClassName('appendList')[0].children.length === 0 && show !== undefined) {
      $('.appendList').append(datalist);
    } else if (show === undefined) {
      $('.appendList').empty();
      value--;
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
function indexLoad() {
  $(document).attr('title', 'Bulbasaur');
}

function loadPokemon(name) {
  $(document).attr('title', name);
}
