// global object for simon says
const simonSays = {
    computerArrayOfChoicesToMatch: [],
    playerArrayOfChoicestoMatch: [],
    colors: ['red', 'blue', 'green', 'yellow'],
    gameOver: false,
    gameStart: false,
    colorTimer: 300
};

// random number for 1 - 4
// Math.floor(Math.random() * 4) + 1;

// start game function   === start simon ==> chooses random number from color array
