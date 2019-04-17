/* eslint-disable no-unused-vars */
const pokemon = [];
const pokemonList = [];
const desc = [];
const types = [];
const ids = [];
const stats = [];
const descriptions = [];
const family = [];
const statNames = ['HP: ', 'Attack: ', 'Defense: ', 'Sp. Atk: ', 'Sp. Def: ', 'Speed: ', 'Total: '];
let listIndex = 0;
let val = '';
const urlPath = window.location.href.split('?');
let datalist;

window.onload = function() {
  datalist = document.getElementById('datalist');

  $.getJSON('../JSON/national.json', function(data) {
    for (let i = 0; i < data['pokemon'].length; i++) {
      pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
    }

    datalist.textContent = '';
    for (let i = 0; i < pokemonList.length; i++) {
      pokemon.push(pokemonList[i].name);
      const option = document.createElement('option');
      option.value = pokemon[i];
      datalist.appendChild(option);
      types.push(pokemonList[i].types);
      ids.push(pokemonList[i].nid);
    }
    $('.appendList').empty();

    determineLoad();
  });
};

window.onpopstate = function() {
  determineLoad();
};

function determineLoad() {
  if (urlPath[1]) { // if a ( ? ) was found in the split, use the second part after the ?
    if (!pokemon.includes(toTitleCase(urlPath[1].split('=')[1].replace('%20', ' ')))) { // Redirect the user to a page not found if the query is not in the Pokemon list
      window.location = 'set redirect location to page not found when made';
    } else {
      let name = toTitleCase(urlPath[1].split('=')[1]);
      $(document).attr('title', name);
      name = name = (name.includes('꞉')) ? name.replace(/꞉/, ':') : name;
      listIndex = pokemon.indexOf(toTitleCase(name.replace('%20', ' ')));
      loadPokemon(toTitleCase(name.replace('%20', ' ')));
      JSONStat();
      JSONEvol(types, pokemon);
      JSONDesc();
    }
  } else { // If the page was not by the user clicking on a Pokemon image from another page
    history.replaceState({index: 'index'}, '', 'Index.html?Search=Bulbasaur'); // Replace URL to make later state pushing possible
    listIndex = 0;
    loadPokemon('Bulbasaur');
    JSONStat();
    JSONEvol(types, pokemon);
    JSONDesc();
  }
}

function JSONDesc() {
  $.getJSON('../JSON/descriptions.json', function(data) {
    for (let i = 0; i < data['descriptions'].length; i++) {
      descriptions.push(data['descriptions'][i]);
    }

    loadDesc(descriptions[listIndex]);
  });
}

function JSONStat() {
  $.getJSON('../JSON/stats.json', function(data) {
    for (let i = 0; i < data['stats'].length; i++) {
      stats.push([data['stats'][i].HP, data['stats'][i].Attack, data['stats'][i].Defense, data['stats'][i].Speed, data['stats'][i].Sp_Atk, data['stats'][i].Sp_Def, data['stats'][i].Total]);
    }
    loadStats(stats[listIndex]);
  });
}

function JSONEvol(types, pokemon) {
  $.getJSON('../JSON/evolutions.json', function(data) {
    for (let i = 0; i < data['family'].length; i++) {
      if (data['family'][i].first && data['family'][i].middle && data['family'][i].last) {
        family.push([data['family'][i].first, data['family'][i].middle, data['family'][i].last]);
      } else if (data['family'][i].first && data['family'][i].last) {
        family.push([data['family'][i].first, data['family'][i].last]);
      } else {
        family.push([data['family'][i].first]);
      }
    }
    loadEvolutions(family[listIndex], types, pokemon);
  });
}

function visibility(show) {
  if (show === undefined || show === 0 || $('#myInput').val() === '') {
    $('.appendList').empty();
  } else if (document.getElementsByClassName('appendList')[0].children.length === 0 && show !== undefined) {
    $('.appendList').append(datalist);
  }
}

function Search() {
  visibility(3);
  val = document.getElementById('myInput').value;
  if (val !== '') {
    const opts = document.getElementById('datalist').childNodes;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].value === toTitleCase(val)) {
        visibility(0);
        if (window.event.keyCode == '13') {
          if (window.location.href.indexOf(`index.html?Search=${toTitleCase(val)}`) <= -1) { // Prevent multiple states of the same value being pushed
            window.history.pushState({index: 'index'}, toTitleCase(val), `index.html?Search=${toTitleCase(val)}`);
            val = val = (val.includes('꞉')) ? val.replace(/꞉/, ':') : val;
            listIndex = pokemon.indexOf(toTitleCase(val));
            loadPokemon(toTitleCase(val));
            loadStats(stats[listIndex]);
            loadEvolutions(family[listIndex], types, pokemon);
            loadDesc(descriptions[listIndex]);
            $('#myInput').val('');
          }
        }
        break;
      }
    }
  }
}

function loadPokemon(name) {
  $('.appendList').empty();
  $(document).attr('title', name);
  $('#Center').text(name);
  name = name = (name.includes(':')) ? name.replace(/:/, '꞉') : name;
  $('#pokemon-info').empty().append(`
    <div class="row">
      <div class="col-5 my-auto pb-5">
        <img src="../Images/Pokemon/${name}.png" alt="${name} image" height="300" style="max-width: 100%; display: block; margin: 0 auto;" />
        <div data-id="${name.replace(/ /, '').replace(/:/, '').replace(/\./, '')}" class="d-flex"></div>
      </div>
      <div class="col-6">
        <div>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
      </div>
      <div class="col">
      </div>
    </div>
  `);
}

function loadDesc(desc) {
  $('.description').append(`<p>${desc}</p>`);
}

function loadStats(stats) {
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [`HP`, `Attack`, `Defense`, `Sp. Atk`, `Sp. Def`, `Speed`, `Total`],
      datasets: [{
        label: 'Base Stats',
        data: [stats[0], stats[1], stats[2], stats[3], stats[4], stats[5], stats[6]],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 130, 64, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(50, 102, 255, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(180, 180, 180, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(50, 102, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(180, 180, 180, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}

function loadEvolutions(evolutions, types, poke) {
  $('#pokemon-info').append(`
    <div id="evolutions">
    </div>
    `);
  let typeIndex = 0;
  for (let i = 0; i < evolutions.length; i++) {
    if (typeof evolutions[i] != 'object') {
      evolutions[i] = evolutions[i] = (evolutions[i].includes(':')) ? evolutions[i].replace(/:/, '꞉') : evolutions[i];
      typeIndex = poke.indexOf(toTitleCase(evolutions[i].replace('%20', ' ').replace('꞉', ':')));
      $('#evolutions').append(`
      <div style="float: left">
        <img src="../Images/Pokemon/${evolutions[i]}.png" alt="${evolutions[i]} image" width="150" height="150" />
        <div data-id="${poke[typeIndex].replace(/ /, '').replace(/:/, '').replace(/\./, '')}" class="d-flex"></div>
        <p>${evolutions[i]}</p>
      </div>
      `);
      for (const t of types[typeIndex]) {
        $(`[data-id=${poke[typeIndex].replace(/ /, '').replace(/:/, '').replace(/\./, '')}]`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
          font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}">${t}</button>
        `);
      }
    } else {
      for (let j = 0; j < evolutions[i].length; j++) {
        typeIndex = poke.indexOf(toTitleCase(evolutions[i][j]));
        $('#evolutions').append(`
      <div style="float: left">
        <img src="../Images/Pokemon/${evolutions[i][j]}.png" alt="${evolutions[i][j]} image" width="150" height="150" />
        <div id="${evolutions[i][j]}" class="d-flex"></div>
        <p>${evolutions[i][j]}</p>
      </div>
      `);
        for (const t of types[typeIndex]) {
          $(`#${evolutions[i][j]}`).append(`
          <button class="flex-grow-1 mx-1" style="border: 1px solid black; color: ${textColors[t]}; 
          font-weight: bold; border-radius: 25px; text-align: center; ${typeColors[t]}">${t}</button>
        `);
        }
      }
    }
  }
}
