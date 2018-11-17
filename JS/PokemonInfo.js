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
    constructor(id, nid, name, types, alt) {
        this.id = id
        this.nid = nid
        this.name = name
        this.types = types
        this.alt = alt;
    }

    loadToPage() {

        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
                <tr>
                    <th id="parent"><img height="100" width="100" style="margin: 0 auto; display: block;" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/></th>
                </tr>
                <tr id="${this.id}">

                </tr>
                <tr>
                    <th style="font-weight: normal; text-align: center;">${this.name}</td>
                </tr>
            </table>
        `)

      }

    ShowTypes(){
      var typesToPrint = [];
        for (let t = 0; t < this.types.length; t++){
          for (let l = 0; l < typeList.length; l++){
            if(this.types[t] == typeList[l]){
              typesToPrint.push(hexCodes[l]);
              if(this.types.length == 2){
                $("#" + this.id).append(`<span><td><button style="border: 1px solid black; border-radius: 25px; text-align: center; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[t]}" onclick="displaytyperino.displayTypesToScreen('${this.types[t]}')">${this.types[t]}</button></td></span>`)
              }
              else{
                $("#" + this.id).append(`<td><button style="border: 1px solid black; width: 100%; border-radius: 25px; text-align: center; padding: .2em; margin-left: .3em; background-color: ${typesToPrint[t]}" onclick="displaytyperino.displayTypesToScreen('${this.types[t]}')">${this.types[t]}</button></td>`)
              }
              break;
            }
          }
        }
    }


}

var pokemonList = [
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
  new Pokemon(101, 101, 'Electrode', ['Electric'], 'Electrode Image')
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
    p.ShowTypes();
}
