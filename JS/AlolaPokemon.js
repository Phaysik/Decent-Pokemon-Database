/* eslint-disable no-unused-vars */
let index = 0;
let pokemonList = [];

window.onload = function () {
  loadAlola();
};

function loadAlola() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Alolan Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/alola.json', function (data) {
    for (let i = 0; i < data['pokemon'].length; i++) {
      pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    }
    for (index; index < pokemonList.length; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        pokemonList[index].loadToPage();
        pokemonList[index].showTypes();
      } else {
        break;
      }
    }
  });
}