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
    if (datalist.childNodes.length === 0) {
      loadDataList();
    } else if (show === 0) {
      $('#datalist').empty();
    }
  } else {
    if (value === 0) {
      loadDataList();
      value++;
    } else if (datalist.childNodes.length === 0 && show !== undefined) {
      loadDataList();
    } else if (show === undefined) {
      $('#datalist').empty();
      value--;
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
function indexLoad() {
  $(document).attr('title', 'Bulbasaur');
}

function loadPokemon(name) {
  $(document).attr('title', name);
}
