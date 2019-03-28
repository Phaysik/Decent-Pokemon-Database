/* eslint-disable no-unused-vars */
let index = 0;
const list = [];
$.getJSON('../JSON/johto.json', function(data) {
  for (let i = 0; i < data['pokemon'].length; i++) {
    list.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    // item = new Pokemon(data['pokemon'][index].id, data['pokemon'][index].name, data['pokemon'][index].types);
    // item.loadToPage();
    // item.showTypes();
  }
});

window.onload = function() {
  $('#Center').text('The Johto Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  for (index; index < list.length; index++) {
    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      list[index].loadToPage();
      list[index].showTypes();
    } else {
      break;
    }
  }
};


window.onscroll = function() {
  if ($('#myInput').val() == '') {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
      for (index; index < list.length; index++) {
        if (index < list.length - (document.getElementById('pokemon-container').offsetWidth / $('.list-group-item').outerWidth()) * 2 - 1) {
          for (let i = 0; i < (document.getElementById('pokemon-container').offsetWidth / $('.list-group-item').outerWidth()) * 2 - 1; i++) {
            list[index].loadToPage();
            list[index].showTypes();
            index++;
          }
        } else {
          for (let i = 0; i < (document.getElementById('pokemon-container').offsetWidth / $('.list-group-item').outerWidth()) * 2 - 1; i++) {
            list[index].loadToPage();
            list[index].showTypes();
            index++;
          }
        }

        break;
      }
    }
  }
};

