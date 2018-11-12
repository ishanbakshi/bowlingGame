const fileReader = require('./FileReader.js');
const expect = require("expect");

describe('FileReader', () => {

  it('should read input file', () => {
    const input  = fileReader.readInput('input.json');
    expect(typeof input).toBe("object");
  });

  it('should error for empty file', () => {
    expect(() => {
      fileReader.readInput('testData/emptyFile.json')
    }).toThrowError('Invalid input');
  });

  it('should error for file with invalid object', () => {
    expect(() => {
      fileReader.readInput('testData/emptyFile.json')
    }).toThrowError('Invalid input');
  });

  it('should error if file does not exist', () => {
    expect(() => {
      fileReader.readInput('testData/nonExistingFile.json')
    }).toThrowError('Invalid input');
  });
  
});




