// global object for simon says
const simonSays = {
    computerArrayOfChoicesToMatch: [],
    playerArrayOfChoicestoMatch: [],
    colors: ['#red', '#blue', '#green', '#yellow'],
    gameOver: false,
    gameStart: false,
    colorTimer: 300
};


// start game function   === start simon ==> clears the game to start
function newGame() {

    // when new game starts it clears both arrays(computer and player)
    clearGame();
}



// function to start clicks of computer and saves to computer array
function computerGenerateChoice() {
  
    // Math.floor(Math.random() * 4) ;
    game.computerArrayOfChoicesToMatch.push(game.colors[(Math.floor(Math.random() * 4))])


}




// function that empties the arrays 
function clearGame() {
    playerArrayOfChoicestoMatch = [];
    computerArrayOfChoicesToMatch = [];
}