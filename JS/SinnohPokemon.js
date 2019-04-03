/* eslint-disable no-unused-vars */
let index = 0;
const List = [];

window.onload = function() {
  $('#Center').text('The Sinnoh Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/sinnoh.json', function(data) {
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
};
