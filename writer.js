const fs = require('fs');
const fileContents = fs.readFileSync('JSON/alola.json', 'utf8');
var datalet = '';
var i = 0;

try {
  const data = JSON.parse(fileContents);
  for (i; i < data['pokemon'].length; i++) {
    datalet += data['pokemon'][i].name + '\n';
  }
  fs.writeFile('Output.txt', datalet.substring(0, datalet.length - 1), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
} catch (err) {
  console.log(err);
}
