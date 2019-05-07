/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Sinnoh Pokedex
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
  *  @constant
  *  @type {!Array}
  *  @default []
  */
const List = [];
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
 * Calls the loadSinnoh() function
 * @function SinnohOnLoad
 * @see loadSinnoh
 */
window.onload = function() {
  loadSinnoh();
  $('#Sinnoh').click(function() {
    loadSinnoh();
  });
  typeClick();
  $('#myInput').keyup(function() {
    type = $('#Center').text().split(' ')[2];
    PokemonSearch(type, loadSinnoh);
  });
};

/**
 * Loads all the Sinnoh Pokemon to the page
 */
const loadSinnoh = () => {
  $('#Center').text('The Sinnoh Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  /**
  * Call the database to get Sinnoh Pokemon information
  * @function SinnohAjax
  * @param   {string} data A JSON encoded list of Sinnoh pokemon
  */
  $.ajax('pkdata.php?content=sinnoh').then((data) => {
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
  * Gets the Sinnoh json file if the database query fails
  * @function SinnohJSON
  *
  * @param {Array} data A list of objects with the Pokemon's name, type, and id
  *
  * @return {Array} An array of all the Sinnoh Pokemon
  */
    return $.getJSON('../JSON/sinnoh.json', function(data) {
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
