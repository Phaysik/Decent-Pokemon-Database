var unovaPokemonList = [
    new Pokemon(0, 494, 'Victini', ['Psychic', 'Fire']),
    new Pokemon(1, 495, 'Snivy', ['Grass']),
    new Pokemon(2, 496, 'Servine', ['Grass']),
    new Pokemon(3, 497, 'Serperior', ['Grass']),
    new Pokemon(4, 498, 'Tepig', ['Fire']),
    new Pokemon(5, 499, 'Pignite', ['Fire', 'Fighting']),
    new Pokemon(6, 500, 'Emboar', ['Fire', 'Fighting']),
    new Pokemon(7, 501, 'Oshawott', ['Water']),
    new Pokemon(8, 502, 'Dewott', ['Water']),
    new Pokemon(9, 503, 'Samurott', ['Water']),
    new Pokemon(10, 396, 'Starly', ['Normal', 'Flying']),
    new Pokemon(11, 397, 'Staravia', ['Normal', 'Flying']),
    new Pokemon(12, 398, 'Staraptor', ['Normal', 'Flying']),
    new Pokemon(13, 399, 'Bidoof', ['Normal']),
    new Pokemon(14, 400, 'Bibarel', ['Normal', 'Water']),
    new Pokemon(15, 401, 'Kricketot', ['Bug']),
    new Pokemon(16, 402, 'Kricketune', ['Bug']),
    new Pokemon(17, 403, 'Shinx', ['Electric']),
    new Pokemon(18, 404, 'Luxio', ['Electric']),
    new Pokemon(19, 405, 'Luxray', ['Electric']),
    new Pokemon(20, 63, 'Abra', ['Psychic']),
    new Pokemon(21, 64, 'Kadabra', ['Psychic']),
    new Pokemon(22, 65, 'Alakazam', ['Psychic']),
    new Pokemon(23, 129, 'Magikarp', ['Water']),
    new Pokemon(24, 130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(25, 406, 'Budew', ['Grass', 'Poison']),
    new Pokemon(26, 315, 'Roselia', ['Grass', 'Poison']),
    new Pokemon(27, 407, 'Roserade', ['Grass', 'Poison']),
    new Pokemon(28, 41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(29, 42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(30, 169, 'Crobat', ['Poison', 'Flying']),
    new Pokemon(31, 74, 'Geodude', ['Rock', 'Ground']),
    new Pokemon(32, 75, 'Graveler', ['Rock', 'Ground']),
    new Pokemon(33, 76, 'Golem', ['Rock', 'Ground']),
    new Pokemon(34, 95, 'Onix', ['Rock', 'Ground']),
    new Pokemon(35, 208, 'Steelix', ['Steel', 'Ground']),
    new Pokemon(36, 408, 'Cranidos', ['Rock']),
    new Pokemon(37, 409, 'Rampardos', ['Rock']),
    new Pokemon(38, 410, 'Shieldon', ['Rock', 'Steel']),
    new Pokemon(39, 411, 'Bastiodon', ['Rock', 'Steel']),
    new Pokemon(40, 66, 'Machop', ['Fighting']),
    new Pokemon(41, 67, 'Machoke', ['Fighting']),
    new Pokemon(42, 68, 'Machamp', ['Fighting']),
    new Pokemon(43, 54, 'Psyduck', ['Water']),
    new Pokemon(44, 55, 'Golduck', ['Water']),
    new Pokemon(45, 412, 'Burmy', ['Bug']),
    new Pokemon(46, 413, 'Wormadam', ['Bug', 'Grass']),
    new Pokemon(47, 414, 'Mothim', ['Bug', 'Flying']),
    new Pokemon(48, 265, 'Wurmple', ['Bug']),
    new Pokemon(49, 266, 'Silcoon', ['Bug']),
    new Pokemon(50, 267, 'Beautifly', ['Bug', 'Flying']),
    new Pokemon(51, 268, 'Cascoon', ['Bug']),
    new Pokemon(52, 269, 'Dustox', ['Bug', 'Poison']),
    new Pokemon(53, 415, 'Combee', ['Bug', 'Flying']),
    new Pokemon(54, 416, 'Vespiquen', ['Bug', 'Flying']),
    new Pokemon(55, 417, 'Pachirisu', ['Electric']),
    new Pokemon(56, 418, 'Buizel', ['Water']),
    new Pokemon(57, 419, 'Floatzel', ['Water']),
    new Pokemon(58, 420, 'Cherubi', ['Grass']),
    new Pokemon(59, 421, 'Cherrim', ['Grass']),
    new Pokemon(60, 422, 'Shellos', ['Water']),
    new Pokemon(61, 423, 'Gastrodon', ['Water', 'Ground']),
    new Pokemon(62, 214, 'Heracross', ['Bug', 'Fighting']),
    new Pokemon(63, 190, 'Aipom', ['Normal']),
    new Pokemon(64, 424, 'Ambipom', ['Normal']),
    new Pokemon(65, 425, 'Drifloon', ['Ghost', 'Flying']),
    new Pokemon(66, 426, 'Drifblim', ['Ghost', 'Flying']),
    new Pokemon(67, 427, 'Buneary', ['Normal']),
    new Pokemon(68, 428, 'Lopunny', ['Normal']),
    new Pokemon(69, 92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(70, 93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(71, 94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(72, 200, 'Misdreavus', ['Ghost']),
    new Pokemon(73, 429, 'Mismagius', ['Ghost']),
    new Pokemon(74, 198, 'Murkrow', ['Dark', 'Flying']),
    new Pokemon(75, 430, 'Honchkrow', ['Dark', 'Flying']),
    new Pokemon(76, 431, 'Glameow', ['Normal']),
    new Pokemon(77, 432, 'Purugly', ['Normal']),
    new Pokemon(78, 118, 'Goldeen', ['Water']),
    new Pokemon(79, 119, 'Seaking', ['Water']),
    new Pokemon(80, 339, 'Barboach', ['Water', 'Ground']),
    new Pokemon(81, 340, 'Whiscash', ['Water', 'Ground']),
    new Pokemon(82, 433, 'Chingling', ['Psychic']),
    new Pokemon(83, 358, 'Chimecho', ['Psychic']),
    new Pokemon(84, 434, 'Stunky', ['Poison', 'Dark']),
    new Pokemon(85, 435, 'Skuntank', ['Poison', 'Dark']),
    new Pokemon(86, 307, 'Meditite', ['Fighting', 'Psychic']),
    new Pokemon(87, 308, 'Medicham', ['Fighting', 'Psychic']),
    new Pokemon(88, 436, 'Bronzor', ['Steel', 'Psychic']),
    new Pokemon(89, 437, 'Bronzong', ['Steel', 'Psychic']),
    new Pokemon(90, 77, 'Ponyta', ['Fire']),
    new Pokemon(91, 78, 'Rapidash', ['Fire']),
    new Pokemon(92, 438, 'Bonsly', ['Rock']),
    new Pokemon(93, 185, 'Sudowoodo', ['Rock']),
    new Pokemon(94, 439, 'Mime Jr.', ['Psychic', 'Fairy']),
    new Pokemon(95, 122, 'Mr. Mime', ['Psychic', 'Fairy']),
    new Pokemon(96, 440, 'Happiny', ['Normal']),
    new Pokemon(97, 113, 'Chansey', ['Normal']),
    new Pokemon(98, 242, 'Blissey', ['Normal']),
    new Pokemon(99, 173, 'Cleffa', ['Fairy']),
    new Pokemon(100, 35, 'Clefairy', ['Fairy']),
    new Pokemon(101, 36, 'Clefable', ['Fairy']),
    new Pokemon(102, 441, 'Chatot', ['Normal', 'Flying']),
    new Pokemon(103, 172, 'Pichu', ['Electric']),
    new Pokemon(104, 25, 'Pikachu', ['Electric']),
    new Pokemon(105, 26, 'Raichu', ['Electric']),
    new Pokemon(106, 163, 'Hoothoot', ['Normal', 'Flying']),
    new Pokemon(107, 164, 'Noctowl', ['Normal', 'Flying']),
    new Pokemon(108, 442, 'Spiritomb', ['Ghost', 'Dark']),
    new Pokemon(109, 443, 'Gible', ['Dragon', 'Ground']),
    new Pokemon(110, 444, 'Gabite', ['Dragon', 'Ground']),
    new Pokemon(111, 445, 'Garchomp', ['Dragon', 'Ground']),
    new Pokemon(112, 446, 'Munchlax', ['Normal']),
    new Pokemon(113, 143, 'Snorlax', ['Normal']),
    new Pokemon(114, 201, 'Unown', ['Psychic']),
    new Pokemon(115, 447, 'Riolu', ['Fighting']),
    new Pokemon(116, 448, 'Lucario', ['Fighting', 'Steel']),
    new Pokemon(117, 194, 'Wooper', ['Water', 'Ground']),
    new Pokemon(118, 195, 'Quagsire', ['Normal', 'Ground']),
    new Pokemon(119, 278, 'Wingull', ['Water', 'Flying']),
    new Pokemon(120, 279, 'Pelipper', ['Water', 'Flying']),
    new Pokemon(121, 203, 'Girafarig', ['Normal', 'Psychic']),
    new Pokemon(122, 449, 'Hippopotas', ['Ground']),
    new Pokemon(123, 450, 'Hippowdon', ['Ground']),
    new Pokemon(124, 298, 'Azurill', ['Normal']),
    new Pokemon(125, 183, 'Marill', ['Water']),
    new Pokemon(126, 184, 'Azumarill', ['Water']),
    new Pokemon(127, 451, 'Skorupi', ['Poison', 'Bug']),
    new Pokemon(128, 452, 'Drapion', ['Poison', 'Dark']),
    new Pokemon(129, 453, 'Croagunk', ['Poison', 'Fighting']),
    new Pokemon(130, 454, 'Toxicroak', ['Poison', 'Fighting']),
    new Pokemon(131, 455, 'Carnivine', ['Grass']),
    new Pokemon(132, 223, 'Remoraid', ['Water']),
    new Pokemon(133, 224, 'Octillery', ['Water']),
    new Pokemon(134, 456, 'Finneon', ['Water']),
    new Pokemon(135, 457, 'Lumineon', ['Water']),
    new Pokemon(136, 72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(137, 73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(138, 349, 'Feebas', ['Water']),
    new Pokemon(139, 350, 'Milotic', ['Water']),
    new Pokemon(140, 458, 'Mantyke', ['Water', 'Flying']),
    new Pokemon(141, 226, 'Mantine', ['Water', 'Flying']),
    new Pokemon(142, 459, 'Snover', ['Grass', 'Ice']),
    new Pokemon(143, 460, 'Abomasnow', ['Grass', 'Ice']),
    new Pokemon(144, 215, 'Sneasel', ['Dark', 'Ice']),
    new Pokemon(145, 461, 'Weavile', ['Dark', 'Ice']),
    new Pokemon(146, 480, 'Uxie', ['Psychic'], ''),
    new Pokemon(147, 481, 'Mesprit', ['Psychic']),
    new Pokemon(148, 482, 'Azelf', ['Psychic']),
    new Pokemon(149, 483, 'Dialga', ['Steel', 'Dragon']),
    new Pokemon(150, 484, 'Palkia', ['Water', 'Dragon']),
    new Pokemon(151, 490, 'Manaphy', ['Water']),
    new Pokemon(152, 479, 'Rotom', ['Electric', 'Ghost']),
    new Pokemon(153, 207, 'Gligar', ['Ground', 'Flying']),
    new Pokemon(154, 472, 'Gliscor', ['Ground', 'Flying']),
    new Pokemon(155, 299, 'Nosepass', ['Rock']),
    new Pokemon(156, 476, 'Probopass', ['Rock', 'Steel']),
    new Pokemon(157, 280, 'Ralts', ['Psychic']),
    new Pokemon(158, 281, 'Kirlia', ['Psychic']),
    new Pokemon(159, 282, 'Gardevoir', ['Psychic']),
    new Pokemon(160, 475, 'Gallade', ['Psychic', 'Fighting']),
    new Pokemon(161, 108, 'Lickitung', ['Normal']),
    new Pokemon(162, 463, 'Lickilicky', ['Normal']),
    new Pokemon(163, 133, 'Eevee', ['Normal']),
    new Pokemon(164, 134, 'Vaporeon', ['Water']),
    new Pokemon(165, 135, 'Jolteon', ['Electric']),
    new Pokemon(166, 136, 'Flareon', ['Fire']),
    new Pokemon(167, 196, 'Espeon', ['Psychic']),
    new Pokemon(168, 197, 'Umbreon', ['Dark']),
    new Pokemon(169, 470, 'Leafeon', ['Grass']),
    new Pokemon(170, 471, 'Glaceon', ['Ice']),
    new Pokemon(171, 333, 'Swablu', ['Normal', 'Flying']),
    new Pokemon(172, 334, 'Altaria', ['Dragon', 'Flying']),
    new Pokemon(173, 175, 'Togepi', ['Normal']),
    new Pokemon(174, 176, 'Togetic', ['Normal', 'Flying']),
    new Pokemon(175, 468, 'Togekiss', ['Normal', 'Flying']),
    new Pokemon(176, 228, 'Houndour', ['Dark', 'Fire']),
    new Pokemon(177, 229, 'Houndoom', ['Dark', 'Fire']),
    new Pokemon(178, 81, 'Magnemite', ['Electric', 'Steel']),
    new Pokemon(179, 82, 'Magneton', ['Electric', 'Steel']),
    new Pokemon(180, 462, 'Magnezone', ['Electric', 'Steel']),
    new Pokemon(181, 114, 'Tangela', ['Grass']),
    new Pokemon(182, 465, 'Tangrowth', ['Grass']),
    new Pokemon(183, 193, 'Yanma', ['Bug', 'Flying']),
    new Pokemon(184, 469, 'Yanmega', ['Bug', 'Flying']),
    new Pokemon(185, 357, 'Tropius', ['Grass', 'Flying']),
    new Pokemon(186, 111, 'Rhyhorn', ['Ground', 'Rock']),
    new Pokemon(187, 112, 'Rhydon', ['Ground', 'Rock']),
    new Pokemon(188, 464, 'Rhyperior', ['Ground', 'Rock']),
    new Pokemon(189, 355, 'Duskull', ['Ghost']),
    new Pokemon(190, 356, 'Dusclops', ['Ghost']),
    new Pokemon(191, 477, 'Dusknoir', ['Ghost']),
    new Pokemon(192, 137, 'Porygon', ['Normal']),
    new Pokemon(193, 233, 'Porygon2', ['Normal']),
    new Pokemon(194, 474, 'Porygon-Z', ['Normal']),
    new Pokemon(195, 123, 'Scyther', ['Bug', 'Flying']),
    new Pokemon(196, 212, 'Scizor', ['Bug', 'Steel']),
    new Pokemon(197, 239, 'Elekid', ['Electric']),
    new Pokemon(198, 125, 'Electabuzz', ['Electric']),
    new Pokemon(199, 466, 'Electivire', ['Electric']),
    new Pokemon(200, 240, 'Magby', ['Fire']),
    new Pokemon(201, 126, 'Magmar', ['Fire']),
    new Pokemon(202, 467, 'Magmortar', ['Fire']),
    new Pokemon(203, 220, 'Swinub', ['Ice', 'Ground']),
    new Pokemon(204, 221, 'Piloswine', ['Ice', 'Ground']),
    new Pokemon(205, 473, 'Mamoswine', ['Ice', 'Ground']),
    new Pokemon(206, 361, 'Snorunt', ['Ice']),
    new Pokemon(207, 362, 'Glalie', ['Ice']),
    new Pokemon(208, 478, 'Froslass', ['Ice', 'Ghost']),
    new Pokemon(209, 359, 'Absol', ['Dark']),
    new Pokemon(210, 487, 'Giratina', ['Ghost', 'Dragon'])
  ]

  function loadUnova() {
    $('#Center').text("Unova Pokémon List by Pokédex Number");
    $('#pokemon-container').empty();
    for (var display of unovaPokemonList) {
      display.loadToPage();
      display.ShowTypes();
    }
  }
