/* eslint-disable no-unused-vars */
let index = 0;
let pokemonList = [];

window.onload = function () {
  loadKalos();
};

function loadKalos() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Kalos Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/kalos.json', function (data) {
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