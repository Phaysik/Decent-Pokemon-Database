class TypeList {
  constructor(normalEffec, superEffec, halfEffec, zeroEffec) {
    this.normalEffec = normalEffec;
    this.superEffec = superEffec;
    this.halfEffec = halfEffec;
    this.zeroEffec = zeroEffec;
  }
  typeList(type) {
    var typeToUse = "";

    for (var i = 0; i < typeList.length; i++) {
      if (typeList[i].name.includes(type)) {
        $('#typeList').empty().append(`<div style="width:450px!important" class="d-flex mx-3 flex-column"> <img height="100" width="100" class="my-2 align-self-center" src="Images/TypeChart/${typeList[i].name}.png" alt="${typeList[i].name}" /> <div id="Super" class="container d-flex justify-content-around flex-wrap"></div><div id="Normal" class="container d-flex justify-content-around flex-wrap"></div><div id="Half" class="container d-flex justify-content-around flex-wrap"></div><div id="Zero" class="container d-flex justify-content-around flex-wrap"></div>
        `);
        $('#Center').empty().text(`${typeList[i].name} Type Chart`);
        break;
      }
    }

    if (this.superEffec.length > 0) {
      $('#Super').append(`
        <h3 id="Center">Super Effective against: </h3>
        `)
      for (var s = 0; s < this.superEffec.length; s++) {
        $('#Super').append(`
                  <div style="width:140px!important" class="d-flex mx-3 flex-column">
                    <img height="100" width="100" class="my-2 align-self-center"src="Images/TypeChart/${this.superEffec[s]}.png" alt="${this.superEffec[s]}" />
                    <h5 style="font-weight: normal; text-align: center;">${this.superEffec[s]}</h5>
                  </div>
                `)
      }
    }



    if (this.normalEffec.length > 0) {
      $('#Normal').append(`
        <h3 id="Center">Normal Effectiveness against: </h3>
        `)
      for (var n = 0; n < this.normalEffec.length; n++) {
        $('#Normal').append(`
                  <div style="width:140px!important" class="d-flex mx-3 flex-column">
                    <img height="100" width="100" class="my-2 align-self-center" src="Images/TypeChart/${this.normalEffec[n]}.png" alt="${this.normalEffec[n]}" />
                    <h5 style="font-weight: normal; text-align: center;">${this.normalEffec[n]}</h5>
                  </div>
                `)
      }
    }



    if (this.halfEffec.length > 0) {
      $('#Half').append(`
        <h3 id="Center">Half Effective against: </h3>
        `)
      for (var h = 0; h < this.halfEffec.length; h++) {
        $('#Half').append(`
                  <div style="width:140px!important" class="d-flex mx-3 flex-column">
                    <img height="100" width="100" class="my-2 align-self-center" src="Images/TypeChart/${this.halfEffec[h]}.png" alt="${this.halfEffec[h]}" />
                    <h5 style="font-weight: normal; text-align: center;">${this.halfEffec[h]}</h5>
                  </div>
                `)
      }
    }



    if (this.zeroEffec.length > 0) {
      $('#Zero').append(`
        <h3 id="Center">No Effectiveness against: </h3>
        `)
      for (var z = 0; z < this.zeroEffec.length; z++) {
        $('#Zero').append(`
                  <div style="width:140px!important" class="d-flex mx-3 flex-column">
                    <img height="100" width="100" class="my-2 align-self-center" src="Images/TypeChart/${this.zeroEffec[z]}.png" alt="${this.zeroEffec[z]}" />
                    <h5 style="font-weight: normal; text-align: center;">${this.zeroEffec[z]}</h5>
                  </div>
                `)
      }
    }


  }
}

var typeEffectiveness = [
  new TypeList(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Dragon', 'Dark', 'Fairy'], [], ['Rock', 'Steel'], ['Ghost']),
  new TypeList(['Normal', 'Electric', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Ghost', 'Dark', 'Fairy'], ['Grass', 'Ice', 'Bug', 'Steel'], ['Fire', 'Water', 'Rock', 'Dragon'], []),
  new TypeList(['Normal', 'Electric', 'Ice', 'Fighting', 'Poison', 'Flying', 'Psychic', 'Bug', 'Ghost', 'Dark', 'Fairy'], ['Fire', 'Ground', 'Rock'], ['Water', 'Grass', 'Dragon'], []),
  new TypeList(['Normal', 'Fire', 'Ice', 'Fighting', 'Poison', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Steel', 'Fairy'], ['Water', 'Flying'], ['Electric', 'Grass', 'Dragon'], ['Ground']),
  new TypeList(['Normal', 'Electric', 'Ice', 'Fighting', 'Psychic', 'Ghost', 'Dark', 'Fairy'], ['Water', 'Ground', 'Rock'], ['Fire', 'Grass', 'Poison', 'Flying', 'Bug', 'Dragon', 'Steel'], []),
  new TypeList(['Normal', 'Electric', 'Fighting', 'Poison', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Fairy'], ['Grass', 'Ground', 'Flying', 'Dragon'], ['Fire', 'Water', 'Ice', 'Steel'], []),
  new TypeList(['Fire', 'Water', 'Electric', 'Grass', 'Fighting', 'Ground', 'Dragon'], ['Normal', 'Ice', 'Rock', 'Dark', 'Steel'], ['Poison', 'Flying', 'Psychic', 'Bug', 'Fairy'], ['Ghost']),
  new TypeList(['Normal', 'Fire', 'Water', 'Electric', 'Ice', 'Fighting', 'Flying', 'Psychic', 'Bug', 'Dragon', 'Dark'], ['Grass', 'Fairy'], ['Poison', 'Ground', 'Rock', 'Ghost'], ['Steel']),
  new TypeList(['Normal', 'Water', 'Ice', 'Fighting', 'Ground', 'Psychic', 'Bug', 'Ghost', 'Dragon', 'Dark', 'Fairy'], ['Fire', 'Electric', 'Poison', 'Rock', 'Steel'], ['Grass', 'Bug'], ['Flying']),
  new TypeList(['Normal', 'Fire', 'Water', 'Ice', 'Poison', 'Ground', 'Flying', 'Psychic', 'Ghost', 'Dragon', 'Dark', 'Fairy'], ['Grass', 'Fighting', 'Bug'], ['Electric', 'Rock', 'Steel'], []),
  new TypeList(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Ground', 'Flying', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Fairy'], ['Fighting', 'Poison'], ['Psychic', 'Steel'], ['Dark']),
  new TypeList(['Normal', 'Water', 'Electric', 'Ice', 'Ground', 'Bug', 'Rock', 'Dragon'], ['Grass', 'Psychic', 'Dark'], ['Fire', 'Fighting', 'Poison', 'Flying', 'Ghost', 'Steel', 'Fairy'], []),
  new TypeList(['Normal', 'Water', 'Electric', 'Grass', 'Poison', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Fairy'], ['Fire', 'Ice', 'Flying', 'Bug'], ['Fighting', 'Ground', 'Steel'], []),
  new TypeList(['Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Bug', 'Rock', 'Dragon', 'Steel', 'Fairy'], ['Psychic', 'Ghost'], ['Dark', ], ['Normal']),
  new TypeList(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark'], ['Dragon'], ['Steel'], ['Fairy']),
  new TypeList(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Poison', 'Ground', 'Flying', 'Bug', 'Rock', 'Dragon', 'Steel'], ['Psychic', 'Ghost'], ['Fighting', 'Dark', 'Fairy'], []),
  new TypeList(['Normal', 'Grass', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Ghost', 'Dragon', 'Dark'], ['Ice', 'Rock', 'Fairy'], ['Fire', 'Water', 'Electric', 'Steel'], []),
  new TypeList(['Normal', 'Water', 'Electric', 'Grass', 'Ice', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Fairy'], ['Fighting', 'Dragon', 'Dark'], ['Fire', 'Poison', 'Steel'], []),
]

class Types {
  constructor(name, alt, hexCode) {
    this.name = name
    this.alt = alt
    this.hexCode = hexCode
  }

  loadToPage(index) {
    $('#types').append(`
              <div style="width:140px!important" class="d-flex mx-3 flex-column">
                <img height="100" width="100" class="my-2 align-self-center" onclick="typeEffectiveness[${index}].typeList('${this.name}')" src="Images/TypeChart/${this.name}.png" alt="${this.alt}"/>
                <h5 style="font-weight: normal; color: ${this.hexCode}; text-align: center;">${this.name}</h5>
              </div>
              `)
  }
}

var typeList = [
  new Types('Normal', 'Normal Symbol Image', '#808080'),
  new Types('Fire', 'Fire Symbol Image', '#FF0000'),
  new Types('Water', 'Water Symbol Image', '#0000FF'),
  new Types('Electric', 'Electric Symbol Image', '#FFFF00'),
  new Types('Grass', 'Grass Symbol Image', '#00FF00'),
  new Types('Ice', 'Ice Symbol Image', '#00FFFF'),
  new Types('Fighting', 'Fighting Symbol Image', '#800000'),
  new Types('Poison', 'Poison Symbol Image', '#8b008b'),
  new Types('Ground', 'Ground Symbol Image', '#964B00'),
  new Types('Flying', 'Flying Symbol Image', '#76D7EA'),
  new Types('Psychic', 'Psychic Symbol Image', '#660099'),
  new Types('Bug', 'Bug Symbol Image', '#006400'),
  new Types('Rock', 'Rock Symbol Image', '#696969'),
  new Types('Ghost', 'Ghost Symbol Image', '#663399'),
  new Types('Dragon', 'Dragon Symbol Image', '#fafad2'),
  new Types('Dark', 'Dark Symbol Image', '#0000C8'),
  new Types('Steel', 'Steel Symbol Image', '#2f4f4f'),
  new Types('Fairy', 'Fairy Symbol Image', '#FF00FF')
]

var arrayIndex = 0;

for (let p of typeList) {
  p.loadToPage(arrayIndex);
  arrayIndex++;
}
