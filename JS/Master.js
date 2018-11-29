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
      <li class="list-group-item" style="border: none;">
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/>
              <div id="${this.nid}" class="d-flex"></div>
              <h5 style="font-weight: normal; text-align: center;">${this.name}</h5>
            </div>
            </li>
            `)
  }

  ShowTypes() {
    var typeColors = {
      'Normal': '#A8A878',
      'Fire': '#F08030',
      'Water': '#6890F0',
      'Electric': '#F8D030',
      'Grass': '#78C850',
      'Ice': '#98D8D8',
      'Fighting': '#C03028',
      'Poison': '#A040A0',
      'Ground': '#E0C068',
      'Flying': '#A890F0',
      'Psychic': '#F85888',
      'Bug': '#A8B820',
      'Rock': '#B8A038',
      'Ghost': '#705898',
      'Dragon': '#fafad2',
      'Dark': '#705848',
      'Steel': '#B8B8D0',
      'Fairy': '#FF00FF'
    }

    var textColors = {
      'Normal': '#FFFFFF',
      'Fire': '#FFFFFF',
      'Water': '#FFFFFF',
      'Electric': '#000',
      'Grass': '#000',
      'Ice': '#000',
      'Fighting': '#FFF',
      'Poison': '#FFF',
      'Ground': '#FFFFFF',
      'Flying': '#FFF',
      'Psychic': '#FFF',
      'Bug': '#FFF',
      'Rock': '#FFFFFF',
      'Ghost': '#FFF',
      'Dragon': '#000',
      'Dark': '#FFF',
      'Steel': '#FFFFFF',
      'Fairy': '#000'
    }

    for (let t of this.types) {
      $(`#${this.nid}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; font-weight: bold; border-radius: 25px; text-align: center; background-color: ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `)
    }
  }


}

function displayTypesToScreen(type) {
  var typeColors = {
    'Normal': '#A8A878',
    'Fire': '#F08030',
    'Water': '#6890F0',
    'Electric': '#F8D030',
    'Grass': '#78C850',
    'Ice': '#98D8D8',
    'Fighting': '#C03028',
    'Poison': '#A040A0',
    'Ground': '#E0C068',
    'Flying': '#A890F0',
    'Psychic': '#F85888',
    'Bug': '#A8B820',
    'Rock': '#B8A038',
    'Ghost': '#705898',
    'Dragon': '#fafad2',
    'Dark': '#705848',
    'Steel': '#B8B8D0',
    'Fairy': '#FF00FF'
  }

  var textColors = {
    'Normal': '#FFFFFF',
    'Fire': '#FFFFFF',
    'Water': '#FFFFFF',
    'Electric': '#000',
    'Grass': '#000',
    'Ice': '#000',
    'Fighting': '#FFF',
    'Poison': '#FFF',
    'Ground': '#FFFFFF',
    'Flying': '#FFF',
    'Psychic': '#FFF',
    'Bug': '#FFF',
    'Rock': '#FFFFFF',
    'Ghost': '#FFF',
    'Dragon': '#000',
    'Dark': '#FFF',
    'Steel': '#FFFFFF',
    'Fairy': '#000'
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

  for (var i = 0; i < pageName.length; i++) {
    if (window.location.href.indexOf(pageName[i]) > -1) {
      listToUse = pokemonLists[i];
      $('#pokemon-container').empty();
      $('#Center').empty().text(`All ${pageName[i]} ${type.toLowerCase()} Pokémon in database`);
      break;
    }
  }


  for (var i = 0; i < listToUse.length; i++) {
    if (listToUse[i].types.includes(type)) {
      holder = "";
      for (let t of listToUse[i].types) {
        holder += `<button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; font-weight: bold; border-radius: 25px; text-align: center; background-color: ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>`;
      }
      $('#pokemon-container').append(`
        <li class="list-group-item" style="border: none;">
              <div style="width:140px!important" class="d-flex mx-3 flex-column">
                <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${listToUse[i].name}.png" alt="${listToUse[i].alt}"/>
                <div id="${listToUse[i].nid}" class="d-flex">${holder}</div>
                <h5 style="font-weight: normal; text-align: center;">${listToUse[i].name}</h5>
              </div>
              </li>
            `)

    }
  }
}
