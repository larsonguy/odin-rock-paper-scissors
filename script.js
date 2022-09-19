// The goal of this project is to create a JS console game for 
// rock paper scissors

// Create a computer input and a human input

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerOptions[getRandomInt(3)];
    return computerChoice;
}

function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    let result = null;
    if (player === 'rock' && computer === 'scissors') {
        result = ['Rock beats Scissors! You win!', 'win'];
        } else if (player === 'paper' && computer === 'rock') {
            result = ['Paper beats Rock! You win!', 'win'];
        } else if (player === 'scissors' && computer === 'paper') {
            result = ['Scissors beats Paper! You win!', 'win'];
        } else if (computer === 'rock' && player === 'scissors') {
            result = ['Rock beats Scissors! You lose!', 'lose'];
        } else if (computer === 'paper' && player === 'rock') {
            result = ['Paper beats Rock! You lose!', 'lose'];
        } else if (computer === 'scissors' && player === 'paper') {
            result = ['Scissors beats Paper! You lose!', 'lose'];
        } else if (computer === 'scissors' && player === 'scissors') {
            result = ['You both chose Scissors! You tied!', 'tie'];
        } else if (computer === 'paper' && player === 'paper') {
            result = ['You both chose Paper! You tied!', 'tie'];
        } else if (computer === 'rock' && player === 'rock') {
            result = ['You both chose Rock! You tied!', 'tie'];
        }
    return result;
}

function game() {
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Rock, Paper, or Scissors?', '');
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult[0]);
        if (roundResult[1] === 'win'){
            playerWins++;
        } else if (roundResult[1] === 'lose') {
            computerWins++;
        } 

    }

    
    if (computerWins > playerWins) {
        let gameResult = `The computer won ${computerWins} to ${playerWins}`;
        return gameResult;
    } else {
        let gameResult = `You won ${playerWins} to ${computerWins}`;
        return gameResult;
    }

    
}

console.log(game());