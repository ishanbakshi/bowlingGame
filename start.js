const fileReader = require('./src/util/FileReader.js');
const BowlingGame = require('./src/lib/BowlingGame.js');


console.log('start of game');

let bowlingGame = new BowlingGame();
const inputArray = fileReader.readInput(process.argv[2]);

inputArray.forEach((frames) => {
  frames.forEach((roll) => {
    bowlingGame.roll(roll);
  });
});
const score = bowlingGame.score();
console.log('FINAL SCORE : '+ score);



