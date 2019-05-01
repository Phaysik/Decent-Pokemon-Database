const fs = require('fs');
const fileContents = fs.readFileSync('JSON/moves.json', 'utf8');
var datalet = '';
var i = 437;
var content = 537;

try {
  const data = JSON.parse(fileContents);
  for (i; i < content; i++) {
    datalet += data['moves'][i].imgName + '|';
    datalet += data['moves'][i].name + '|';
    datalet += data['moves'][i].type + '\n';
  }
  fs.writeFile('Output.txt', datalet.substring(0, datalet.length - 1), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
} catch (err) {
  console.log(err);
}
