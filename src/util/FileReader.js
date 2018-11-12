let fs = require('fs');

const readInput = function (fileName){
  let response = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  return response;
};

module.exports = { readInput };

