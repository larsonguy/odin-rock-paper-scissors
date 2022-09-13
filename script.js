// The goal of this project is to create a JS console game for 
// rock paper scissors

// Create a computer input and a human input. The human input must
// have parameters that are case-insensitive so that users can input
// text with various cases

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = computerOptions[getRandomInt(3)];
    return computerChoice;
}
const computerSelection = getComputerChoice();

const playerSelection = "rock";


// Determine a set of rules (e.g., rock beats scissor, paper beats rock)
// that will be referenced to determine the winner of each round

// Each "game" will consist of a maximum 5 rounds with the best of
// five being the winner

// Each round will output a winner

// Each game will output a winner