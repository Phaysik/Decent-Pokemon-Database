/* eslint-disable no-unused-vars */
function loadCentral() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Central Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=central');
}

function loadCoastal() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Coastal Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=coastal');
}

function loadMountain() {
  index = 0;
  List = [];
  $('#Center').text('The Kalos Mountain Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=mountain');
}

function AJAX(region) {
  $.ajax('pkdata.php?' + region).then((data) => {
    try {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        const splitVal = data[i][2].replace(/\n/gi, '').split(' ');
        if (splitVal.length === 1) {
          List.push(new Pokemon(data[i][0], data[i][1], splitVal));
        } else {
          const types = [splitVal[0], splitVal[1]];
          List.push(new Pokemon(data[i][0], data[i][1], types));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
    return $.getJSON(`../JSON/${region.split('=')[1]}.json`, function(data) {
      for (let i = 0; i < data['pokemon'].length; i++) {
        List.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
      }
    });
  }).always(() => {
    for (index; index < List.length; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        List[index].loadToPage();
        List[index].showTypes();
      } else {
        break;
      }
    }
  });
}
