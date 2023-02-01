const gameArray = ["Rock", "Paper", "Scissors"];

console.log(gameRound(playerSelection(), getComputerChoice()));

function getComputerChoice() {
    let choice = gameArray[Math.floor(Math.random() * gameArray.length)].toUpperCase();
    return choice;
}

function playerSelection() {
    let choice = prompt("Rock, paper, scissors, shoot!");
    if (typeof(choice) != "string") {
        console.log("invalid input. Please try again");
    } else {
        choice = choice.toUpperCase();
    }
    return choice;
}

//Plays one round of the game.

function gameRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return ("It's a tie!");
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "SCISSORS" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "ROCK") {
        return(`You Win! ${playerChoice} beats ${computerChoice}`);
    }

    else if (computerChoice  === "ROCK" && playerChoice === "SCISSORS" || computerChoice  === "SCISSORS" && playerChoice === "PAPER" || computerChoice === "PAPER" && playerChoice === "ROCK") {
        return(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }

    else {
        return(`Choice of "${playerChoice}" not valid. Try again next round!`);
    }

}


