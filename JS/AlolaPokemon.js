/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Alolan Pokedex
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

/**
  *  Index within the List to be used with other functions
  *  @type {!number}
  *  @default 0
  */
let index = 0;
/**
  *  Array to hold the Pokemon objects
  *  @type {!Array}
  *  @default []
  */
let List = [];
/**
 * Array to hold types of Pokemon
 * @type {!Array}
 * @default []
 */
let splitVal = [];
/**
 * Array to hold types of Pokemon if splitVal has a length of two
 * @type {!Array}
 * @default []
 */
let types = [];

/**
 * String to hold the type of the Pokemon wanted
 * @type {!string}
 * @default '''
 */
let type = '';

/**
 * String to hold the region selected
 * @type {!string}
 * @default '''
 */
let region = '';

/**
 * Call the loadAlola() function
 * @function AlolaOnLoad
 * @see loadAlola
 */
window.onload = () => {
  loadAlola();
  $('.Alola').click(function() {
    loadAlola();
  });
  $('#Melemele').click(function() {
    loadMelemele();
  });
  $('#Akala').click(function() {
    loadAkala();
  });
  $('#Ulaula').click(function() {
    loadUlaula();
  });
  $('#Poni').click(function() {
    loadPoni();
  });
  typeClick();
  $('#myInput').keyup(function() {
    type = $('#Center').text().split(' ')[2];
    region = $('#Center').text().split(' ')[1];
    if (region === 'Alolan') {
      PokemonSearch(type, loadAlola);
    } else if (region === 'Melemele') {
      PokemonSearch(type, loadMelemele);
    } else if (region === 'Akala') {
      PokemonSearch(type, loadAkala);
    } else if (region === 'Ulaula') {
      PokemonSearch(type, loadUlaula);
    } else {
      PokemonSearch(type, loadPoni);
    }
  });
};

/**
 * Will load all the Pokemon from the Alolan pokedex
 */
const loadAlola = () => {
  /**
  *  Index within the List to be used with other functions
  *  @type {!number}
  */
  index = 0;
  /**
  *  Array to hold the Pokemon objects
  *  @type {!Array}
  */
  List = [];
  $('#Center').text('The Alolan Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  /**
  * Call the database to get Alolan Pokemon information
  * @function AlolaAjax
  * @param   {string} data A JSON encoded list of Alolan pokemon
  */
  $.ajax('pkdata.php?content=alola').then((data) => {
    try {
      /**
       *  A JSON decoded array of Pokemon infromation
       *  @type {!Array}
       */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        splitVal = data[i][2].replace(/\n/gi, '').replace(/\r/gi, '').split(' ');
        if (splitVal.length === 1) {
          List.push(new Pokemon(data[i][0], data[i][1], splitVal));
        } else {
          types = [splitVal[0], splitVal[1]];
          List.push(new Pokemon(data[i][0], data[i][1], types));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
  /**
  * Gets the Alolan json file if the database query fails
  * @function AlolanJSON
  *
  * @param {Array} data A list of objects with the Pokemon's name, type, and id
  *
  * @return {Array} An array of all the Alolan Pokemon
  */
    return $.getJSON('../JSON/alola.json', function(data) {
      for (let i = 0; i < data['pokemon'].length; i++) {
        List.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
      }
    });
  }).always(() => {
    for (index; index < List.length; index++) {
      List[index].loadToPage();
      List[index].showTypes();
    }
    Lazy();
  });
};
