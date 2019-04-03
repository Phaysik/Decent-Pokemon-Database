/* eslint-disable no-unused-vars */
let index = 0;
let List = [];

window.onload = function() {
  loadAlola();
};

function loadAlola() {
  index = 0;
  List = [];
  $('#Center').text('The Alolan Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/alola.json', function(data) {
    for (let i = 0; i < data['pokemon'].length; i++) {
      List.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    }
    for (index; index < List.length; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        List[index].loadToPage();
        List[index].showTypes();
      } else {
        break;
      }
    }
  });
}
