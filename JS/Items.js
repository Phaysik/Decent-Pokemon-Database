/**
 * @file Loads all the Items
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
  *  Array to hold the Item objects
  *  @constant
  *  @type {!Array}
  *  @default []
  */
const List = [];

/**
 * Call a database, or a JSON file if database fails, and get Item information
 * @function ItemsOnLoad
 */
window.onload = () => {
  $('#Center').text('Pokémon Item List');
  $('#myInput').val('');
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-3"><h4 class="KalosTextStyle">
  Name</h4></div><div class="col-1"><h4 class="KalosTextStyle">Gen</h4></div><div class="col-3"><h4 class="KalosTextStyle pr-3">Category</h4>
  </div><div class="col-5"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);
  /**
   * Call the database to get Items information
   * @function ItemsAjax
   * @param   {string} data A JSON encoded list of Items
   */
  $.ajax('pkdata.php?content=items').then((data) => {
    try {
      /**
       * A JSON decoded array of Items information
       * @type {!Array}
       */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        List.push(new Item(data[i][0], data[i][1], data[i][2], data[i][3]));
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
    /**
      * Gets the Items json file if the database query fails
      * @function ItemsJSON
      *
      * @param {Array} data A list of objects with the Item's name, id, category, and description
      *
      * @return {Array} An array of all the Items
      */
    return $.getJSON('../JSON/items.json', function(data) {
      for (let i = 0; i < data['item'].length; i++) {
        List.push(new Item(data['item'][i].name, data['item'][i].id, data['item'][i].category, data['item'][i].description));
      }
    });
  }).always(() => {
    for (index; index < List.length; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        List[index].loadItemsToPage();
      } else {
        break;
      }
    }
  });
};
