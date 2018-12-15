var itemList = [
  new Items('Ability Capsule', 'Hold Items', 'A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.'),
  new Items('Ability Urge', 'Battle Items', 'When used, it activates the Ability of an ally Pokémon.'),
  new Items('Abomasite', 'Hold Items', 'Enables Abomasnow to Mega Evolve during battle.')
]

function loadItems(){
  $('#Center').text("Pokémon Item List");
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-md-4"><h4 class="KalosTextStyle pr-5">Name</h4></div><div class="col-md-3"><h4 class="KalosTextStyle pr-5">Category</h4></div><div class="col-md-5"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);

  for (var j = 0; j < itemList.length; j++) {
    itemList[j].loadItemsToPage();
  }
}
