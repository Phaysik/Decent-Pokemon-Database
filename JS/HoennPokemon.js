/* eslint-disable no-unused-vars */
let index = 0;
const pokemonList = [];

window.onload = function() {
  $('#Center').text('The Hoenn Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/hoenn.json', function(data) {
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
};
