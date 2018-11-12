let fs = require('fs');

const readInput = function (fileName){
  try{
    let response = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    return response;
  }catch(err){
    throw new Error('Invalid input. Check input.json file.');
  }
};

module.exports = { readInput };

