class DisplayTypes{
  displayTypesToScreen(type){
    $('main').empty().append(`<h1 class="Center">All ${type.toLowerCase()} Pokémon in database</h1>`);
    for(let i of pokemonList){
      if(i.types.includes(type)){

        var typesToPrint = [];
          for (let t of i.types){
            var k = 0;
            for (let l of typeList){
              if(t == l){
                typesToPrint.push(hexCodes[k]);
                break;
              }
              k++;
            }
          }

        if(i.types.length == 2){
        $('main').append(`
          <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
              <tr>
                  <th><img height="100" width="100" style="margin: 0 auto; display: block;" src="Images/Pokemon/${i.name}.png" alt="${i.alt}"/></th>
              </tr>
              <tr style="float: left;">
                <td><button style="text-align: center; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[0]}" onclick="displaytyperino.displayTypesToScreen('${i.types[0]}')">${i.types[0]}</button></td>
                <td><button style="text-align: center; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[1]}" onclick="displaytyperino.displayTypesToScreen('${i.types[1]}')">${i.types[1]}</button></td>
              </tr>
              <tr>
                  <th style="font-weight: normal; text-align: center;">${i.name}</td>
              </tr>
          </table>
        `)
      }
      else{
        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
                <tr>
                    <th><img height="100" width="100" src="Images/Pokemon/${i.name}.png" alt="${i.alt}"/></th>
                </tr>
                <tr>
                  <td><button style="text-align: center; width: 100%; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[0]}" onclick="displaytyperino.displayTypesToScreen('${i.types[0]}')">${i.types}</button></td>
                </tr>
                <tr>
                    <th style="font-weight: normal; text-align: center;">${i.name}</td>
                </tr>
            </table>
        `)
      }
    }
  }
}
}

var displaytyperino = new DisplayTypes();

class Pokemon {
    constructor(id, name, types, alt) {
        this.id = id
        this.name = name
        this.types = types
        this.alt = alt;
    }

    loadToPage() {
      //Gets the hexcode for the background of the image and stores it in an array
      var typesToPrint = [];
        for (let t of this.types){
          var i = 0;
          for (let l of typeList){
            if(t == l){
              typesToPrint.push(hexCodes[i]);
              break;
            }
            i++;
          }
        }

        if(this.types.length == 2){


        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
                <tr>
                    <th><img height="100" width="100" style="margin: 0 auto; display: block;" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/></th>
                </tr>
                <tr style="float: left;">
                  <td><button style="text-align: center; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[0]}" onclick="displaytyperino.displayTypesToScreen('${this.types[0]}')">${this.types[0]}</button></td>
                  <td><button style="text-align: center; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[1]}" onclick="displaytyperino.displayTypesToScreen('${this.types[1]}')">${this.types[1]}</button></td>
                </tr>
                <tr>
                    <th style="font-weight: normal; text-align: center;">${this.name}</td>
                </tr>
            </table>
        `)
      }
      else{
        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
                <tr>
                    <th><img height="100" width="100" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/></th>
                </tr>
                <tr>
                  <td><button style="text-align: center; width: 100%; border: 1px solid black; border-radius: 25px; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[0]}" onclick="displaytyperino.displayTypesToScreen('${this.types[0]}')">${this.types[0]}</button></td>
                </tr>
                <tr>
                    <th style="font-weight: normal; text-align: center;">${this.name}</td>
                </tr>
            </table>
        `)
      }

      }


}

var pokemonList = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 'Bulbasaur Image'),
    new Pokemon(2, 'Ivysaur', ['Grass', 'Poison'], 'Ivysaur Image'),
    new Pokemon(3, 'Venausaur', ['Grass', 'Poison'], 'Venausaur Image'),
    new Pokemon(4, 'Charmander', ['Fire'], 'Charmander Image'),
    new Pokemon(5, 'Charmeleon', ['Fire'], 'Charmeleon Image'),
    new Pokemon(6, 'Charizard', ['Fire', 'Flying'], 'Charizard Image'),
    new Pokemon(7, 'Squirtle', ['Water'], 'Squirtle Image'),
    new Pokemon(8, 'Wartortle', ['Water'], 'Wartortle Image'),
    new Pokemon(9, 'Blastoise', ['Water'], 'Blastoise Image'),
    new Pokemon(10, 'Caterpie', ['Bug'], 'Caterpie Image'),
    new Pokemon(11, 'Metapod', ['Bug'], 'Metapod Image'),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying'], 'Butterfree Image'),
    new Pokemon(13, 'Weedle', ['Bug', 'Poison'], 'Weedle Image'),
    new Pokemon(14, 'Kakuna', ['Bug', 'Poison'], 'Kakuna Image'),
    new Pokemon(15, 'Beedrill', ['Bug', 'Poison'], 'Beedrill Image'),
    new Pokemon(16, 'Pidgey', ['Normal', 'Flying'], 'Pidgey Image'),
    new Pokemon(17, 'Pigeotto', ['Normal', 'Flying'], 'Pigeotto Image'),
    new Pokemon(18, 'Pidgeot', ['Normal', 'Flying'], 'Pidgeot Image'),
    new Pokemon(19, 'Rattata', ['Normal'], 'Rattata Image'),
    new Pokemon(20, 'Raticate', ['Normal'], 'Raticate Image'),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying'], 'Spearow Image'),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying'], 'Fearow Image'),
    new Pokemon(23, 'Ekans', ['Poison'], 'Ekans Image'),
    new Pokemon(24, 'Arbok', ['Poison'], 'Arbok Image'),
    new Pokemon(25, 'Pikachu', ['Electric'], 'Pikachu Image'),
    new Pokemon(26, 'Raichu', ['Electric'], 'Raichu Image'),
    new Pokemon(27, 'Sandshrew', ['Ground'], 'Sandshrew Image'),
    new Pokemon(28, 'Sandslash', ['Ground'], 'Sandslash Image'),
    new Pokemon(29, 'Nidoran♀', ['Poison'], 'Nidoran♀ Image'),
    new Pokemon(30, 'Nidorina', ['Poison'], 'Nidorina Image'),
    new Pokemon(31, 'Nidoqueen', ['Poison', 'Ground'], 'Nidoqueen Image'),
    new Pokemon(32, 'Nidoran♂', ['Poison'], 'Nidoran♂ Image'),
    new Pokemon(33, 'Nidorino', ['Poison'], 'Nidorino Image'),
    new Pokemon(34, 'Nidoking', ['Poison', 'Ground'], 'Nidoking Image'),
    new Pokemon(35, 'Clefairy', ['Normal'], 'Clefairy Image'),
    new Pokemon(36, 'Clefable', ['Normal'], 'Clefable Image'),
    new Pokemon(37, 'Vulpix', ['Fire'], 'Vulpix Image'),
    new Pokemon(38, 'Ninetails', ['Fire'], 'Ninetails Image'),
    new Pokemon(39, 'Jigglypuff', ['Normal'], 'Jigglypuff Image'),
    new Pokemon(40, 'Wigglytuff', ['Normal'], 'Wigglytuff Image'),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying'], 'Zubat Image'),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying'], 'Golbat Image'),
    new Pokemon(43, 'Oddish', ['Grass', 'Poison'], 'Oddish Image'),
    new Pokemon(44, 'Gloom', ['Grass', 'Poison'], 'Gloom Image'),
    new Pokemon(45, 'Vileplume', ['Grass', 'Poison'], 'Vileplume Image'),
    new Pokemon(46, 'Paras', ['Bug', 'Grass'], 'Paras Image'),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass'], 'Parasect Image'),
    new Pokemon(48, 'Venonat', ['Bug', 'Poison'], 'Venonat Image'),
    new Pokemon(49, 'Venomoth', ['Bug', 'Poison'], 'Venomoth Image'),
    new Pokemon(50, 'Diglett', ['Ground'], 'Diglett Image'),
    new Pokemon(51, 'Dugtrio', ['Ground'], 'Dugtrio Image'),
    new Pokemon(52, 'Meowth', ['Normal'], 'Meowth Image'),
    new Pokemon(53, 'Persian', ['Normal'], 'Persian Image'),
    new Pokemon(54, 'Psyduck', ['Water'], 'Psyduck Image'),
    new Pokemon(55, 'Golduck', ['Water'], 'Golduck Image'),
    new Pokemon(56, 'Mankey', ['Fighting'], 'Mankey Image'),
    new Pokemon(57, 'Primeape', ['Fighting'], 'Primeape Image'),
    new Pokemon(58, 'Growlithe', ['Fire'], 'Growlithe Image'),
    new Pokemon(59, 'Arcanine', ['Fire'], 'Arcanine Image'),
    new Pokemon(60, 'Poliwag', ['Water'], 'Poliwag Image'),
    new Pokemon(61, 'Poliwhirl', ['Water'], 'Poliwhirl Image'),
    new Pokemon(62, 'Poliwrath', ['Water', 'Fighting'], 'Poliwrath Image'),
    new Pokemon(63, 'Abra', ['Psychic'], 'Abra Image'),
    new Pokemon(64, 'Kadabra', ['Psychic'], 'Kadabra Image'),
    new Pokemon(65, 'Alakazam', ['Psychic'], 'Alakazam Image'),
    new Pokemon(66, 'Machop', ['Fighting'], 'Machop Image'),
    new Pokemon(67, 'Machoke', ['Fighting'], 'Machoke Image'),
    new Pokemon(68, 'Machamp', ['Fighting'], 'Machamp Image'),
    new Pokemon(69, 'Bellsprout', ['Grass', 'Poison'], 'Bellsprout Image'),
    new Pokemon(70, 'Weepinbell', ['Grass', 'Poison'], 'Weepinbell Image'),
    new Pokemon(71, 'Victreebel', ['Grass', 'Poison'], 'Victreebel Image'),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison'], 'Tentacool Image'),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison'], 'Tentacruel Image'),
    new Pokemon(74, 'Geodude', ['Rock', 'Ground'], 'Geodude Image'),
    new Pokemon(75, 'Graveler', ['Rock', 'Ground'], 'Graveler Image'),
    new Pokemon(76, 'Golem', ['Rock', 'Ground'], 'Golem Image'),
    new Pokemon(77, 'Ponyta', ['Fire'], 'Ponyta Image'),
    new Pokemon(78, 'Rapidash', ['Fire'], 'Rapidash Image'),
    new Pokemon(79, 'Slowpoke', ['Water', 'Psychic'], 'Slowpoke Image'),
    new Pokemon(80, 'Slowbro', ['Water', 'Psychic'], 'Slowbro Image'),
    new Pokemon(81, 'Magnemite', ['Electric', 'Steel'], 'Magnemite Image'),
    new Pokemon(82, 'Magneton', ['Electric', 'Steel'], 'Magneton Image'),
    new Pokemon(83, 'Farfetch\'d', ['Normal', 'Flying'], 'Farfetch\'d Image'),
    new Pokemon(84, 'Doduo', ['Normal', 'Flying'], 'Doduo Image'),
    new Pokemon(85, 'Dodrio', ['Normal', 'Flying'], 'Dodrio Image'),
    new Pokemon(86, 'Seel', ['Water'], 'Seel Image'),
    new Pokemon(87, 'Dewgong', ['Water', 'Ice'], 'Dewgong Image'),
    new Pokemon(88, 'Grimer', ['Poison'], 'Grimer Image'),
    new Pokemon(89, 'Muk', ['Poison'], 'Muk Image'),
    new Pokemon(90, 'Shellder', ['Water'], 'Shellder Image'),
    new Pokemon(91, 'Cloyster', ['Water', 'Ice'], 'Cloyster Image'),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison'], 'Gastly Image'),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison'], 'Haunter Image'),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison'], 'Gengar Image'),
    new Pokemon(95, 'Onix', ['Rock', 'Ground'], 'Onix Image'),
    new Pokemon(96, 'Drowzee', ['Psychic'], 'Drowzee Image'),
    new Pokemon(97, 'Hypno', ['Psychic'], 'Hypno Image'),
    new Pokemon(98, 'Krabby', ['Water'], 'Krabby Image'),
    new Pokemon(99, 'Kingler', ['Water'], 'Kingler Image'),
    new Pokemon(100, 'Voltorb', ['Electric'], 'Voltorb Image'),
    new Pokemon(101, 'Electrode', ['Electric'], 'Electrode Image')
]

var typeList = [
  'Normal',
  'Fire',
  'Water',
  'Electric',
  'Grass',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Psychic',
  'Bug',
  'Rock',
  'Ghost',
  'Dragon',
  'Dark',
  'Steel',
  'Fairy'
]

var hexCodes = [
  '#808080',
  '#FF0000',
  '#0000FF',
  '#FFFF00',
  '#00FF00',
  '#00FFFF',
  '#800000',
  '#8b008b',
  '#964B00',
  '#76D7EA',
  '#660099',
  '#006400',
  '#696969',
  '#663399',
  '#fafad2',
  '#0000C8',
  '#2f4f4f',
  '#FF00FF'
]

for (let p of pokemonList) {
    p.loadToPage();
}
