const fs = require('fs');
const path = require('path');

const setPath = path.join(__dirname, 'text.txt');
const newStream = fs.createReadStream(setPath, 'utf-8');

let data = '';

newStream.on('data', text => data += text);
newStream.on('end', () => console.log(data));
newStream.on('error', error => console.log('Error', error.message));