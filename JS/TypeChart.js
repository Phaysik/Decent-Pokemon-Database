class Types {
    constructor(name, alt, hexCode) {
        this.name = name
        this.alt = alt
        this.hexCode = hexCode
    }

    loadToPage() {
        $('main').append(`
            <table style="display: inline-block; border: 1px solid black; border-radius: 25px;">
                <tr>
                    <th><img height="70" width="90" src="Images/TypeChart/${this.name}.png" alt="${this.alt}"/></th>
                </tr>
                <tr>
                    <td style="text-align: center; ${this.hexCode};">${this.name}</td>
                </tr>
            </table>
        `)
    }
}

var typeList = [
  new Types('Normal', 'Normal Symbol Image', 'color: #808080'),
  new Types('Fire', 'Fire Symbol Image', 'color: #FF0000'),
  new Types('Water', 'Water Symbol Image', 'color: #0000FF'),
  new Types('Electric', 'Electric Symbol Image', 'color: #FFFF00'),
  new Types('Grass', 'Grass Symbol Image', 'color: #00FF00'),
  new Types('Ice', 'Ice Symbol Image', 'color: #00FFFF'),
  new Types('Fighting', 'Fighting Symbol Image', 'color: #800000'),
  new Types('Poison', 'Poison Symbol Image', 'color: #8b008b'),
  new Types('Ground', 'Ground Symbol Image', 'color: #964B00'),
  new Types('Flying', 'Flying Symbol Image', 'color: #76D7EA'),
  new Types('Psychic', 'Psychic Symbol Image', 'color: #660099'),
  new Types('Bug', 'Bug Symbol Image', 'color: #006400'),
  new Types('Rock', 'Rock Symbol Image', 'color: #696969'),
  new Types('Ghost', 'Ghost Symbol Image', 'color: #663399'),
  new Types('Dragon', 'Dragon Symbol Image', 'color: #fafad2'),
  new Types('Dark', 'Dark Symbol Image', 'color: #0000C8'),
  new Types('Steel', 'Steel Symbol Image', 'color: #2f4f4f'),
  new Types('Fairy', 'Fairy Symbol Image', 'color: #FF00FF')
]

for (let p of typeList) {
    p.loadToPage()
}
