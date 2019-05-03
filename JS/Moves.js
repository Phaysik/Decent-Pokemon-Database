/* eslint-disable no-unused-vars */
/**
 * @file Loads the Moves based on Generation
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
 * Number to determine what generation of moves to get
 * @type {!number}
 * @default 0
 */
let generation = 0;
/**
  *  Array to hold the Moves objects
  *  @type {!Array}
  *  @default []
  */
let List = [];
/**
 * Array to hold names if the tm has a different name from different generations
 * @type {!Array}
 * @default []
 */
let names = [];
/**
 * Array to hold how many moves are in each generation
 * @constant {!Array}
 * @default [50, 50, 50, 92, 95, 100, 100]
 */
const moves = [50, 50, 50, 92, 95, 100, 100];

/**
 * Call loadGen() with the default parameter of '1'
 * @function MovesLoad
 */
window.onload = () => {
  loadGen(1);
};

/**
 * Loads moves from specific generation
 * @param {number} genSet A number to set the generation of moves wanted
 */
const loadGen = (genSet) => {
  /**
  *  Set generation to be the nunmber loadGen was called with
  *  @type {!number}
  */
  generation = genSet;
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
  $('#Center').text('Pokémon Moves List');
  $('#myInput').val('');
  $('#moves-container').empty().append(`
  <div style="width: 100%;">
    <h4 class="KalosTextStyle">Gen ${generation} Moves</h4>
    <div id="Gen${generation}" class="container"></div>
  </div>
  `);

  $(`#Gen${generation}`).append(`<div class="mt-4"><div class="row"><div class="col-5"><h4 class="font-italic pl-5">Name</h4></div><div class="col-3">
  <h4 class="font-italic pl-4" class="pr-3">TM</h4></div><div class="col-3"><h4 class="font-italic pl-4" class="pr-3">Type</h4></div></div>`);

  /**
  * Call the database to get Moves information
  * @function MovesAjax
  * @param   {string} data A JSON encoded list of Moves
  */
  $.ajax(`pkdata.php?content=${generation}`).then((data) => {
    try {
    /**
     *  A JSON decoded array of Move information
     *  @type {!Array}
     */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i][2].includes(',')) {
          names = data[i][1].split(',');
          types = data[i][2].split(',');
          List.push(new Moves(data[i][0], [names[0], names[1]], [types[0], types[1].replace(/\n/, '')]));
        } else {
          List.push(new Moves(data[i][0], data[i][1], data[i][2].replace(/\n/, '')));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
  /**
  * Gets the Moves json file if the database query fails
  * @function MovesJSON
  *
  * @param {Array} data A list of objects with the Moves's imgName, name, and type
  *
  * @return {Array} An array of all the Moves of that specified generation
  */
    return $.getJSON('../JSON/moves.json', function(data) {
      for (let i = 0; i < data['moves'].length; i++) {
        List.push(new Moves(data['moves'][i].imgName, data['moves'][i].name, data['moves'][i].type));
      }
    });
  }).always(() => {
    for (index; index < moves[generation - 1]; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        List[index].loadMovesToPage(`#Gen${generation}`);
      } else {
        List[index].loadMovesToPage(`#Gen${generation}`);
        index++;
        break;
      }
    }
  });
};
