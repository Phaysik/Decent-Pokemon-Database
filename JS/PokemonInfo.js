class Pokemon {
    constructor(id, name, types, alt) {
        this.id = id
        this.name = name
        this.types = types
        this.alt = alt;
    }

    loadToPage() {
        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px; padding: 1em;">
                <tr>
                    <th><img height="100" width="100" src="Images/Pokemon/${this.name}.png" alt="${this.alt}"/><hr style="border: 1px solid black;"/></th>
                </tr>
                <tr>
                    <td style="text-align: center;">${this.name}</td>
                </tr>
            </table>
        `)
    }
}

var pokemonList = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison'], 'Bulbasaur Image'),
    new Pokemon(2, 'Ivysaur', ['Grass', 'Poison'], 'Ivysaur Image'),
    new Pokemon(3, 'Venausaur', ['Grass', 'Poison'], 'Venausaur Image'),
    new Pokemon(4, 'Charmander', ['Fire'], 'Charmander Image'),
    new Pokemon(5, 'Charmeleon', ['Fire'], 'Charmeleon Image'),
    new Pokemon(6, 'Charizard', ['Fire', 'Flying'], 'Charizard Image'),
    new Pokemon(7, 'Squirtle', ['Water'], 'Squirtle Image'),
    new Pokemon(8, 'Wartortle', ['Water'], 'Wartortle Image'),
    new Pokemon(9, 'Blastoise', ['Water'], 'Blastoise Image'),
    new Pokemon(10, 'Caterpie', ['Bug'], 'Caterpie Image'),
    new Pokemon(11, 'Metapod', ['Bug'], 'Metapod Image'),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying'], 'Butterfree Image'),
    new Pokemon(13, 'Weedle', ['Bug', 'Poison'], 'Weedle Image'),
    new Pokemon(14, 'Kakuna', ['Bug', 'Poison'], 'Kakuna Image'),
    new Pokemon(15, 'Beedrill', ['Bug', 'Poison'], 'Beedrill Image'),
    new Pokemon(16, 'Pidgey', ['Normal', 'Flying'], 'Pidgey Image'),
    new Pokemon(17, 'Pigeotto', ['Normal', 'Flying'], 'Pigeotto Image'),
    new Pokemon(18, 'Pidgeot', ['Normal', 'Flying'], 'Pidgeot Image'),
    new Pokemon(19, 'Rattata', ['Normal'], 'Rattata Image'),
    new Pokemon(20, 'Raticate', ['Normal'], 'Raticate Image'),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying'], 'Spearow Image'),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying'], 'Fearow Image'),
    new Pokemon(23, 'Ekans', ['Poison'], 'Ekans Image'),
    new Pokemon(24, 'Arbok', ['Poison'], 'Arbok Image'),
    new Pokemon(25, 'Pikachu', ['Electric'], 'Pikachu Image'),
    new Pokemon(26, 'Raichu', ['Electric'], 'Raichu Image'),
    new Pokemon(27, 'Sandshrew', ['Ground'], 'Sandshrew Image'),
    new Pokemon(28, 'Sandslash', ['Ground'], 'Sandslash Image'),
    new Pokemon(29, 'Nidoran♀', ['Poison'], 'Nidoran♀ Image'),
    new Pokemon(30, 'Nidorina', ['Poison'], 'Nidorina Image'),
    new Pokemon(31, 'Nidoqueen', ['Poison', 'Ground'], 'Nidoqueen Image'),
    new Pokemon(32, 'Nidoran♂', ['Poison'], 'Nidoran♂ Image'),
    new Pokemon(33, 'Nidorino', ['Poison'], 'Nidorino Image'),
    new Pokemon(34, 'Nidoking', ['Poison', 'Ground'], 'Nidoking Image'),
    new Pokemon(35, 'Clefairy', ['Normal'], 'Clefairy Image'),
    new Pokemon(36, 'Clefable', ['Normal'], 'Clefable Image'),
    new Pokemon(37, 'Vulpix', ['Fire'], 'Vulpix Image'),
    new Pokemon(38, 'Ninetails', ['Fire'], 'Ninetails Image'),
    new Pokemon(39, 'Jigglypuff', ['Normal'], 'Jigglypuff Image'),
    new Pokemon(40, 'Wigglytuff', ['Normal'], 'Wigglytuff Image'),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying'], 'Zubat Image'),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying'], 'Golbat Image'),
    new Pokemon(43, 'Oddish', ['Grass', 'Poison'], 'Oddish Image'),
    new Pokemon(44, 'Gloom', ['Grass', 'Poison'], 'Gloom Image'),
    new Pokemon(45, 'Vileplume', ['Grass', 'Poison'], 'Vileplume Image'),
    new Pokemon(46, 'Paras', ['Bug', 'Grass'], 'Paras Image'),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass'], 'Parasect Image'),
    new Pokemon(48, 'Venonat', ['Bug', 'Poison'], 'Venonat Image'),
    new Pokemon(49, 'Venomoth', ['Bug', 'Poison'], 'Venomoth Image'),
    new Pokemon(50, 'Diglett', ['Ground'], 'Diglett Image'),
    new Pokemon(51, 'Dugtrio', ['Ground'], 'Dugtrio Image'),
    new Pokemon(52, 'Meowth', ['Normal'], 'Meowth Image'),
    new Pokemon(53, 'Persian', ['Normal'], 'Persian Image')
]

for (let p of pokemonList) {
    p.loadToPage()
}
