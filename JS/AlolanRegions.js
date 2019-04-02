/* eslint-disable no-unused-vars */
function loadMelemele() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Melemele Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  $.getJSON('../JSON/melemele.json', function (data) {
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

function loadAkala() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Akala Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();

  $.getJSON('../JSON/akala.json', function (data) {
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

function loadUlaula() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Ulaula Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();

  $.getJSON('../JSON/ulaula.json', function (data) {
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

function loadPoni() {
  index = 0;
  pokemonList = [];
  $('#Center').text('The Poni Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();

  $.getJSON('../JSON/poni.json', function (data) {
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
