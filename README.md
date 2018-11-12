# Backend assignment for Dius

This an implementation of a coding test. The problem statement is defined here:(https://github.com/DiUS/coding-tests/blob/master/dius_bowling.md) 

## Prerequisites for Project Setup

 -  node v10.12.0
 -  npm v6.4.1


## Instruction for project setup

-  `npm install`
-  Add the input in input.json file in the root directory of the project. See below for input format.
-  `npm start`
  
### Input format
Input format is a 2 dimensional array. With each row representing a frame of 1 to 2 rolls. For example :

`[[1,3],[5,4],[10],[2,4]]`

    In the above example [1,3] represents the first frame with two rolls. In roll one ,1 pin was knocked down and in roll two, 3 pins were knocked down.

    Strikes are represented by [10]. *Please note [10,0] is not a valid input* and this scenario is not handled yet.


### Testing the App
  -  `npm install`
  -  `npm test`



##  Possible enhancements :

-  Input validation
-  10th frame implementation
-  Better error handling

##  Design considerations

 - The start.js file is very functional , whereas the Frame.js and BowlingGame.js is very Object oriented
 - It might have been quicker to implement everything in BowlingGame class instead of having 2 classes(BowlingGame + Frame), but it would have meant having 1 huge file. I prefer seperation of logic here.
 - I have assumed that the input data would not be very big, so I have not used any stream readers, or asynchronous reading here.







