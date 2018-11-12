const Frame = require('./Frame.js');
const expect = require("expect");

describe('Test Frames', () => {

  describe('isStrike', () => {
    it('check if frame is a Strike', () => {
      let strikeFrame = new Frame();
      strikeFrame.roll(10);
      expect(strikeFrame.isStrike()).toBe(true);
    });
    it('check if frame is not a Strike', () => {
      let nonStrikeFrame = new Frame();
      nonStrikeFrame.roll(9);
      nonStrikeFrame.roll(1);
      expect(nonStrikeFrame.isStrike()).toBe(false);
    });
  });

  describe('isSpare', () => {
    it('check if frame is a Spare', () => {
      let spareFrame = new Frame();
      spareFrame.roll(2);
      spareFrame.roll(8);
      expect(spareFrame.isSpare()).toBe(true);
    });
    it('check if frame is not a Spare', () => {
      const strikeFrame = new Frame();
      strikeFrame.roll(10);
      expect(strikeFrame.isSpare()).toBe(false);
      const nonSpareFrame = new Frame();
      nonSpareFrame.roll(2);
      nonSpareFrame.roll(4);
      expect(nonSpareFrame.isSpare()).toBe(false);
    });
  });

  describe('isFrameComplete', () => {
    it('check if frame is complete', () => {
      let frameOne = new Frame();
      frameOne.roll(0);
      frameOne.roll(4);
      expect(frameOne.isFrameComplete()).toBe(true);
      let frameTwo = new Frame();
      frameTwo.roll(10);
      expect(frameTwo.isFrameComplete()).toBe(true);
    });
  });

  describe('calculateFrameTotal', () => {
    it('test frame total', () => {
      let frameObj = new Frame();
      frameObj.roll(2);
      frameObj.roll(4);
      expect(frameObj.calculateFrameTotal()).toBe(6);
    });
    it('test frame total when previous frame was a spare', () => {
      let frameObj = new Frame();
      frameObj.roll(2);
      frameObj.roll(4);
      expect(frameObj.calculateSpareTotal()).toBe(8);
    });
    it('test frame total when previous frame was a strike', () => {
      let frameObj = new Frame();
      frameObj.roll(2);
      frameObj.roll(4);
      expect(frameObj.calculateStrikeTotal()).toBe(12);
    });
  });
  
});

