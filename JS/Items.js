var itemList = [
  new Items('Ability Capsule', 'Hold Items', 'A capsule that allows a Pokémon with two Abilities to switch between these Abilities when it is used.'),
  new Items('Ability Urge', 'Battle Items', 'When used, it activates the Ability of an ally Pokémon.'),
  new Items('Abomasite', 'Hold Items', 'Enables Abomasnow to Mega Evolve during battle.'),
  new Items('Absolite', 'Hold Items', 'Enables Absol to Mega Evolve during battle.'),
  new Items('Absorb Bulb', 'Hold Items', 'A consumable bulb. If the holder is hit by a Water-type move, its Sp. Atk will rise.'),
  new Items('Adamant Orb', 'Hold Items', 'Increases the power of Dragon- and Steel-type moves when held by Dialga.'),
  new Items('Adrenaline Orb', 'Hold Items', 'Using it makes wild Pokémon more likely to call for help. If held by a Pokémon, it boosts Speed when intimidated. It can be used only once.'),
  new Items('Aerodactylite', 'Hold Items', 'Enables Aerodactyl to Mega Evolve during battle.'),
  new Items('Aggronite', 'Hold Items', 'Enables Aggron to Mega Evolve during battle.'),
  new Items('Aguav Berry', 'Berries', 'Restores HP if it\'s low, but may cause confusion.'),
  new Items('Air Balloon', 'Hold Items', 'When held by a Pokémon, the Pokémon will float into the air. When the holder is attacked, this item will burst.'),
  new Items('Alakazite', 'Hold Items', 'Enables Alakazam to Mega Evolve during battle.'),
  new Items('Aloraichium Z', 'Hold Items', 'Allows Alolan Raichu to upgrade Thunderbolt to a Z-Move, Stoked Sparksurfer.'),
  new Items('Altarianite', 'Hold Items', 'Enables Altaria to Mega Evolve during battle.'),
  new Items('Ampharosite', 'Hold Items', 'Enables Ampharos to Mega Evolve during battle.'),
  new Items('Amulet Coin', 'Hold Items', 'An item to be held by a Pokémon. It doubles a battle’s prize money if the holding Pokémon joins in.'),
  new Items('Antidote', 'Medicine', 'A spray-type medicine. It lifts the effect of poison from one Pokémon.'),
  new Items('Apicot Berry', 'Berries', 'Raises Special Defense when HP is low.'),
  new Items('Armor Fossil', 'General Items', 'A fossil from a prehistoric Pokémon that lived on the land. It appears to be part of a collar.'),
  new Items('Aspear Berry', 'Berries', 'If held by a Pokémon, it defrosts it.'),
  new Items('Assault Vest', 'Hold Items', 'Raises Special Defense but prevents the use of status moves.'),
  new Items('Audinite', 'Hold items', 'Enables Audino to Mega Evolve during battle.'),
  new Items('Autograph', 'Key Items', 'The Autograph serves no practical purpose.'),
  new Items('Awakening', 'Medicine', 'A spray-type medicine. It awakens a Pokémon from the clutches of sleep.'),
  new Items('Babiri Berry', 'Berries', 'Weakens a supereffective Steel-type attack against the holding Pokémon.'),

]

function loadItems(){
  $('#Center').text("Pokémon Item List");
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-md-3"><h4 class="KalosTextStyle">Name</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">Category</h4></div><div class="col-md-6"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);

  for (var j = 0; j < itemList.length; j++) {
    itemList[j].loadItemsToPage();
  }
}
