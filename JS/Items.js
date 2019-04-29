let index = 0;
const List = [];


window.onload = function() {
  $('#Center').text('Pokémon Item List');
  $('#myInput').val('');
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-3"><h4 class="KalosTextStyle">
  Name</h4></div><div class="col-1"><h4 class="KalosTextStyle">Gen</h4></div><div class="col-3"><h4 class="KalosTextStyle pr-3">Category</h4>
  </div><div class="col-5"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);
  $.ajax('pkdata.php?content=items').then((data) => {
    try {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        List.push(new Item(data[i][0], data[i][1], data[i][2], data[i][3]));
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
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
