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

  KalosLoadToPage(ids) {
    $(`#${ids}`).append(`
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
    for (let t of this.types) {
      $(`#${this.nid}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `)
    }
  }
}

class Items {
  constructor(name, id, category, description) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.description = description;
  }

  loadItemsToPage() {
    $('#items-container').append(`
          <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-md-3 mb-3">
                <img height="50" width="50" src="Images/Items/${this.name}.png" alt="${this.name} Image"/>
                <h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 14pt">${this.name}</h4>
              </div>
              <div class="d-flex flex-row col-md-1 mb-3">
                <h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${this.id}</h4>
              </div>
              <div class="d-flex flex-row col-md-3 mb-3 mx-auto">
                <h4 class="mx-3 pt-3 pl-5" style="width: 100%; font-weight: normal; font-size: 14pt;">${this.category}</h4>
              </div>
              <div class="d-flex flex-row col-md-5 mb-3">
                <h4 class="pt-3" style="font-weight: normal; font-size: 14pt;">${this.description}</h4>
              </div>
            </div>
          </div>`);
  }
}

function displayTypesToScreen(type) {
  var title = $('#Center').text();
  title = title.split(' ');

  $('#myInput').val('');
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
    if ($(window).scrollTop() !== 0) {
      $("html, body").animate({
        scrollTop: 0
      }, 'slow');
    }
  }
}
