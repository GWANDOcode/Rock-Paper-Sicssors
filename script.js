const CHOICES = ['Rock', 'Paper', 'Sicssors'];

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

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = caseInsensitive(playerSelection);

    if (checkDraw(playerSelection, computerSelection)) {
        return `It's a Draw! ${playerSelection} and ${computerSelection}`;
    } else if (checkWin(playerSelection, computerSelection)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
};

console.log(playRound('Paper'));


