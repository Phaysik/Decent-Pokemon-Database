/* eslint-disable no-unused-vars */
function loadCentral() {
    index = 0;
    pokemonList = [];
    $('#Center').text('The Kalos Central Pokémon List by Pokédex Number');
    $('#myInput').val('');
    $('#pokemon-container').empty();
    $.getJSON('../JSON/central.json', function (data) {
        for (let i = 0; i < data['pokemon'].length; i++) {
            pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
        }
        for (index; index < pokemonList.length; index++) {
            if ($(window).scrollTop() === $(document).height() - $(window).height()) {
                pokemonList[index].loadToPage();
                pokemonList[index].showTypes();
            } else {
                break;
            }
        }
    });
}

function loadCoastal() {
    index = 0;
    pokemonList = [];
    $('#Center').text('The Kalos Coastal Pokémon List by Pokédex Number');
    $('#myInput').val('');
    $('#pokemon-container').empty();

    $.getJSON('../JSON/coastal.json', function (data) {
        for (let i = 0; i < data['pokemon'].length; i++) {
            pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
        }
        for (index; index < pokemonList.length; index++) {
            if ($(window).scrollTop() === $(document).height() - $(window).height()) {
                pokemonList[index].loadToPage();
                pokemonList[index].showTypes();
            } else {
                break;
            }
        }
    });
}

function loadMountain() {
    index = 0;
    pokemonList = [];
    $('#Center').text('The Kalos Mountain Pokémon List by Pokédex Number');
    $('#myInput').val('');
    $('#pokemon-container').empty();

    $.getJSON('../JSON/mountain.json', function (data) {
        for (let i = 0; i < data['pokemon'].length; i++) {
            pokemonList.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
        }
        for (index; index < pokemonList.length; index++) {
            if ($(window).scrollTop() === $(document).height() - $(window).height()) {
                pokemonList[index].loadToPage();
                pokemonList[index].showTypes();
            } else {
                break;
            }
        }
    });
}
