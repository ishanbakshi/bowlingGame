const MAX_FRAME_SCORE = 10;

class Frame {

  constructor() {
    this.rollOne;
    this.rollTwo
  }

  roll(noOfPins){
    if(!this.rollOne){
      this.rollOne = noOfPins
    }else{
      this.rollTwo = noOfPins
    }

  }
  isStrike(){
    return (this.rollOne) === MAX_FRAME_SCORE ? true : false;
  }

  isSpare(){
    return (
      (this.rollOne + this.rollTwo) === MAX_FRAME_SCORE 
        && !this.isStrike()
      )? true : false;
  }

  calculateFrameTotal(){
    return this.rollOne + this.rollTwo;
  }
}

module.exports = Frame; 