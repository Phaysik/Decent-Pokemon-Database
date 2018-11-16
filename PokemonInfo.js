class Pokemon {
    constructor(id, name, types) {
        this.id = id
        this.name = name
        this.types = types
    }

    loadToPage() {
        $('main').append(`
            <table style="display: inline-block;">
                <tr>
                    <th><img height="70" width="90" src="Images/Pokemon/${this.name}.png" alt="Bulbasaur image"/></th>
                </tr>
                <tr>
                    <td style="text-align: center;">${this.name}</td>
                </tr>
            </table>
        `)
    }
}

var pokemonList = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']),
    new Pokemon(2, 'Ivysaur', ['Grass', 'Poison']),
    new Pokemon(3, 'Venausaur', ['Grass', 'Poison'])
]

for (let p of pokemonList) {
    p.loadToPage()
}
