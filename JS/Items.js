var itemList = [
  new Items('Ability Capsule', 'Hold Items', 'A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.'),
  new Items('Ability Urge', 'Battle Items', 'When used, it activates the Ability of an ally Pokémon.')
]

function loadItems(){
  $('#Center').text("Pokémon Item List");
  $('#items-container').empty().append(`<div class="row"><div class="col-md-4"><h4 class="KalosTextStyle">Name</h4><span class="d-flex justify-content-around flex-wrap flex-column" id="Name"></span></div><div class="col-md-3"><h4 class="KalosTextStyle">Category</h4><span class="d-flex justify-content-around flex-wrap flex-column" id="Category"></span></div><div class="col-md-5"><h4 class="KalosTextStyle">Description</h4><span class="d-flex justify-content-around flex-wrap flex-column" id="Description"></span></div></div>`);

  for (var j = 0; j < itemList.length; j++) {
    itemList[j].loadItemsToPage();
  }
}
