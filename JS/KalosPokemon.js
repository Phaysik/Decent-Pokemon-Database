/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Kalos Pokedex
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
splitVal = [];
/**
 * Array to hold types of Pokemon if splitVal has a length of two
 * @type {!Array}
 * @default []
 */
types = [];

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
 * Call the loadKalos() function
 * @function KalosOnLoad
 * @see loadKalos
 */
window.onload = () => {
  loadKalos();
  $('.Kalos').click(function() {
    loadKalos();
  });
  $('#Central').click(function() {
    loadCentral();
  });
  $('#Coastal').click(function() {
    loadCoastal();
  });
  $('#Mountain').click(function() {
    loadMountain();
  });
  typeClick();
  $('#myInput').keyup(function() {
    type = $('#Center').text().split(' ')[3];
    region = $('#Center').text().split(' ')[2];
    if (region === 'Pokémon') {
      PokemonSearch(type, loadKalos);
    } else if (region === 'Central') {
      PokemonSearch(type, loadCentral);
    } else if (region === 'Coastal') {
      PokemonSearch(type, loadCoastal);
    } else {
      PokemonSearch(type, loadMountain);
    }
  });
};


/**
 * Will load all the Pokemon from the Melemele reigon to the page
 */
const loadKalos = () => {
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
  $('#Center').text('The Kalos Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  /**
   * Call the database to get Kalos Pokemon information
   * @function KalosAjax
   * @param   {string} data A JSON encoded list of Pokemon from the Johto pokedex
   */
  $.ajax('pkdata.php?content=kalos').then((data) => {
    try {
    /**
    *  A JSON decoded array of Pokemon information
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
    * Gets the Kalos json file if the database query fails
    * @function KalosJSON
    *
    * @param {Array} data A list of objects with the Pokemon's name, type, and id
    *
    * @return {Array} An array of all the Kalos Pokemon
    */
    return $.getJSON('../JSON/kalos.json', function(data) {
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
