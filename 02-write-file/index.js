const fs = require('fs');
const path = require('path');

const { stdin, stdout, exit } = process;
const output = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(output);

stdout.write('Введите текст\n');
stdin.on('data', data => {
  const dataToString = data.toString();
  if (dataToString.indexOf('exit') !== -1) {
    exit();
  } else {
    stdout.write('Введите ещё что-нибудь\n');
    writeStream.write(dataToString);
}
});
process.on('SIGINT', () => exit());
process.on('exit', () => { stdout.write('Всего доброго!'); });