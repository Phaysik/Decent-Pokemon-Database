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

function AlolaSearch() {
  $(document).ready(function() {
    $('#myInput').on('keyup', function() {
      let value = $(this).val().toLowerCase();

      value = (value.includes(':')) ? value.replace(/:/, '꞉') : value;

      $('#pokemon-container li').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
}

function KJHSUSearch() {
  $(document).ready(function() {
    const value = $('#myInput').val().toLowerCase();
    $('#pokemon-container').empty();

    if (value !== '') {
      for (let g = 0; g < list.length; g++) {
        if (list[g].name.toLowerCase().indexOf(value) >= 0 || (list[g].types.length === 1 && list[g].types[0].toLowerCase().indexOf(value) >= 0) ||
        (list[g].types.length === 2 && (list[g].types[0].toLowerCase().indexOf(value) >= 0 || list[g].types[1].toLowerCase().indexOf(value) >= 0))) {
          list[g].loadToPage();
          list[g].showTypes();
        }
      }
    } else {
      for (let i = 0; i < index; i++) {
        list[i].loadToPage();
        list[i].showTypes();
      }
    }
  });
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
