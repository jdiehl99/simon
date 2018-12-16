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

console.log(computerGenerateChoice());

// function to start clicks of computer and saves to computer array
function computerGenerateChoice() {

    // Math.floor(Math.random() * 4) ;
    simonSays.computerArrayOfChoicesToMatch.push(simonSays.colors[(Math.floor(Math.random() * 4))])
    displayComputerMove();

   // console.log(simonSays.computerArrayOfChoicesToMatch)
}


function displayComputerMove() {
    // set imterveral
    const computerChoice = simonSays.computerArrayOfChoicesToMatch[0];
    console.log(`=>>> #${computerChoice}`)
    var div = $(computerChoice)
    console.log(div)
    div.css("opacity", 1)


}


// $("img").on("click", function () {
//     console.log("Img was clicked");
//     const playerChoice = $(this).attr("id");
//     console.log(playerChoice);
//     playerArrayOfChoicestoMatch.push(playerChoice);
//     $("img").css("opacity", 0.4);
//     $(this).css("opacity", 1);

//     console.log(playerArrayOfChoicestoMatch);
// });

// function that empties the arrays 
function clearGame() {
    playerArrayOfChoicestoMatch = [];
    computerArrayOfChoicesToMatch = [];
}