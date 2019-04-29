/* eslint-disable no-unused-vars */
const moves = [50, 100, 150, 242, 337, 437, 537];
const List = [];
let index = 0;
let searchIndex = 0;
let generation = 0;

window.onload = function() {
  loadGen(0, 1);
};

function loadGen(indexSet, genSet) {
  index = indexSet;
  searchIndex = indexSet;
  generation = genSet;
  $('#Center').text('Pokémon Moves List');
  $('#myInput').val('');
  $('#moves-container').empty().append(`
  <div style="width: 100%;">
    <h4 class="KalosTextStyle">Gen ${generation} Moves</h4>
    <div id="Gen${generation}" class="container"></div>
  </div>
  `);

  $(`#Gen${generation}`).append(`<div class="mt-4"><div class="row"><div class="col-5"><h4 class="font-italic pl-5">Name</h4></div><div class="col-3">
  <h4 class="font-italic pl-4" class="pr-3">TM</h4></div><div class="col-3"><h4 class="font-italic pl-4" class="pr-3">
  Type</h4></div></div>`);
  $.getJSON('../JSON/moves.json', function(data) {
    for (let i = 0; i < data['moves'].length; i++) {
      List.push(new Moves(data['moves'][i].imgName, data['moves'][i].name, data['moves'][i].type));
    }

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
}
