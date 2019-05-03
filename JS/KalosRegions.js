/* eslint-disable no-unused-vars */
/**
 * @file Loads the Kalos Pokemon based on the determined region
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

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
 * Will load all the Pokemon from the Central reigon to the page
 */
const loadCentral = () => {
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
  $('#Center').text('The Kalos Central Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=central');
};

/**
 * Will load all the Pokemon from the Coastal reigon to the page
 */
const loadCoastal = () => {
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
  $('#Center').text('The Kalos Coastal Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=coastal');
};

/**
 * Will load all the Pokemon from the Mountain reigon to the page
 */
const loadMountain = () => {
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
  $('#Center').text('The Kalos Mountain Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=mountain');
};

/**
 * Call a database, or a JSON file if database fails, and get Pokemon information
 * @param   {string} region A string that contains a query to be used when calling a database
 */
const AJAX = (region) => {
  /**
   * Call the database to get Kalos Region Pokemon information
  * @function KalosRegionAjax
  * @param   {string} data A JSON encoded list of Alolan pokemon based on region
  */
  $.ajax('pkdata.php?' + region).then((data) => {
    try {
    /**
    *  A JSON decoded array of Pokemon information
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
  * Gets the Kalos Region json file if the database query fails
  * @function KalosRegionsJSON
  *
  * @param {Array} data A list of objects with the Pokemon's name, type, and id
  *
  * @return {Array} An array of all the Pokemon of that specified region
  */
    return $.getJSON(`../JSON/${region.split('=')[1]}.json`, function(data) {
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
