/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Kanto Pokedex
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
 * Call a database, or a JSON file if database fails, and get Pokemon information
 * @function KantoOnLoad
 * @see loadKanto
 */
window.onload = () => {
  loadKanto();
  $('.Kanto').click(function() {
    loadKanto();
  });
  $('#LG').click(function() {
    loadLetsGo();
  });
  typeClick();
  $('#myInput').keyup(function() {
    type = $('#Center').text().split(' ')[2];
    region = $('#Center').text().split(' ')[1];
    if (region === 'Kanto') {
      PokemonSearch(type, loadKanto);
    } else {
      PokemonSearch(type, loadLetsGo);
    }
  });
};

/**
 * Will load all the Pokemon from the Kanto reigon to the page
 */
const loadKanto = () => {
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
  /**
  *  Boolean value to determine if Pokemon need to be shown
  *  @type {!boolean}
  *  @default false
  */
  display = false;
  $('#Center').text('The Kanto Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=kanto');
};

/**
 * Will load all the Pokemon from the Kanto reigon, including those in Let's Go, to the page
 */
const loadLetsGo = () => {
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
  /**
  *  Boolean value to determine if Pokemon need to be shown
  *  @type {!boolean}
  *  @default false
  */
  display = false;
  $('#Center').text('The Expansion Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=LG');
};

/**
 * Call a database, or a JSON file if database fails, and get Pokemon information
 * @param   {string} game A string that contains a query to be used when calling a database
 */
function AJAX(game) {
  /**
   * Call the database to get Kanto Pokemon information
   * @function KantoLoad
   * @param   {string} data A JSON encoded list of Pokemon from the Kanto pokedex
   */
  $.ajax('pkdata.php?' + game).then((data) => {
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
  * Gets the Kanto json file if the database query fails
  * @function KantoJSON
  *
  * @param {Array} data A list of objects with the Pokemon's name, type, and id
  *
  * @return {Array} An array of all the Kanto Pokemon
  */
    return $.getJSON('../JSON/kanto.json', function(data) {
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
    searchList = document.querySelectorAll('img');
  });
}
