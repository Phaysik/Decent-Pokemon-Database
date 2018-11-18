var hoennPokemonList = [
  new Pokemon(1, 252, 'Treecko', ['Grass'], 'Treecko Image'),
]


for(var display of hoennPokemonList){
  display.loadToPage();
  display.ShowTypes();
}
