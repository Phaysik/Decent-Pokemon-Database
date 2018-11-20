var sinnohPokemonList = [
  new Pokemon(1, 387, 'Turtwig', ['Grass'], 'Turtwig Image'),
]

function loadSinnoh(){
  $('#Center').text("Sinnoh Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for(var display of sinnohPokemonList){
    display.loadToPage();
    display.ShowTypes();
  }
}
