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
  new Items('Balm Mushroom', '', '', 'A rare mushroom which gives off a nice fragrance. A maniac will buy it for a high price.'),
  new Items('Banettite', '', '', 'Enables Banette to Mega Evolve during battle.'),
  new Items('Beach Glass', '', '', ''),
  new Items('Beast Ball', '', '', 'A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.'),
  new Items('Beedrillite', '', '', 'Enables Beedrill to Mega Evolve during battle.'),
  new Items('Belue Berry', '', '', 'A Berry which is very rare in the Unova region. A maniac will buy it for a high price.'),
  new Items('Berry Juice', '', '', 'A 100% pure juice made of Berries. It restores the HP of one Pokémon by just 20 points.'),
  new Items('Big Malasada', '', '', 'Heals all major status conditions.'),
  new Items('Big Mushroom', '', '', 'A large and rare mushroom. It is sought after by collectors.'),
  new Items('Big Nugget', '', '', 'A big nugget of pure gold that gives off a lustrous gleam. A maniac will buy it for a high price.'),
  new Items('Big Pearl', '', '', 'A quite-large pearl that sparkles in a pretty silver color. It can be sold at a high price to shops.'),
  new Items('Big Root', '', '', 'Recovers more HP from HP-stealing moves.'),
  new Items('Binding Band', '', '', 'A band that increases the power of binding moves when held.'),
  new Items('Black Apricorn', '', '', 'A black Apricorn It has an indescribable scent.'),
  new Items('Black Belt', '', '', 'Increases the power of Fighting-type moves.'),
  new Items('Black Flute', '', '', 'A toy flute made from black glass. A maniac will buy it for a high price.'),
  new Items('Black Glasses', '', '', 'Increases the power of Dark-type moves.'),
  new Items('Black Sludge', '', '', 'A held item that gradually restores the HP of Poison-type Pokémon. It inflicts damage on all other types.'),
  new Items('Blastoisinite', '', '', 'Enables Blastoise to Mega Evolve during battle.'),
  new Items('Blazikenite', '', '', 'Enables Blaziken to Mega Evolve during battle.'),
  new Items('Blue Apricorn', '', '', 'A blue Apricorn. It smells a bit like grass.'),
  new Items('Blue Flute', '', '', 'A toy flute made from blue glass. A maniac will buy it for a high price.'),
  new Items('Blue Scarf', '', '', 'Raises holder\'s Beauty aspect in a Contest.'),
  new Items('Blue Shard', '', '', 'A small blue shard. It appears to be from some sort of implement made long ago.'),
  new Items('Bluk Berry', '', '', 'A Berry which is very rare in the Unova region. A maniac will buy it for a high price.'),
  new Items('Bottle Cap', '', '', 'Maximizes one IV stat in Hyper Training.'),
  new Items('Bright Powder', '', '', 'Lowers the opponent’s accuracy.'),
  new Items('Bug Gem', '', '', 'Increases the power of a Bug-type move only once.'),
  new Items('Bug Memory', '', '', 'Changes Silvally and its move Multi-Attack to Bug type.'),
  new Items('Buginium Z', '', '', 'Allows the use of Savage Spin-Out, the Bug type Z-Move.'),
  new Items('Burn Drive', '', '', 'Changes Techno Blast to a Fire-type move when held by Genesect.'),
  new Items('Burn Heal', '', '', 'A spray-type medicine. It heals a single Pokémon that is suffering from a burn.'),
  new Items('Calcium', '', '', 'Increases Special Attack EVs by 10.'),
  new Items('Cameruptite', '', '', 'Enables Camerupt to Mega Evolve during battle.'),
  new Items('Carbos', '', '', 'Increases Speed EVs by 10.'),
  new Items('Casteliacone', '', '', 'Heals all major status conditions.'),
  new Items('Cell Battery', '', '', 'A consumable battery. If the holder is hit by an Electric-type move, its Attack will rise.'),
  new Items('Chalky Stone', '', '', ''),
  new Items('Charcoal', '', '', 'Increases the power of Fire-type moves.'),
  new Items('Charizardite X', '', '', 'Enables Charizard to Mega Evolve during battle.'),
  new Items('Charizardite Y', '', '', 'Enables Charizard to Mega Evolve during battle.'),
  new Items('Charti Berry', '', '', 'Weakens a supereffective Rock-type attack against the holding Pokémon.'),
  new Items('Cheri Berry', '', '', 'If held by a Pokémon, it recovers from paralysis.'),
  new Items('Cherish Ball', '', '', 'A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.'),
  new Items('Chesto Berry', '', '', 'If held by a Pokémon, it recovers from sleep.'),
  new Items('Chilan Berry', '', '', 'Weakens a Normal-type attack against the Pokémon holding this berry.'),
  new Items('Chill Drive', '', '', 'Changes Techno Blast to an Ice-type move when held by Genesect.'),
  new Items('Choice Band', '', '', 'Raises Attack, but only one move can be used.'),
  new Items('Choice Scarf', '', '', 'Raises Speed, but only one move can be used.'),
  new Items('Choice Specs', '', '', 'Raises Special Attack, but only one move can be used.'),
  new Items('Chople Berry', '', '', 'Weakens a supereffective Fighting-type attack against the holding Pokémon.'),
  new Items('Claw Fossil', '', '', 'A fossil of an ancient Pokémon that lived in the sea. It appears to be part of a claw.'),
  new Items('Cleanse Tag', '', '', 'An item to be held by a Pokémon. It helps keep wild Pokémon away if the holder is the first one in the party.'),
  new Items('Clever Wing', '', '', 'Increases Special Defense EVs by 1.'),
  new Items('Coba Berry', '', '', 'Weakens a supereffective Flying-type attack against the holding Pokémon.'),
  new Items('Colbur Berry', '', '', 'Weakens a supereffective Dark-type attack against the holding Pokémon.'),
  new Items('Colress Machine', '', '', 'A special device that wrings out the potential of Pokémon. It is an imperfect prototype.'),
  new Items('Comet Shard', '', '', 'A shard which fell to the ground when a comet approached. A maniac will buy it for a high price.'),
  new Items('Cornn Berry', '', '', 'A Berry which is very rare in the Unova region. A maniac will buy it for a high price.'),
  new Items('Courage Candy', '', '', 'Increases a Pokémon\'s Special Defense stat by 1.'),
  new Items('Courage Candy L', '', '', 'Increases a Pokémon\'s Special Defense stat.'),
  new Items('Courage Candy XL', '', '', 'Increases a Pokémon\'s Special Defense stat.'),
  new Items('Cover Fossil', '', '', 'A fossil of an ancient Pokémon that lived in the sea in ancient times. It appears to be part of its back.'),
  new Items('Custap Berry', '', '', 'Holder can move first when HP is low.'),
  new Items('Damp Mulch', '', '', ''),
  new Items('Damp Rock', '', '', ''),
  new Items('Dark Gem', '', '', ''),
  new Items('Dark Memory', '', '', ''),
  new Items('Darkinium Z', '', '', ''),
  new Items('Dawn Stone', '', '', ''),
  new Items('Decidium Z', '', '', ''),
  new Items('Deep Sea Scale', '', '', ''),
  new Items('Deep Sea Tooth', '', '', ''),
  new Items('Destiny Knot', '', '', ''),
  new Items('Diancite', '', '', ''),
  new Items('Dire Hit', '', '', ''),
  new Items('Dire Hit 2', '', '', ''),
  new Items('Dire Hit 3', '', '', ''),
  new Items('Discount Coupon', '', '', ''),
  new Items('Dive Ball', '', '', ''),
  new Items('DNA Splicers', '', '', ''),
  new Items('Dome Fossil', '', '', ''),
  new Items('Douse Drive', '', '', ''),
  new Items('Draco Plate', '', '', ''),
  new Items('Dragon Fang', '', '', ''),
  new Items('Dragon Gem', '', '', ''),
  new Items('Dragon Memory', '', '', ''),
  new Items('Dragon Scale', '', '', ''),
  new Items('Dragonium Z', '', '', ''),
  new Items('Dread Plate', '', '', ''),
  new Items('Dream Ball', '', '', ''),
  new Items('Dropped Item', '', '', ''),
  new Items('Dubious Disc', '', '', ''),
  new Items('Durin Berry', '', '', ''),
  new Items('Dusk Ball', '', '', ''),
  new Items('Dusk Stone', '', '', ''),
  new Items('Earth Plate', '', '', ''),
  new Items('Eevium Z', '', '', ''),
  new Items('Eject Button', '', '', ''),
  new Items('Electirizer', '', '', ''),
  new Items('Electric Gem', '', '', ''),
  new Items('Electric Memory', '', '', ''),
  new Items('Electric Seed', '', '', ''),
  new Items('Electrium Z', '', '', ''),
  new Items('Elevator Key', '', '', ''),
  new Items('Elixir', '', '', ''),
  new Items('Energy Powder', '', '', ''),
  new Items('Energy Root', '', '', ''),
  new Items('Enigma Berry', '', '', ''),
  new Items('Escape Rope', '', '', ''),
  new Items('Ether', '', '', ''),
  new Items('Everstone', '', '', ''),
  new Items('Eviolite', '', '', ''),
  new Items('Exp. Share', '', '', ''),
  new Items('Expert Belt', '', '', ''),
  new Items('Fairium Z', '', '', ''),
  new Items('Fairy Gem', '', '', ''),
  new Items('Fairy Memory', '', '', ''),
  new Items('Fast Ball', '', '', ''),
  new Items('Festival Ticket', '', '', ''),
  new Items('Fighting Gem', '', '', ''),
  new Items('Fighting Memory', '', '', ''),
  new Items('Fightinium Z', '', '', ''),
  new Items('Figy Berry', '', '', ''),
  new Items('Fire Gem', '', '', ''),
  new Items('Fire Memory', '', '', ''),
  new Items('Fire Stone', '', '', ''),
  new Items('Firium Z', '', '', ''),
  new Items('Fist Plate', '', '', ''),
  new Items('Flame Orb', '', '', ''),
  new Items('Flame Plate', '', '', ''),
  new Items('Float Stone', '', '', ''),
  new Items('Fluffy Tail', '', '', ''),
  new Items('Flying Gem', '', '', ''),
  new Items('Flying Memory', '', '', ''),
  new Items('Flyinium Z', '', '', ''),
  new Items('Focus Band', '', '', ''),
  new Items('Focus Sash', '', '', ''),
  new Items('Fresh Water', '', '', ''),
  new Items('Friend Ball', '', '', ''),
  new Items('Full Heal', '', '', ''),
  new Items('Full Incense', '', '', ''),
  new Items('Full Restore', '', '', ''),
  new Items('Galladite', '', '', ''),
  new Items('Ganlon Berry', '', '', ''),
  new Items('Garchompite', '', '', ''),
  new Items('Gardevoirite', '', '', ''),
  new Items('Gengarite', '', '', ''),
  new Items('Genius Wing', '', '', ''),
  new Items('Ghost Gem', '', '', ''),
  new Items('Ghost Memory', '', '', ''),
  new Items('Ghostium Z', '', '', ''),
  new Items('Glalitite', '', '', ''),
  new Items('Gold Bottle Cap', '', '', ''),
  new Items('Gold Leaf', '', '', ''),
  new Items('Golden Nanab Berry', '', '', ''),
  new Items('Golden Pinap Berry', '', '', ''),
  new Items('Golden Razz Berry', '', '', ''),
  new Items('Gooey Mulch', '', '', ''),
  new Items('Grass Gem', '', '', ''),
  new Items('Grass Memory', '', '', ''),
  new Items('Grassium Z', '', '', ''),
  new Items('Grassy Seed', '', '', ''),
  new Items('Great Ball', '', '', ''),
  new Items('Green Apricorn', '', '', ''),
  new Items('Green Scarf', '', '', ''),
  new Items('Green Shard', '', '', ''),
  new Items('Grepa Berry', '', '', ''),
  new Items('Grip Claw', '', '', ''),
  new Items('Griseous Orb', '', '', ''),
  new Items('Ground Gem', '', '', ''),
  new Items('Ground Memory', '', '', ''),
  new Items('Groundium Z', '', '', ''),
  new Items('Growth Mulch', '', '', ''),
  new Items('Grubby Hanky', '', '', ''),
  new Items('Guard Spec.', '', '', ''),
  new Items('Gyaradosite', '', '', ''),
  new Items('Haban Berry', '', '', ''),
  new Items('Hard Stone', '', '', ''),
  new Items('Heal Ball', '', '', ''),
  new Items('Heal Powder', '', '', ''),
  new Items('Health Candy', '', '', ''),
  new Items('Health Candy L', '', '', ''),
  new Items('Health Candy XL', '', '', ''),
  new Items('Health Wing', '', '', ''),
  new Items('Heart Scale', '', '', ''),
  new Items('Heat Rock', '', '', ''),
  new Items('Heavy Ball', '', '', ''),
  new Items('Helix Fossil', '', '', ''),
  new Items('Heracronite', '', '', ''),
  new Items('HM01', '', '', ''),
  new Items('HM02', '', '', ''),
  new Items('HM03', '', '', ''),
  new Items('HM04', '', '', ''),
  new Items('HM05', '', '', ''),
  new Items('HM06', '', '', ''),
  new Items('HM07', '', '', ''),
  new Items('HM08', '', '', ''),
  new Items('Hondew Berry', '', '', ''),
  new Items('Honey', '', '', ''),
  new Items('Honor Of Kalos', '', '', ''),
  new Items('Houndoominite', '', '', ''),
  new Items('HP Up', '', '', ''),
  new Items('Hyper Potion', '', '', ''),
  new Items('Iapapa Berry', '', '', ''),
  new Items('Ice Gem', '', '', ''),
  new Items('Ice Heal', '', '', ''),
  new Items('Ice Memory', '', '', ''),
  new Items('Ice Stone', '', '', ''),
  new Items('Icicle Plate', '', '', ''),
  new Items('Icium Z', '', '', ''),
  new Items('Icy Rock', '', '', ''),
  new Items('Incinium Z', '', '', ''),
  new Items('Insect Plate', '', '', ''),
  new Items('Intriguing Stone', '', '', ''),
  new Items('Iron', '', '', ''),
  new Items('Iron Ball', '', '', ''),
  new Items('Iron Plate', '', '', ''),
  new Items('Item Drop', '', '', ''),
  new Items('Item Urge', '', '', ''),
  new Items('Jaboca Berry', '', '', ''),
  new Items('Kangaskhanite', '', '', ''),
  new Items('Kasib Berry', '', '', ''),
  new Items('Kebia Berry', '', '', ''),
  new Items('Kee Berry', '', '', ''),
  new Items('Kelpsy Berry', '', '', ''),
  new Items('King\'s Rock', '', '', ''),
  new Items('Kommonium Z', '', '', ''),
  new Items('Lagging Tail', '', '', ''),
  new Items('Lansat Berry', '', '', ''),
  new Items('Latiasite', '', '', ''),
  new Items('Latiosite', '', '', ''),
  new Items('Lava Cookie', '', '', ''),
  new Items('Lax Incense', '', '', ''),
  new Items('Leaf Letter', '', '', ''),
  new Items('Leaf Stone', '', '', ''),
  new Items('Leftovers', '', '', ''),
  new Items('Lemonade', '', '', ''),
  new Items('Leppa Berry', '', '', ''),
  new Items('Level Ball', '', '', ''),
  new Items('Liechi Berry', '', '', ''),
  new Items('Life Orb', '', '', ''),
  new Items('Light Ball', '', '', ''),
  new Items('Light Clay', '', '', ''),
  new Items('Lone Earring', '', '', ''),
  new Items('Looker Ticket', '', '', ''),
  new Items('Lopunnite', '', '', ''),
  new Items('Love Ball', '', '', ''),
  new Items('Lucarionite', '', '', ''),
  new Items('Luck Incense', '', '', ''),
  new Items('Lucky Egg', '', '', ''),
  new Items('Lucky Punch', '', '', ''),
  new Items('Lum Berry', '', '', ''),
  new Items('Luminous Moss', '', '', ''),
  new Items('Lumiose Galette', '', '', ''),
  new Items('Lunalium Z', '', '', ''),
  new Items('Lure', '', '', ''),
  new Items('Lure Ball', '', '', ''),
  new Items('Lustrous Orb', '', '', ''),
  new Items('Luxury Ball', '', '', ''),
  new Items('Lycanium Z', '', '', ''),
  new Items('Macho Brace', '', '', ''),
  new Items('Magmarizer', '', '', ''),
  new Items('Magnet', '', '', ''),
  new Items('Mago Berry', '', '', ''),
  new Items('Magost Berry', '', '', ''),
  new Items('Manectite', '', '', ''),
  new Items('Maranga Berry', '', '', ''),
  new Items('Marble', '', '', ''),
  new Items('Marshadium Z', '', '', ''),
  new Items('Master Ball', '', '', ''),
  new Items('Mawilite', '', '', ''),
  new Items('Max Elixir', '', '', ''),
  new Items('Max Ether', '', '', ''),
  new Items('Max Lure', '', '', ''),
  new Items('Max Potion', '', '', ''),
  new Items('Max Repel', '', '', ''),
  new Items('Max Revive', '', '', ''),
  new Items('Meadow Plate', '', '', ''),
  new Items('Medichamite', '', '', ''),
  new Items('Mental Herb', '', '', ''),
  new Items('Metagrossite', '', '', ''),
  new Items('Metal Coat', '', '', ''),
  new Items('Metal Powder', '', '', ''),
  new Items('Metronome', '', '', ''),
  new Items('Mewnium Z', '', '', ''),
  new Items('Mewtwonite X', '', '', ''),
  new Items('Mewtwonite Y', '', '', ''),
  new Items('Micle Berry', '', '', ''),
  new Items('Mighty Candy', '', '', ''),
  new Items('Mighty Candy L', '', '', ''),
  new Items('Mighty Candy XL', '', '', ''),
  new Items('Mimikium Z', '', '', ''),
  new Items('Mind Plate', '', '', ''),
  new Items('Miracle Seed', '', '', ''),
  new Items('Misty Seed', '', '', ''),
  new Items('Moomoo Milk', '', '', ''),
  new Items('Moon Ball', '', '', ''),
  new Items('Moon Stone', '', '', ''),
  new Items('Muscle Band', '', '', ''),
  new Items('Muscle Wing', '', '', ''),
  new Items('Mystic Water', '', '', ''),
  new Items('Nanab Berry', '', '', ''),
  new Items('Nest Ball', '', '', ''),
  new Items('Net Ball', '', '', ''),
  new Items('Never-Melt Ice', '', '', ''),
  new Items('Nomel Berry', '', '', ''),
  new Items('Normal Gem', '', '', ''),
  new Items('Normalium Z', '', '', ''),
  new Items('Nugget', '', '', ''),
  new Items('Occa Berry', '', '', ''),
  new Items('Odd Incense', '', '', ''),
  new Items('Odd Keystone', '', '', ''),
  new Items('Old Amber', '', '', ''),
  new Items('Old Gateau', '', '', ''),
  new Items('Oran Berry', '', '', ''),
  new Items('Oval Charm', '', '', ''),
  new Items('Oval Stone', '', '', ''),
  new Items('Pamtre Berry', '', '', ''),
  new Items('Paralyze Heal', '', '', ''),
  new Items('Park Ball', '', '', ''),
  new Items('Pass Orb', '', '', ''),
  new Items('Passho Berry', '', '', ''),
  new Items('Payapa Berry', '', '', ''),
  new Items('Pearl', '', '', ''),
  new Items('Pearl String', '', '', ''),
  new Items('Pecha Berry', '', '', ''),
  new Items('Permit', '', '', ''),
  new Items('Persim Berry', '', '', ''),
  new Items('Petaya Berry', '', '', ''),
  new Items('Pewter Crunchies', '', '', ''),
  new Items('Pidgeotite', '', '', ''),
  new Items('Pikanium Z', '', '', ''),
  new Items('Pikashunium Z', '', '', ''),
  new Items('Pinap Berry', '', '', ''),
  new Items('Pink Apricorn', '', '', ''),
  new Items('Pink Nectar', '', '', ''),
  new Items('Pink Scarf', '', '', ''),
  new Items('Pinsirite', '', '', ''),
  new Items('Pixie Plate', '', '', ''),
  new Items('Plasma Card', '', '', ''),
  new Items('Plume Fossil', '', '', ''),
  new Items('Poison Barb', '', '', ''),
  new Items('Poison Gem', '', '', ''),
  new Items('Poison Memory', '', '', ''),
  new Items('Poisonium Z', '', '', ''),
  new Items('Poké Ball', '', '', ''),
  new Items('Poké Doll', '', '', ''),
  new Items('Poké Toy', '', '', ''),
  new Items('Polished Mud Ball', '', '', ''),
  new Items('Pomeg Berry', '', '', ''),
  new Items('Potion', '', '', ''),
  new Items('Power Anklet', '', '', ''),
  new Items('Power Band', '', '', ''),
  new Items('Power Belt', '', '', ''),
  new Items('Power Bracer', '', '', ''),
  new Items('Power Herb', '', '', ''),
  new Items('Power Lens', '', '', ''),
  new Items('Power Plant Pass', '', '', ''),
  new Items('Power Weight', '', '', ''),
  new Items('PP Max', '', '', ''),
  new Items('PP Up', '', '', ''),
  new Items('Premier Ball', '', '', ''),
  new Items('Pretty Wing', '', '', ''),
  new Items('Primarium Z', '', '', ''),
  new Items('Prism Scale', '', '', ''),
  new Items('Prison Bottle', '', '', ''),
  new Items('Prof\'s Letter', '', '', ''),
  new Items('Protective Pads', '', '', ''),
  new Items('Protector', '', '', ''),
  new Items('Protein', '', '', ''),
  new Items('Psychic Gem', '', '', ''),
  new Items('Psychic Memory', '', '', ''),
  new Items('Psychic Seed', '', '', ''),
  new Items('Psychium Z', '', '', ''),
  new Items('Pure Incense', '', '', ''),
  new Items('Purple Nectar', '', '', ''),
  new Items('Qualot Berry', '', '', ''),
  new Items('Quick Ball', '', '', ''),
  new Items('Quick Candy', '', '', ''),
  new Items('Quick Candy L', '', '', ''),
  new Items('Quick Candy XL', '', '', ''),
  new Items('Quick Claw', '', '', ''),
  new Items('Quick Powder', '', '', ''),
  new Items('Rabuta Berry', '', '', ''),
  new Items('Rage Candy Bar', '', '', ''),
  new Items('Rare Bone', '', '', ''),
  new Items('Rare Candy', '', '', ''),
  new Items('Rawst Berry', '', '', ''),
  new Items('Razor Claw', '', '', ''),
  new Items('Razor Fang', '', '', ''),
  new Items('Razz Berry', '', '', ''),
  new Items('Reaper Cloth', '', '', ''),
  new Items('Red Apricorn', '', '', ''),
  new Items('Red Card', '', '', ''),
  new Items('Red Flute', '', '', ''),
  new Items('Red Nectar', '', '', ''),
  new Items('Red Scarf', '', '', ''),
  new Items('Red Shard', '', '', ''),
  new Items('Relic Band', '', '', ''),
  new Items('Relic Copper', '', '', ''),
  new Items('Relic Crown', '', '', ''),
  new Items('Relic Gold', '', '', ''),
  new Items('Relic Silver', '', '', ''),
  new Items('Relic Statue', '', '', ''),
  new Items('Relic Vase', '', '', ''),
  new Items('Repeat Ball', '', '', ''),
  new Items('Repel', '', '', ''),
  new Items('Reset Urge', '', '', ''),
  new Items('Resist Wing', '', '', ''),
  new Items('Reveal Glass', '', '', ''),
  new Items('Revival Herb', '', '', ''),
  new Items('Revive', '', '', ''),
  new Items('Rindo Berry', '', '', ''),
  new Items('Ring Target', '', '', ''),
  new Items('Rock Gem', '', '', ''),
  new Items('Rock Incense', '', '', ''),
  new Items('Rock Memory', '', '', ''),
  new Items('Rockium Z', '', '', ''),
  new Items('Rocky Helmet', '', '', ''),
  new Items('Roller Skates', '', '', ''),
  new Items('Root Fossil', '', '', ''),
  new Items('Rose Incense', '', '', ''),
  new Items('Roseli Berry', '', '', ''),
  new Items('Roto Bargain', '', '', ''),
  new Items('Roto Boost', '', '', ''),
  new Items('Roto Catch', '', '', ''),
  new Items('Roto Encounter', '', '', ''),
  new Items('Roto Exp. Points', '', '', ''),
  new Items('Roto Friendship', '', '', ''),
  new Items('Roto Hatch', '', '', ''),
  new Items('Roto HP Restore', '', '', ''),
  new Items('Roto PP Restore', '', '', ''),
  new Items('Roto Prize Money', '', '', ''),
  new Items('Roto Stealth', '', '', ''),
  new Items('Rowap Berry', '', '', ''),
  new Items('Sablenite', '', '', ''),
  new Items('Sachet', '', '', ''),
  new Items('Sacred Ash', '', '', ''),
  new Items('Safari Ball', '', '', ''),
  new Items('Safety Goggles', '', '', ''),
  new Items('Salac Berry', '', '', ''),
  new Items('Salamencite', '', '', ''),
  new Items('Sceptilite', '', '', ''),
  new Items('Scizorite', '', '', ''),
  new Items('Scope Lens', '', '', ''),
  new Items('Sea Incense', '', '', ''),
  new Items('Shalour Sable', '', '', ''),
  new Items('Sharp Beak', '', '', ''),
  new Items('Sharpedonite', '', '', ''),
  new Items('Shed Shell', '', '', ''),
  new Items('Shell Bell', '', '', ''),
  new Items('Shiny Charm', '', '', ''),
  new Items('Shiny Stone', '', '', ''),
  new Items('Shoal Salt', '', '', ''),
  new Items('Shoal Shell', '', '', ''),
  new Items('Shock Drive', '', '', ''),
  new Items('Shuca Berry', '', '', ''),
  new Items('Silk Scarf', '', '', ''),
  new Items('Silver Leaf', '', '', ''),
  new Items('Silver Nanab Berry', '', '', ''),
  new Items('Silver Pinap Berry', '', '', ''),
  new Items('Silver Powder', '', '', ''),
  new Items('Silver Razz Berry', '', '', ''),
  new Items('Sitrus Berry', '', '', ''),
  new Items('Skull Fossil', '', '', ''),
  new Items('Sky Plate', '', '', ''),
  new Items('Slowbronite', '', '', ''),
  new Items('Small Bouquet', '', '', ''),
  new Items('Smart Candy', '', '', ''),
  new Items('Smart Candy L', '', '', ''),
  new Items('Smart Candy XL', '', '', ''),
  new Items('Smoke Ball', '', '', ''),
  new Items('Smooth Rock', '', '', ''),
  new Items('Snorlium Z', '', '', ''),
  new Items('Snowball', '', '', ''),
  new Items('Soda Pop', '', '', ''),
  new Items('Soft Sand', '', '', ''),
  new Items('Solganium Z', '', '', ''),
  new Items('Soothe Bell', '', '', ''),
  new Items('Soul Dew', '', '', ''),
  new Items('Spell Tag', '', '', ''),
  new Items('Spelon Berry', '', '', ''),
  new Items('Splash Plate', '', '', ''),
  new Items('Spooky Plate', '', '', ''),
  new Items('Sport Ball', '', '', ''),
  new Items('Sprinklotad', '', '', ''),
  new Items('Stable Mulch', '', '', ''),
  new Items('Star Piece', '', '', ''),
  new Items('Stardust', '', '', ''),
  new Items('Starf Berry', '', '', ''),
  new Items('Steel Gem', '', '', ''),
  new Items('Steel Memory', '', '', ''),
  new Items('Steelium Z', '', '', ''),
  new Items('Steelixite', '', '', ''),
  new Items('Stick', '', '', ''),
  new Items('Sticky Barb', '', '', ''),
  new Items('Stone Plate', '', '', ''),
  new Items('Strange Souvenir', '', '', ''),
  new Items('Stretchy Spring', '', '', ''),
  new Items('Sun Stone', '', '', ''),
  new Items('Super Lure', '', '', ''),
  new Items('Super Potion', '', '', ''),
  new Items('Super Repel', '', '', ''),
  new Items('Swampertite', '', '', ''),
  new Items('Sweet Heart', '', '', ''),
  new Items('Swift Wing', '', '', ''),
  new Items('Tamato Berry', '', '', ''),
  new Items('Tanga Berry', '', '', ''),
  new Items('Tapunium Z', '', '', ''),
  new Items('Terrain Extender', '', '', ''),
  new Items('Thick Club', '', '', ''),
  new Items('Thunder Stone', '', '', ''),
  new Items('Timer Ball', '', '', ''),
  new Items('Tiny Mushroom', '', '', ''),
  new Items('TM01', '', '', ''),
  new Items('TM02', '', '', ''),
  new Items('TM03', '', '', ''),
  new Items('TM04', '', '', ''),
  new Items('TM05', '', '', ''),
  new Items('TM06', '', '', ''),
  new Items('TM07', '', '', ''),
  new Items('TM08', '', '', ''),
  new Items('TM09', '', '', ''),
  new Items('TM10', '', '', ''),
  new Items('TM11', '', '', ''),
  new Items('TM12', '', '', ''),
  new Items('TM13', '', '', ''),
  new Items('TM14', '', '', ''),
  new Items('TM15', '', '', ''),
  new Items('TM16', '', '', ''),
  new Items('TM17', '', '', ''),
  new Items('TM18', '', '', ''),
  new Items('TM19', '', '', ''),
  new Items('TM20', '', '', ''),
  new Items('TM21', '', '', ''),
  new Items('TM22', '', '', ''),
  new Items('TM23', '', '', ''),
  new Items('TM24', '', '', ''),
  new Items('TM25', '', '', ''),
  new Items('TM26', '', '', ''),
  new Items('TM27', '', '', ''),
  new Items('TM28', '', '', ''),
  new Items('TM29', '', '', ''),
  new Items('TM30', '', '', ''),
  new Items('TM31', '', '', ''),
  new Items('TM32', '', '', ''),
  new Items('TM33', '', '', ''),
  new Items('TM34', '', '', ''),
  new Items('TM35', '', '', ''),
  new Items('TM36', '', '', ''),
  new Items('TM37', '', '', ''),
  new Items('TM38', '', '', ''),
  new Items('TM39', '', '', ''),
  new Items('TM40', '', '', ''),
  new Items('TM41', '', '', ''),
  new Items('TM42', '', '', ''),
  new Items('TM43', '', '', ''),
  new Items('TM44', '', '', ''),
  new Items('TM45', '', '', ''),
  new Items('TM46', '', '', ''),
  new Items('TM47', '', '', ''),
  new Items('TM48', '', '', ''),
  new Items('TM49', '', '', ''),
  new Items('TM50', '', '', ''),
  new Items('TM51', '', '', ''),
  new Items('TM52', '', '', ''),
  new Items('TM53', '', '', ''),
  new Items('TM54', '', '', ''),
  new Items('TM55', '', '', ''),
  new Items('TM56', '', '', ''),
  new Items('TM57', '', '', ''),
  new Items('TM58', '', '', ''),
  new Items('TM59', '', '', ''),
  new Items('TM60', '', '', ''),
  new Items('TM61', '', '', ''),
  new Items('TM62', '', '', ''),
  new Items('TM63', '', '', ''),
  new Items('TM64', '', '', ''),
  new Items('TM65', '', '', ''),
  new Items('TM66', '', '', ''),
  new Items('TM67', '', '', ''),
  new Items('TM68', '', '', ''),
  new Items('TM69', '', '', ''),
  new Items('TM70', '', '', ''),
  new Items('TM71', '', '', ''),
  new Items('TM72', '', '', ''),
  new Items('TM73', '', '', ''),
  new Items('TM74', '', '', ''),
  new Items('TM75', '', '', ''),
  new Items('TM76', '', '', ''),
  new Items('TM77', '', '', ''),
  new Items('TM78', '', '', ''),
  new Items('TM79', '', '', ''),
  new Items('TM80', '', '', ''),
  new Items('TM81', '', '', ''),
  new Items('TM82', '', '', ''),
  new Items('TM83', '', '', ''),
  new Items('TM84', '', '', ''),
  new Items('TM85', '', '', ''),
  new Items('TM86', '', '', ''),
  new Items('TM87', '', '', ''),
  new Items('TM88', '', '', ''),
  new Items('TM89', '', '', ''),
  new Items('TM90', '', '', ''),
  new Items('TM91', '', '', ''),
  new Items('TM92', '', '', ''),
  new Items('TM93', '', '', ''),
  new Items('TM94', '', '', ''),
  new Items('TM95', '', '', ''),
  new Items('TM96', '', '', ''),
  new Items('TM97', '', '', ''),
  new Items('TM98', '', '', ''),
  new Items('TM99', '', '', ''),
  new Items('TM100', '', '', ''),
  new Items('TMV Pass', '', '', ''),
  new Items('Tough Candy', '', '', ''),
  new Items('Tough Candy L', '', '', ''),
  new Items('Tough Candy XL', '', '', ''),
  new Items('Toxic Orb', '', '', ''),
  new Items('Toxic Plate', '', '', ''),
  new Items('Tropical Shell', '', '', ''),
  new Items('Twisted Spoon', '', '', ''),
  new Items('Tyranitarite', '', '', ''),
  new Items('Ultra Ball', '', '', ''),
  new Items('Ultranecrozium Z', '', '', ''),
  new Items('Up-Grade', '', '', ''),
  new Items('Venusaurite', '', '', ''),
  new Items('Wacan Berry', '', '', ''),
  new Items('Water Gem', '', '', ''),
  new Items('Water Memory', '', '', ''),
  new Items('Water Stone', '', '', ''),
  new Items('Waterium Z', '', '', ''),
  new Items('Watmel Berry', '', '', ''),
  new Items('Wave Incense', '', '', ''),
  new Items('Weakness Policy', '', '', ''),
  new Items('Wepear Berry', '', '', ''),
  new Items('Whipped Dream', '', '', ''),
  new Items('White Apricorn', '', '', ''),
  new Items('White Flute', '', '', ''),
  new Items('White Herb', '', '', ''),
  new Items('Wide Lens', '', '', ''),
  new Items('Wiki Berry', '', '', ''),
  new Items('Wise Glasses', '', '', ''),
  new Items('X Accuracy', '', '', ''),
  new Items('X Accuracy 2', '', '', ''),
  new Items('X Accuracy 3', '', '', ''),
  new Items('X Accuracy 6', '', '', ''),
  new Items('X Attack', '', '', ''),
  new Items('X Attack 2', '', '', ''),
  new Items('X Attack 3', '', '', ''),
  new Items('X Attack 6', '', '', ''),
  new Items('X Defense', '', '', ''),
  new Items('X Defense 2', '', '', ''),
  new Items('X Defense 3', '', '', ''),
  new Items('X Defense 6', '', '', ''),
  new Items('X Sp. Atk', '', '', ''),
  new Items('X Sp. Atk 2', '', '', ''),
  new Items('X Sp. Atk 3', '', '', ''),
  new Items('X Sp. Atk 6', '', '', ''),
  new Items('X Sp. Def', '', '', ''),
  new Items('X Sp. Def 2', '', '', ''),
  new Items('X Sp. Def 3', '', '', ''),
  new Items('X Sp. Def 6', '', '', ''),
  new Items('X Speed', '', '', ''),
  new Items('X Speed 2', '', '', ''),
  new Items('X Speed 3', '', '', ''),
  new Items('X Speed 6', '', '', ''),
  new Items('Yache Berry', '', '', ''),
  new Items('Yellow Apricorn', '', '', ''),
  new Items('Yellow Flute', '', '', ''),
  new Items('Yellow Nectar', '', '', ''),
  new Items('Yellow Scarf', '', '', ''),
  new Items('Yellow Shard', '', '', ''),
  new Items('Zap Plate', '', '', ''),
  new Items('Zinc', '', '', ''),
  new Items('Zoom Lens', '', '', '')
]


function loadItems() {
  $('#Center').text("Pokémon Item List");
  $('#items-container').empty().append(`<div class="container mt-4"><div class="row"><div class="col-md-3"><h4 class="KalosTextStyle">Name</h4></div><div class="col-md-1"><h4 class="KalosTextStyle">Gen</h4></div><div class="col-md-3"><h4 style="font-style: italic; text-align: center;" class="pr-3">Category</h4></div><div class="col-md-5"><h4 class="KalosTextStyle pr-5">Description</h4></div></div></div>`);

  for (var j = 0; j < itemList.length; j++) {
    itemList[j].loadItemsToPage();
  }
}
