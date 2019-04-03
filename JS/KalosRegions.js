/* eslint-disable no-unused-vars */
function loadCentral() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Central Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/central.json', function(data) {
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

function loadCoastal() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Coastal Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();

  $.getJSON('../JSON/coastal.json', function(data) {
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

function loadMountain() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Mountain Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();

  $.getJSON('../JSON/mountain.json', function(data) {
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
