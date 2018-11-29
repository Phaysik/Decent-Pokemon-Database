var kantoPokemonList = [
  new Pokemon(1, 1, 'Bulbasaur', ['Grass', 'Poison']),
  new Pokemon(2, 2, 'Ivysaur', ['Grass', 'Poison']),
  new Pokemon(3, 3, 'Venusaur', ['Grass', 'Poison']),
  new Pokemon(4, 4, 'Charmander', ['Fire']),
  new Pokemon(5, 5, 'Charmeleon', ['Fire']),
  new Pokemon(6, 6, 'Charizard', ['Fire', 'Flying']),
  new Pokemon(7, 7, 'Squirtle', ['Water']),
  new Pokemon(8, 8, 'Wartortle', ['Water']),
  new Pokemon(9, 9, 'Blastoise', ['Water']),
  new Pokemon(10, 10, 'Caterpie', ['Bug']),
  new Pokemon(11, 11, 'Metapod', ['Bug']),
  new Pokemon(12, 12, 'Butterfree', ['Bug', 'Flying']),
  new Pokemon(13, 13, 'Weedle', ['Bug', 'Poison']),
  new Pokemon(14, 14, 'Kakuna', ['Bug', 'Poison']),
  new Pokemon(15, 15, 'Beedrill', ['Bug', 'Poison']),
  new Pokemon(16, 16, 'Pidgey', ['Normal', 'Flying']),
  new Pokemon(17, 17, 'Pigeotto', ['Normal', 'Flying']),
  new Pokemon(18, 18, 'Pidgeot', ['Normal', 'Flying']),
  new Pokemon(19, 19, 'Rattata', ['Normal']),
  new Pokemon(20, 20, 'Raticate', ['Normal']),
  new Pokemon(21, 21, 'Spearow', ['Normal', 'Flying']),
  new Pokemon(22, 22, 'Fearow', ['Normal', 'Flying']),
  new Pokemon(23, 23, 'Ekans', ['Poison']),
  new Pokemon(24, 24, 'Arbok', ['Poison']),
  new Pokemon(25, 25, 'Pikachu', ['Electric']),
  new Pokemon(26, 26, 'Raichu', ['Electric']),
  new Pokemon(27, 27, 'Sandshrew', ['Ground']),
  new Pokemon(28, 28, 'Sandslash', ['Ground']),
  new Pokemon(29, 29, 'Nidoran♀', ['Poison']),
  new Pokemon(30, 30, 'Nidorina', ['Poison']),
  new Pokemon(31, 31, 'Nidoqueen', ['Poison', 'Ground']),
  new Pokemon(32, 32, 'Nidoran♂', ['Poison']),
  new Pokemon(33, 33, 'Nidorino', ['Poison']),
  new Pokemon(34, 34, 'Nidoking', ['Poison', 'Ground']),
  new Pokemon(35, 35, 'Clefairy', ['Fairy']),
  new Pokemon(36, 36, 'Clefable', ['Fairy']),
  new Pokemon(37, 37, 'Vulpix', ['Fire']),
  new Pokemon(38, 38, 'Ninetales', ['Fire'] ),
  new Pokemon(39, 39, 'Jigglypuff', ['Normal', 'Fairy']),
  new Pokemon(40, 40, 'Wigglytuff', ['Normal', 'Fairy']),
  new Pokemon(41, 41, 'Zubat', ['Poison', 'Flying']),
  new Pokemon(42, 42, 'Golbat', ['Poison', 'Flying']),
  new Pokemon(43, 43, 'Oddish', ['Grass', 'Poison']),
  new Pokemon(44, 44, 'Gloom', ['Grass', 'Poison']),
  new Pokemon(45, 45, 'Vileplume', ['Grass', 'Poison']),
  new Pokemon(46, 46, 'Paras', ['Bug', 'Grass']),
  new Pokemon(47, 47, 'Parasect', ['Bug', 'Grass']),
  new Pokemon(48, 48, 'Venonat', ['Bug', 'Poison']),
  new Pokemon(49, 49, 'Venomoth', ['Bug', 'Poison']),
  new Pokemon(50, 50, 'Diglett', ['Ground']),
  new Pokemon(51, 51, 'Dugtrio', ['Ground']),
  new Pokemon(52, 52, 'Meowth', ['Normal']),
  new Pokemon(53, 53, 'Persian', ['Normal']),
  new Pokemon(54, 54, 'Psyduck', ['Water']),
  new Pokemon(55, 55, 'Golduck', ['Water']),
  new Pokemon(56, 56, 'Mankey', ['Fighting']),
  new Pokemon(57, 57, 'Primeape', ['Fighting']),
  new Pokemon(58, 58, 'Growlithe', ['Fire']),
  new Pokemon(59, 59, 'Arcanine', ['Fire']),
  new Pokemon(60, 60, 'Poliwag', ['Water']),
  new Pokemon(61, 61, 'Poliwhirl', ['Water']),
  new Pokemon(62, 62, 'Poliwrath', ['Water', 'Fighting']),
  new Pokemon(63, 63, 'Abra', ['Psychic']),
  new Pokemon(64, 64, 'Kadabra', ['Psychic']),
  new Pokemon(65, 65, 'Alakazam', ['Psychic']),
  new Pokemon(66, 66, 'Machop', ['Fighting']),
  new Pokemon(67, 67, 'Machoke', ['Fighting']),
  new Pokemon(68, 68, 'Machamp', ['Fighting']),
  new Pokemon(69, 69, 'Bellsprout', ['Grass', 'Poison']),
  new Pokemon(70, 70, 'Weepinbell', ['Grass', 'Poison']),
  new Pokemon(71, 71, 'Victreebel', ['Grass', 'Poison']),
  new Pokemon(72, 72, 'Tentacool', ['Water', 'Poison']),
  new Pokemon(73, 73, 'Tentacruel', ['Water', 'Poison']),
  new Pokemon(74, 74, 'Geodude', ['Rock', 'Ground']),
  new Pokemon(75, 75, 'Graveler', ['Rock', 'Ground']),
  new Pokemon(76, 76, 'Golem', ['Rock', 'Ground'] ),
  new Pokemon(77, 77, 'Ponyta', ['Fire']),
  new Pokemon(78, 78, 'Rapidash', ['Fire']),
  new Pokemon(79, 79, 'Slowpoke', ['Water', 'Psychic']),
  new Pokemon(80, 80, 'Slowbro', ['Water', 'Psychic']),
  new Pokemon(81, 81, 'Magnemite', ['Electric', 'Steel']),
  new Pokemon(82, 82, 'Magneton', ['Electric', 'Steel']),
  new Pokemon(83, 83, "Farfetch" + "\'" + "d", ['Normal', 'Flying']),
  new Pokemon(84, 84, 'Doduo', ['Normal', 'Flying']),
  new Pokemon(85, 85, 'Dodrio', ['Normal', 'Flying']),
  new Pokemon(86, 86, 'Seel', ['Water']),
  new Pokemon(87, 87, 'Dewgong', ['Water', 'Ice']),
  new Pokemon(88, 88, 'Grimer', ['Poison']),
  new Pokemon(89, 89, 'Muk', ['Poison']),
  new Pokemon(90, 90, 'Shellder', ['Water']),
  new Pokemon(91, 91, 'Cloyster', ['Water', 'Ice']),
  new Pokemon(92, 92, 'Gastly', ['Ghost', 'Poison']),
  new Pokemon(93, 93, 'Haunter', ['Ghost', 'Poison']),
  new Pokemon(94, 94, 'Gengar', ['Ghost', 'Poison']),
  new Pokemon(95, 95, 'Onix', ['Rock', 'Ground']),
  new Pokemon(96, 96, 'Drowzee', ['Psychic']),
  new Pokemon(97, 97, 'Hypno', ['Psychic']),
  new Pokemon(98, 98, 'Krabby', ['Water']),
  new Pokemon(99, 99, 'Kingler', ['Water']),
  new Pokemon(100, 100, 'Voltorb', ['Electric']),
  new Pokemon(101, 101, 'Electrode', ['Electric']),
  new Pokemon(102, 102, 'Exeggcute', ['Grass', 'Psychic']),
  new Pokemon(103, 103, 'Exeggutor', ['Grass', 'Psychic']),
  new Pokemon(104, 104, 'Cubone', ['Ground']),
  new Pokemon(105, 105, 'Marowak', ['Ground']),
  new Pokemon(106, 106, 'Hitmonlee', ['Fighting']),
  new Pokemon(107, 107, 'Hitmonchan', ['Fighting']),
  new Pokemon(108, 108, 'Lickitung', ['Normal']),
  new Pokemon(109, 109, 'Koffing', ['Poison']),
  new Pokemon(110, 110, 'Weezing', ['Poison']),
  new Pokemon(111, 111, 'Rhyhorn', ['Ground', 'Rock']),
  new Pokemon(112, 112, 'Rhydon', ['Ground', 'Rock']),
  new Pokemon(113, 113, 'Chansey', ['Normal']),
  new Pokemon(114, 114, 'Tangela', ['Grass']),
  new Pokemon(115, 115, 'Kangaskhan', ['Normal']),
  new Pokemon(116, 116, 'Horsea', ['Water']),
  new Pokemon(117, 117, 'Seadra', ['Water']),
  new Pokemon(118, 118, 'Goldeen', ['Water']),
  new Pokemon(119, 119, 'Seaking', ['Water']),
  new Pokemon(120, 120, 'Staryu', ['Water']),
  new Pokemon(121, 121, 'Starmie', ['Water', 'Psychic']),
  new Pokemon(122, 122, 'Mr. Mime', ['Psychic', 'Fairy']),
  new Pokemon(123, 123, 'Scyther', ['Bug', 'Flying']),
  new Pokemon(124, 124, 'Jynx', ['Ice', 'Psychic']),
  new Pokemon(125, 125, 'Electabuzz', ['Electric']),
  new Pokemon(126, 126, 'Magmar', ['Fire']),
  new Pokemon(127, 127, 'Pinsir', ['Bug']),
  new Pokemon(128, 128, 'Tauros', ['Normal']),
  new Pokemon(129, 129, 'Magikarp', ['Water']),
  new Pokemon(130, 130, 'Gyarados', ['Water', 'Flying']),
  new Pokemon(131, 131, 'Lapras', ['Water']),
  new Pokemon(132, 132, 'Ditto', ['Normal']),
  new Pokemon(133, 133, 'Eevee', ['Normal']),
  new Pokemon(134, 134, 'Vaporeon', ['Water']),
  new Pokemon(135, 135, 'Jolteon', ['Electric']),
  new Pokemon(136, 136, 'Flareon', ['Fire']),
  new Pokemon(137, 137, 'Porygon', ['Normal']),
  new Pokemon(138, 138, 'Omanyte', ['Rock', 'Water']),
  new Pokemon(139, 139, 'Omastar', ['Rock', 'Water']),
  new Pokemon(140, 140, 'Kabuto', ['Rock', 'Water']),
  new Pokemon(141, 141, 'Kabutops', ['Rock', 'Flying']),
  new Pokemon(142, 142, 'Aerodactyl', ['Rock', 'Flying']),
  new Pokemon(143, 143, 'Snorlax', ['Normal']),
  new Pokemon(144, 144, 'Articuno', ['Ice', 'Flying']),
  new Pokemon(145, 145, 'Zapdos', ['Electric', 'Flying']),
  new Pokemon(146, 146, 'Moltres', ['Fire', 'Flying']),
  new Pokemon(147, 147, 'Dratini', ['Dragon']),
  new Pokemon(148, 148, 'Dragonair', ['Dragon']),
  new Pokemon(149, 149, 'Dragonite', ['Dragon', 'Flying']),
  new Pokemon(150, 150, 'Mewtwo', ['Psychic'] ),
  new Pokemon(151, 151, 'Mew', ['Psychic'] )
]

function KantoLoad() {
  $('#Center').text("Kanto Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for (let p of kantoPokemonList) {
    p.loadToPage();
    p.ShowTypes();
  }
}
