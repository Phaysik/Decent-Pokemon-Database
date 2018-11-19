var johtoPokemonList = [
  new Pokemon(1, 152, 'Chikorita', ['Grass'], 'Chikorita Image'),
  new Pokemon(2, 153, 'Bayleef', ['Grass'], 'Bayleef Image'),
  new Pokemon(3, 154, 'Meganium', ['Grass'], 'Meganium Image'),
  new Pokemon(4, 155, 'Cyndaquil', ['Fire'], 'Cyndaquil Image'),
  new Pokemon(5, 156, 'Quilava', ['Fire'], 'Quilava Image'),
  new Pokemon(6, 157, 'Typhlosion', ['Fire'], 'Typhlosion Image'),
  new Pokemon(7, 158, 'Totodile', ['Water'], 'Totodile Image'),
  new Pokemon(8, 159, 'Croconaw', ['Water'], 'Croconaw Image'),
  new Pokemon(9, 160, 'Feraligatr', ['Water'], 'Feraligatr Image'),
  new Pokemon(10, 16, 'Pidgey', ['Normal', 'Flying'], 'Pidgey Image'),
  new Pokemon(11, 17, 'Pigeotto', ['Normal', 'Flying'], 'Pigeotto Image'),
  new Pokemon(12, 18, 'Pidgeot', ['Normal', 'Flying'], 'Pidgeot Image'),
  new Pokemon(13, 21, 'Spearow', ['Normal', 'Flying'], 'Spearow Image'),
  new Pokemon(14, 22, 'Fearow', ['Normal', 'Flying'], 'Fearow Image'),
  new Pokemon(15, 163, 'Hoothoot', ['Normal', 'Flying'], 'Hoothoot Image'),
  new Pokemon(16, 164, 'Noctowl', ['Normal', 'Flying'], 'Noctowl Image'),
  new Pokemon(17, 19, 'Rattata', ['Normal'], 'Rattata Image'),
  new Pokemon(18, 20, 'Raticate', ['Normal'], 'Raticate Image'),
  new Pokemon(19, 161, 'Sentret', ['Normal'], 'Sentret Image'),
  new Pokemon(20, 162, 'Furret', ['Normal'], 'Furret Image'),
  new Pokemon(21, 172, 'Pichu', ['Electric'], 'Pichu Image'),
  new Pokemon(22, 25, 'Pikachu', ['Electric'], 'Pikachu Image'),
  new Pokemon(23, 26, 'Raichu', ['Electric'], 'Raichu Image'),
  new Pokemon(24, 10, 'Caterpie', ['Bug'], 'Caterpie Image'),
  new Pokemon(25, 11, 'Metapod', ['Bug'], 'Metapod Image'),
  new Pokemon(26, 12, 'Butterfree', ['Bug', 'Flying'], 'Butterfree Image'),
  new Pokemon(27, 13, 'Weedle', ['Bug', 'Poison'], 'Weedle Image'),
  new Pokemon(28, 14, 'Kakuna', ['Bug', 'Poison'], 'Kakuna Image'),
  new Pokemon(29, 15, 'Beedrill', ['Bug', 'Poison'], 'Beedrill Image'),
  new Pokemon(30, 165, 'Ledyba', ['Bug', 'Flying'], 'Ledyba Image'),
  new Pokemon(31, 166, 'Ledian', ['Bug', 'Flying'], 'Ledian Image'),
]

function loadJohto(){
  for(var display of johtoPokemonList){
    display.loadToPage();
    display.ShowTypes();
  }
}
