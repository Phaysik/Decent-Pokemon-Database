const fs = require('fs');
const fileContents = fs.readFileSync('JSON/stats.json', 'utf8');
var datalet = '';

try {
  const data = JSON.parse(fileContents);
  for (var i = 0; i < data['stats'].length; i++) {
    datalet += data['stats'][i].HP + '|';
    datalet += data['stats'][i].Attack + '|';
    datalet += data['stats'][i].Defense + '|';
    datalet += data['stats'][i].Sp_Atk + '|';
    datalet += data['stats'][i].Sp_Def + '|';
    datalet += data['stats'][i].Speed + '|';
    datalet += data['stats'][i].Total + '\n';
  }
  fs.writeFile('Output.txt', datalet.substring(0, datalet.length - 1), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
} catch (err) {
  console.log(err);
}
