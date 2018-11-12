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
    let score = 0;
    let onAStrikeInARow=false;
    if(this.frames[0]){
      score =this.frames[0].calculateFrameTotal();
    }
    for(let i=0; i<this.frames.length-1; i++){
      if(this.frames[i].isSpare()){
        score += this.frames[i+1].calculateSpareTotal();
      }else if(this.frames[i].isStrike()){
        score += this.frames[i+1].calculateStrikeTotal();
        if(onAStrikeInARow){
          score += this.frames[i+1].rollOne;
          onAStrikeInARow=false;
        }
        if(this.frames[i+1].isStrike()){
          onAStrikeInARow = true;
        }
      }else{
        score += this.frames[i+1].calculateFrameTotal();
      }
      console.log('roll no : '+ i);
      console.log(score);
    }
   
    return score;
  }

   
}

module.exports = BowlingGame; 