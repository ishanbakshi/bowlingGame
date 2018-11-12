let fs = require('fs');

/**
 * This function reads the input from a json file, and returns a JSON object.
 * @param {*} fileName 
 */
const readInput = function (fileName){
  try{
    let response = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    return response;
  }catch(err){
    throw new Error('Invalid input. Check input.json file.');
  }
};

module.exports = { readInput };

