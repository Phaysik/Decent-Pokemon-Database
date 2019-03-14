/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];
let val = 0;

const datalist = document.getElementById('datalist');

for (let i = 0; i < pokemonList.length; i++) {
  pokemon.push(pokemonList[i].name);
  types.push(pokemonList[i].types);
  ids.push(pokemonList[i].nid);
}

function visibility(show) {
  if (show !== undefined) {
    if (datalist.childNodes.length === 0 || show === 1) {
      $('#datalist').empty();
      loadDataList();
    } else if (show === 0) {
      $('#datalist').empty();
    }
  } else {
    if (val === 0) {
      $('#datalist').empty();
      loadDataList();
      val++;
    } else if (show === 0) {
      $('#datalist').empty();
    }
  }
}

function titleCase() {
  val = document.getElementById('myInput').value;
  if (/^[a-z: ]+$/i.test(val) == false) {
    visibility(1);
    return;
  } else if (datalist.childNodes.length === 0) {
    visibility(1);
  }
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
  $(document).attr('title', type);
}
