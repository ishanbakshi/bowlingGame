const MAX_FRAME_SCORE = 10;

class Frame {

  constructor() {
    this.rollOne;
    this.rollTwo;
  }

  /**
   * Returns true if the frame is complete
   * so that the game can move to the next frame.
   */
  isFrameComplete(){
    if(this.isStrike()
     ||  ((this.rollOne || this.rollOne==0) 
     && (this.rollTwo || this.rollTwo==0))){
      return true;
    }
    return false; 
  }

  roll(noOfPins){
    if(!this.rollOne && this.rollOne!=0){
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

  /**
   * Call this if the previous frame was neither a strike, nor a spare
   */
  calculateFrameTotal(){
    if(this.rollTwo){
      return this.rollOne + this.rollTwo;
    }else{
      return this.rollOne;
    }
  }

  /**
   * Call this if the previous frame was a spare
   */
  calculateSpareTotal(){
    return this.calculateFrameTotal() + this.rollOne;
  }

  /**
   * Call this if the previous frame was a Strike
   */
  calculateStrikeTotal(){
    return this.calculateFrameTotal() * 2 ;
  }
}

module.exports = Frame; 