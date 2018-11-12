const BowlingGame = require('./BowlingGame.js');
const expect = require("expect");

describe('Test BowlingGame', () => {

  let bowlingGame;
  
  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });


  it('test score for the first roll', () => {
    bowlingGame.roll(2);
    expect(bowlingGame.score()).toBe(2);
  });

  it('test score for the second roll', () => {
    bowlingGame.roll(3);
    expect(bowlingGame.score()).toBe(3);
  });

  it('test score after rolling the first frame', () => {
    bowlingGame.roll(3);
    bowlingGame.roll(5);
    expect(bowlingGame.score()).toBe(8);
  });

  it('test score after rolling in the gutter', () => {
    bowlingGame.roll(0);
    bowlingGame.roll(0);
    expect(bowlingGame.score()).toBe(0);
  });
   
  it('test score after rolling a spare', () => {
    bowlingGame.roll(2);
    bowlingGame.roll(8);
    bowlingGame.roll(1);
    bowlingGame.roll(3);
    expect(bowlingGame.score()).toBe(15);
  });

  it('test score after rolling a strike', () => {
    bowlingGame.roll(10);
    bowlingGame.roll(3);
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    expect(bowlingGame.score()).toBe(23);
  });

  it('test score after rolling 2 strikes in a row ', () => {
    
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toBe(43);
  });

  it('test score after rolling 2 spares in a row ', () => {
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(0);
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toBe(30);
  });

  it('test score after rolling a strike right after a spare', () => {
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toBe(41);
  });

  it('test score after rolling a spare right after a strike', () => {
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toBe(41);
  });

  it('test complete game', () => {
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(1);
    bowlingGame.roll(2);
    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(1);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    expect(bowlingGame.score()).toBe(23);
  });

});

