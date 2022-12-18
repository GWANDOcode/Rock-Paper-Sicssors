const CHOICES = ['Rock', 'Paper', 'Sicssors'];

function getComputerChoice () {
    return CHOICES[Math.floor((Math.random() * CHOICES.length))];
};

function caseInsensitive (playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}
/* !!!!!!!!!!!!!! BUG AREA !!!!!!!!!!!!!!!! */
function checkWin (playerSelection, computerSelection) {
    if ((playerSelection != computerSelection) && checkDraw(playerSelection,computerSelection) == false) {
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
}

function playRound (playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = caseInsensitive(playerSelection);

    console.log('Computer: ' + computerSelection);
    console.log('Player: ' + playerSelection);

    if (checkDraw(playerSelection, computerSelection)) {
        console.log (`It's a Draw! ${playerSelection} and ${computerSelection}`);
    } else if (checkWin(playerSelection, computerSelection) === true) {
        console.log (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log (`You Los! ${computerSelection} beats ${playerSelection}`);
    }
};

/* !!!!!!!!!!!!!! BUG AREA !!!!!!!!!!!!!!!! 
    Doesnt return loss!
*/

playRound('rock');


