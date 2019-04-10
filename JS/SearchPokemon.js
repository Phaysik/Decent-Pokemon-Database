/* eslint-disable no-unused-vars */
const toTitleCase = (phrase) => {
  return phrase.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

function PokemonSearch() {
  $(document).ready(function() {
    let value = $('#myInput').val().toLowerCase();
    $('#pokemon-container').empty();

    value = (value.includes(':')) ? value.replace(/:/, '꞉') : value;

    if (value !== '') {
      if ($('#Center').text().includes('Kanto')) {
        PokemonSearchExtend(value, 2);
      } else {
        PokemonSearchExtend(value, 0);
      }
    } else {
      loadSeen();
    }
  });
}

function PokemonSearchExtend(value, num) {
  for (let g = 0; g < List.length - num; g++) {
    if (List[g].name.toLowerCase().indexOf(value) >= 0 || (List[g].types.length === 1 && List[g].types[0].toLowerCase().indexOf(value) >= 0) ||
      (List[g].types.length === 2 && (List[g].types[0].toLowerCase().indexOf(value) >= 0 || List[g].types[1].toLowerCase().indexOf(value) >= 0))) {
      List[g].loadToPage();
      List[g].showTypes();
    }
  }
}

function ItemSearch() {
  $(document).ready(function() {
    const value = $('#myInput').val().toLowerCase();
    $('#items-container').empty();

    if (value !== '') {
      for (let g = 0; g < List.length; g++) {
        if (List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].id.toLowerCase().indexOf(value) >= 0 || List[g].category.toLowerCase().indexOf(value) >= 0
            || List[g].description.toLowerCase().indexOf(value) >= 0) {
          List[g].loadItemsToPage();
        }
      }
    } else {
      loadSeen();
    }
  });
}

function MoveSearch() {
  $(document).ready(function() {
    const value = $('#myInput').val().toLowerCase();
    $('#moves-container').empty().append(`
      <div class="container mt-4"><div class="row"><div class="col-5"><h4 class="MovesText">Name</h4></div><div class="col-3">
  <h4 class="MovesText" class="pr-3">TM</h4></div><div class="col-3"><h4 class="MovesText" class="pr-3">
  Type</h4></div></div><div style="width=100%" id="moves"></div></div>
  `);

    if (value !== '') {
      for (let g = searchIndex; g < moves[generation - 1]; g++) {
        if (List[g].imgName.toLowerCase().indexOf(value) >= 0 || List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].type.toLowerCase().indexOf(value) >= 0) {
          List[g].loadMovesToPage('#moves');
        }
      }
    } else {
      loadSeen();
    }
  });
}
