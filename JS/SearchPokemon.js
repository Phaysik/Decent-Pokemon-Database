/* eslint-disable no-unused-vars */
const toTitleCase = (phrase) => {
  return phrase.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

function KalosSearch() {
  $(document).ready(function() {
    $('#myInput').on('keyup', function() {
      const value = $(this).val();

            $(`#ids1:contains(${toTitleCase(value)})`).length > 0 ? $('#ids1').css('display', 'block') : $(`#ids1:contains(${value})`).length >
                0 ? $('#ids1').css('display', 'block') : $('#ids1').css('display', 'none');

            $(`#ids2:contains(${toTitleCase(value)})`).length > 0 ? $('#ids2').css('display', 'block') : $(`#ids2:contains(${value})`).length >
                0 ? $('#ids2').css('display', 'block') : $('#ids2').css('display', 'none');

            $(`#ids3:contains(${toTitleCase(value)})`).length > 0 ? $('#ids3').css('display', 'block') : $(`#ids3:contains(${value})`).length >
                0 ? $('#ids3').css('display', 'block') : $('#ids3').css('display', 'none');

            $('#pokemon-container li').filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
    });
  });
}

function KJHSUASearch() {
  $(document).ready(function() {
    let value = $('#myInput').val().toLowerCase();
    $('#pokemon-container').empty();

    value = (value.includes(':')) ? value.replace(/:/, '꞉') : value;

    if (value !== '') {
      if ($('#Center').text().includes('Kanto')) {
        KJHSUASearchExtend(value, 2);
      } else {
        KJHSUASearchExtend(value, 0);
      }
    } else {
      loadSeen();
    }
  });
}

function KJHSUASearchExtend(value, num) {
  for (let g = 0; g < pokemonList.length - num; g++) {
    if (pokemonList[g].name.toLowerCase().indexOf(value) >= 0 || (pokemonList[g].types.length === 1 && pokemonList[g].types[0].toLowerCase().indexOf(value) >= 0) ||
      (pokemonList[g].types.length === 2 && (pokemonList[g].types[0].toLowerCase().indexOf(value) >= 0 || pokemonList[g].types[1].toLowerCase().indexOf(value) >= 0))) {
      pokemonList[g].loadToPage();
      pokemonList[g].showTypes();
    }
  }
}

function ItemSearch() {
  $(document).ready(function() {
    $('#myInput').on('keyup', function() {
      const value = $(this).val().toLowerCase();

      $('.searchVal').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}

function MoveSearch() {
  $(document).ready(function() {
    $('#myInput').on('keyup', function() {
      const value = $(this).val();

            $(`#ids1:contains(${value.toUpperCase()})`).length > 0 ? $('#ids1').css('display', 'block') : $(`#ids1:contains(${value})`).length >
                0 ? $('#ids1').css('display', 'block') : $('#ids1').css('display', 'none');

            $(`#ids2:contains(${value.toUpperCase()})`).length > 0 ? $('#ids2').css('display', 'block') : $(`#ids2:contains(${value})`).length >
                0 ? $('#ids2').css('display', 'block') : $('#ids2').css('display', 'none');

            $(`#ids3:contains(${value.toUpperCase()})`).length > 0 ? $('#ids3').css('display', 'block') : $(`#ids3:contains(${value})`).length >
                0 ? $('#ids3').css('display', 'block') : $('#ids3').css('display', 'none');

            $(`#ids4:contains(${value.toUpperCase()})`).length > 0 ? $('#ids4').css('display', 'block') : $(`#ids4:contains(${value})`).length >
                0 ? $('#ids4').css('display', 'block') : $('#ids4').css('display', 'none');

            $(`#ids5:contains(${value.toUpperCase()})`).length > 0 ? $('#ids5').css('display', 'block') : $(`#ids5:contains(${value})`).length >
                0 ? $('#ids5').css('display', 'block') : $('#ids5').css('display', 'none');

            $(`#ids6:contains(${value.toUpperCase()})`).length > 0 ? $('#ids6').css('display', 'block') : $(`#ids6:contains(${value})`).length >
                0 ? $('#ids6').css('display', 'block') : $('#ids6').css('display', 'none');

            $(`#ids7:contains(${value.toUpperCase()})`).length > 0 ? $('#ids7').css('display', 'block') : $(`#ids7:contains(${value})`).length >
                0 ? $('#ids7').css('display', 'block') : $('#ids7').css('display', 'none');

            $('.searchVal').filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
    });
  });
}
