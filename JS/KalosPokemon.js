/* eslint-disable no-unused-vars */
let index = 0;
let List = [];

window.onload = function() {
  loadKalos();
};

function loadKalos() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/kalos.json', function(data) {
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
