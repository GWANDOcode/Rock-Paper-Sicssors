const CHOICES = ['Rock', 'Paper', 'Sicssors'];
let result;
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice () {
    return CHOICES[Math.floor((Math.random() * CHOICES.length))];
};

function caseInsensitive (playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

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

function checkDraw (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return true;
    } else {
        return false;
    }
};

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

function resetScore () {
    scorePlayer = 0;
    scoreComputer = 0;
}

function game() {
    for (let round = 0; round < 5; round++) {
        playerSelection = prompt('Whats your choice?');
        console.log(`Round: ${round + 1}`);
        playRound (playerSelection);
        console.log(result);
        console.log(`Your Score: ${scorePlayer} Computer Score: ${scoreComputer}`);
    }
    resetScore ();
}

game();


