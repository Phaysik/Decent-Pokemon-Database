var moveList = [
  new Moves('TM01', 'Mega Punch', 'Normal'),
  new Moves('TM02', 'Razor Wind', 'Normal'),
  new Moves('TM03', 'Swords Dance', 'Normal'),
  new Moves('TM04', 'Whirlwind', 'Normal'),
  new Moves('TM05', 'Mega Kick', 'Normal'),
  new Moves('TM06', 'Toxic', 'Poison'),
  new Moves('TM07', 'Horn Drill', 'Normal'),
  new Moves('TM08', 'Body Slam', 'Normal'),
  new Moves('TM09', 'Take Down', 'Normal'),
  new Moves('TM10', 'Double-Edge', 'Normal'),
  new Moves('TM11', 'BubbleBeam', 'Water'),
  new Moves('TM12', 'Water Gun', 'Water'),
  new Moves('TM13', 'Ice Beam', 'Ice'),
  new Moves('TM14', 'Blizzard', 'Ice'),
  new Moves('TM15', 'Hyper Beam', 'Normal'),
  new Moves('TM16', 'Pay Day', 'Normal'),
  new Moves('TM17', 'Submission', 'Fighting'),
  new Moves('TM18', 'Counter', 'Fighting'),
  new Moves('TM19', 'Seismic Toss', 'Fighting'),
  new Moves('TM20', 'Rage', 'Normal'),
  new Moves('TM21', 'Mega Drain', 'Grass'),
  new Moves('TM22', 'SolarBeam', 'Grass'),
  new Moves('TM23', 'Dragon Rage', 'Dragon'),
  new Moves('TM24', 'Thunderbolt', 'Electric'),
  new Moves('TM25', 'Thunder', 'Electric'),
  new Moves('TM26', 'Earthquake', 'Ground'),
  new Moves('TM27', 'Fissure', 'Ground'),
  new Moves('TM28', 'Dig', 'Ground'),
  new Moves('TM29', 'Psychic', 'Psychic'),
  new Moves('TM30', 'Teleport', 'Psychic'),
  new Moves('TM31', 'Mimic', 'Normal'),
  new Moves('TM32', 'Double Team', 'Normal'),
  new Moves('TM33', 'Reflect', 'Psychic'),
  new Moves('TM34', 'Bide', 'Normal'),
  new Moves('TM35', 'Metronome', 'Normal'),
  new Moves('TM36', 'Selfdestruct', 'Normal'),
  new Moves('TM37', 'Egg Bomb', 'Normal'),
  new Moves('TM38', 'Fire Blast', 'Fire'),
  new Moves('TM39', 'Swift', 'Normal'),
  new Moves('TM40', 'Skull Bash', 'Normal'),
  new Moves('TM41', 'Softboiled', 'Normal'),
  new Moves('TM42', 'Dream Eater', 'Psychic'),
  new Moves('TM43', 'Sky Attack', 'Flying'),
  new Moves('TM44', 'Rest', 'Psychic'),
  new Moves('TM45', 'Thunder Wave', 'Electric'),
  new Moves('TM46', 'Psywave', 'Psychic'),
  new Moves('TM47', 'Explosion', 'Normal'),
  new Moves('TM48', 'Rock Slide', 'Rock'),
  new Moves('TM49', 'Tri Attack', 'Normal'),
  new Moves('TM50', 'Substitute', 'Normal'),
]

var ids = ["Gen1", "Gen2", "Gen3", "Gen4", "Gen5", "Gen6", "Gen7"]
var moves = [50, 50, 50, 92, 95, 100, 100]

function loadMoves() {
  $('#Center').text("Pokémon Move List");
  $('#myInput').val('');
  $('#moves-container').empty().append(`<div id="ids1" style="width: 100%;"><h4 class="KalosTextStyle">Gen 1 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen1"></span></div><div id="ids2" style="width: 100%;"><h4 class="KalosTextStyle">Gen 2 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen2"></span></div><div id="ids3" style="width: 100%;"><h4 class="KalosTextStyle">Gen 3 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen3"></span></div><div id="ids4" style="width: 100%;"><h4 class="KalosTextStyle">Gen 4 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen4"></span></div><div id="ids5" style="width: 100%;"><h4 class="KalosTextStyle">Gen 5 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen5"></span></div><div id="ids6" style="width: 100%;"><h4 class="KalosTextStyle">Gen 6 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen6"></span></div><div id="ids7" style="width: 100%;"><h4 class="KalosTextStyle">Gen 7 Moves</h4><span class="container d-flex justify-content-around flex-wrap" id="Gen7"></span></div>`);

  for (var j = 0; j < 1; j++) {
    $('#' + ids[j]).append(`<div class="container mt-4"><div class="row"><div class="col-md-5"><h4 class="KalosTextStyle">Name</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">TM</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">Type</h4></div></div>`);
    for (var i = 0; i < moves[j]; i++) {
      moveList[i].loadMovesToPage(ids[j]);
    }
  }
}
