const gameArray = ["Rock", "Paper", "Scissors"];


gameRound(playerSelection(), getComputerChoice());


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
        console.log("It's a tie!");
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "SCISSORS" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
    }

    else if (computerChoice  === "ROCK" && playerChoice === "SCISSORS" || computerChoice  === "SCISSORS" && playerChoice === "PAPER" || computerChoice === "PAPER" && playerChoice === "ROCK") {
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    }

    else {
        console.log(`Choice of "${playerChoice}" not valid. Try again next round!`);
    }

}


