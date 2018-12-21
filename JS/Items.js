var itemList = [
  new Items('Ability Capsule', 'VI', 'Hold Items', 'A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.'),
  new Items('Ability Urge', 'V', 'Battle Items', 'When used, it activates the Ability of an ally Pokémon.'),
  new Items('Abomasite', 'VI', 'Hold Items', 'Enables Abomasnow to Mega Evolve during battle.'),
  new Items('Absolite', 'VI', 'Hold Items', 'Enables Absol to Mega Evolve during battle.'),
  new Items('Absorb Bulb', 'V', 'Hold Items', 'A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.'),
  new Items('Acro Bike', 'III', 'Key Items', 'A bicycle with which the player can do tricks such as jump sideways.'),
  new Items('Adamant Orb', 'IV', 'Hold Items', 'Increases the power of Dragon- and Steel-type moves when held by Dialga.'),
  new Items('Adrenaline Orb', 'VII', 'Hold Items', 'Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.'),
  new Items('Adventure Rules', 'VI', 'Key Items', 'Contains information new Trainers should know.'),
  new Items('Aerodactylite', 'VI', 'Hold Items', 'Enables Aerodactyl to Mega Evolve during battle.'),
  new Items('Aggronite', 'VI', 'Hold Items', 'Enables Aggron to Mega Evolve during battle.'),
  new Items('Aguav Berry', 'III', 'Berries', 'Restores HP if it\'s low, but may cause confusion.'),
  new Items('Air Balloon', 'V', 'Hold Items', 'When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.'),
  new Items('Alakazite', 'VI', 'Hold Items', 'Enables Alakazam to Mega Evolve during battle.'),
  new Items('Aloraichium Z', 'VII', 'Hold Items', 'Allows Alolan Raichu to upgrade Thunderbolt to a Z-Move, Stoked Sparksurfer.'),
  new Items('Altarianite', 'VI', 'Hold Items', 'Enables Altaria to Mega Evolve during battle.'),
  new Items('Ampharosite', 'VI', 'Hold Items', 'Enables Ampharos to Mega Evolve during battle.'),
  new Items('Amulet Coin', 'II', 'Hold Items', 'An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.'),
  new Items('Antidote', 'I', 'Medicine', 'A spray-type medicine. It lifts the effect of poison from one Pokémon.'),
  new Items('Apicot Berry', 'III', 'Berries', 'Raises Special Defense when HP is low.'),
  new Items('Armor Fossil', 'IV', 'General Items', 'A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.'),
  new Items('Aspear Berry', 'III', 'Berries', 'If held by a Pokémon, it defrosts it.'),
  new Items('Assault Vest', 'VI', 'Hold Items', 'Raises Special Defense but prevents the use of status moves.'),
  new Items('Audinite', 'VI', 'Hold items', 'Enables Audino to Mega Evolve during battle.'),
  new Items('Autograph', 'VII', 'Key Items', 'The Autograph serves no practical purpose.'),
  new Items('Awakening', 'I', 'Medicine', 'A spray-type medicine. It awakens a Pokémon from the clutches of sleep.'),
  new Items('Babiri Berry', 'IV', 'Berries', 'Weakens a supereffective Steel-type attack against the holding Pokémon.'),

]


function loadItems() {
  $('#Center').text("Pokémon Item List");
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-md-3"><h4 class="KalosTextStyle">Name</h4></div><div class="col-md-1"><h4 class="KalosTextStyle">Gen</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">Category</h4></div><div class="col-md-5"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);

  for (var j = 0; j < itemList.length; j++) {
    itemList[j].loadItemsToPage();
  }
}
