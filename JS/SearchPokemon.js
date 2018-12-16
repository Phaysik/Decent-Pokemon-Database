const toTitleCase = (phrase) => {
  return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

function KalosSearch(){
  $(document).ready(function() {
    $("#myInput").on("keyup", function() {
      var value = $(this).val();

      $(`#ids1:contains(${toTitleCase(value)})`).length > 0 ? $('#ids1').css("display", "block") : $(`#ids1:contains(${value})`).length > 0 ? $('#ids1').css("display", "block") : $('#ids1').css("display", "none");

      $(`#ids2:contains(${toTitleCase(value)})`).length > 0 ? $('#ids2').css("display", "block") : $(`#ids2:contains(${value})`).length > 0 ? $('#ids2').css("display", "block") : $('#ids2').css("display", "none");

      $(`#ids3:contains(${toTitleCase(value)})`).length > 0 ? $('#ids3').css("display", "block") : $(`#ids3:contains(${value})`).length > 0 ? $('#ids3').css("display", "block") : $('#ids3').css("display", "none");

      $("#pokemon-container li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}

function AlolaSearch(){
  $(document).ready(function() {
    $("#myInput").on("keyup", function() {

      var value = $(this).val().toLowerCase();

      value = (value.includes(":")) ?  value.replace(/:/, "꞉") : value;

      $("#pokemon-container li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}

function KJHSUSearch(){
  $(document).ready(function() {
    $("#myInput").on("keyup", function() {

      var value = $(this).val().toLowerCase();

      $("#pokemon-container li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}

function ItemSearch(){
  $(document).ready(function() {
    $("#myInput").on("keyup", function() {

      var value = $(this).val().toLowerCase();

      $(".searchVal").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
}
