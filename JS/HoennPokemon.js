var hoennPokemonList = [
  new Pokemon(1, 252, 'Treecko', ['Grass'], 'Treecko Image'),
]


function loadHoenn(){
  $('#Center').text("Hoenn Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for(var display of hoennPokemonList){
    display.loadToPage();
    display.ShowTypes();
  }
}
