var sinnohPokemonList = [
  new Pokemon(1, 387, 'Turtwig', ['Grass'], 'Turtwig Image'),
  new Pokemon(2, 388, 'Grotle', ['Grass'], 'Grotle Image'),
  new Pokemon(3, 389, 'Torterra', ['Grass', 'Ground'], 'Torterra Image'),
  new Pokemon(4, 390, 'Chimchar', ['Fire'], 'Chimchar Image'),
  new Pokemon(5, 391, 'Monferno', ['Fire', 'Fighting'], 'Monferno Image'),
  new Pokemon(6, 392, 'Infernape', ['Fire', 'Fighting'], 'Infernape Image'),
  new Pokemon(7, 393, 'Piplup', ['Water'], 'Piplup Image'),
  new Pokemon(8, 394, 'Prinplup', ['Water'], 'Prinplup Image'),
  new Pokemon(9, 395, 'Empoleon', ['Water', 'Steel'], 'Empoleon Image'),
  new Pokemon(10, 396, 'Starly', ['Normal', 'Flying'], 'Starly Image'),
  new Pokemon(11, 397, 'Staravia', ['Normal', 'Flying'], 'Staravia Image'),
  new Pokemon(12, 398, 'Staraptor', ['Normal', 'Flying'], 'Staraptor Image'),
  new Pokemon(13, 399, 'Bidoof', ['Normal'], 'Bidoof Image'),
  new Pokemon(14, 400, 'Bibarel', ['Normal', 'Water'], 'Bibarel Image'),
  new Pokemon(15, 401, 'Kricketot', ['Bug'], 'Kricketot Image'),
  new Pokemon(16, 402, 'Kricketune', ['Bug'], 'Kricketune Image'),
  new Pokemon(17, 403, 'Shinx', ['Electric'], 'Shinx Image'),
  new Pokemon(18, 404, 'Luxio', ['Electric'], 'Luxio Image'),
  new Pokemon(19, 405, 'Luxray', ['Electric'], 'Luxray Image'),
  new Pokemon(20, 63, 'Abra', ['Psychic'], 'Abra Image'),
  new Pokemon(21, 64, 'Kadabra', ['Psychic'], 'Kadabra Image'),
  new Pokemon(22, 65, 'Alakazam', ['Psychic'], 'Alakazam Image'),
  new Pokemon(23, 129, 'Magikarp', ['Water'], 'Magikarp Image'),
  new Pokemon(24, 130, 'Gyarados', ['Water', 'Flying'], 'Gyarados Image'),
  new Pokemon(25, 406, 'Budew', ['Grass', 'Poison'], 'Budew Image'),
  new Pokemon(26, 315, 'Roselia', ['Grass', 'Poison'], 'Roselia Image'),
  new Pokemon(27, 407, 'Roserade', ['Grass', 'Poison'], 'Roserade Image'),
  new Pokemon(28, 41, 'Zubat', ['Poison', 'Flying'], 'Zubat Image'),
  new Pokemon(29, 42, 'Golbat', ['Poison', 'Flying'], 'Golbat Image'),
  new Pokemon(30, 169, 'Crobat', ['Poison', 'Flying'], 'Crobat Image'),
  new Pokemon(31, 74, 'Geodude', ['Rock', 'Ground'], 'Geodude Image'),
  new Pokemon(32, 75, 'Graveler', ['Rock', 'Ground'], 'Graveler Image'),
  new Pokemon(33, 76, 'Golem', ['Rock', 'Ground'], 'Golem Image'),
  new Pokemon(34, 95, 'Onix', ['Rock', 'Ground'], 'Onix Image'),
  new Pokemon(35, 208, 'Steelix', ['Steel', 'Ground'], 'Steelix Image'),
  new Pokemon(36, 408, 'Cranidos', ['Rock'], 'Cranidos Image'),
  new Pokemon(37, 409, 'Rampardos', ['Rock'], 'Rampardos Image'),
  new Pokemon(38, 410, 'Shieldon', ['Rock', 'Steel'], 'Shieldon Image'),
  new Pokemon(39, 411, 'Bastiodon', ['Rock', 'Steel'], 'Bastiodon Image'),
  new Pokemon(40, 66, 'Machop', ['Fighting'], 'Machop Image'),
  new Pokemon(41, 67, 'Machoke', ['Fighting'], 'Machoke Image'),
  new Pokemon(42, 68, 'Machamp', ['Fighting'], 'Machamp Image'),
  new Pokemon(43, 54, 'Psyduck', ['Water'], 'Psyduck Image'),
  new Pokemon(44, 55, 'Golduck', ['Water'], 'Golduck Image'),
  new Pokemon(45, 412, 'Burmy', ['Bug'], 'Burmy Image'),
  new Pokemon(46, 413, 'Wormadam', ['Bug', 'Grass'], 'Wormadam Image'),
  new Pokemon(47, 414, 'Mothim', ['Bug', 'Flying'], 'Mothim Image'),
  new Pokemon(48, 265, 'Wurmple', ['Bug'], 'Wurmple Image'),
  new Pokemon(49, 266, 'Silcoon', ['Bug'], 'Silcoon Image'),
  new Pokemon(50, 267, 'Beautifly', ['Bug', 'Flying'], 'Beautifly Image'),
  new Pokemon(51, 268, 'Cascoon', ['Bug'], 'Cascoon Image'),
  new Pokemon(52, 269, 'Dustox', ['Bug', 'Poison'], 'Dustox Image'),
  new Pokemon(53, 415, 'Combee', ['Bug', 'Flying'], 'Combee Image'),
  new Pokemon(54, 416, 'Vespiquen', ['Bug', 'Flying'], 'Vespiquen Image'),
  new Pokemon(55, 417, 'Pachirisu', ['Electric'], 'Pachirisu Image'),
  new Pokemon(56, 418, 'Buizel', ['Water'], 'Buizel Image'),
  new Pokemon(57, 419, 'Floatzel', ['Water'], 'Floatzel Image'),
  new Pokemon(58, 420, 'Cherubi', ['Grass'], 'Cherubi Image'),
  new Pokemon(59, 421, 'Cherrim', ['Grass'], 'Cherrim Image'),
  new Pokemon(60, 422, 'Shellos', ['Water'], 'Shellos Image'),
  new Pokemon(61, 423, 'Gastrodon', ['Water', 'Ground'], 'Gastrodon Image'),
  new Pokemon(62, 214, 'Heracross', ['Bug', 'Fighting'], 'Heracross Image'),
  new Pokemon(63, 190, 'Aipom', ['Normal'], 'Aipom Image'),
  new Pokemon(64, 424, 'Ambipom', ['Normal'], 'Ambipom Image'),
  new Pokemon(65, 425, 'Drifloon', ['Ghost', 'Flying'], 'Drifloon Image'),
  new Pokemon(66, 426, 'Drifblim', ['Ghost', 'Flying'], 'Drifblim Image'),
  new Pokemon(67, 427, 'Buneary', ['Normal'], 'Buneary Image'),
  new Pokemon(68, 428, 'Lopunny', ['Normal'], 'Lopunny Image'),
  new Pokemon(69, 92, 'Gastly', ['Ghost', 'Poison'], 'Gastly Image'),
  new Pokemon(70, 93, 'Haunter', ['Ghost', 'Poison'], 'Haunter Image'),
  new Pokemon(71, 94, 'Gengar', ['Ghost', 'Poison'], 'Gengar Image'),
  new Pokemon(72, 200, 'Misdreavus', ['Ghost'], 'Misdreavus Image'),
  new Pokemon(73, 429, 'Mismagius', ['Ghost'], 'Mismagius Image'),
  new Pokemon(74, 198, 'Murkrow', ['Dark', 'Flying'], 'Murkrow Image'),
  new Pokemon(75, 430, 'Honchkrow', ['Dark', 'Flying'], 'Honchkrow Image'),
  new Pokemon(76, 431, 'Glameow', ['Normal'], 'Glameow Image'),
  new Pokemon(77, 432, 'Purugly', ['Normal'], 'Purugly Image'),
  new Pokemon(78, 118, 'Goldeen', ['Water'], 'Goldeen Image'),
  new Pokemon(79, 119, 'Seaking', ['Water'], 'Seaking Image'),
  new Pokemon(80, 339, 'Barboach', ['Water', 'Ground'], 'Barboach Image'),
  new Pokemon(81, 340, 'Whiscash', ['Water', 'Ground'], 'Whiscash Image'),
  new Pokemon(82, 433, 'Chingling', ['Psychic'], 'Chingling Image'),
  new Pokemon(83, 358, 'Chimecho', ['Psychic'], 'Chimecho Image'),
  new Pokemon(84, 434, 'Stunky', ['Poison', 'Dark'], 'Stunky Image'),
  new Pokemon(85, 435, 'Skuntank', ['Poison', 'Dark'], 'Skuntank Image'),
  new Pokemon(86, 307, 'Meditite', ['Fighting', 'Psychic'], 'Meditite Image'),
  new Pokemon(87, 308, 'Medicham', ['Fighting', 'Psychic'], 'Medicham Image'),
  new Pokemon(88, 436, 'Bronzor', ['Steel', 'Psychic'], 'Bronzor Image'),
  new Pokemon(89, 437, 'Bronzong', ['Steel','Psychic'], 'Bronzong Image'),
  new Pokemon(90, 77, 'Ponyta', ['Fire'], 'Ponyta Image'),
  new Pokemon(91, 78, 'Rapidash', ['Fire'], 'Rapidash Image'),
  new Pokemon(92, 438, 'Bonsly', ['Rock'], 'Bonsly Image'),
  new Pokemon(93, 185, 'Sudowoodo', ['Rock'], 'Sudowoodo Image'),
  new Pokemon(94, 439, 'Mime Jr.', ['Psychic', 'Fairy'], 'Mime Jr. Image'),
  new Pokemon(95, 122, 'Mr. Mime', ['Psychic', 'Fairy'], 'Mr. Mime Image'),
  new Pokemon(96, 440, 'Happiny', ['Normal'], 'Happiny Image'),
  new Pokemon(97, 113, 'Chansey', ['Normal'], 'Chansey Image'),
  new Pokemon(98, 242, 'Blissey', ['Normal'], 'Blissey Image'),
  new Pokemon(99, 173, 'Cleffa', ['Fairy'], 'Cleffa Image'),
  new Pokemon(100, 35, 'Clefairy', ['Fairy'], 'Clefairy Image'),
  new Pokemon(101, 36, 'Clefable', ['Fairy'], 'Clefable Image'),
  new Pokemon(102, 441, 'Chatot', ['Normal', 'Flying'], 'Chatot Image'),
  new Pokemon(103, 172, 'Pichu', ['Electric'], 'Pichu Image'),
  new Pokemon(104, 25, 'Pikachu', ['Electric'], 'Pikachu Image'),
  new Pokemon(105, 26, 'Raichu', ['Electric'], 'Raichu Image'),
  new Pokemon(106, 163, 'Hoothoot', ['Normal', 'Flying'], 'Hoothoot Image'),
  new Pokemon(107, 164, 'Noctowl', ['Normal', 'Flying'], 'Noctowl Image'),
  new Pokemon(108, 442, 'Spiritomb', ['Ghost', 'Dark'], 'Spiritomb Image'),
  new Pokemon(109, 443, 'Gible', ['Dragon', 'Ground'], 'Gible Image'),
  new Pokemon(110, 444, 'Gabite', ['Dragon', 'Ground'], 'Gabite Image'),
  new Pokemon(111, 445, 'Garchomp', ['Dragon', 'Ground'], 'Garchomp Image'),
  new Pokemon(112, 446, 'Munchlax', ['Normal'], 'Munchlax Image'),
  new Pokemon(113, 143, 'Snorlax', ['Normal'], 'Snorlax Image'),
  new Pokemon(114, 201, 'Unown', ['Psychic'], 'Unown Image'),
  new Pokemon(115, 447, 'Riolu', ['Fighting'], 'Riolu Image'),
  new Pokemon(116, 448, 'Lucario', ['Fighting', 'Steel'], 'Lucario Image'),
  new Pokemon(117, 194, 'Wooper', ['Water', 'Ground'], 'Wooper Image'),
  new Pokemon(118, 195, 'Quagsire', ['Normal', 'Ground'], 'Quagsire Image'),
  new Pokemon(119, 278, 'Wingull', ['Water', 'Flying'], 'Wingull Image'),
  new Pokemon(120, 279, 'Pelipper', ['Water', 'Flying'], 'Pelipper Image'),
  new Pokemon(121, 203, 'Girafarig', ['Normal', 'Psychic'], 'Girafarig Image'),
  new Pokemon(122, 449, 'Hippopotas', ['Ground'], 'Hippopotas Image'),
  new Pokemon(123, 450, 'Hippowdon', ['Ground'], 'Hippowdon Image'),
  new Pokemon(124, 298, 'Azurill', ['Normal'], 'Azurill Image'),
  new Pokemon(125, 183, 'Marill', ['Water'], 'Marill Image'),
  new Pokemon(126, 184, 'Azumarill', ['Water'], 'Azumarill Image'),
  new Pokemon(127, 451, 'Skorupi', ['Poison', 'Bug'], 'Skorupi Image'),
  new Pokemon(128, 452, 'Drapion', ['Poison', 'Dark'], 'Drapion Image'),
  new Pokemon(129, 453, 'Croagunk', ['Poison', 'Fighting'], 'Croagunk Image'),
  new Pokemon(130, 454, 'Toxicroak', ['Poison', 'Fighting'], 'Toxicroak Image'),
  new Pokemon(131, 455, 'Carnivine', ['Grass'], 'Carnivine Image'),
  new Pokemon(132, 223, 'Remoraid', ['Water'], 'Remoraid Image'),
  new Pokemon(133, 224, 'Octillery', ['Water'], 'Octillery Image'),
  new Pokemon(134, 456, 'Finneon', ['Water'], 'Finneon Image'),
  new Pokemon(135, 457, 'Lumineon', ['Water'], 'Lumineon Image'),
  new Pokemon(136, 72, 'Tentacool', ['Water', 'Poison'], 'Tentacool Image'),
  new Pokemon(137, 73, 'Tentacruel', ['Water', 'Poison'], 'Tentacruel Image'),
  new Pokemon(138, 349, 'Feebas', ['Water'], 'Feebas Image'),
  new Pokemon(139, 350, 'Milotic', ['Water'], 'Milotic Image'),
  new Pokemon(140, 458, 'Mantyke', ['Water', 'Flying'], 'Mantyke Image'),
  new Pokemon(141, 226, 'Mantine', ['Water', 'Flying'], 'Mantine Image'),
  new Pokemon(142, 459, 'Snover', ['Grass', 'Ice'], 'Snover Image'),
  new Pokemon(143, 460, 'Abomasnow', ['Grass', 'Ice'], 'Abomasnow Image'),
  new Pokemon(144, 215, 'Sneasel', ['Dark', 'Ice'], 'Sneasel Image'),
  new Pokemon(145, 461, 'Weavile', ['Dark', 'Ice'], 'Weavile Image'),
  new Pokemon(146, 480, 'Uxie', ['Psychic'], 'Uxie Image'),
  new Pokemon(147, 481, 'Mesprit', ['Psychic'], 'Mesprit Image'),
  new Pokemon(148, 482, 'Azelf', ['Psychic'], 'Azelf Image'),
  new Pokemon(149, 483, 'Dialga', ['Steel', 'Dragon'], 'Dialga Image'),
  new Pokemon(150, 484, 'Palkia', ['Water', 'Dragon'], 'Palkia Image'),
  new Pokemon(151, 490, 'Manaphy', ['Water'], 'Manaphy Image'),
  new Pokemon(152, 479, 'Rotom', ['Electric', 'Ghost'], 'Rotom Image'),
  new Pokemon(153, 207, 'Gligar', ['Ground', 'Flying'], 'Gligar Image'),
  new Pokemon(154, 472, 'Gliscor', ['Ground', 'Flying'], 'Gliscor Image'),
  new Pokemon(155, 299, 'Nosepass', ['Rock'], 'Nosepass Image'),
  new Pokemon(156, 476, 'Probopass', ['Rock', 'Steel'], 'Probopass Image'),
  new Pokemon(157, 280, 'Ralts', ['Psychic'], 'Ralts Image'),
  new Pokemon(158, 281, 'Kirlia', ['Psychic'], 'Kirlia Image'),
  new Pokemon(159, 282, 'Gardevoir', ['Psychic'], 'Gardevoir Image'),
  new Pokemon(160, 475, 'Gallade', ['Psychic', 'Fighting'], 'Gallade Image'),
  new Pokemon(161, 108, 'Lickitung', ['Normal'], 'Lickitung Image'),
  new Pokemon(162, 463, 'Lickilicky', ['Normal'], 'Lickilicky Image'),
  new Pokemon(163, 133, 'Eevee', ['Normal'], 'Eevee Image'),
  new Pokemon(164, 134, 'Vaporeon', ['Water'], 'Vaporeon Image'),
  new Pokemon(165, 135, 'Jolteon', ['Electric'], 'Jolteon Image'),
  new Pokemon(166, 136, 'Flareon', ['Fire'], 'Flareon Image'),
  new Pokemon(167, 196, 'Espeon', ['Psychic'], 'Espeon Image'),
  new Pokemon(168, 197, 'Umbreon', ['Dark'], 'Umbreon Image'),
  new Pokemon(169, 470, 'Leafeon', ['Grass'], 'Leafeon Image'),
  new Pokemon(170, 471, 'Glaceon', ['Ice'], 'Glaceon Image'),
  new Pokemon(171, 333, 'Swablu', ['Normal', 'Flying'], 'Swablu Image'),
  new Pokemon(172, 334, 'Altaria', ['Dragon', 'Flying'], 'Altaria Image'),
  new Pokemon(173, 175, 'Togepi', ['Normal'], 'Togepi Image'),
  new Pokemon(174, 176, 'Togetic', ['Normal', 'Flying'], 'Togetic Image'),
  new Pokemon(175, 468, 'Togekiss', ['Normal', 'Flying'], 'Togekiss Image'),
  new Pokemon(176, 228, 'Houndour', ['Dark', 'Fire'], 'Houndour Image'),
  new Pokemon(177, 229, 'Houndoom', ['Dark', 'Fire'], 'Houndoom Image'),
  new Pokemon(178, 81, 'Magnemite', ['Electric', 'Steel'], 'Magnemite Image'),
  new Pokemon(179, 82, 'Magneton', ['Electric', 'Steel'], 'Magneton Image'),
  new Pokemon(180, 462, 'Magnezone', ['Electric', 'Steel'], 'Magnezone Image'),
  new Pokemon(181, 114, 'Tangela', ['Grass'], 'Tangela Image'),
  new Pokemon(182, 465, 'Tangrowth', ['Grass'], 'Tangrowth Image'),
  new Pokemon(183, 193, 'Yanma', ['Bug', 'Flying'], 'Yanma Image'),
  new Pokemon(184, 469, 'Yanmega', ['Bug', 'Flying'], 'Yanmega Image'),
  new Pokemon(185, 357, 'Tropius', ['Grass', 'Flying'], 'Tropius Image'),
  new Pokemon(186, 111, 'Rhyhorn', ['Ground', 'Rock'], 'Rhyhorn Image'),
  new Pokemon(187, 112, 'Rhydon', ['Ground', 'Rock'], 'Rhydon Image'),
  new Pokemon(188, 464, 'Rhyperior', ['Ground', 'Rock'], 'Rhyperior Image'),
  new Pokemon(189, 355, 'Duskull', ['Ghost'], 'Duskull Image'),
  new Pokemon(190, 356, 'Dusclops', ['Ghost'], 'Dusclops Image'),
  new Pokemon(191, 477, 'Dusknoir', ['Ghost'], 'Dusknoir Image'),
  new Pokemon(192, 137, 'Porygon', ['Normal'], 'Porygon Image'),
  new Pokemon(193, 233, 'Porygon2', ['Normal'], 'Porygon2 Image'),
  new Pokemon(194, 474, 'Porygon-Z', ['Normal'], 'Porygon-Z Image'),
  new Pokemon(195, 123, 'Scyther', ['Bug', 'Flying'], 'Scyther Image'),
  new Pokemon(196, 212, 'Scizor', ['Bug', 'Steel'], 'Scizor Image'),
  new Pokemon(197, 239, 'Elekid', ['Electric'], 'Elekid Image'),
  new Pokemon(198, 125, 'Electabuzz', ['Electric'], 'Electabuzz Image'),
  new Pokemon(199, 466, 'Electivire', ['Electric'], 'Electivire Image'),
  new Pokemon(200, 240, 'Magby', ['Fire'], 'Magby Image'),
  new Pokemon(201, 126, 'Magmar', ['Fire'], 'Magmar Image'),
  new Pokemon(202, 467, 'Magmortar', ['Fire'], 'Magmortar Image'),
  new Pokemon(203, 220, 'Swinub', ['Ice', 'Ground'], 'Swinub Image'),
  new Pokemon(204, 221, 'Piloswine', ['Ice', 'Ground'], 'Piloswine Image'),
  new Pokemon(205, 473, 'Mamoswine', ['Ice', 'Ground'], 'Mamoswine Image'),
  new Pokemon(206, 361, 'Snorunt', ['Ice'], 'Snorunt Image'),
  new Pokemon(207, 362, 'Glalie', ['Ice'], 'Glalie Image'),
  new Pokemon(208, 478, 'Froslass', ['Ice', 'Ghost'], 'Froslass Image'),
  new Pokemon(209, 359, 'Absol', ['Dark'], 'Absol Image'),
  new Pokemon(210, 487, 'Giratina', ['Ghost', 'Dragon'], 'Giratina Image'),
  new Pokemon(211, 490, 'Hannah', ['Ghost'], 'Hannah Image')
]

function loadSinnoh(){
  $('#Center').text("Sinnoh Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for(var display of sinnohPokemonList){
    display.loadToPage();
    display.ShowTypes();
  }
}
