const fileReader = require('./FileReader.js');
const expect = require("expect");

describe('FileReader', () => {

  it('should read input file', () => {
    const input  = fileReader.readInput('input.json');
    expect(typeof input).toBe("object");

  });
  
});




