const Frame = require('./Frame.js');

class BowlingGame {
  constructor(){
    this.frames =[];
    //TODO : validate game here
  }

  roll(noOfPins){
    if(this.frames.length == 0 
     || this.frames[this.frames.length-1].isFrameComplete()){
       let newFrame = new Frame();
       newFrame.roll(noOfPins);
       this.frames.push(newFrame);
    }else{
      this.frames[this.frames.length-1].roll(noOfPins);
    }
  }

  score(){
    let score =0;
    for(let i=0; i<this.frames.length; i++){
      if(this.frames[i-1] && this.frames[i-1].isSpare()){
        score += this.frames[i].calculateSpareTotal();
      }else if(this.frames[i-1] && this.frames[i-1].isStrike()){
        score += this.frames[i].calculateStrikeTotal();
        if(this.frames[i].isStrike() && this.frames[i+1]){
          score += this.frames[i+1].rollOne;
        }
      }else{
        score += this.frames[i].calculateFrameTotal();
      }
      console.log('for frame number '+ i);
      console.log(score);
    }
   
    return score;
  }

   
}

module.exports = BowlingGame; 