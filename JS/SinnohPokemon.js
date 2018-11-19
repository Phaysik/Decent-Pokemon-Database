var sinnohPokemonList = [
  new Pokemon(1, 387, 'Turtwig', ['Grass'], 'Turtwig Image'),
]

function loadSinnoh(){
  for(var display of sinnohPokemonList){
    display.loadToPage();
    display.ShowTypes();
  }
}
