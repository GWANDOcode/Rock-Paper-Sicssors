const CHOICES = ['Rock', 'Paper', 'Sicssors'];
let result;
let scorePlayer = 0;
let scoreComputer = 0;

//Randomized computer choices
function getComputerChoice () {
    return CHOICES[Math.floor((Math.random() * CHOICES.length))];
};

//makes input case Insensetive 
function caseInsensitive (playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

//checks if round is a win/loss
function checkWin (playerSelection, computerSelection) {
    if (!checkDraw(playerSelection,computerSelection) 
    && ((playerSelection == 'Rock' && computerSelection == 'Sicssors')
    || (playerSelection == 'Scissors' && computerSelection == 'Paper')
    || (playerSelection == 'Paper' && computerSelection == 'Rock'))) {
        return true;  
    } else {
        return false;
    }
};

//checks if round is draw
function checkDraw (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return true;
    } else {
        return false;
    }
};

//function to play 1 round
function playRound (playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = caseInsensitive(playerSelection);

    if (checkDraw(playerSelection, computerSelection)) {
        result = `It's a Draw! ${playerSelection} and ${computerSelection}`;
    } else if (checkWin(playerSelection, computerSelection)) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        scorePlayer++;
    } else {
        result =`You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreComputer++;
    }
};

//resets score
function resetScore () {
    scorePlayer = 0;
    scoreComputer = 0;
};

//g
function game() {
    playerSelection = prompt('Whats your choice?');
    console.log(`Round: ${round + 1}`);
    playRound (playerSelection);
    console.log(result);
    console.log(`Your Score: ${scorePlayer} Computer Score: ${scoreComputer}`);

    resetScore ();
};

game();


