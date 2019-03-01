var moveList = [
  new Moves('TM01', 'Mega Punch', 'Normal'),
  new Moves('TM01', 'Razor Wind', 'Normal')
]

var ids = ["Gen1", "Gen2", "Gen3", "Gen4", "Gen5", "Gen6", "Gen7"]
var moves = [50, 50, 50, 92, 95, 100, 100]

function loadMoves() {
  $('#Center').text("Pokémon Move List");
  $('#pokemon-container').empty().append(`<div id="ids1"><h4 class="KalosTextStyle">Gen 1 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen1"></span></div><div id="ids2"><h4 class="KalosTextStyle">Gen 2 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen2"></span></div><div id="ids3"><h4 class="KalosTextStyle">Gen 3 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen3"></span></div><div id="ids4"><h4 class="KalosTextStyle">Gen 4 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen4"></span></div><div id="ids5"><h4 class="KalosTextStyle">Gen 5 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen5"></span></div><div id="ids6"><h4 class="KalosTextStyle">Gen 6 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen6"></span></div><div id="ids7"><h4 class="KalosTextStyle">Gen 7 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen7"></span></div>`);

  moveList[0].loadMovesToPage();
  // for (var j = 0; j < itemList.length; j++) {
       // ids[i].append(`<div class="container mt-4"><div class="row"><div class="col-md-3"><h4 class="KalosTextStyle">Name</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">Type</h4></div></div>`);
  //   for (var i = 0; i < moves[i].length; i++) {
  //     moveList[j].loadMovesToPage();
  //   }
  // }
}
