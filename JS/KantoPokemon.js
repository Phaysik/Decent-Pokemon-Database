/* eslint-disable no-unused-vars */
let index = 0;
const pokemonList = [];
$.getJSON('../JSON/kanto.json', function(data) {
  for (let i = 0; i < data['pokemon'].length; i++) {
    pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
  }
});

window.onload = function() {
  loadKanto();
};

function loadKanto() {
  index = 0;
  display = false;
  $('#Center').text('The Kanto Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  for (index; index < pokemonList.length; index++) {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      pokemonList[index].loadToPage();
      pokemonList[index].showTypes();
    } else {
      break;
    }
  }
}

function loadLetsGo() {
  index = 0;
  display = false;
  $('#Center').text('The Expansion Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  for (index; index < pokemonList.length; index++) {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      pokemonList[index].loadToPage();
      pokemonList[index].showTypes();
    } else {
      break;
    }
  }
}
