var pokemonList = [];
function loadMelemele() {
  pokemonList = [
    new Pokemon(722, 'Rowlet', ['Grass', 'Flying']),
    new Pokemon(723, 'Dartrix', ['Grass', 'Flying']),
    new Pokemon(724, 'Decidueye', ['Grass', 'Ghost']),
    new Pokemon(725, 'Litten', ['Fire']),
    new Pokemon(726, 'Torracat', ['Fire']),
    new Pokemon(727, 'Incineroar', ['Fire', 'Dark']),
    new Pokemon(728, 'Popplio', ['Water']),
    new Pokemon(729, 'Brionne', ['Water']),
    new Pokemon(730, 'Primarina', ['Water', 'Fairy']),
    new Pokemon(731, 'Pikipek', ['Normal', 'Flying']),
    new Pokemon(732, 'Trumbeak', ['Normal', 'Flying']),
    new Pokemon(733, 'Toucannon', ['Normal', 'Flying']),
    new Pokemon(734, 'Yungoos', ['Normal']),
    new Pokemon(735, 'Gumshoos', ['Normal']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(10, 'Caterpie', ['Bug']),
    new Pokemon(11, 'Metapod', ['Bug']),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying']),
    new Pokemon(165, 'Ledyba', ['Bug', 'Flying']),
    new Pokemon(166, 'Ledian', ['Bug', 'Flying']),
    new Pokemon(167, 'Spinarak', ['Bug', 'Poison']),
    new Pokemon(168, 'Ariados', ['Bug', 'Poison']),
    new Pokemon(427, 'Buneary', ['Normal']),
    new Pokemon(428, 'Lopunny', ['Normal']),
    new Pokemon(686, 'Inkay', ['Dark', 'Psychic']),
    new Pokemon(687, 'Malamar', ['Dark', 'Psychic']),
    new Pokemon(570, 'Zorua', ['Dark']),
    new Pokemon(571, 'Zoroark', ['Dark']),
    new Pokemon(676, 'Furfrou', ['Normal']),
    new Pokemon(172, 'Pichu', ['Electric']),
    new Pokemon(25, 'Pikachu', ['Electric']),
    new Pokemon(26, 'Raichu', ['Electric']),
    new Pokemon(736, 'Grubbin', ['Bug']),
    new Pokemon(737, 'Charjabug', ['Bug', 'Electric']),
    new Pokemon(738, 'Vikavolt', ['Bug', 'Electric']),
    new Pokemon(438, 'Bonsly', ['Rock']),
    new Pokemon(185, 'Sudowoodo', ['Rock']),
    new Pokemon(440, 'Happiny', ['Normal']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(242, 'Blissey', ['Normal']),
    new Pokemon(446, 'Munchlax', ['Water']),
    new Pokemon(143, 'Snorlax', ['Water']),
    new Pokemon(79, 'Slowpoke', ['Water', 'Psychic']),
    new Pokemon(80, 'Slowbro', ['Water', 'Psychic']),
    new Pokemon(199, 'Slowking', ['Water', 'Psychic']),
    new Pokemon(278, 'Wingull', ['Water', 'Flying']),
    new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
    new Pokemon(63, 'Abra', ['Psychic']),
    new Pokemon(64, 'Kadabra', ['Psychic']),
    new Pokemon(65, 'Alakazam', ['Psychic']),
    new Pokemon(52, 'Meowth', ['Normal']),
    new Pokemon(53, 'Persian', ['Normal']),
    new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
    new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
    new Pokemon(462, 'Magnezone', ['Electric', 'Steel']),
    new Pokemon(88, 'Grimer', ['Poison']),
    new Pokemon(89, 'Muk', ['Poison']),
    new Pokemon(439, 'Mime Jr.', ['Psychic', 'Fairy']),
    new Pokemon(122, 'Mr. Mime', ['Psychic', 'Fairy']),
    new Pokemon(23, 'Ekans', ['Poison']),
    new Pokemon(24, 'Arbok', ['Poison']),
    new Pokemon(206, 'Dunsparce', ['Normal']),
    new Pokemon(58, 'Growlithe', ['Fire']),
    new Pokemon(59, 'Arcanine', ['Fire']),
    new Pokemon(96, 'Drowzee', ['Psychic']),
    new Pokemon(97, 'Hypno', ['Psychic']),
    new Pokemon(296, 'Makuhita', ['Fighting']),
    new Pokemon(297, 'Hariyama', ['Fighting']),
    new Pokemon(235, 'Smeargle', ['Normal']),
    new Pokemon(739, 'Crabrawler', ['Fighting']),
    new Pokemon(740, 'Crabominable', ['Fighting', 'Ice']),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(425, 'Drifloon', ['Ghost', 'Flying']),
    new Pokemon(426, 'Drifblim', ['Ghost', 'Flying']),
    new Pokemon(198, 'Murkrow', ['Dark', 'Flying']),
    new Pokemon(430, 'Honchkrow', ['Dark', 'Flying']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
    new Pokemon(714, 'Noibat', ['Flying', 'Dragon']),
    new Pokemon(715, 'Noivern', ['Flying', 'Dragon']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
    new Pokemon(627, 'Rufflet', ['Normal', 'Flying']),
    new Pokemon(628, 'Braviary', ['Normal', 'Flying']),
    new Pokemon(629, 'Vullaby', ['Dark', 'Flying']),
    new Pokemon(630, 'Mandibuzz', ['Dark', 'Flying']),
    new Pokemon(56, 'Mankey', ['Fighting']),
    new Pokemon(57, 'Primeape', ['Fighting']),
    new Pokemon(225, 'Delibird', ['Ice', 'Flying']),
    new Pokemon(701, 'Hawlucha', ['Fighting', 'Flying']),
    new Pokemon(741, 'Oricorio', ['Fire', 'Flying']),
    new Pokemon(742, 'Cutiefly', ['Bug', 'Fairy']),
    new Pokemon(743, 'Ribombee', ['Bug', 'Fairy']),
    new Pokemon(669, 'Flabébé', ['Fairy']),
    new Pokemon(670, 'Floette', ['Fairy']),
    new Pokemon(671, 'Florges', ['Fairy']),
    new Pokemon(548, 'Petilil', ['Grass']),
    new Pokemon(549, 'Lilligant', ['Grass']),
    new Pokemon(546, 'Cottonee', ['Grass', 'Fairy']),
    new Pokemon(547, 'Whimsicott', ['Grass', 'Fairy']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(238, 'Smoochum', ['Ice', 'Psychic']),
    new Pokemon(124, 'Jynx', ['Ice', 'Psychic']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(339, 'Barboach', ['Water', 'Ground']),
    new Pokemon(340, 'Whiscash', ['Water', 'Ground']),
    new Pokemon(86, 'Seel', ['Water']),
    new Pokemon(87, 'Dewgong', ['Water', 'Ice']),
    new Pokemon(66, 'Machop', ['Fighting']),
    new Pokemon(67, 'Machoke', ['Fighting']),
    new Pokemon(68, 'Machamp', ['Fighting']),
    new Pokemon(524, 'Roggenrola', ['Rock']),
    new Pokemon(525, 'Boldore', ['Rock']),
    new Pokemon(526, 'Gigalith', ['Rock']),
    new Pokemon(703, 'Carbink', ['Rock', 'Fairy']),
    new Pokemon(302, 'Sableye', ['Dark', 'Ghost']),
    new Pokemon(303, 'Mawile', ['Steel', 'Fairy']),
    new Pokemon(744, 'Rockruff', ['Rock']),
    new Pokemon(745, 'Lycanroc', ['Rock']),
    new Pokemon(327, 'Spinda', ['Normal']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(456, 'Finneon', ['Water']),
    new Pokemon(457, 'Lumineon', ['Water']),
    new Pokemon(746, 'Wishiwashi', ['Water']),
    new Pokemon(370, 'Luvdisc', ['Water']),
    new Pokemon(222, 'Corsola', ['Water', 'Rock']),
    new Pokemon(747, 'Mareanie', ['Poison', 'Water']),
    new Pokemon(748, 'Toxapex', ['Poison', 'Water']),
    new Pokemon(90, 'Shellder', ['Water']),
    new Pokemon(91, 'Cloyster', ['Water', 'Ice']),
    new Pokemon(366, 'Clamperl', ['Water']),
    new Pokemon(367, 'Huntail', ['Water']),
    new Pokemon(368, 'Gorebyss', ['Water']),
    new Pokemon(223, 'Remoraid', ['Water']),
    new Pokemon(224, 'Octillery', ['Water']),
    new Pokemon(458, 'Mantyke', ['Water', 'Flying']),
    new Pokemon(226, 'Mantine', ['Water', 'Flying']),
    new Pokemon(371, 'Bagon', ['Dragon']),
    new Pokemon(372, 'Shelgon', ['Dragon']),
    new Pokemon(373, 'Salamence', ['Dragon', 'Flying']),
    new Pokemon(785, 'Tapu Koko', ['Electric', 'Fairy'])
  ]
  $('#Center').text("The Melemele Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();

  for (var j = 0; j < pokemonList.length; j++) {
    pokemonList[j].loadToPage();
    pokemonList[j].ShowTypes();
  }
}

function loadAkala() {
  pokemonList = [
    new Pokemon(731, 'Pikipek', ['Normal', 'Flying']),
    new Pokemon(732, 'Trumbeak', ['Normal', 'Flying']),
    new Pokemon(733, 'Toucannon', ['Normal', 'Flying']),
    new Pokemon(734, 'Yungoos', ['Normal']),
    new Pokemon(735, 'Gumshoos', ['Normal']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(10, 'Caterpie', ['Bug']),
    new Pokemon(11, 'Metapod', ['Bug']),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying']),
    new Pokemon(736, 'Grubbin', ['Bug']),
    new Pokemon(737, 'Charjabug', ['Bug', 'Electric']),
    new Pokemon(738, 'Vikavolt', ['Bug', 'Electric']),
    new Pokemon(438, 'Bonsly', ['Rock']),
    new Pokemon(185, 'Sudowoodo', ['Rock']),
    new Pokemon(440, 'Happiny', ['Normal']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(242, 'Blissey', ['Normal']),
    new Pokemon(278, 'Wingull', ['Water', 'Flying']),
    new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
    new Pokemon(739, 'Crabrawler', ['Fighting']),
    new Pokemon(740, 'Crabominable', ['Fighting', 'Ice']),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(741, 'Oricorio', ['Fire', 'Flying']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(339, 'Barboach', ['Water', 'Ground']),
    new Pokemon(340, 'Whiscash', ['Water', 'Ground']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(456, 'Finneon', ['Water']),
    new Pokemon(457, 'Lumineon', ['Water']),
    new Pokemon(746, 'Wishiwashi', ['Water']),
    new Pokemon(370, 'Luvdisc', ['Water']),
    new Pokemon(222, 'Corsola', ['Water', 'Rock']),
    new Pokemon(747, 'Mareanie', ['Poison', 'Water']),
    new Pokemon(748, 'Toxapex', ['Poison', 'Water']),
    new Pokemon(223, 'Remoraid', ['Water']),
    new Pokemon(224, 'Octillery', ['Water']),
    new Pokemon(458, 'Mantyke', ['Water', 'Flying']),
    new Pokemon(226, 'Mantine', ['Water', 'Flying']),
    new Pokemon(506, 'Lillipup', ['Normal']),
    new Pokemon(507, 'Herdier', ['Normal']),
    new Pokemon(508, 'Stoutland', ['Normal']),
    new Pokemon(133, 'Eevee', ['Normal']),
    new Pokemon(134, 'Vaporeon', ['Water']),
    new Pokemon(135, 'Jolteon', ['Electric']),
    new Pokemon(136, 'Flareon', ['Fire']),
    new Pokemon(196, 'Espeon', ['Psychic']),
    new Pokemon(197, 'Umbreon', ['Dark']),
    new Pokemon(470, 'Leafeon', ['Grass']),
    new Pokemon(471, 'Glaceon', ['Ice']),
    new Pokemon(700, 'Sylveon', ['Fairy']),
    new Pokemon(179, 'Mareep', ['Electric']),
    new Pokemon(180, 'Flaaffy', ['Electric']),
    new Pokemon(181, 'Ampharos', ['Electric']),
    new Pokemon(749, 'Mudbray', ['Ground']),
    new Pokemon(750, 'Mudsdale', ['Ground']),
    new Pokemon(174, 'Igglybuff', ['Normal', 'Fairy']),
    new Pokemon(39, 'Jigglypuff', ['Normal', 'Fairy']),
    new Pokemon(40, 'Wigglytuff', ['Normal', 'Fairy']),
    new Pokemon(128, 'Tauros', ['Normal']),
    new Pokemon(241, 'Miltank', ['Normal']),
    new Pokemon(283, 'Surskit', ['Bug', 'Water']),
    new Pokemon(284, 'Masquerain', ['Bug', 'Flying']),
    new Pokemon(751, 'Dewpider', ['Water', 'Bug']),
    new Pokemon(752, 'Araquanid', ['Water', 'Bug']),
    new Pokemon(753, 'Fomantis', ['Grass']),
    new Pokemon(754, 'Lurantis', ['Grass']),
    new Pokemon(755, 'Morelull', ['Grass', 'Fairy']),
    new Pokemon(756, 'Shiinotic', ['Grass', 'Fairy']),
    new Pokemon(46, 'Paras', ['Bug', 'Grass']),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass']),
    new Pokemon(60, 'Poliwag', ['Water']),
    new Pokemon(61, 'Poliwhirl', ['Water']),
    new Pokemon(62, 'Poliwrath', ['Water', 'Fighting']),
    new Pokemon(186, 'Politoed', ['Water']),
    new Pokemon(118, 'Goldeen', ['Water']),
    new Pokemon(119, 'Seaking', ['Water']),
    new Pokemon(550, 'Basculin', ['Water']),
    new Pokemon(349, 'Feebas', ['Water']),
    new Pokemon(350, 'Milotic', ['Water']),
    new Pokemon(594, 'Alomomola', ['Water']),
    new Pokemon(661, 'Fletchling', ['Normal', 'Flying']),
    new Pokemon(662, 'Fletchinder', ['Fire', 'Flying']),
    new Pokemon(663, 'Talonflame', ['Fire', 'Flying']),
    new Pokemon(757, 'Salandit', ['Poison', 'Fire']),
    new Pokemon(758, 'Salazzle', ['Poison', 'Fire']),
    new Pokemon(104, 'Cubone', ['Ground']),
    new Pokemon(105, 'Marowak', ['Ground']),
    new Pokemon(115, 'Kangaskhan', ['Normal']),
    new Pokemon(240, 'Magby', ['Fire']),
    new Pokemon(126, 'Magmar', ['Fire']),
    new Pokemon(467, 'Magmortar', ['Fire']),
    new Pokemon(636, 'Larvesta', ['Bug', 'Fire']),
    new Pokemon(637, 'Volcarona', ['Bug', 'Fire']),
    new Pokemon(759, 'Stufful', ['Normal', 'Fighting']),
    new Pokemon(760, 'Bewear', ['Normal', 'Fighting']),
    new Pokemon(761, 'Bounsweet', ['Grass']),
    new Pokemon(762, 'Steenee', ['Grass']),
    new Pokemon(763, 'Tsareena', ['Grass']),
    new Pokemon(764, 'Comfey', ['Fairy']),
    new Pokemon(127, 'Pinsir', ['Bug']),
    new Pokemon(163, 'Hoothoot', ['Normal', 'Flying']),
    new Pokemon(164, 'Noctowl', ['Normal', 'Flying']),
    new Pokemon(352, 'Kecleon', ['Normal']),
    new Pokemon(765, 'Oranguru', ['Normal', 'Psychic']),
    new Pokemon(766, 'Passimian', ['Fighting']),
    new Pokemon(704, 'Goomy', ['Dragon']),
    new Pokemon(705, 'Sliggoo', ['Dragon']),
    new Pokemon(706, 'Goodra', ['Dragon']),
    new Pokemon(351, 'Castform', ['Normal']),
    new Pokemon(767, 'Wimpod', ['Bug', 'Water']),
    new Pokemon(768, 'Golisopod', ['Bug', 'Water']),
    new Pokemon(120, 'Staryu', ['Water']),
    new Pokemon(121, 'Starmie', ['Water', 'Psychic']),
    new Pokemon(769, 'Sandygast', ['Ghost', 'Ground']),
    new Pokemon(770, 'Palossand', ['Ghost', 'Ground']),
    new Pokemon(138, 'Omanyte', ['Rock', 'Water']),
    new Pokemon(139, 'Omastar', ['Rock', 'Water']),
    new Pokemon(140, 'Kabuto', ['Rock', 'Water']),
    new Pokemon(141, 'Kabutops', ['Rock', 'Water']),
    new Pokemon(345, 'Lileep', ['Rock', 'Grass']),
    new Pokemon(346, 'Cradily', ['Rock', 'Grass']),
    new Pokemon(347, 'Anorith', ['Rock', 'Bug']),
    new Pokemon(348, 'Armaldo', ['Rock', 'Bug']),
    new Pokemon(408, 'Cranidos', ['Rock']),
    new Pokemon(409, 'Rampardos', ['Rock']),
    new Pokemon(410, 'Shieldon', ['Rock', 'Steel']),
    new Pokemon(411, 'Bastiodon', ['Rock', 'Steel']),
    new Pokemon(566, 'Archen', ['Rock', 'Flying']),
    new Pokemon(567, 'Archeops', ['Rock', 'Flying']),
    new Pokemon(564, 'Tirtouga', ['Water', 'Rock']),
    new Pokemon(565, 'Carracosta', ['Water', 'Rock']),
    new Pokemon(696, 'Tyrunt', ['Rock', 'Dragon']),
    new Pokemon(697, 'Tyrantrum', ['Rock', 'Dragon']),
    new Pokemon(698, 'Amaura', ['Rock', 'Ice']),
    new Pokemon(699, 'Aurorus', ['Rock', 'Ice']),
    new Pokemon(246, 'Larvitar', ['Rock', 'Ground']),
    new Pokemon(247, 'Pupitar', ['Rock', 'Ground']),
    new Pokemon(248, 'Tyranitar', ['Rock', 'Ground']),
    new Pokemon(708, 'Phantump', ['Ghost', 'Grass']),
    new Pokemon(709, 'Trevenant', ['Ghost', 'Grass']),
    new Pokemon(177, 'Natu', ['Psychic', 'Flying']),
    new Pokemon(178, 'Xatu', ['Psychic', 'Flying']),
    new Pokemon(299, 'Nosepass', ['Rock']),
    new Pokemon(476, 'Probopass', ['Rock', 'Steel']),
    new Pokemon(771, 'Pyukumuku', ['Water']),
    new Pokemon(170, 'Chinchou', ['Water', 'Electric']),
    new Pokemon(171, 'Lanturn', ['Water', 'Electric']),
    new Pokemon(786, 'Tapu Lele', ['Psychic', 'Fairy'])
  ]
  $('#Center').text("The Melemele Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();

  for (var j = 0; j < pokemonList.length; j++) {
    pokemonList[j].loadToPage();
    pokemonList[j].ShowTypes();
  }
}

function loadUlaula() {
  pokemonList = [
    new Pokemon(731, 'Pikipek', ['Normal', 'Flying']),
    new Pokemon(732, 'Trumbeak', ['Normal', 'Flying']),
    new Pokemon(733, 'Toucannon', ['Normal', 'Flying']),
    new Pokemon(734, 'Yungoos', ['Normal']),
    new Pokemon(735, 'Gumshoos', ['Normal']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(165, 'Ledyba', ['Bug', 'Flying']),
    new Pokemon(166, 'Ledian', ['Bug', 'Flying']),
    new Pokemon(167, 'Spinarak', ['Bug', 'Poison']),
    new Pokemon(168, 'Ariados', ['Bug', 'Poison']),
    new Pokemon(736, 'Grubbin', ['Bug']),
    new Pokemon(737, 'Charjabug', ['Bug', 'Electric']),
    new Pokemon(738, 'Vikavolt', ['Bug', 'Electric']),
    new Pokemon(440, 'Happiny', ['Normal']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(242, 'Blissey', ['Normal']),
    new Pokemon(79, 'Slowpoke', ['Water', 'Psychic']),
    new Pokemon(80, 'Slowbro', ['Water', 'Psychic']),
    new Pokemon(199, 'Slowking', ['Water', 'Psychic']),
    new Pokemon(278, 'Wingull', ['Water', 'Flying']),
    new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
    new Pokemon(52, 'Meowth', ['Normal']),
    new Pokemon(53, 'Persian', ['Normal']),
    new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
    new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
    new Pokemon(462, 'Magnezone', ['Electric', 'Steel']),
    new Pokemon(88, 'Grimer', ['Poison']),
    new Pokemon(89, 'Muk', ['Poison']),
    new Pokemon(739, 'Crabrawler', ['Fighting']),
    new Pokemon(740, 'Crabominable', ['Fighting', 'Ice']),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
    new Pokemon(741, 'Oricorio', ['Fire', 'Flying']),
    new Pokemon(742, 'Cutiefly', ['Bug', 'Fairy']),
    new Pokemon(743, 'Ribombee', ['Bug', 'Fairy']),
    new Pokemon(669, 'Flabébé', ['Fairy']),
    new Pokemon(670, 'Floette', ['Fairy']),
    new Pokemon(671, 'Florges', ['Fairy']),
    new Pokemon(548, 'Petilil', ['Grass']),
    new Pokemon(549, 'Lilligant', ['Grass']),
    new Pokemon(546, 'Cottonee', ['Grass', 'Fairy']),
    new Pokemon(547, 'Whimsicott', ['Grass', 'Fairy']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(456, 'Finneon', ['Water']),
    new Pokemon(457, 'Lumineon', ['Water']),
    new Pokemon(746, 'Wishiwashi', ['Water']),
    new Pokemon(366, 'Clamperl', ['Water']),
    new Pokemon(367, 'Huntail', ['Water']),
    new Pokemon(368, 'Gorebyss', ['Water']),
    new Pokemon(749, 'Mudbray', ['Ground']),
    new Pokemon(750, 'Mudsdale', ['Ground']),
    new Pokemon(283, 'Surskit', ['Bug', 'Water']),
    new Pokemon(284, 'Masquerain', ['Bug', 'Flying']),
    new Pokemon(751, 'Dewpider', ['Water', 'Bug']),
    new Pokemon(752, 'Araquanid', ['Water', 'Bug']),
    new Pokemon(755, 'Morelull', ['Grass', 'Fairy']),
    new Pokemon(756, 'Shiinotic', ['Grass', 'Fairy']),
    new Pokemon(46, 'Paras', ['Bug', 'Grass']),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass']),
    new Pokemon(60, 'Poliwag', ['Water']),
    new Pokemon(61, 'Poliwhirl', ['Water']),
    new Pokemon(62, 'Poliwrath', ['Water', 'Fighting']),
    new Pokemon(186, 'Politoed', ['Water']),
    new Pokemon(118, 'Goldeen', ['Water']),
    new Pokemon(119, 'Seaking', ['Water']),
    new Pokemon(550, 'Basculin', ['Water']),
    new Pokemon(704, 'Goomy', ['Dragon']),
    new Pokemon(705, 'Sliggoo', ['Dragon']),
    new Pokemon(706, 'Goodra', ['Dragon']),
    new Pokemon(351, 'Castform', ['Normal']),
    new Pokemon(568, 'Trubbish', ['Poison']),
    new Pokemon(569, 'Garbodor', ['Poison']),
    new Pokemon(572, 'Minccino', ['Normal']),
    new Pokemon(573, 'Cinccino', ['Normal']),
    new Pokemon(204, 'Pineco', ['Bug']),
    new Pokemon(205, 'Forretress', ['Bug', 'Steel']),
    new Pokemon(227, 'Skarmory', ['Steel', 'Flying']),
    new Pokemon(132, 'Ditto', ['Normal']),
    new Pokemon(173, 'Cleffa', ['Fairy']),
    new Pokemon(35, 'Clefairy', ['Fairy']),
    new Pokemon(36, 'Clefable', ['Fairy']),
    new Pokemon(605, 'Elgyem', ['Psychic']),
    new Pokemon(606, 'Beheeyem', ['Psychic']),
    new Pokemon(774, 'Minior', ['Rock', 'Flying']),
    new Pokemon(374, 'Beldum', ['Steel', 'Psychic']),
    new Pokemon(375, 'Metang', ['Steel', 'Psychic']),
    new Pokemon(376, 'Metagross', ['Steel', 'Psychic']),
    new Pokemon(137, 'Porygon', ['Normal']),
    new Pokemon(233, 'Porygon2', ['Normal']),
    new Pokemon(474, 'Porygon-Z', ['Normal']),
    new Pokemon(674, 'Pancham', ['Fighting']),
    new Pokemon(675, 'Pangoro', ['Fighting', 'Dark']),
    new Pokemon(775, 'Komala', ['Normal']),
    new Pokemon(324, 'Torkoal', ['Fire']),
    new Pokemon(776, 'Turtonator', ['Fire', 'Dragon']),
    new Pokemon(228, 'Houndour', ['Dark', 'Fire']),
    new Pokemon(229, 'Houndoom', ['Dark', 'Fire']),
    new Pokemon(702, 'Dedenne', ['Electric', 'Fairy']),
    new Pokemon(777, 'Togedemaru', ['Electric', 'Steel']),
    new Pokemon(309, 'Electrike', ['Electric']),
    new Pokemon(310, 'Manectric', ['Electric']),
    new Pokemon(239, 'Elekid', ['Electric']),
    new Pokemon(125, 'Electabuzz', ['Electric']),
    new Pokemon(466, 'Electivire', ['Electric']),
    new Pokemon(74, 'Geodude', ['Rock', 'Ground']),
    new Pokemon(75, 'Graveler', ['Rock', 'Ground']),
    new Pokemon(76, 'Golem', ['Rock', 'Ground']),
    new Pokemon(551, 'Sandile', ['Ground', 'Dark']),
    new Pokemon(552, 'Krokorok', ['Ground', 'Dark']),
    new Pokemon(553, 'Krookodile', ['Ground', 'Dark']),
    new Pokemon(328, 'Trapinch', ['Ground']),
    new Pokemon(329, 'Vibrava', ['Ground', 'Dragon']),
    new Pokemon(330, 'Flygon', ['Ground', 'Dragon']),
    new Pokemon(443, 'Gible', ['Dragon', 'Ground']),
    new Pokemon(444, 'Gabite', ['Dragon', 'Ground']),
    new Pokemon(445, 'Garchomp', ['Dragon', 'Ground']),
    new Pokemon(343, 'Baltoy', ['Ground', 'Psychic']),
    new Pokemon(344, 'Claydol', ['Ground', 'Psychic']),
    new Pokemon(622, 'Golett', ['Ground', 'Ghost']),
    new Pokemon(623, 'Golurk', ['Ground', 'Ghost']),
    new Pokemon(707, 'Klefki', ['Steel', 'Fairy']),
    new Pokemon(778, 'Mimikyu', ['Ghost', 'Fairy']),
    new Pokemon(353, 'Shuppet', ['Ghost']),
    new Pokemon(354, 'Banette', ['Ghost']),
    new Pokemon(592, 'Frillish', ['Water', 'Ghost']),
    new Pokemon(593, 'Jellicent', ['Water', 'Ghost']),
    new Pokemon(779, 'Bruxish', ['Water', 'Psychic']),
    new Pokemon(780, 'Drampa', ['Normal', 'Dragon']),
    new Pokemon(359, 'Absol', ['Dark']),
    new Pokemon(361, 'Snorunt', ['Ice']),
    new Pokemon(362, 'Glalie', ['Ice']),
    new Pokemon(478, 'Froslass', ['Ice', 'Ghost']),
    new Pokemon(215, 'Sneasel', ['Dark', 'Ice']),
    new Pokemon(461, 'Weavile', ['Dark', 'Ice']),
    new Pokemon(27, 'Sandshrew', ['Ground']),
    new Pokemon(28, 'Sandslash', ['Ground']),
    new Pokemon(37, 'Vulpix', ['Fire']),
    new Pokemon(38, 'Ninetales', ['Fire']),
    new Pokemon(582, 'Vanillite', ['Ice']),
    new Pokemon(583, 'Vanillish', ['Ice']),
    new Pokemon(584, 'Vanilluxe', ['Ice']),
    new Pokemon(559, 'Scraggy', ['Dark', 'Fighting']),
    new Pokemon(560, 'Scrafty', ['Dark', 'Fighting']),
    new Pokemon(624, 'Pawniard', ['Dark', 'Steel']),
    new Pokemon(625, 'Bisharp', ['Dark', 'Steel']),
    new Pokemon(787, 'Tapu Bulu', ['Grass', 'Fairy'])
  ]
  $('#Center').text("The Ula'ula Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();

  for (var j = 0; j < pokemonList.length; j++) {
    pokemonList[j].loadToPage();
    pokemonList[j].ShowTypes();
  }
}

function loadPoni() {
  pokemonList = [
    new Pokemon(731, 'Pikipek', ['Normal', 'Flying']),
    new Pokemon(732, 'Trumbeak', ['Normal', 'Flying']),
    new Pokemon(733, 'Toucannon', ['Normal', 'Flying']),
    new Pokemon(734, 'Yungoos', ['Normal']),
    new Pokemon(735, 'Gumshoos', ['Normal']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(427, 'Buneary', ['Normal']),
    new Pokemon(428, 'Lopunny', ['Normal']),
    new Pokemon(686, 'Inkay', ['Dark', 'Psychic']),
    new Pokemon(687, 'Malamar', ['Dark', 'Psychic']),
    new Pokemon(570, 'Zorua', ['Dark']),
    new Pokemon(571, 'Zoroark', ['Dark']),
    new Pokemon(676, 'Furfrou', ['Normal']),
    new Pokemon(440, 'Happiny', ['Normal']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(242, 'Blissey', ['Normal']),
    new Pokemon(278, 'Wingull', ['Water', 'Flying']),
    new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
    new Pokemon(96, 'Drowzee', ['Psychic']),
    new Pokemon(97, 'Hypno', ['Psychic']),
    new Pokemon(296, 'Makuhita', ['Fighting']),
    new Pokemon(297, 'Hariyama', ['Fighting']),
    new Pokemon(739, 'Crabrawler', ['Fighting']),
    new Pokemon(740, 'Crabominable', ['Fighting', 'Ice']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
    new Pokemon(714, 'Noibat', ['Flying', 'Dragon']),
    new Pokemon(715, 'Noivern', ['Flying', 'Dragon']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
    new Pokemon(627, 'Rufflet', ['Normal', 'Flying']),
    new Pokemon(628, 'Braviary', ['Normal', 'Flying']),
    new Pokemon(629, 'Vullaby', ['Dark', 'Flying']),
    new Pokemon(630, 'Mandibuzz', ['Dark', 'Flying']),
    new Pokemon(56, 'Mankey', ['Fighting']),
    new Pokemon(57, 'Primeape', ['Fighting']),
    new Pokemon(741, 'Oricorio', ['Fire', 'Flying']),
    new Pokemon(742, 'Cutiefly', ['Bug', 'Fairy']),
    new Pokemon(743, 'Ribombee', ['Bug', 'Fairy']),
    new Pokemon(669, 'Flabébé', ['Fairy']),
    new Pokemon(670, 'Floette', ['Fairy']),
    new Pokemon(671, 'Florges', ['Fairy']),
    new Pokemon(548, 'Petilil', ['Grass']),
    new Pokemon(549, 'Lilligant', ['Grass']),
    new Pokemon(546, 'Cottonee', ['Grass', 'Fairy']),
    new Pokemon(547, 'Whimsicott', ['Grass', 'Fairy']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(339, 'Barboach', ['Water', 'Ground']),
    new Pokemon(340, 'Whiscash', ['Water', 'Ground']),
    new Pokemon(66, 'Machop', ['Fighting']),
    new Pokemon(67, 'Machoke', ['Fighting']),
    new Pokemon(68, 'Machamp', ['Fighting']),
    new Pokemon(524, 'Roggenrola', ['Rock']),
    new Pokemon(525, 'Boldore', ['Rock']),
    new Pokemon(526, 'Gigalith', ['Rock']),
    new Pokemon(703, 'Carbink', ['Rock', 'Fairy']),
    new Pokemon(302, 'Sableye', ['Dark', 'Ghost']),
    new Pokemon(744, 'Rockruff', ['Rock']),
    new Pokemon(745, 'Lycanroc', ['Rock']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(456, 'Finneon', ['Water']),
    new Pokemon(457, 'Lumineon', ['Water']),
    new Pokemon(749, 'Mudbray', ['Ground']),
    new Pokemon(750, 'Mudsdale', ['Ground']),
    new Pokemon(128, 'Tauros', ['Normal']),
    new Pokemon(241, 'Miltank', ['Normal']),
    new Pokemon(550, 'Basculin', ['Water']),
    new Pokemon(759, 'Stufful', ['Normal', 'Fighting']),
    new Pokemon(760, 'Bewear', ['Normal', 'Fighting']),
    new Pokemon(127, 'Pinsir', ['Bug']),
    new Pokemon(704, 'Goomy', ['Dragon']),
    new Pokemon(705, 'Sliggoo', ['Dragon']),
    new Pokemon(706, 'Goodra', ['Dragon']),
    new Pokemon(351, 'Castform', ['Normal']),
    new Pokemon(767, 'Wimpod', ['Bug', 'Water']),
    new Pokemon(768, 'Golisopod', ['Bug', 'Water']),
    new Pokemon(227, 'Skarmory', ['Steel', 'Flying']),
    new Pokemon(209, 'Snubbull', ['Fairy']),
    new Pokemon(210, 'Granbull', ['Fairy']),
    new Pokemon(422, 'Shellos', ['Water']),
    new Pokemon(423, 'Gastrodon', ['Water', 'Ground']),
    new Pokemon(369, 'Relicanth', ['Water', 'Rock']),
    new Pokemon(781, 'Dhelmise', ['Ghost', 'Grass']),
    new Pokemon(318, 'Carvanha', ['Water', 'Dark']),
    new Pokemon(319, 'Sharpedo', ['Water', 'Dark']),
    new Pokemon(690, 'Skrelp', ['Poison', 'Water']),
    new Pokemon(691, 'Dragalge', ['Poison', 'Dragon']),
    new Pokemon(692, 'Clauncher', ['Water']),
    new Pokemon(693, 'Clawitzer', ['Water']),
    new Pokemon(320, 'Wailmer', ['Water']),
    new Pokemon(321, 'Wailord', ['Water']),
    new Pokemon(131, 'Lapras', ['Water', 'Ice']),
    new Pokemon(357, 'Tropius', ['Grass', 'Flying']),
    new Pokemon(102, 'Exeggcute', ['Grass', 'Psychic']),
    new Pokemon(103, 'Exeggutor', ['Grass', 'Psychic']),
    new Pokemon(341, 'Corphish', ['Water']),
    new Pokemon(342, 'Crawdaunt', ['Water', 'Dark']),
    new Pokemon(619, 'Mienfoo', ['Fighting']),
    new Pokemon(620, 'Mienshao', ['Fighting']),
    new Pokemon(782, 'Jangmo-o', ['Dragon']),
    new Pokemon(783, 'Hakamo-o', ['Dragon', 'Fighting']),
    new Pokemon(784, 'Kommo-o', ['Dragon', 'Fighting']),
    new Pokemon(587, 'Emolga', ['Electric', 'Flying']),
    new Pokemon(123, 'Scyther', ['Bug', 'Flying']),
    new Pokemon(212, 'Scizor', ['Bug', 'Steel']),
    new Pokemon(214, 'Heracross', ['Bug', 'Fighting']),
    new Pokemon(190, 'Aipom', ['Normal']),
    new Pokemon(424, 'Ambipom', ['Normal']),
    new Pokemon(667, 'Litleo', ['Fire', 'Normal']),
    new Pokemon(668, 'Pyroar', ['Fire', 'Normal']),
    new Pokemon(200, 'Misdreavus', ['Ghost']),
    new Pokemon(429, 'Mismagius', ['Ghost']),
    new Pokemon(621, 'Druddigon', ['Dragon']),
    new Pokemon(108, 'Lickitung', ['Normal']),
    new Pokemon(463, 'Lickilicky', ['Normal']),
    new Pokemon(447, 'Riolu', ['Fighting']),
    new Pokemon(448, 'Lucario', ['Fighting', 'Steel']),
    new Pokemon(147, 'Dratini', ['Dragon']),
    new Pokemon(148, 'Dragonair', ['Dragon']),
    new Pokemon(149, 'Dragonite', ['Dragon', 'Flying']),
    new Pokemon(142, 'Aerodactyl', ['Rock', 'Flying']),
    new Pokemon(788, 'Tapu Fini', ['Water', 'Fairy']),
  ]
  $('#Center').text("The Poni Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();

  for (var j = 0; j < pokemonList.length; j++) {
    pokemonList[j].loadToPage();
    pokemonList[j].ShowTypes();
  }
}
