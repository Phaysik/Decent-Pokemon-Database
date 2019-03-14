/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];

const datalist = document.getElementById('datalist');

for (let i = 0; i < pokemonList.length; i++) {
  pokemon.push(pokemonList[i].name);
  types.push(pokemonList[i].types);
  ids.push(pokemonList[i].nid);
}

function titleCase() {
  $('#myInput').on('input', function(e) {
    val = $(this).val();
    const opts = document.getElementById('datalist').childNodes;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].value === toTitleCase(val)) {
        break;
      }
    }
  });
}

function indexLoad() {
  $(document).attr('title', 'Bulbasaur');
  datalist.textContent = '';
  for (let i = 0; i < pokemon.length; i++) {
    const option = document.createElement('option');
    option.value = pokemon[i];
    datalist.appendChild(option);
  }
}

function loadPokemon(name) {
  $(document).attr('title', type);
}
