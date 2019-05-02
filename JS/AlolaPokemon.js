/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Alolan Pokedex
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * @type {!number}
 */
let index = 0;
/**
 * @type {!Array}
 */
let List = [];
/**
 * @type {!Array}
 */
let splitVal = [];
/**
 * @type {!Array}
 */
let types = [];

/**
 * @function AlolaOnLoad
 */
window.onload = () => {
  loadAlola();
};

/**
 * Will load all the Pokemon from the Alolan pokedex
 */
const loadAlola = () => {
  index = 0;
  List = [];
  $('#Center').text('The Alolan Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  /**
    * @function AlolanJSON
    *
    * @param {Array} data A list of objects with the Pokemon's name, type, and id
    *
    * @return {Array} An array of all the Pokemon of that specified region
    */
  $.ajax('pkdata.php?content=alola').then((data) => {
    try {
      /**
       *  @type {!Array}
       */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        splitVal = data[i][2].replace(/\n/gi, '').split(' ');
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
     * @return {Array} An array of all the Alolan Pokemon
     */
    return $.getJSON('../JSON/alola.json', function(data) {
      for (let i = 0; i < data['pokemon'].length; i++) {
        List.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
      }
    });
  }).always(() => {
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
