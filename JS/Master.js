class Pokemon {
  constructor(nid, name, types) {
    this.nid = nid
    this.name = name
    this.types = types
  }

  loadToPage() {
    $('#pokemon-container').append(`
      <li class="list-group-item" style="border: none;">
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${this.name}.png" alt="${this.name} Image"/>
              <div id="${this.nid}" class="d-flex"></div>
              <h5 style="font-weight: normal; text-align: center;">${this.name}</h5>
            </div>
            </li>
            `)
  }

  ShowTypes() {
    var typeColors = {
      'Normal': 'background-color: #A3ACAF;',
      'Fire': 'background-color: #FD7D24;',
      'Water': 'background-color: #4592C4;',
      'Electric': 'background-color: #EED535;',
      'Grass': 'background-color: #9BCC50;',
      'Ice': 'background-color: #51C4E7;',
      'Fighting': 'background-color: #C03028;',
      'Poison': 'background-color: #B97FC9;',
      'Ground': 'background: linear-gradient(to bottom, #F7DE3F 50%, #AB9842 50%);',
      'Flying': 'background: linear-gradient(to bottom, #3DC7EF 50%, #BDB9B8 50%);',
      'Psychic': 'background-color: #F366B9;',
      'Bug': 'background-color: #729F3F;',
      'Rock': 'background-color: #A38C21;',
      'Ghost': 'background-color: #7B62A3;',
      'Dragon': 'background: linear-gradient(to bottom, #53A4CF 50%, #F16E57 50%);',
      'Dark': 'background-color: #707070;',
      'Steel': 'background-color: #9EB7B8;',
      'Fairy': 'background-color: #FDB9E9;'
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
      'Flying': '#000',
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
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `)
    }
  }


}

function displayTypesToScreen(type) {
  var typeColors = {
    'Normal': 'background-color: #A3ACAF;',
    'Fire': 'background-color: #FD7D24;',
    'Water': 'background-color: #4592C4;',
    'Electric': 'background-color: #EED535;',
    'Grass': 'background-color: #9BCC50;',
    'Ice': 'background-color: #51C4E7;',
    'Fighting': 'background-color: #C03028;',
    'Poison': 'background-color: #B97FC9;',
    'Ground': 'background: linear-gradient(to bottom, #F7DE3F 50%, #AB9842 50%);',
    'Flying': 'background: linear-gradient(to bottom, #3DC7EF 50%, #BDB9B8 50%);',
    'Psychic': 'background-color: #F366B9;',
    'Bug': 'background-color: #729F3F;',
    'Rock': 'background-color: #A38C21;',
    'Ghost': 'background-color: #7B62A3;',
    'Dragon': 'background: linear-gradient(to bottom, #53A4CF 50%, #F16E57 50%);',
    'Dark': 'background-color: #707070;',
    'Steel': 'background-color: #9EB7B8;',
    'Fairy': 'background-color: #FDB9E9;'
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
    'Flying': '#000',
    'Psychic': '#FFF',
    'Bug': '#FFF',
    'Rock': '#FFFFFF',
    'Ghost': '#FFF',
    'Dragon': '#000',
    'Dark': '#FFF',
    'Steel': '#FFFFFF',
    'Fairy': '#000'
  }

  var title = $('#Center').text();
  title = title.split(' ');

  $('#Center').empty().text(`All ${title[1] + " " + type} Pokémon in Database`);
  $('#pokemon-container').empty();

  for (var i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].types.includes(type)) {
      holder = "";
      for (let t of pokemonList[i].types) {
        holder += `<button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>`;
      }
      $('#pokemon-container').append(`
        <li class="list-group-item" style="border: none;">
              <div style="width:140px!important" class="d-flex mx-3 flex-column">
                <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${pokemonList[i].name}.png" alt="${pokemonList[i].name} Image"/>
                <div id="${pokemonList[i].nid}" class="d-flex">${holder}</div>
                <h5 style="font-weight: normal; text-align: center;">${pokemonList[i].name}</h5>
              </div>
              </li>
            `)

    }
  }
  
  if ($("body").height() > $(window).height()) {
    if($(window).scrollTop() !== 0) {
      $("html, body").animate({scrollTop : 0}, 'slow');
    }
  }
}
