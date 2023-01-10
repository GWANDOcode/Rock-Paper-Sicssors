const CHOICES = ['Rock', 'Paper', 'Sicssors'];
let result;
let scorePlayer = 0;
let scoreComputer = 0;
let endResult;
const maxScore = 5;

const gameDiv = document.querySelector("#gameDiv");
const resultDiv = document.querySelector("#resultDiv");
resultDiv.style.display = "none";

const h2 = document.querySelector("h2");

const scorePlayerDisplay = document.querySelector("#scorePlayerDisplay");
const scoreComputerDisplay = document.querySelector("#scoreComputerDisplay");
const computerSelectionDisplay = document.querySelector(".computerSelectionDisplay")
scorePlayerDisplay.textContent = `Your Score: ${scorePlayer}`;
scoreComputerDisplay.textContent = `Computer: ${scoreComputer}`;

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
function playRound (playerSelection, computerSelection) {
    playerSelection = caseInsensitive(playerSelection);

    if (checkDraw(playerSelection, computerSelection)) {
        result = `It's a Draw! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (checkWin(playerSelection, computerSelection)) {
        result = `You Win! Your choice ${playerSelection} beats computers choice ${computerSelection}`;
        scorePlayer++;
    } else {
        result =`You Lose! Computers choice ${computerSelection} beats your choice ${playerSelection}`;
        scoreComputer++;
    };

    checkScore();

    scorePlayerDisplay.textContent = `Your Score: ${scorePlayer}`;
    scoreComputerDisplay.textContent = `Computer: ${scoreComputer}`;
    computerSelectionDisplay.textContent = result;
};

//resets score
function resetScore () {
    scorePlayer = 0;
    scoreComputer = 0;
    scorePlayerDisplay.textContent = `Your Score: ${scorePlayer}`;
    scoreComputerDisplay.textContent = `Computer: ${scoreComputer}`;
    result=``;
    computerSelectionDisplay.textContent = result;

};

const resetsBtn = document.querySelector("#resetBtn");
resetsBtn.addEventListener("click", resetScore);

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn")

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));


function handleClick (playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
}

function checkScore() {
    if(scorePlayer === maxScore) {
        gameDiv.classList.toggle("hide");
        endResult = "YOU WON!"

        resultDiv.style.display = "flex";
        h2.textContent = endResult
    } else if (scoreComputer === maxScore) {
        gameDiv.classList.toggle("hide");
        endResult = "YOU LOST!"

        resultDiv.style.display = "flex";
        h2.textContent = endResult
    }
};

h2.addEventListener("click", () => {
    gameDiv.classList.toggle("hide");
    resultDiv.style.display = "none";
    resetScore;
});

h2.addEventListener("mouseover", () => {
    h2.textContent = "RESET?"
});

h2.addEventListener("mouseout", () => {
    h2.textContent = endResult;
});