const CHOICES = ['Rock', 'Paper', 'Sicssors'];

function getComputerChoice () {
    return CHOICES[Math.floor((Math.random() * CHOICES.length))];
};

function playRound (playerSelection, computerSelection) {
};

console.log(getComputerChoice());