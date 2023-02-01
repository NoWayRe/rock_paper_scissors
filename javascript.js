const gameArray = ["Rock", "Paper", "Scissors"];

// console.log(gameRound(playerSelection(), getComputerChoice()));
game ();

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

    let winner;
    if (playerChoice === computerChoice) {
        winner = "tie"
        // return ("It's a tie!");
        return winner;
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS" || playerChoice === "SCISSORS" && computerChoice === "PAPER" || playerChoice === "PAPER" && computerChoice === "ROCK") {
        winner = "player";
        // return(`You Win! ${playerChoice} beats ${computerChoice}`);
        return winner;
    }

    else if (computerChoice  === "ROCK" && playerChoice === "SCISSORS" || computerChoice  === "SCISSORS" && playerChoice === "PAPER" || computerChoice === "PAPER" && playerChoice === "ROCK") {
        winner = "computer";
        // return(`You Lose! ${computerChoice} beats ${playerChoice}`);
        return winner;
    }

    else {
        winner = "computer";
        return winner;
    }

}

//Plays 5 rounds of the game, keeps score and declares a winner.

function game (){
    let playerScore = 0;
    let computerScore = 0;
    let scoresArr = [playerScore, computerScore];
    for (let i = 0; i < 5; i++) {
        let winner = gameRound(playerSelection(), getComputerChoice());
        if (winner === "player"){
            scoresArr[0] += 1;
            console.log(`You Win This Round!`);
        }

        else if (winner === "computer"){
            scoresArr[1] += 1;
            console.log(`You Lose This Round!`);
        }

        else {
            console.log("This round is a tie!");
        }
        
    }
    console.log(scoresArr);

    if (scoresArr[0] === scoresArr[1]) {
        console.log("It's a tie!");
    }
    else if (scoresArr[0] > scoresArr[1]) {
        console.log("You Won the Game!");
    } else {
        console.log("You lost! Better Luck Next Time.");
    }

}


