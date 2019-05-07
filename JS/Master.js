/* eslint-disable no-unused-vars */
/**
 * @file The Master file that holds all the important functions and classes
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

/**
  * A dictionary to set the background color based on type
  * @constant
  * @type {!Object.<string, string>}
  */
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

/**
 * An array to hold all the images that should be searched through
 * @type {!Array}
 * @default []
 */
let searchList = [];

/**
  * A dictionary to convert TM's to use a specific image
  * @constant
  * @type {!Object.<string, string>}
  */
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

/**
 * A dictionary that will set the text color based on type
 * @constant
 * @type {!Object.<string, string>}
 */
const textColors = {
  'Normal': '#FFF',
  'Fire': '#FFF',
  'Water': '#FFF',
  'Electric': '#000',
  'Grass': '#000',
  'Ice': '#000',
  'Fighting': '#FFF',
  'Poison': '#FFF',
  'Ground': '#FFF',
  'Flying': '#000',
  'Psychic': '#FFF',
  'Bug': '#FFF',
  'Rock': '#FFF',
  'Ghost': '#FFF',
  'Dragon': '#000',
  'Dark': '#FFF',
  'Steel': '#FFF',
  'Fairy': '#000',
};
/**
  * An array that holds all the move information
  * @constant
  * @type {!Array}
  * @default []
  */
const attributes = [];

/**
  * An array of the h1 content split on space
  * @constant
  * @type {!Array}
  * @default []
  */
let title = [];

/**
 * For holding all the move information
 * @type {!string}
 * @default '''
 */
let holder = '';
/**
 * For holding the name(s) of the move
 * @type {!string}
 * @default '''
 */
let moveNames = '';
/**
 * For holding the type(s) of the Move
 * @type {!string}
 * @default '''
 */
let moveTypes = '';
/**
 * For determining if the scroll functions should be activated
 * @type {!boolean}
 * @default false
 * @see scroll
 * @see moveScroll
 * @see itemScroll
 */
let display = false;

/**
 * @class
 * @classdesc Appends the name, image, and type of the Pokemon to the screen
 */
class Pokemon {
  /**
   * Constructor of Pokemon that takes in the id, name, and type(s) of the Pokemon
   * @constructs Pokemon
   * @param {!number} nid A number that represents the id of the Pokemon
   * @param {!string} name A string that represents that name of the Pokemon
   * @param {!(Array|string)} types An array or string that represents the type(s) of the Pokemon
   */
  constructor(nid, name, types) {
    this.nid = nid;
    this.name = name;
    this.types = types;
  }

  /**
   * Will load the Pokemon information to the page
   */
  loadToPage() {
    this.name = (this.name.includes(':')) ? this.name.replace(/:/, '꞉') : this.name;
    $('#pokemon-container').append(`
      <li class="list-group-item" style="border: none;">
            <div style="width:140px!important" class="d-flex mx-3 flex-column">
              <a href="index.html?Search=${this.name}" class="my-2 align-self-center">
                <img height="100" width="100" class="lazy" data-src="Images/Pokemon/${this.name}.png" alt="${this.name} Image"/>
              </a>
              <div id="${this.nid}" class="d-flex"></div>
              <h5 style="font-weight: normal; text-align: center;">${this.name}</h5>
            </div>
            </li>
            `);
  }

  /**
   * Will show the Pokemon types below their image
   */
  showTypes() {
    for (const t of this.types) {
      $(`#${this.nid}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
          font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>
        `);
    }
  }
}

/**
 * @class
 * @classdesc Appends the name, id, category, and description of the Item to the screen
 */
class Item {
  /**
   * Constructor of Item that takes in the name, id, category, and description of the Item
   * @constructs Item
   * @param {!string} name A string that represents the name of the Item
   * @param {!string} id A string that represents that generation of the Item
   * @param {!string} category A string that represents the category of the Item
   * @param {!string} description A string that represents the description of the Item
   * @param {!boolean} isTrue A boolean that represents whether the TM is not in tmConversion
   */
  constructor(name, id, category, description) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.description = description;
    this.isTrue = false;
  }

  /**
   * Loads the items and their information to the screen
   */
  loadItemsToPage() {
    if (!(this.name in tmConversion)) {
      tmConversion[this.name] = this.name;
      this.isTrue = true;
    }
    $('#items-container').append(`
          <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-3 mb-3">
                <img height="50" width="50" class="lazy" data-src="Images/Items/${tmConversion[this.name]}.png" alt="${this.name} Image"/>
                <h4 class="ml-3 pt-3 font-weight-bold text-primary" style="font-size: 14pt">${this.name}</h4>
              </div>
              <div class="flex-row col-1 mb-3">
                <h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${this.id}</h4>
              </div>
              <div class="flex-row col-3 mb-3 mx-auto">
                <h4 class="mx-3 pt-3 pl-5" style="width: 100%; font-weight: normal; font-size: 14pt;">${this.category}</h4>
              </div>
              <div class="flex-row col-5 mb-3">
                <h4 class="pt-3" style="font-weight: normal; font-size: 14pt;">${this.description}</h4>
              </div>
            </div>
          </div>`);

    if (this.isTrue == true) {
      delete tmConversion[this.name];
    }
  }
}

/**
 * @class
 * @classdesc Appends the imgType, name, and type to the screen
 */
class Moves {
  /**
   * Constructor of Moves that takes in the imgType, name(s), and type(s) of the Move
   * @constructs Item
   * @param {!string} imgName A string that represents the imgType of the Move
   * @param {!(Array|string)} name An array or string that represents that name(s) of the Move
   * @param {!(Array|string)} type An array or string that represents the type(s) of the Move
   */
  constructor(imgName, name, type) {
    this.imgName = imgName;
    this.name = name;
    this.type = type;
  }

  /**
   * Loads the move and it's information to the page
   * @param {!number} id An id of that indicates which generation to load
   * @see generation
   */
  loadMovesToPage(id) {
    holder = '';
    moveNames = `<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 1.2em">`;
    moveTypes = `<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 1.2em">`;
    if (this.name.length == 2) {
      for (let i = 0; i < this.name.length; i++) {
        holder += `<img height="45" width="45" class="lazy" data-src="Images/Items/${this.type[i]}.png" alt="${this.name[i]} Image"/>`;
        moveNames += `${this.name[i]}, `;
        moveTypes += `${this.type[i]}, `;
      }
      moveNames = moveNames.substring(0, moveNames.length - 2);
      moveTypes = moveTypes.substring(0, moveTypes.length - 2);
    } else {
      holder = `<img height="45" width="45" class="lazy" data-src="Images/Items/${this.type}.png" alt="${this.name} Image"/>`;
      moveNames += `${this.name}`;
      moveTypes += `${this.type}`;
    }
    moveNames += `</h4>`;
    moveTypes += `</h4>`;


    $(id).append(`
            <div class="row searchVal">
              <div class="d-flex flex-row col-5 mb-3">
                ${holder}
                ${moveNames}
              </div>
              <div class="d-flex flex-row col-3 mb-3">
                <h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 14pt">${this.imgName}</h4>
              </div>
              <div class="d-flex flex-row col-3 mb-3">
                ${moveTypes}
              </div>
            </div>`);
  }
}

/**
 * Displays all Moves on a single type to the screen
 * @param {!string} type A string indicating what type of Move should be displayed to the screen
 */
const displayMovesToScreen = (type) => {
  title = $('#Center').text().split(' ');

  $('#myInput').val('');
  $('#Center').empty().text(`All ${type} Moves in Generation ${generation}`);
  $('#moves-container').empty();

  for (let i = 0; i < moves[generation - 1]; i++) {
    if (List[i].type.includes(type)) {
      if (List[i].name.length == 2) {
        for (let j = 0; j < List[i].name.length; j++) {
          if (List[i].type[j] === type) {
            attributes.push([[`<img height="45" width="45" class="lazy" data-src="Images/Items/${List[i].type[j]}.png" alt="${List[i].name[j]} Image"/>`],
              [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 1.2em">${List[i].type[j]}</h4>`],
              [`<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 1.2em">${List[i].name[j]}</h4>`],
              [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 1.2em">${List[i].imgName}</h4>`]]);
          }
        }
      } else {
        attributes.push([[`<img height="45" width="45" class="lazy" data-src="Images/Items/${List[i].type}.png" alt="${List[i].name} Image"/>`],
          [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 1.2em">${List[i].type}</h4>`],
          [`<h4 class="mx-3 pt-3 font-weight-bold text-primary" style="font-size: 1.2em">${List[i].name}</h4>`],
          [`<h4 class="mx-3 pt-3" style="font-weight: normal; font-size: 1.2em">${List[i].imgName}</h4>`]]);
      }
    }
  }

  for (let i = 0; i < attributes.length; i++) {
    $('#moves-container').append(`
          <div class="container">
            <div class="row searchVal">
              <div class="d-flex flex-row col-5 mb-3">
                ${attributes[i][0]}
                ${attributes[i][2]}
              </div>
              <div class="d-flex flex-row col-3 mb-3">
                ${attributes[i][3]}</h4>
              </div>
              <div class="d-flex flex-row col-3 mb-3">
                ${attributes[i][1]}
              </div>
            </div>
          </div>
            `);
  }
  Lazy();

  if ($('body').height() > $(window).height()) {
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 'slow');
    }
  }
};

/**
 * Displays all Pokemon of a single type to the screen
 * @param {!string} type A string indicating what type of Pokemon should be displayed to the screen
 */
const displayTypesToScreen = (type) => {
  title = $('#Center').text().split(' ');

  $('#myInput').val('');
  if (title[1] === 'Kalos' && title[2] !== 'Pokémon') {
    $('#Center').empty().text(`All ${title[1] + ' ' + title[2] + ' ' + type} Pokémon in Database`);
  } else {
    $('#Center').empty().text(`All ${title[1] + ' ' + type} Pokémon in Database`);
  }

  if ($('#Center').text().includes('Kanto')) {
    displayTypesToScreenExtend(type, 2);
  } else {
    displayTypesToScreenExtend(type, 0);
  }
  Lazy();

  if ($('body').height() > $(window).height()) {
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({
        scrollTop: 0,
      }, 'slow');
    }
  }
};

/**
 * An extension of displayTypesToScreen. Only used for Kanto.
 * @param {!string} type A string indicating what type of Pokemon should be displayed to the screen
 * @param {!number} num A number indicating to stop after List.length - num
 * @see displayTypesToScreen
 */
const displayTypesToScreenExtend = (type, num) => {
  display = true;
  $('#pokemon-container').empty();
  for (let i = 0; i < List.length - num; i++) {
    if (List[i].types.includes(type)) {
      holder = '';
      for (const t of List[i].types) {
        holder += `<button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
        font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}" onclick="displayTypesToScreen('${t}')">${t}</button>`;
      }
      $('#pokemon-container').append(`
        <li class="list-group-item" style="border: none;">
              <div style="width:140px!important" class="d-flex mx-3 flex-column">
                <a href="index.html?Search=${List[i].name}" class="my-2 align-self-center"><img height="100" width="100" class="lazy" data-src="Images/Pokemon/${List[i].name}.png" 
                alt="${List[i].name} Image"/></a>
                <div id="${List[i].nid}" class="d-flex">${holder}</div>
                <h5 style="font-weight: normal; text-align: center;">${List[i].name}</h5>
              </div>
              </li>
            `);
    }
  }
};

/**
 * Whenver the user clicks a type, execture a query to only get said type
 */
const typeClick = () => {
  $('#Normal').click(function() {
    displayTypesToScreen('Normal');
    searchList = document.querySelectorAll('img');
  });
  $('#Fire').click(function() {
    displayTypesToScreen('Fire');
    searchList = document.querySelectorAll('img');
  });
  $('#Water').click(function() {
    displayTypesToScreen('Water');
    searchList = document.querySelectorAll('img');
  });
  $('#Electric').click(function() {
    displayTypesToScreen('Electric');
    searchList = document.querySelectorAll('img');
  });
  $('#Grass').click(function() {
    displayTypesToScreen('Grass');
    searchList = document.querySelectorAll('img');
  });
  $('#Ice').click(function() {
    displayTypesToScreen('Ice');
    searchList = document.querySelectorAll('img');
  });
  $('#Fighting').click(function() {
    displayTypesToScreen('Fighting');
    searchList = document.querySelectorAll('img');
  });
  $('#Poison').click(function() {
    displayTypesToScreen('Poison');
    searchList = document.querySelectorAll('img');
  });
  $('#Ground').click(function() {
    displayTypesToScreen('Ground');
    searchList = document.querySelectorAll('img');
  });
  $('#Flying').click(function() {
    displayTypesToScreen('Flying');
    searchList = document.querySelectorAll('img');
  });
  $('#Psychic').click(function() {
    displayTypesToScreen('Psychic');
    searchList = document.querySelectorAll('img');
  });
  $('#Bug').click(function() {
    displayTypesToScreen('Bug');
    searchList = document.querySelectorAll('img');
  });
  $('#Rock').click(function() {
    displayTypesToScreen('Rock');
    searchList = document.querySelectorAll('img');
  });
  $('#Ghost').click(function() {
    displayTypesToScreen('Ghost');
    searchList = document.querySelectorAll('img');
  });
  $('#Dragon').click(function() {
    displayTypesToScreen('Dragon');
    searchList = document.querySelectorAll('img');
  });
  $('#Dark').click(function() {
    displayTypesToScreen('Dark');
    searchList = document.querySelectorAll('img');
  });
  $('#Steel').click(function() {
    displayTypesToScreen('Steel');
    searchList = document.querySelectorAll('img');
  });
  $('#Fairy').click(function() {
    displayTypesToScreen('Fairy');
    searchList = document.querySelectorAll('img');
  });
};

/**
 * A function that on certain events will change the data-src attribute of an image to the src of the image. i.e. Lazy Loading.
 */
const Lazy = () => {
  let lazyloadImages;

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    let lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll('.lazy');

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        const scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  };
};
