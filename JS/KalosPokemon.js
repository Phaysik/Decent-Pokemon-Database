/* eslint-disable no-unused-vars */
// eslint-disable-next-line prefer-const
let regionCount = 153;
// eslint-disable-next-line prefer-const
let appended = [false, false];
let index = 0;
const pokemonList = [];
const ids = ['Central', 'Coastal', 'Mountain'];
const count = [153, 151];

window.onload = function() {
  $('#Center').text('The Kalos Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $('#pokemon-container').empty().append(`<div id="ids1"><h4 class="KalosTextStyle">The Central Kalos Pokédex</h4>
  <span class="container d-flex justify-content-around flex-wrap" id="Central"></span></div>`);
  $.getJSON('../JSON/kalos.json', function(data) {
    for (let i = 0; i < data['pokemon'].length; i++) {
      pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    }
    for (index; index < regionCount; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        pokemonList[index].kalosLoadToPage(`${ids[0]}`);
        pokemonList[index].showTypes();
      } else {
        break;
      }
    }
  });
};
