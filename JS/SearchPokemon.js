/* eslint-disable no-unused-vars */
/**
 * @file Contains all the function to search through pokemon, items, and moves
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

/**
 * A number to hold the id of the Pokemon to display
 * @type {!number}
 * @default 0
 */
let listIndex = 0;

/**
 * A string to hold the the data-src of the image
 * @type {!string}
 * @default '''
 */
let dataSrc = '';

/**
 * Takes a string and changes the first character of each word to be uppercase
 * @example
 * var a = 'hello world';
 *
 * var titleCased = toTitleCase(a); // titleCased is set to 'Hello World'
 *
 * @param   {string} phrase The string
 *
 * @return {string} A string with each word having an uppercase letter
 */
const toTitleCase = (phrase) => {
  return phrase.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * Searches through a list of pokemon and then display their information to the page
 * @param {!string} type A string representing what the Pokemon type searched is
 * @param {!string} func A string representing what function to call if the search box is empty
 */
const PokemonSearch = (type, func) => {
  $(document).ready(function() {
  /**
  * A string that the user inputs
  * @type {!string}
  */
    let value = $('#myInput').val().toLowerCase();
    $('#pokemon-container').empty();

    value = (value.includes(':')) ? value.replace(/:/, '꞉') : value;

    if (value !== '') {
      for (let g = 0; g < searchList.length; g++) {
        dataSrc = searchList[g].dataset.src.split('/')[2].split('.')[0].trim();
        if (dataSrc.toLowerCase().includes(value)) {
          listIndex = List.find((x) => x.name == dataSrc).nid - 1;
          List[listIndex].loadToPage();
          List[listIndex].showTypes();
        }
      }
    } else {
      if (type !== 'Pokémon') {
        displayTypesToScreen(type);
      } else {
        func();
      }
    }
    Lazy();
  });
};

/**
 * Searches through a list of items and then display their information to the page
 */
const ItemSearch = () => {
  $(document).ready(function() {
  /**
  * A string that the user inputs
  * @constant
  * @type {!string}
  */
    const value = $('#myInput').val().toLowerCase();
    $('#items-container').empty();
    for (let g = 0; g < List.length; g++) {
      if (List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].id.toLowerCase().indexOf(value) >= 0 || List[g].category.toLowerCase().indexOf(value) >= 0
            || List[g].description.toLowerCase().indexOf(value) >= 0) {
        List[g].loadItemsToPage();
      }
    }
    Lazy();
  });
};

/**
 * Searches through a list of moves and then display their information to the page
 */
const MoveSearch = () => {
  $(document).ready(function() {
  /**
  * A string that the user inputs
  * @constant
  * @type {!string}
  */
    const value = $('#myInput').val().toLowerCase();
    $('#moves-container').empty().append(`
      <div class="container mt-4"><div class="row"><div class="col-5"><h4 class="MovesText">Name</h4></div><div class="col-3">
      <h4 class="MovesText" class="pr-3">TM</h4></div><div class="col-3"><h4 class="MovesText" class="pr-3">
      Type</h4></div></div><div style="width=100%" id="moves"></div></div>
    `);

    for (let g = 0; g < moves[generation - 1]; g++) {
      if (typeof List[g].name === 'object') {
        if (List[g].imgName.toLowerCase().indexOf(value) >= 0 || List[g].name[0].toLowerCase().indexOf(value) >= 0 ||
          List[g].name[1].toLowerCase().indexOf(value) >= 0 || List[g].type[0].toLowerCase().indexOf(value) >= 0 || List[g].type[1].toLowerCase().indexOf(value) >= 0) {
          List[g].loadMovesToPage('#moves');
        }
      } else if (List[g].imgName.toLowerCase().indexOf(value) >= 0 || List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].type.toLowerCase().indexOf(value) >= 0) {
        List[g].loadMovesToPage('#moves');
      }
    }
    Lazy();
  });
};
