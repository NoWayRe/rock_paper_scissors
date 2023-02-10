const gameArray = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");
const cpuChoice = document.querySelector("#cpuChoice");
const plChoice = document.querySelector("#plChoice");
const cpuScore = document.querySelector("#cpuScore");
const plScore = document.querySelector("#plScore");
const gameWinner = document.querySelector("#gameWinner");
const reset = document.querySelector(".reset");
let computerScore = 0;
let playerScore = 0;


buttons.forEach((button) => button.addEventListener("click", gameRound));
reset.addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    plChoice.textContent = `Player:`;
    cpuChoice.textContent = `Computer:`;
    cpuScore.textContent = `Computer Score: 0`;
    plScore.textContent = `Player Score: 0`;
    gameWinner.textContent = `Winner:`;
});

function gameRound() {
    gameReset();
    
    let playerChoice = this.textContent.toUpperCase();
    plChoice.textContent = `Player: ${playerChoice}`;
    let computerChoice = getComputerChoice();
    cpuChoice.textContent = `Computer: ${computerChoice}`;
    let winner;
    if (playerChoice === computerChoice) {
        //winner = "It's a tie!";
        computerScore += 1;
        playerScore += 1;
        cpuScore.textContent = `Computer Score: ${computerScore}`;
        plScore.textContent = `Player Score: ${playerScore}`;
        
        winnerCheck(playerScore, computerScore, winner);
        
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "SCISSORS" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "ROCK") {
        //winner = "You Win!";
        playerScore += 1;
        cpuScore.textContent = `Computer Score: ${computerScore}`;
        plScore.textContent = `Player Score: ${playerScore}`;
        winnerCheck(playerScore, computerScore, winner);
        
    }

    else {
        //winner = "You Lose!";
        computerScore += 1;
        cpuScore.textContent = `Computer Score: ${computerScore}`;
        plScore.textContent = `Player Score: ${playerScore}`;
        winnerCheck(playerScore, computerScore, winner);
        
    }
}

function getComputerChoice() {
    let choice = gameArray[Math.floor(Math.random() * gameArray.length)].toUpperCase();
    return choice;
}

function winnerCheck(playerScore, computerScore, winner) {
    if (computerScore === 5 || playerScore === 5){
        if (computerScore === playerScore){
            winner = "It's a tie!";
            gameWinner.textContent = `Winner: ${winner}`;
            return winner;
        }
        else if (computerScore < playerScore){
            winner = "You Win!";
            gameWinner.textContent = `Winner: ${winner}`;
            return winner;
        }
        else {
            winner = "You Lose!";
            gameWinner.textContent = `Winner: ${winner}`;
            return winner;
        }
    }
    
}

//Automatically resets the player and computer scores to zero and Winner text to blank if either the player or computer scores are equal to 5. Called at the beginning of the gameRound function to check with every push of the rock, paper, scissors buttons. Used so that the scores cannot increment indefinitely after a winner has been declared.
function gameReset() {
    if (computerScore === 5 || playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        gameWinner.textContent = `Winner:`;
    }
}