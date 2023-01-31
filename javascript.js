const gameArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice = gameArray[Math.floor(Math.random() * gameArray.length)];
    return choice;
}

console.log(getComputerChoice());