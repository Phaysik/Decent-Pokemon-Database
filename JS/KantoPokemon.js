class Pokemon {
    constructor(id, nid, name, types, alt) {
        this.id = id
        this.nid = nid
        this.name = name
        this.types = types
        this.alt = alt;
    }

    loadToPage() {
          $('#pokemon-container').append(`
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/>
              <div id="${this.nid}" class="d-flex"></div>
              <h5 style="font-weight: normal; text-align: center;">${this.name}</h5>
            </div>
            `)
      }

    ShowTypes(){
      var typeColors = {
        'Normal': '#808080',
        'Fire': '#FF0000',
        'Water': '#0000FF',
        'Electric': '#FFFF00',
        'Grass': '#00FF00',
        'Ice': '#00FFFF',
        'Fighting': '#800000',
        'Poison': '#8b008b',
        'Ground': '#964B00',
        'Flying': '#76D7EA',
        'Psychic': '#660099',
        'Bug': '#006400',
        'Rock': '#696969',
        'Ghost': '#663399',
        'Dragon': '#fafad2',
        'Dark': '#0000C8',
        'Steel': '#2f4f4f',
        'Fairy': '#FF00FF'
      }

      for (let t of this.types) {
        $(`#${this.nid}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; border-radius: 25px; text-align: center; background-color: ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `)
      }
    }


}

function displayTypesToScreen(type){
  var typeColors = {
    'Normal': '#808080',
    'Fire': '#FF0000',
    'Water': '#0000FF',
    'Electric': '#FFFF00',
    'Grass': '#00FF00',
    'Ice': '#00FFFF',
    'Fighting': '#800000',
    'Poison': '#8b008b',
    'Ground': '#964B00',
    'Flying': '#76D7EA',
    'Psychic': '#660099',
    'Bug': '#006400',
    'Rock': '#696969',
    'Ghost': '#663399',
    'Dragon': '#fafad2',
    'Dark': '#0000C8',
    'Steel': '#2f4f4f',
    'Fairy': '#FF00FF'
  }

  var pokemonLists = [
    kantoPokemonList,
    johtoPokemonList,
    hoennPokemonList,
    sinnohPokemonList
  ]

  var pageName = [
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh'
  ]

  var listToUse;

  for(var i = 0; i < pageName.length; i++){
    if(window.location.href.indexOf(pageName[i]) > -1){
      listToUse = pokemonLists[i];
      $('#pokemon-container').empty();
      $('#Center').empty().text(`All ${pageName[i]} ${type.toLowerCase()} Pokémon in database`);
      break;
    }
  }


  for(var i = 0; i < listToUse.length; i++){
    if(listToUse[i].types.includes(type)){
      holder = "";
      for (let t of listToUse[i].types) {
          holder += `<button class="flex-grow-1 mx-1" style="border: 1px solid black; border-radius: 25px; text-align: center; background-color: ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>`;
      }
      $('#pokemon-container').append(`
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${listToUse[i].name}.png" alt="${listToUse[i].alt}"/>
              <div id="${listToUse[i].nid}" class="d-flex">${holder}
              </div>
              <h5 style="font-weight: normal; text-align: center;">${listToUse[i].name}</h5>
            </div>
            `)

  }
}
}

var kantoPokemonList = [
  new Pokemon(1, 1, 'Bulbasaur', ['Grass', 'Poison'], 'Bulbasaur Image'),
  new Pokemon(2, 2, 'Ivysaur', ['Grass', 'Poison'], 'Ivysaur Image'),
  new Pokemon(3, 3, 'Venausaur', ['Grass', 'Poison'], 'Venausaur Image'),
  new Pokemon(4, 4, 'Charmander', ['Fire'], 'Charmander Image'),
  new Pokemon(5, 5, 'Charmeleon', ['Fire'], 'Charmeleon Image'),
  new Pokemon(6, 6, 'Charizard', ['Fire', 'Flying'], 'Charizard Image'),
  new Pokemon(7, 7, 'Squirtle', ['Water'], 'Squirtle Image'),
  new Pokemon(8, 8, 'Wartortle', ['Water'], 'Wartortle Image'),
  new Pokemon(9, 9, 'Blastoise', ['Water'], 'Blastoise Image'),
  new Pokemon(10, 10, 'Caterpie', ['Bug'], 'Caterpie Image'),
  new Pokemon(11, 11, 'Metapod', ['Bug'], 'Metapod Image'),
  new Pokemon(12, 12, 'Butterfree', ['Bug', 'Flying'], 'Butterfree Image'),
  new Pokemon(13, 13, 'Weedle', ['Bug', 'Poison'], 'Weedle Image'),
  new Pokemon(14, 14, 'Kakuna', ['Bug', 'Poison'], 'Kakuna Image'),
  new Pokemon(15, 15, 'Beedrill', ['Bug', 'Poison'], 'Beedrill Image'),
  new Pokemon(16, 16, 'Pidgey', ['Normal', 'Flying'], 'Pidgey Image'),
  new Pokemon(17, 17, 'Pigeotto', ['Normal', 'Flying'], 'Pigeotto Image'),
  new Pokemon(18, 18, 'Pidgeot', ['Normal', 'Flying'], 'Pidgeot Image'),
  new Pokemon(19, 19, 'Rattata', ['Normal'], 'Rattata Image'),
  new Pokemon(20, 20, 'Raticate', ['Normal'], 'Raticate Image'),
  new Pokemon(21, 21, 'Spearow', ['Normal', 'Flying'], 'Spearow Image'),
  new Pokemon(22, 22, 'Fearow', ['Normal', 'Flying'], 'Fearow Image'),
  new Pokemon(23, 23, 'Ekans', ['Poison'], 'Ekans Image'),
  new Pokemon(24, 24, 'Arbok', ['Poison'], 'Arbok Image'),
  new Pokemon(25, 25, 'Pikachu', ['Electric'], 'Pikachu Image'),
  new Pokemon(26, 26, 'Raichu', ['Electric'], 'Raichu Image'),
  new Pokemon(27, 27, 'Sandshrew', ['Ground'], 'Sandshrew Image'),
  new Pokemon(28, 28, 'Sandslash', ['Ground'], 'Sandslash Image'),
  new Pokemon(29, 29, 'Nidoran♀', ['Poison'], 'Nidoran♀ Image'),
  new Pokemon(30, 30, 'Nidorina', ['Poison'], 'Nidorina Image'),
  new Pokemon(31, 31, 'Nidoqueen', ['Poison', 'Ground'], 'Nidoqueen Image'),
  new Pokemon(32, 32, 'Nidoran♂', ['Poison'], 'Nidoran♂ Image'),
  new Pokemon(33, 33, 'Nidorino', ['Poison'], 'Nidorino Image'),
  new Pokemon(34, 34, 'Nidoking', ['Poison', 'Ground'], 'Nidoking Image'),
  new Pokemon(35, 35, 'Clefairy', ['Normal'], 'Clefairy Image'),
  new Pokemon(36, 36, 'Clefable', ['Normal'], 'Clefable Image'),
  new Pokemon(37, 37, 'Vulpix', ['Fire'], 'Vulpix Image'),
  new Pokemon(38, 38, 'Ninetails', ['Fire'], 'Ninetails Image'),
  new Pokemon(39, 39, 'Jigglypuff', ['Normal'], 'Jigglypuff Image'),
  new Pokemon(40, 40, 'Wigglytuff', ['Normal'], 'Wigglytuff Image'),
  new Pokemon(41, 41, 'Zubat', ['Poison', 'Flying'], 'Zubat Image'),
  new Pokemon(42, 42, 'Golbat', ['Poison', 'Flying'], 'Golbat Image'),
  new Pokemon(43, 43, 'Oddish', ['Grass', 'Poison'], 'Oddish Image'),
  new Pokemon(44, 44, 'Gloom', ['Grass', 'Poison'], 'Gloom Image'),
  new Pokemon(45, 45, 'Vileplume', ['Grass', 'Poison'], 'Vileplume Image'),
  new Pokemon(46, 46, 'Paras', ['Bug', 'Grass'], 'Paras Image'),
  new Pokemon(47, 47, 'Parasect', ['Bug', 'Grass'], 'Parasect Image'),
  new Pokemon(48, 48, 'Venonat', ['Bug', 'Poison'], 'Venonat Image'),
  new Pokemon(49, 49, 'Venomoth', ['Bug', 'Poison'], 'Venomoth Image'),
  new Pokemon(50, 50, 'Diglett', ['Ground'], 'Diglett Image'),
  new Pokemon(51, 51, 'Dugtrio', ['Ground'], 'Dugtrio Image'),
  new Pokemon(52, 52, 'Meowth', ['Normal'], 'Meowth Image'),
  new Pokemon(53, 53, 'Persian', ['Normal'], 'Persian Image'),
  new Pokemon(54, 54, 'Psyduck', ['Water'], 'Psyduck Image'),
  new Pokemon(55, 55, 'Golduck', ['Water'], 'Golduck Image'),
  new Pokemon(56, 56, 'Mankey', ['Fighting'], 'Mankey Image'),
  new Pokemon(57, 57, 'Primeape', ['Fighting'], 'Primeape Image'),
  new Pokemon(58, 58, 'Growlithe', ['Fire'], 'Growlithe Image'),
  new Pokemon(59, 59, 'Arcanine', ['Fire'], 'Arcanine Image'),
  new Pokemon(60, 60, 'Poliwag', ['Water'], 'Poliwag Image'),
  new Pokemon(61, 61, 'Poliwhirl', ['Water'], 'Poliwhirl Image'),
  new Pokemon(62, 62, 'Poliwrath', ['Water', 'Fighting'], 'Poliwrath Image'),
  new Pokemon(63, 63, 'Abra', ['Psychic'], 'Abra Image'),
  new Pokemon(64, 64, 'Kadabra', ['Psychic'], 'Kadabra Image'),
  new Pokemon(65, 65, 'Alakazam', ['Psychic'], 'Alakazam Image'),
  new Pokemon(66, 66, 'Machop', ['Fighting'], 'Machop Image'),
  new Pokemon(67, 67, 'Machoke', ['Fighting'], 'Machoke Image'),
  new Pokemon(68, 68, 'Machamp', ['Fighting'], 'Machamp Image'),
  new Pokemon(69, 69, 'Bellsprout', ['Grass', 'Poison'], 'Bellsprout Image'),
  new Pokemon(70, 70, 'Weepinbell', ['Grass', 'Poison'], 'Weepinbell Image'),
  new Pokemon(71, 71, 'Victreebel', ['Grass', 'Poison'], 'Victreebel Image'),
  new Pokemon(72, 72, 'Tentacool', ['Water', 'Poison'], 'Tentacool Image'),
  new Pokemon(73, 73, 'Tentacruel', ['Water', 'Poison'], 'Tentacruel Image'),
  new Pokemon(74, 74, 'Geodude', ['Rock', 'Ground'], 'Geodude Image'),
  new Pokemon(75, 75, 'Graveler', ['Rock', 'Ground'], 'Graveler Image'),
  new Pokemon(76, 76, 'Golem', ['Rock', 'Ground'], 'Golem Image'),
  new Pokemon(77, 77, 'Ponyta', ['Fire'], 'Ponyta Image'),
  new Pokemon(78, 78, 'Rapidash', ['Fire'], 'Rapidash Image'),
  new Pokemon(79, 79, 'Slowpoke', ['Water', 'Psychic'], 'Slowpoke Image'),
  new Pokemon(80, 80, 'Slowbro', ['Water', 'Psychic'], 'Slowbro Image'),
  new Pokemon(81, 81, 'Magnemite', ['Electric', 'Steel'], 'Magnemite Image'),
  new Pokemon(82, 82, 'Magneton', ['Electric', 'Steel'], 'Magneton Image'),
  new Pokemon(83, 83, "Farfetch" + "\'" + "d", ['Normal', 'Flying'], "Farfetch\'d Image"),
  new Pokemon(84, 84, 'Doduo', ['Normal', 'Flying'], 'Doduo Image'),
  new Pokemon(85, 85, 'Dodrio', ['Normal', 'Flying'], 'Dodrio Image'),
  new Pokemon(86, 86, 'Seel', ['Water'], 'Seel Image'),
  new Pokemon(87, 87, 'Dewgong', ['Water', 'Ice'], 'Dewgong Image'),
  new Pokemon(88, 88, 'Grimer', ['Poison'], 'Grimer Image'),
  new Pokemon(89, 89, 'Muk', ['Poison'], 'Muk Image'),
  new Pokemon(90, 90, 'Shellder', ['Water'], 'Shellder Image'),
  new Pokemon(91, 91, 'Cloyster', ['Water', 'Ice'], 'Cloyster Image'),
  new Pokemon(92, 92, 'Gastly', ['Ghost', 'Poison'], 'Gastly Image'),
  new Pokemon(93, 93, 'Haunter', ['Ghost', 'Poison'], 'Haunter Image'),
  new Pokemon(94, 94, 'Gengar', ['Ghost', 'Poison'], 'Gengar Image'),
  new Pokemon(95, 95, 'Onix', ['Rock', 'Ground'], 'Onix Image'),
  new Pokemon(96, 96, 'Drowzee', ['Psychic'], 'Drowzee Image'),
  new Pokemon(97, 97, 'Hypno', ['Psychic'], 'Hypno Image'),
  new Pokemon(98, 98, 'Krabby', ['Water'], 'Krabby Image'),
  new Pokemon(99, 99, 'Kingler', ['Water'], 'Kingler Image'),
  new Pokemon(100, 100, 'Voltorb', ['Electric'], 'Voltorb Image'),
  new Pokemon(101, 101, 'Electrode', ['Electric'], 'Electrode Image'),
  new Pokemon(102, 102, 'Exeggcute', ['Grass', 'Psychic'], 'Exeggcute Image'),
  new Pokemon(103, 103, 'Exeggutor', ['Grass', 'Psychic'], 'Exeggutor Image'),
  new Pokemon(104, 104, 'Cubone', ['Ground'], 'Cubone Image'),
  new Pokemon(105, 105, 'Marowak', ['Ground'], 'Marowak Image'),
  new Pokemon(106, 106, 'Hitmonlee', ['Fighting'], 'Hitmonlee Image'),
  new Pokemon(107, 107, 'Hitmonchan', ['Fighting'], 'Hitmonchan Image'),
  new Pokemon(108, 108, 'Lickitung', ['Normal'], 'Lickitung Image'),
  new Pokemon(109, 109, 'Koffing', ['Poison'], 'Koffing Image'),
  new Pokemon(110, 110, 'Weezing', ['Poison'], 'Weezing Image'),
  new Pokemon(111, 111, 'Rhyhorn', ['Ground', 'Rock'], 'Rhyhorn Image'),
  new Pokemon(112, 112, 'Rhydon', ['Ground', 'Rock'], 'Rhydon Image'),
  new Pokemon(113, 113, 'Chansey', ['Normal'], 'Chansey Image'),
  new Pokemon(114, 114, 'Tangela', ['Grass'], 'Tangela Image'),
  new Pokemon(115, 115, 'Kangaskhan', ['Normal'], 'Kangaskhan Image'),
  new Pokemon(116, 116, 'Horsea', ['Water'], 'Horsea Image'),
  new Pokemon(117, 117, 'Seadra', ['Water'], 'Seadra Image'),
  new Pokemon(118, 118, 'Goldeen', ['Water'], 'Goldeen Image'),
  new Pokemon(119, 119, 'Seaking', ['Water'], 'Seaking Image'),
  new Pokemon(120, 120, 'Staryu', ['Water'], 'Staryu Image'),
  new Pokemon(121, 121, 'Starmie', ['Water', 'Psychic'], 'Starmie Image'),
  new Pokemon(122, 122, 'Mr. Mime', ['Psychic'], 'Mr. Mime Image'),
  new Pokemon(123, 123, 'Scyther', ['Bug', 'Flying'], 'Scyther Image'),
  new Pokemon(124, 124, 'Jynx', ['Ice', 'Psychic'], 'Jynx Image'),
  new Pokemon(125, 125, 'Electabuzz', ['Electric'], 'Electabuzz Image'),
  new Pokemon(126, 126, 'Magmar', ['Fire'], 'Magmar Image'),
  new Pokemon(127, 127, 'Pinsir', ['Bug'], 'Pinsir Image'),
  new Pokemon(128, 128, 'Tauros', ['Normal'], 'Tauros Image'),
  new Pokemon(129, 129, 'Magikarp', ['Water'], 'Magikarp Image'),
  new Pokemon(130, 130, 'Gyarados', ['Water', 'Flying'], 'Gyrados Image'),
  new Pokemon(131, 131, 'Lapras', ['Water', 'Ice'], 'Lapras Image'),
  new Pokemon(132, 132, 'Ditto', ['Normal'], 'Ditto Image'),
  new Pokemon(133, 133, 'Eevee', ['Normal'], 'Eevee Image'),
  new Pokemon(134, 134, 'Vaporeon', ['Water'], 'Vaporeon Image'),
  new Pokemon(135, 135, 'Jolteon', ['Electric'], 'Jolteon Image'),
  new Pokemon(136, 136, 'Flareon', ['Fire'], 'Flareon Image'),
  new Pokemon(137, 137, 'Porygon', ['Normal'], 'Porygon Image'),
  new Pokemon(138, 138, 'Omanyte', ['Rock', 'Water'], 'Omanyte Image'),
  new Pokemon(139, 139, 'Omastar', ['Rock', 'Water'], 'Omastar Image'),
  new Pokemon(140, 140, 'Kabuto', ['Rock', 'Water'], 'Kabuto Image'),
  new Pokemon(141, 141, 'Kabutops', ['Rock', 'Flying'], 'Kabutops Image'),
  new Pokemon(142, 142, 'Aerodactyl', ['Rock', 'Flying'], 'Aerodactyl Image'),
  new Pokemon(143, 143, 'Snorlax', ['Normal'], 'Snorlax Image'),
  new Pokemon(144, 144, 'Articuno', ['Ice', 'Flying'], 'Articuno Image'),
  new Pokemon(145, 145, 'Zapdos', ['Electric', 'Flying'], 'Zapdos Image'),
  new Pokemon(146, 146, 'Moltres', ['Fire', 'Flying'], 'Moltres Image'),
  new Pokemon(147, 147, 'Dratini', ['Dragon'], 'Dratini Image'),
  new Pokemon(148, 148, 'Dragonair', ['Dragon'], 'Dragonair Image'),
  new Pokemon(149, 149, 'Dragonite', ['Dragon', 'Flying'], 'Dragonite Image'),
  new Pokemon(150, 150, 'Mewtwo', ['Psychic'], 'Mewtwo Image'),
  new Pokemon(151, 151, 'Mew', ['Psychic'], 'Mew Image')
]

for (let p of kantoPokemonList) {
    p.loadToPage();
    p.ShowTypes();
}
