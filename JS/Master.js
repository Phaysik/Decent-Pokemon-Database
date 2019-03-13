/* eslint-disable no-unused-vars */
const typeColors = {
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
  'Fairy': 'background-color: #FDB9E9;',
};

const tmConversion = {
  'TM01': 'Fighting',
  'TM02': 'Dragon',
  'TM03': 'Psychic',
  'TM04': 'Psychic',
  'TM05': 'Normal',
  'TM06': 'Poison',
  'TM07': 'Ice',
  'TM08': 'Fighting',
  'TM09': 'Poison',
  'TM10': 'Normal',
  'TM11': 'Fire',
  'TM12': 'Dark',
  'TM13': 'Ice',
  'TM14': 'Ice',
  'TM15': 'Normal',
  'TM16': 'Psychic',
  'TM17': 'Normal',
  'TM18': 'Water',
  'TM19': 'Grass',
  'TM20': 'Normal',
  'TM21': 'Normal',
  'TM22': 'Grass',
  'TM23': 'Ground',
  'TM24': 'Electric',
  'TM25': 'Electric',
  'TM26': 'Ground',
  'TM27': 'Normal',
  'TM28': 'Ground',
  'TM29': 'Psychic',
  'TM30': 'Ghost',
  'TM31': 'Fighting',
  'TM32': 'Normal',
  'TM33': 'Psychic',
  'TM34': 'Poison',
  'TM35': 'Fire',
  'TM36': 'Poison',
  'TM37': 'Ground',
  'TM38': 'Fire',
  'TM39': 'Rock',
  'TM40': 'Flying',
  'TM41': 'Dark',
  'TM42': 'Normal',
  'TM43': 'Fire',
  'TM44': 'Psychic',
  'TM45': 'Normal',
  'TM46': 'Dark',
  'TM47': 'Fighting',
  'TM48': 'Normal',
  'TM49': 'Normal',
  'TM50': 'Fire',
  'TM51': 'Steel',
  'TM52': 'Fighting',
  'TM53': 'Grass',
  'TM54': 'Normal',
  'TM55': 'Water',
  'TM56': 'Dark',
  'TM57': 'Electric',
  'TM58': 'Flying',
  'TM59': 'Fire',
  'TM60': 'Dark',
  'TM61': 'Fire',
  'TM62': 'Flying',
  'TM63': 'Dark',
  'TM64': 'Normal',
  'TM65': 'Ghost',
  'TM66': 'Dark',
  'TM67': 'Normal',
  'TM68': 'Normal',
  'TM69': 'Rock',
  'TM70': 'Normal',
  'TM71': 'Rock',
  'TM72': 'Electric',
  'TM73': 'Electric',
  'TM74': 'Steel',
  'TM75': 'Normal',
  'TM76': 'Bug',
  'TM77': 'Normal',
  'TM78': 'Ground',
  'TM79': 'Ice',
  'TM80': 'Rock',
  'TM81': 'Bug',
  'TM82': 'Dragon',
  'TM83': 'Bug',
  'TM84': 'Poison',
  'TM85': 'Psychic',
  'TM86': 'Grass',
  'TM87': 'Normal',
  'TM88': 'Flying',
  'TM89': 'Bug',
  'TM90': 'Normal',
  'TM91': 'Steel',
  'TM92': 'Psychic',
  'TM93': 'Electric',
  'TM94': 'Fighting',
  'TM95': 'Dark',
  'TM96': 'Normal',
  'TM97': 'Dark',
  'TM98': 'Fighting',
  'TM99': 'Fairy',
  'TM100': 'Normal',
};

const textColors = {
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
  'Fairy': '#000',
};

let holder = '';
let moveNames = '';
let moveTypes = '';

class Pokemon {
  constructor(nid, name, types) {
    this.nid = nid;
    this.name = name;
    this.types = types;
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
            `);
  }

  kalosLoadToPage(ids) {
    $(`#${ids}`).append(`
      <li class="list-group-item" style="border: none;">
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${this.name}.png" alt="${this.name} Image"/>
              <div id="${this.nid}" class="d-flex"></div>
              <h5 style="font-weight: normal; text-align: center;">${this.name}</h5>
            </div>
            </li>
            `);
  }

  showTypes() {
    for (const t of this.types) {
      $(`#${this.nid}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
          font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `);
    }
  }
}

class Items {
  constructor(name, id, category, description) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.description = description;
    this.isTrue = false;
  }


  loadItemsToPage() {
    if (!(this.name in tmConversion)) {
      tmConversion[this.name] = this.name;
      this.isTrue = true;
    }
    $('#items-container').append(`
          <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-md-3 mb-3">
                <img height="50" width="50" src="Images/Items/${tmConversion[this.name]}.png" alt="${this.name} Image"/>
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

    if (this.isTrue == true) {
      delete tmConversion[this.name];
    }
  }
}

class Moves {
  constructor(imgName, name, type) {
    this.imgName = imgName;
    this.name = name;
    this.type = type;
  }

  loadMovesToPage(id) {
    holder = '';
    moveNames = `<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 14pt">`;
    moveTypes = `<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">`;
    if (this.name.length == 2) {
      for (let i = 0; i < this.name.length; i++) {
        holder += `<img height="45" width="45" src="Images/Items/${this.type[i]}.png" alt="${this.name[i]} Image"/>`;
        moveNames += `${this.name[i]}, `;
        moveTypes += `${this.type[i]}, `;
      }
      moveNames = moveNames.substring(0, moveNames.length - 2);
      moveTypes = moveTypes.substring(0, moveTypes.length - 2);
    } else {
      holder = `<img height="45" width="45" src="Images/Items/${this.type}.png" alt="${this.name} Image"/>`;
      moveNames += `${this.name}`;
      moveTypes += `${this.type}`;
    }
    moveNames += `</h4>`;
    moveTypes += `</h4>`;


    $('#' + id).append(`
          <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-md-5 mb-3" style="position: realtive; left: 12%;">
                ${holder}
                ${moveNames}
              </div>
              <div class="d-flex flex-row col-md-3 mb-2" style="position: relative; left: 7%;">
                <h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${this.imgName}</h4>
              </div>
              <div class="d-flex flex-row col-md-3 mb-2" style="position: relative; left: 6%;">
                ${moveTypes}
              </div>
            </div>
          </div>`);
  }
}

let uniqueMoves = [];
let uniqueAttributes = [];

function displayMovesToScreen(type) {
  uniqueMoves = [];
  uniqueAttributes = [];
  let title = $('#Center').text();
  title = title.split(' ');

  $('#myInput').val('');
  $('#Center').empty().text(`All ${type} moves in Database`);
  $('#moves-container').empty();

  for (let i = 0; i < moveList.length; i++) {
    if (moveList[i].type.includes(type)) {
      if (moveList[i].name.length == 2) {
        for (let j = 0; j < moveList[i].name.length; j++) {
          if (moveList[i].type[j] === type) {
            if (uniqueMoves.includes(moveList[i].name[j])) {
              continue;
            } else {
              uniqueMoves.push(moveList[i].name[j]);
              uniqueAttributes.push([[`<img height="45" width="45" src="Images/Items/${moveList[i].type[j]}.png" alt="${moveList[i].name[j]} Image"/>`],
                [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${moveList[i].type[j]}</h4>`],
                [`<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 14pt">${moveList[i].name[j]}</h4>`],
                [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${moveList[i].imgName}</h4>`]]);
            }
          }
        }
      } else {
        if (uniqueMoves.includes(moveList[i].name)) {
          continue;
        } else {
          uniqueMoves.push(moveList[i].name);
          uniqueAttributes.push([[`<img height="45" width="45" src="Images/Items/${moveList[i].type}.png" alt="${moveList[i].name} Image"/>`],
            [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${moveList[i].type}</h4>`],
            [`<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 14pt">${moveList[i].name}</h4>`],
            [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${moveList[i].imgName}</h4>`]]);
        }
      }
    }
  }

  for (let i = 0; i < uniqueAttributes.length; i++) {
    $('#moves-container').append(`
        <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-md-5 mb-3" style="position: realtive; left: 12%;">
                ${uniqueAttributes[i][0]}
                ${uniqueAttributes[i][2]}
              </div>
              <div class="d-flex flex-row col-md-3 mb-2" style="position: relative; left: 7%;">
                ${uniqueAttributes[i][3]}</h4>
              </div>
              <div class="d-flex flex-row col-md-3 mb-2" style="position: relative; left: 6%;">
                ${uniqueAttributes[i][1]}
              </div>
            </div>
          </div>
            `);
  }

  if ($('body').height() > $(window).height()) {
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 'slow');
    }
  }
}

function displayTypesToScreen(type) {
  let title = $('#Center').text();
  title = title.split(' ');

  $('#myInput').val('');
  $('#Center').empty().text(`All ${title[1] + ' ' + type} Pokémon in Database`);
  $('#pokemon-container').empty();

  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].types.includes(type)) {
      holder = '';
      for (const t of pokemonList[i].types) {
        holder += `<button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
        font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>`;
      }
      $('#pokemon-container').append(`
        <li class="list-group-item" style="border: none;">
              <div style="width:140px!important" class="d-flex mx-3 flex-column">
                <img height="100" width="100" class="my-2 align-self-center" src="Images/Pokemon/${pokemonList[i].name}.png" alt="${pokemonList[i].name} Image"/>
                <div id="${pokemonList[i].nid}" class="d-flex">${holder}</div>
                <h5 style="font-weight: normal; text-align: center;">${pokemonList[i].name}</h5>
              </div>
              </li>
            `);
    }
  }

  if ($('body').height() > $(window).height()) {
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 'slow');
    }
  }
}
