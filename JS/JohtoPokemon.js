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
    ]

    for(var display of johtoPokemonList){
        display.loadToPage();
        display.ShowTypes();
    }
