/* eslint-disable no-unused-vars */
const moves = [50, 50, 50, 92, 95, 100, 100];
let List = [];
let index = 0;
let generation = 0;

window.onload = function() {
  loadGen(1);
};

function loadGen(genSet) {
  generation = genSet;
  List = [];
  index = 0;
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
  $.ajax(`pkdata.php?content=${generation}`).then((data) => {
    try {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i][2].includes(',')) {
          const names = data[i][1].split(',');
          const types = data[i][2].split(',');
          List.push(new Moves(data[i][0], [names[0], names[1]], [types[0], types[1].replace(/\n/, '')]));
        } else {
          List.push(new Moves(data[i][0], data[i][1], data[i][2].replace(/\n/, '')));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
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
}
