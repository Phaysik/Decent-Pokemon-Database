var pokemonList = [
  new Pokemon(650, 'Chespin', ['Grass']),
  new Pokemon(651, 'Quilladin', ['Grass']),
  new Pokemon(652, 'Chesnaught', ['Grass', 'Fighting']),
  new Pokemon(653, 'Fennekin', ['Fire']),
  new Pokemon(654, 'Braixen', ['Fire']),
  new Pokemon(655, 'Delphox', ['Fire', 'Psychic']),
  new Pokemon(656, 'Froakie', ['Water']),
  new Pokemon(657, 'Frogadier', ['Water']),
  new Pokemon(658, 'Greninja', ['Water', 'Dark']),
  new Pokemon(659, 'Bunnelby', ['Normal']),
  new Pokemon(660, 'Diggersby', ['Normal', 'Ground']),
  new Pokemon(263, 'Zigzagoon', ['Normal']),
  new Pokemon(264, 'Linoone', ['Normal']),
  new Pokemon(661, 'Fletchling', ['Normal', 'Flying']),
  new Pokemon(662, 'Fletchinder', ['Fire', 'Flying']),
  new Pokemon(663, 'Talonflame', ['Fire', 'Flying']),
  new Pokemon(16, 'Pidgey', ['Normal', 'Flying']),
  new Pokemon(17, 'Pidgeotto', ['Normal', 'Flying']),
  new Pokemon(18, 'Pidgeot', ['Normal', 'Flying']),
  new Pokemon(664, 'Scatterbug', ['Bug']),
  new Pokemon(665, 'Spewpa', ['Bug']),
  new Pokemon(666, 'Vivillon', ['Bug', 'Flying']),
  new Pokemon(10, 'Caterpie', ['Bug']),
  new Pokemon(11, 'Metapod', ['Bug']),
  new Pokemon(12, 'Butterfree', ['Bug', 'Flying']),
  new Pokemon(13, 'Weedle', ['Bug', 'Poison']),
  new Pokemon(14, 'Kakuna', ['Bug', 'Poison']),
  new Pokemon(15, 'Beedrill', ['Bug', 'Poison']),
  new Pokemon(511, 'Pansage', ['Grass']),
  new Pokemon(512, 'Simisage', ['Grass']),
  new Pokemon(513, 'Pansear', ['Fire']),
  new Pokemon(514, 'Simisear', ['Fire']),
  new Pokemon(515, 'Panpour', ['Water']),
  new Pokemon(516, 'Simipour', ['Water']),
  new Pokemon(172, 'Pichu', ['Electric']),
  new Pokemon(25, 'Pikachu', ['Electric']),
  new Pokemon(26, 'Raichu', ['Electric']),
  new Pokemon(399, 'Bidoof', ['Normal']),
  new Pokemon(400, 'Bibarel', ['Normal', 'Water']),
  new Pokemon(206, 'Dunsparce', ['Normal']),
  new Pokemon(298, 'Azurill', ['Normal', 'Fairy']),
  new Pokemon(183, 'Marill', ['Water', 'Fairy']),
  new Pokemon(184, 'Azumarill', ['Water', 'Fairy']),
  new Pokemon(412, 'Burmy', ['Bug']),
  new Pokemon(413, 'Wormadam', ['Bug', 'Grass']),
  new Pokemon(414, 'Mothim', ['Bug', 'Flying']),
  new Pokemon(283, 'Surskit', ['Bug', 'Water']),
  new Pokemon(284, 'Masquerain', ['Bug', 'Flying']),
  new Pokemon(129, 'Magikarp', ['Water']),
  new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
  new Pokemon(341, 'Dugtrio', ['Ground']),
  new Pokemon(342, 'Meowth', ['Normal']),
  new Pokemon(118, 'Persian', ['Normal']),
  new Pokemon(119, 'Psyduck', ['Water']),
  new Pokemon(318, 'Golduck', ['Water']),
  new Pokemon(319, 'Mankey', ['Fighting']),
  new Pokemon(667, 'Primeape', ['Fighting']),
  new Pokemon(668, 'Growlithe', ['Fire']),
  new Pokemon(54, 'Arcanine', ['Fire']),
  new Pokemon(55, 'Poliwag', ['Water']),
  new Pokemon(83, 'Poliwhirl', ['Water']),
  new Pokemon(447, 'Poliwrath', ['Water', 'Fighting']),
  new Pokemon(448, 'Abra', ['Psychic']),
  new Pokemon(280, 'Kadabra', ['Psychic']),
  new Pokemon(281, 'Alakazam', ['Psychic']),
  new Pokemon(282, 'Machop', ['Fighting']),
  new Pokemon(475, 'Machoke', ['Fighting']),
  new Pokemon(669, 'Machamp', ['Fighting']),
  new Pokemon(670, 'Bellsprout', ['Grass', 'Poison']),
  new Pokemon(671, 'Weepinbell', ['Grass', 'Poison']),
  new Pokemon(406, 'Victreebel', ['Grass', 'Poison']),
  new Pokemon(315, 'Tentacool', ['Water', 'Poison']),
  new Pokemon(407, 'Tentacruel', ['Water', 'Poison']),
  new Pokemon(165, 'Geodude', ['Rock', 'Ground']),
  new Pokemon(166, 'Graveler', ['Rock', 'Ground']),
  new Pokemon(415, 'Golem', ['Rock', 'Ground']),
  new Pokemon(416, 'Ponyta', ['Fire']),
  new Pokemon(300, 'Rapidash', ['Fire']),
  new Pokemon(301, 'Slowpoke', ['Water', 'Psychic']),
  new Pokemon(1, 'Slowbro', ['Water', 'Psychic']),
  new Pokemon(2, 'Magnemite', ['Electric', 'Steel']),
  new Pokemon(3, 'Magneton', ['Electric', 'Steel']),
  new Pokemon(4, "Farfetch" + "\'" + "d", ['Normal', 'Flying']),
  new Pokemon(5, 'Doduo', ['Normal', 'Flying']),
  new Pokemon(6, 'Dodrio', ['Normal', 'Flying']),
  new Pokemon(7, 'Seel', ['Water']),
  new Pokemon(8, 'Dewgong', ['Water', 'Ice']),
  new Pokemon(9, 'Grimer', ['Poison']),
  new Pokemon(672, 'Muk', ['Poison']),
  new Pokemon(673, 'Shellder', ['Water']),
  new Pokemon(674, 'Cloyster', ['Water', 'Ice']),
  new Pokemon(675, 'Gastly', ['Ghost', 'Poison']),
  new Pokemon(676, 'Haunter', ['Ghost', 'Poison']),
  new Pokemon(84, 'Gengar', ['Ghost', 'Poison']),
  new Pokemon(85, 'Onix', ['Rock', 'Ground']),
  new Pokemon(311, 'Drowzee', ['Psychic']),
  new Pokemon(312, 'Hypno', ['Psychic']),
  new Pokemon(316, 'Krabby', ['Water']),
  new Pokemon(317, 'Kingler', ['Water']),
  new Pokemon(559, 'Voltorb', ['Electric']),
  new Pokemon(560, 'Electrode', ['Electric']),
  new Pokemon(63, 'Exeggcute', ['Grass', 'Psychic']),
  new Pokemon(64, 'Exeggutor', ['Grass', 'Psychic']),
  new Pokemon(65, 'Cubone', ['Ground']),
  new Pokemon(43, 'Marowak', ['Ground']),
  new Pokemon(44, 'Hitmonlee', ['Fighting']),
  new Pokemon(45, 'Hitmonchan', ['Fighting']),
  new Pokemon(182, 'Lickitung', ['Normal']),
  new Pokemon(161, 'Koffing', ['Poison']),
  new Pokemon(162, 'Weezing', ['Poison']),
  new Pokemon(290, 'Rhyhorn', ['Ground', 'Rock']),
  new Pokemon(291, 'Rhydon', ['Ground', 'Rock']),
  new Pokemon(292, 'Chansey', ['Normal']),
  new Pokemon(677, 'Tangela', ['Grass']),
  new Pokemon(678, 'Kangaskhan', ['Normal']),
  new Pokemon(352, 'Horsea', ['Water']),
  new Pokemon(679, 'Seadra', ['Water']),
  new Pokemon(680, 'Goldeen', ['Water']),
  new Pokemon(681, 'Seaking', ['Water']),
  new Pokemon(543, 'Staryu', ['Water']),
  new Pokemon(544, 'Starmie', ['Water', 'Psychic']),
  new Pokemon(545, 'Mr. Mime', ['Psychic', 'Fairy']),
  new Pokemon(531, 'Scyther', ['Bug', 'Flying']),
  new Pokemon(235, 'Jynx', ['Ice', 'Psychic']),
  new Pokemon(453, 'Electabuzz', ['Electric']),
  new Pokemon(454, 'Magmar', ['Fire']),
  new Pokemon(580, 'Pinsir', ['Bug']),
  new Pokemon(581, 'Tauros', ['Normal']),
  new Pokemon(682, 'Magikarp', ['Water']),
  new Pokemon(683, 'Gyarados', ['Water', 'Flying']),
  new Pokemon(684, 'Lapras', ['Water']),
  new Pokemon(685, 'Ditto', ['Normal']),
  new Pokemon(313, 'Eevee', ['Normal']),
  new Pokemon(314, 'Vaporeon', ['Water']),
  new Pokemon(187, 'Jolteon', ['Electric']),
  new Pokemon(188, 'Flareon', ['Fire']),
  new Pokemon(189, 'Porygon', ['Normal']),
  new Pokemon(446, 'Omanyte', ['Rock', 'Water']),
  new Pokemon(143, 'Omastar', ['Rock', 'Water']),
  new Pokemon(293, 'Kabuto', ['Rock', 'Water']),
  new Pokemon(294, 'Kabutops', ['Rock', 'Flying']),
  new Pokemon(295, 'Aerodactyl', ['Rock', 'Flying']),
  new Pokemon(307, 'Snorlax', ['Normal']),
  new Pokemon(308, 'Articuno', ['Ice', 'Flying']),
  new Pokemon(41, 'Zapdos', ['Electric', 'Flying']),
  new Pokemon(42, 'Moltres', ['Fire', 'Flying']),
  new Pokemon(169, 'Dratini', ['Dragon']),
  new Pokemon(610, 'Dragonair', ['Dragon']),
  new Pokemon(611, 'Dragonite', ['Dragon', 'Flying']),
  new Pokemon(612, 'Mewtwo', ['Psychic']),
  new Pokemon(720, 'Mew', ['Psychic']),
  new Pokemon(721, 'Mew', ['Psychic'])
]

var regions = ["The Central Kalos Pokédex", "The Coastal Kalos Pokédex", "The Mountain Kalos Pokédex"]
var ids = ["Central", "Coastal", "Mountain"]

function loadKalos() {
  $('#Center').text("The Kalos Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  var j = 0;
  var regionCount = 151;
  for (var i = 0; i < regions.length; i++) {
    $(`#${ids[i]}`).append(`<span style="color: red;">${regions[i]}</span>`);
    for (j; j < regionCount; j++) {
      pokemonList[j].loadToPage();
      pokemonList[j].ShowTypes();
    }
    regionCount += 151;
  }
}
