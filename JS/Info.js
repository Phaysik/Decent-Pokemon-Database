/* eslint-disable no-unused-vars */
const pokemon = [];
const desc = [];
const types = [];
const ids = [];

function loadPokemon() {
  for (let i = 0; i < pokemonList.length; i++) {
    pokemon.push(pokemonList[i].name);
    types.push(pokemonList[i].types);
    ids.push(pokemonList[i].nid);
  }
}
