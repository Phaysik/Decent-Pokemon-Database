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
  new Pokemon(341, 'Corphish', ['Ground']),
  new Pokemon(342, 'Crawdaunt', ['Normal', 'Dark']),
  new Pokemon(118, 'Goldeen', ['Normal']),
  new Pokemon(119, 'Seaking', ['Water']),
  new Pokemon(318, 'Carvanha', ['Water', 'Dark']),
  new Pokemon(319, 'Sharpedo', ['Water', 'Dark']),
  new Pokemon(667, 'Litleo', ['Fire', 'Normal']),
  new Pokemon(668, 'Pyroar', ['Fire', 'Normal']),
  new Pokemon(54, 'Psyduck', ['Water']),
  new Pokemon(55, 'Golduck', ['Water']),
  new Pokemon(83, 'Farfetch\'d', ['Normal', 'Flying']),
  new Pokemon(447, 'Riolu', ['Fighting']),
  new Pokemon(448, 'Lucario', ['Fighting', 'Steel']),
  new Pokemon(280, 'Ralts', ['Psychic', 'Fairy']),
  new Pokemon(281, 'Kirlia', ['Psychic', 'Fairy']),
  new Pokemon(282, 'Gardevoir', ['Psychic', 'Fairy']),
  new Pokemon(475, 'Gallade', ['Psychic', 'Fighting']),
  new Pokemon(669, 'Flabébé', ['Fairy']),
  new Pokemon(670, 'Floette', ['Fairy']),
  new Pokemon(671, 'Florges', ['Fairy']),
  new Pokemon(406, 'Budew', ['Grass', 'Poison']),
  new Pokemon(315, 'Roselia', ['Grass', 'Poison']),
  new Pokemon(407, 'Roserade', ['Grass', 'Poison']),
  new Pokemon(165, 'Ledyba', ['Bug', 'Flying']),
  new Pokemon(166, 'Ledian', ['Bug', 'Flying']),
  new Pokemon(415, 'Combee', ['Bug', 'Flying']),
  new Pokemon(416, 'Vespiquen', ['Bug', 'Flying']),
  new Pokemon(300, 'Skitty', ['Normal']),
  new Pokemon(301, 'Delcatty', ['Normal']),
  new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']),
  new Pokemon(2, 'Ivysaur', ['Grass', 'Poison']),
  new Pokemon(3, 'Venusaur', ['Grass', 'Poison']),
  new Pokemon(4, "Charmander", ['Fire']),
  new Pokemon(5, 'Charmeleon', ['Fire']),
  new Pokemon(6, 'Charizard', ['Fire', 'Flying']),
  new Pokemon(7, 'Squirtle', ['Water']),
  new Pokemon(8, 'Wartortle', ['Water']),
  new Pokemon(9, 'Blastoise', ['Water']),
  new Pokemon(672, 'Skiddo', ['Grass']),
  new Pokemon(673, 'Gogoat', ['Grass']),
  new Pokemon(674, 'Pancham', ['Fighting']),
  new Pokemon(675, 'Pangoro', ['Fighting', 'Dark']),
  new Pokemon(676, 'Furfrou', ['Normal']),
  new Pokemon(84, 'Doduo', ['Normal', 'Flying']),
  new Pokemon(85, 'Dodrio', ['Normal', 'Flying']),
  new Pokemon(311, 'Plusle', ['Electric']),
  new Pokemon(312, 'Minun', ['Electric']),
  new Pokemon(316, 'Gulpin', ['Poison']),
  new Pokemon(317, 'Swalot', ['Poison']),
  new Pokemon(559, 'Scraggy', ['Dark', 'Fighting']),
  new Pokemon(560, 'Scrafty', ['Dark', 'Fighting']),
  new Pokemon(63, 'Abra', ['Psychic']),
  new Pokemon(64, 'Kadabra', ['Psychic']),
  new Pokemon(65, 'Alakazam', ['Psychic']),
  new Pokemon(43, 'Oddish', ['Grass', 'Poison']),
  new Pokemon(44, 'Gloom', ['Grass', 'Poison']),
  new Pokemon(45, 'Vileplume', ['Grass', 'Poison']),
  new Pokemon(182, 'Bellossom', ['Grass']),
  new Pokemon(161, 'Sentret', ['Normal']),
  new Pokemon(162, 'Furret', ['Normal']),
  new Pokemon(290, 'Nincada', ['Bug', 'Ground']),
  new Pokemon(291, 'Ninjask', ['Bug', 'Flying']),
  new Pokemon(292, 'Shedinja', ['Bug', 'Ghost']),
  new Pokemon(677, 'Espurr', ['Psychic']),
  new Pokemon(678, 'Meowstic', ['Psychic']),
  new Pokemon(352, 'Kecleon', ['Normal']),
  new Pokemon(679, 'Honedge', ['Steel', 'Ghost']),
  new Pokemon(680, 'Doublade', ['Steel', 'Ghost']),
  new Pokemon(681, 'Aegislash', ['Steel', 'Ghost']),
  new Pokemon(543, 'Venipede', ['Bug', 'Poison']),
  new Pokemon(544, 'Whirlipede', ['Bug', 'Poison']),
  new Pokemon(545, 'Scolipede', ['Psychic', 'Fairy']),
  new Pokemon(531, 'Audino', ['Normal']),
  new Pokemon(235, 'Smeargle', ['Normal']),
  new Pokemon(453, 'Croagunk', ['Poison', 'Fighting']),
  new Pokemon(454, 'Toxicroak', ['Poison', 'Fighting']),
  new Pokemon(580, 'Ducklett', ['Water', 'Flying']),
  new Pokemon(581, 'Swanna', ['Water', 'Flying']),
  new Pokemon(682, 'Spritzee', ['Fairy']),
  new Pokemon(683, 'Aromatisse', ['Fairy']),
  new Pokemon(684, 'Swirlix', ['Fairy']),
  new Pokemon(685, 'Slurpuff', ['Fairy']),
  new Pokemon(313, 'Volbeat', ['Bug']),
  new Pokemon(314, 'Illumise', ['Bug']),
  new Pokemon(187, 'Hoppip', ['Grass', 'Flying']),
  new Pokemon(188, 'Skiploom', ['Grass', 'Flying']),
  new Pokemon(189, 'Jumpluff', ['Grass', 'Flying']),
  new Pokemon(446, 'Munchlax', ['Normal']),
  new Pokemon(143, 'Snorlax', ['Normal']),
  new Pokemon(293, 'Whismur', ['Normal']),
  new Pokemon(294, 'Loudred', ['Normal']),
  new Pokemon(295, 'Exploud', ['Normal']),
  new Pokemon(307, 'Meditite', ['Fighting', 'Psychic']),
  new Pokemon(308, 'Medicham', ['Fighting', 'Psychic']),
  new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
  new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
  new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
  new Pokemon(610, 'Axew', ['Dragon']),
  new Pokemon(611, 'Fraxure', ['Dragon']),
  new Pokemon(612, 'Haxorus', ['Dragon']),
  new Pokemon(719, 'Diancie', ['Rock', 'Fairy']),
  new Pokemon(720, 'Hoopa', ['Psychic', 'Ghost']),
  new Pokemon(721, 'Volcanion', ['Fire', 'Water']),
  new Pokemon(425, 'Drifloon', ['Ghost', 'Flying']),
  new Pokemon(426, 'Drifblim', ['Ghost', 'Flying']),
  new Pokemon(619, 'Mienfoo', ['Fighting']),
  new Pokemon(620, 'Mienshao', ['Fighting']),
  new Pokemon(335, 'Zangoose', ['Normal']),
  new Pokemon(336, 'Seviper', ['Poison']),
  new Pokemon(325, 'Spoink', ['Psychic']),
  new Pokemon(326, 'Grumpig', ['Psychic']),
  new Pokemon(359, 'Absol', ['Dark']),
  new Pokemon(686, 'Inkay', ['Dark', 'Psychic']),
  new Pokemon(687, 'Malamar', ['Dark', 'Psychic']),
  new Pokemon(337, 'Lunatone', ['Rock', 'Psychic']),
  new Pokemon(338, 'Solrock', ['Rock', 'Psychic']),
  new Pokemon(371, 'Bagon', ['Dragon']),
  new Pokemon(372, 'Shelgon', ['Dragon']),
  new Pokemon(373, 'Salamence', ['Dragon', 'Flying']),
  new Pokemon(278, 'Wingull', ['Water', 'Flying']),
  new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
  new Pokemon(276, 'Taillow', ['Normal', 'Flying']),
  new Pokemon(277, 'Swellow', ['Normal', 'Flying']),
  new Pokemon(688, 'Binacle', ['Rock', 'Water']),
  new Pokemon(689, 'Barbaracle', ['Rock', 'Water']),
  new Pokemon(557, 'Dwebble', ['Bug', 'Rock']),
  new Pokemon(558, 'Crustle', ['Bug', 'Rock']),
  new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
  new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
  new Pokemon(320, 'Wailmer', ['Water']),
  new Pokemon(321, 'Wailord', ['Water']),
  new Pokemon(370, 'Luvdisc', ['Water']),
  new Pokemon(690, 'Skrelp', ['Poison', 'Water']),
  new Pokemon(691, 'Dragalge', ['Poison', 'Dragon']),
  new Pokemon(692, 'Clauncher', ['Water']),
  new Pokemon(693, 'Clawitzer', ['Water']),
  new Pokemon(120, 'Staryu', ['Water']),
  new Pokemon(121, 'Starmie', ['Water', 'Psychic']),
  new Pokemon(90, 'Shellder', ['Water']),
  new Pokemon(91, 'Cloyster', ['Water', 'Ice']),
  new Pokemon(211, 'Qwilfish', ['Water', 'Poison']),
  new Pokemon(116, 'Horsea', ['Water']),
  new Pokemon(117, 'Seadra', ['Water']),
  new Pokemon(230, 'Kingdra', ['Water', 'Dragon']),
  new Pokemon(369, 'Relicanth', ['Water', 'Rock']),
  new Pokemon(551, 'Sandile', ['Ground', 'Dark']),
  new Pokemon(552, 'Krokorok', ['Ground', 'Dark']),
  new Pokemon(553, 'Krookodile', ['Ground', 'Dark']),
  new Pokemon(694, 'Helioptile', ['Electric', 'Normal']),
  new Pokemon(695, 'Heliolisk', ['Electric', 'Normal']),
  new Pokemon(449, 'Hippopotas', ['Ground']),
  new Pokemon(450, 'Hippowdon', ['Ground']),
  new Pokemon(111, 'Rhyhorn', ['Ground', 'Rock']),
  new Pokemon(112, 'Rhydon', ['Ground', 'Rock']),
  new Pokemon(464, 'Rhyperior', ['Ground', 'Rock']),
  new Pokemon(95, 'Onix', ['Rock', 'Ground']),
  new Pokemon(208, 'Steelix', ['Steel', 'Ground']),
  new Pokemon(527, 'Woobat', ['Psychic', 'Flying']),
  new Pokemon(528, 'Swoobat', ['Psychic', 'Flying']),
  new Pokemon(66, 'Machop', ['Fighting']),
  new Pokemon(67, 'Machoke', ['Fighting']),
  new Pokemon(68, 'Machamp', ['Fighting']),
  new Pokemon(104, 'Cubone', ['Ground']),
  new Pokemon(105, 'Marowak', ['Ground']),
  new Pokemon(115, 'Kangaskhan', ['Normal']),
  new Pokemon(303, 'Mawile', ['Steel', 'Fairy']),
  new Pokemon(696, 'Tyrunt', ['Rock', 'Dragon']),
  new Pokemon(697, 'Tyrantrum', ['Rock', 'Dragon']),
  new Pokemon(698, 'Amaura', ['Rock', 'Ice']),
  new Pokemon(699, 'Aurorus', ['Rock', 'Ice']),
  new Pokemon(142, 'Aerodactyl', ['Rock', 'Flying']),
  new Pokemon(597, 'Ferroseed', ['Grass', 'Steel']),
  new Pokemon(598, 'Ferrothorn', ['Grass', 'Steel']),
  new Pokemon(209, 'Snubbull', ['Fairy']),
  new Pokemon(210, 'Granbull', ['Fairy']),
  new Pokemon(309, 'Electrike', ['Electric']),
  new Pokemon(310, 'Manectric', ['Electric']),
  new Pokemon(228, 'Houndour', ['Dark', 'Fire']),
  new Pokemon(229, 'Houndoom', ['Dark', 'Fire']),
  new Pokemon(133, 'Eevee', ['Normal']),
  new Pokemon(134, 'Vaporeon', ['Water']),
  new Pokemon(135, 'Jolteon', ['Electric']),
  new Pokemon(136, 'Flareon', ['Fire']),
  new Pokemon(196, 'Espeon', ['Psychic']),
  new Pokemon(197, 'Umbreon', ['Dark']),
  new Pokemon(470, "Leafeon", ['Grass']),
  new Pokemon(471, 'Glaceon', ['Ice']),
  new Pokemon(700, 'Sylveon', ['Fairy']),
  new Pokemon(587, 'Emolga', ['Electric', 'Flying']),
  new Pokemon(193, 'Yanma', ['Bug', 'Flying']),
  new Pokemon(469, 'Yanmega', ['Bug', 'Flying']),
  new Pokemon(701, 'Hawlucha', ['Fighting', 'Flying']),
  new Pokemon(561, 'Sigilyph', ['Psychic', 'Flying']),
  new Pokemon(622, 'Golett', ['Ground', 'Ghost']),
  new Pokemon(623, 'Golurk', ['Ground', 'Ghost']),
  new Pokemon(299, 'Nosepass', ['Rock']),
  new Pokemon(476, 'Probopass', ['Rock', 'Steel']),
  new Pokemon(296, 'Makuhita', ['Fighting']),
  new Pokemon(297, 'Hariyama', ['Fighting']),
  new Pokemon(538, 'Throh', ['Fighting']),
  new Pokemon(539, 'Sawk', ['Fighting']),
  new Pokemon(396, 'Starly', ['Normal', 'Flying']),
  new Pokemon(397, 'Staravia', ['Normal', 'Flying']),
  new Pokemon(398, 'Staraptor', ['Normal', 'Flying']),
  new Pokemon(434, 'Stunky', ['Poison', 'Dark']),
  new Pokemon(435, 'Skuntank', ['Poison', 'Dark']),
  new Pokemon(29, 'Nidoran♀', ['Poison']),
  new Pokemon(30, 'Nidorina', ['Poison']),
  new Pokemon(31, 'Nidoqueen', ['Poison', 'Ground']),
  new Pokemon(32, 'Nidoran♂', ['Poison']),
  new Pokemon(33, 'Nidorino', ['Poison']),
  new Pokemon(34, 'Nidoking', ['Poison', 'Ground']),
  new Pokemon(702, 'Dedenne', ['Electric', 'Fairy']),
  new Pokemon(433, 'Chingling', ['Psychic']),
  new Pokemon(358, 'Chimecho', ['Psychic']),
  new Pokemon(439, 'Mime Jr.', ['Psychic', 'Fairy']),
  new Pokemon(122, 'Mr. Mime', ['Psychic', 'Fairy']),
  new Pokemon(577, 'Solosis', ['Psychic']),
  new Pokemon(578, 'Duosion', ['Psychic']),
  new Pokemon(579, 'Reuniclus', ['Psychic']),
  new Pokemon(360, 'Wynaut', ['Psychic']),
  new Pokemon(202, 'Wobbuffet', ['Psychic']),
  new Pokemon(524, 'Roggenrola', ['Rock']),
  new Pokemon(525, 'Boldore', ['Rock']),
  new Pokemon(526, 'Gigalith', ['Rock']),
  new Pokemon(302, 'Sableye', ['Dark', 'Ghost']),
  new Pokemon(703, 'Carbink', ['Rock', 'Fairy']),
  new Pokemon(128, 'Tauros', ['Normal']),
  new Pokemon(241, 'Miltank', ['Normal']),
  new Pokemon(179, 'Mareep', ['Electric']),
  new Pokemon(180, 'Flaaffy', ['Electric']),
  new Pokemon(181, 'Ampharos', ['Electric']),
  new Pokemon(127, 'Pinsir', ['Bug']),
  new Pokemon(214, 'Heracross', ['Bug', 'Fighting']),
  new Pokemon(417, 'Pachirisu', ['Electric']),
  new Pokemon(79, 'Slowpoke', ['Water', 'Psychic']),
  new Pokemon(80, 'Slowbro', ['Water', 'Psychic']),
  new Pokemon(199, 'Slowking', ['Water', 'Psychic']),
  new Pokemon(102, 'Exeggcute', ['Grass', 'Psychic']),
  new Pokemon(103, 'Exeggutor', ['Grass', 'Psychic']),
  new Pokemon(441, 'Chatot', ['Normal', 'Flying']),
  new Pokemon(458, 'Mantyke', ['Water', 'Flying']),
  new Pokemon(226, 'Mantine', ['Water', 'Flying']),
  new Pokemon(366, 'Clamperl', ['Water']),
  new Pokemon(367, 'Huntail', ['Water']),
  new Pokemon(368, 'Gorebyss', ['Water']),
  new Pokemon(223, 'Remoraid', ['Water']),
  new Pokemon(224, 'Octillery', ['Water']),
  new Pokemon(222, 'Corsola', ['Water', 'Rock']),
  new Pokemon(170, 'Chinchou', ['Water', 'Electric']),
  new Pokemon(171, 'Lanturn', ['Water', 'Electric']),
  new Pokemon(594, 'Alomomola', ['Water']),
  new Pokemon(131, 'Lapras', ['Water', 'Ice']),
  new Pokemon(144, 'Articuno', ['Ice', 'Flying']),
  new Pokemon(145, 'Zapdos', ['Electric', 'Flying']),
  new Pokemon(146, 'Moltres', ['Fire', 'Flying']),
  new Pokemon(50, 'Diglett', ['Ground']),
  new Pokemon(51, 'Dugtrio', ['Ground']),
  new Pokemon(328, 'Trapinch', ['Ground']),
  new Pokemon(329, 'Vibrava', ['Ground', 'Dragon']),
  new Pokemon(330, 'Flygon', ['Ground', 'Dragon']),
  new Pokemon(443, 'Gible', ['Dragon', 'Ground']),
  new Pokemon(444, 'Gabite', ['Dragon', 'Ground']),
  new Pokemon(445, 'Garchomp', ['Dragon', 'Ground']),
  new Pokemon(74, 'Geodude', ['Rock', 'Ground']),
  new Pokemon(75, 'Graveler', ['Rock', 'Ground']),
  new Pokemon(76, 'Golem', ['Rock', 'Ground']),
  new Pokemon(218, 'Slugma', ['Fire']),
  new Pokemon(219, 'Magcargo', ['Fire', 'Rock']),
  new Pokemon(213, 'Shuckle', ['Bug', 'Rock']),
  new Pokemon(451, 'Skorupi', ['Poison', 'Dark']),
  new Pokemon(452, 'Drapion', ['Poison', 'Dark']),
  new Pokemon(194, 'Wooper', ['Water', 'Ground']),
  new Pokemon(195, 'Quagsire', ['Water', 'Ground']),
  new Pokemon(704, 'Goomy', ['Dragon']),
  new Pokemon(705, 'Sliggoo', ['Dragon']),
  new Pokemon(706, 'Goodra', ['Dragon']),
  new Pokemon(588, 'Karrablast', ['Bug']),
  new Pokemon(589, 'Escavalier', ['Bug', 'Steel']),
  new Pokemon(616, 'Shelmet', ['Water']),
  new Pokemon(617, 'Accelgor', ['Water']),
  new Pokemon(69, 'Bellsprout', ['Grass', 'Poison']),
  new Pokemon(70, 'Weepinbell', ['Grass', 'Poison']),
  new Pokemon(71, 'Victreebel', ['Grass', 'Poison']),
  new Pokemon(455, 'Carnivine', ['Grass']),
  new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
  new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
  new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
  new Pokemon(60, 'Poliwag', ['Water']),
  new Pokemon(61, 'Poliwhirl', ['Water']),
  new Pokemon(62, 'Poliwrath', ['Water', 'Fighting']),
  new Pokemon(186, 'Politoed', ['Water']),
  new Pokemon(23, 'Ekans', ['Poison']),
  new Pokemon(24, 'Arbok', ['Poison']),
  new Pokemon(618, 'Stunfisk', ['Ground', 'Electric']),
  new Pokemon(339, 'Barboach', ['Water', 'Ground']),
  new Pokemon(340, 'Whiscash', ['Water', 'Ground']),
  new Pokemon(509, 'Purrloin', ['Dark']),
  new Pokemon(510, 'Liepard', ['Dark']),
  new Pokemon(261, 'Poochyena', ['Dark']),
  new Pokemon(262, 'Mightyena', ['Dark']),
  new Pokemon(504, 'Patrat', ['Normal']),
  new Pokemon(505, 'Watchog', ['Normal']),
  new Pokemon(624, 'Pawniard', ['Dark', 'Steel']),
  new Pokemon(625, 'Bisharp', ['Dark', 'Steel']),
  new Pokemon(707, 'Klefki', ['Steel', 'Fairy']),
  new Pokemon(198, 'Murkrow', ['Dark', 'Flying']),
  new Pokemon(430, 'Honchkrow', ['Dark', 'Flying']),
  new Pokemon(590, 'Foongus', ['Grass', 'Poison']),
  new Pokemon(591, 'Amoonguss', ['Grass', 'Poison']),
  new Pokemon(270, 'Lotad', ['Water', 'Grass']),
  new Pokemon(271, 'Lombre', ['Water', 'Grass']),
  new Pokemon(272, 'Ludicolo', ['Water', 'Grass']),
  new Pokemon(418, 'Buizel', ['Water']),
  new Pokemon(419, 'Floatzel', ['Water']),
  new Pokemon(550, 'Basculin', ['Water']),
  new Pokemon(708, 'Phantump', ['Ghost', 'Grass']),
  new Pokemon(709, 'Trevenant', ['Ghost', 'Grass']),
  new Pokemon(710, 'Pumpkaboo', ['Ghost', 'Grass']),
  new Pokemon(711, 'Gourgeist', ['Ghost', 'Grass']),
  new Pokemon(607, 'Litwick', ['Ghost', 'Fire']),
  new Pokemon(608, 'Lampent', ['Ghost', 'Fire']),
  new Pokemon(609, 'Chandelure', ['Ghost', 'Fire']),
  new Pokemon(479, 'Rotom', ['Electric', 'Ghost']),
  new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
  new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
  new Pokemon(462, 'Magnezone', ['Electric', 'Steel']),
  new Pokemon(100, 'Voltorb', ['Electric']),
  new Pokemon(101, 'Electrode', ['Electric']),
  new Pokemon(568, 'Trubbish', ['Poison']),
  new Pokemon(569, 'Garbodor', ['Poison']),
  new Pokemon(220, 'Swinub', ['Ice', 'Ground']),
  new Pokemon(221, 'Piloswine', ['Ice', 'Ground']),
  new Pokemon(473, 'Mamoswine', ['Ice', 'Ground']),
  new Pokemon(712, 'Bergmite', ['Ice']),
  new Pokemon(713, 'Avalugg', ['Ice']),
  new Pokemon(613, 'Cubchoo', ['Ice']),
  new Pokemon(614, 'Beartic', ['Ice']),
  new Pokemon(238, "Smoochum", ['Ice', 'Psychic']),
  new Pokemon(124, 'Jynx', ['Ice', 'Psychic']),
  new Pokemon(582, 'Vanillite', ['Ice']),
  new Pokemon(583, 'Vanillish', ['Ice']),
  new Pokemon(584, 'Vanilluxe', ['Ice']),
  new Pokemon(459, 'Snover', ['Grass', 'Ice']),
  new Pokemon(460, 'Abomasnow', ['Grass', 'Ice']),
  new Pokemon(225, 'Delibird', ['Ice', 'Flying']),
  new Pokemon(215, 'Sneasel', ['Dark', 'Ice']),
  new Pokemon(461, 'Weavile', ['Dark', 'Ice']),
  new Pokemon(532, 'Timburr', ['Fighting']),
  new Pokemon(533, 'Gurdurr', ['Fighting']),
  new Pokemon(534, 'Conkeldurr', ['Fighting']),
  new Pokemon(324, 'Torkoal', ['Fire']),
  new Pokemon(27, 'Sandshrew', ['Ground']),
  new Pokemon(28, 'Sandslash', ['Ground']),
  new Pokemon(304, 'Aron', ['Steel', 'Rock']),
  new Pokemon(305, 'Lairon', ['Steel', 'Rock']),
  new Pokemon(306, 'Aggron', ['Steel', 'Rock']),
  new Pokemon(246, 'Larvitar', ['Rock', 'Ground']),
  new Pokemon(247, 'Pupitar', ['Rock', 'Ground']),
  new Pokemon(248, 'Tyranitar', ['Rock', 'Dark']),
  new Pokemon(631, 'Heatmor', ['Fire']),
  new Pokemon(632, 'Durant', ['Bug', 'Steel']),
  new Pokemon(167, 'Spinarak', ['Bug', 'Poison']),
  new Pokemon(168, 'Ariados', ['Bug', 'Poison']),
  new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
  new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
  new Pokemon(615, 'Cryogonal', ['Ice']),
  new Pokemon(227, 'Skarmory', ['Steel', 'Flying']),
  new Pokemon(714, 'Noibat', ['Flying', 'Dragon']),
  new Pokemon(715, 'Noivern', ['Flying', 'Dragon']),
  new Pokemon(207, 'Gligar', ['Ground', 'Flying']),
  new Pokemon(472, 'Gliscor', ['Ground', 'Flying']),
  new Pokemon(163, 'Hoothoot', ['Normal', 'Flying']),
  new Pokemon(164, 'Noctowl', ['Normal', 'Flying']),
  new Pokemon(174, 'Igglybuff', ['Normal', 'Fairy']),
  new Pokemon(39, 'Jigglypuff', ['Normal', 'Fairy']),
  new Pokemon(40, 'Wigglytuff', ['Normal', 'Fairy']),
  new Pokemon(353, 'Shuppet', ['Ghost']),
  new Pokemon(354, 'Banette', ['Ghost']),
  new Pokemon(570, 'Zorua', ['Dark']),
  new Pokemon(571, 'Zoroark', ['Dark']),
  new Pokemon(574, 'Gothita', ['Psychic']),
  new Pokemon(575, 'Gothorita', ['Psychic']),
  new Pokemon(576, 'Gothitelle', ['Psychic']),
  new Pokemon(438, 'Bonsly', ['Rock']),
  new Pokemon(185, 'Sudowoodo', ['Rock']),
  new Pokemon(327, 'Spinda', ['Normal']),
  new Pokemon(216, 'Teddiursa', ['Normal']),
  new Pokemon(217, 'Ursaring', ['Normal']),
  new Pokemon(108, 'Lickitung', ['Normal']),
  new Pokemon(463, 'Lickilicky', ['Normal']),
  new Pokemon(123, 'Scyther', ['Bug', 'Flying']),
  new Pokemon(212, 'Scizor', ['Bug', 'Steel']),
  new Pokemon(132, 'Ditto', ['Normal']),
  new Pokemon(333, 'Swablu', ['Normal', 'Flying']),
  new Pokemon(334, 'Altaria', ['Dragon', 'Flying']),
  new Pokemon(621, 'Druddigon', ['Dragon']),
  new Pokemon(633, 'Deino', ['Dark', 'Dragon']),
  new Pokemon(634, 'Zweilous', ['Dark', 'Dragon']),
  new Pokemon(635, 'Hydreigon', ['Dark', 'Dragon']),
  new Pokemon(147, 'Dratini', ['Dragon']),
  new Pokemon(148, 'Dragonair', ['Dragon']),
  new Pokemon(149, 'Dragonite', ['Dragon', 'Flying']),
  new Pokemon(716, 'Xerneas', ['Fairy']),
  new Pokemon(717, 'Yveltal', ['Dark', 'Flying']),
  new Pokemon(718, 'Zygarde', ['Dragon', 'Ground']),
  new Pokemon(150, 'Mewtwo', ['Psychic'])
]

function loadAlola() {
  $('#Center').text("The Alolan Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();

  for (var j = 0; j < pokemonList.length; j++) {
    pokemonList[j].loadToPage();
    pokemonList[j].ShowTypes();
  }

}
