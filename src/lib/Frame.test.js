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
      nonStrikeFrame.roll(2);
      nonStrikeFrame.roll(5);
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

  // describe('calculateFrameTotal', () => {
  //   it('test frame total is calculated', () => {
  //     const spareFrame = new Frame([3,5]);
  //     expect(spareFrame.calculateFrameTotal()).toBe(8);
  //   });
   
  // });
  
});

