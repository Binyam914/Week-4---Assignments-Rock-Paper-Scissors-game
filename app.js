// Create an array that contains the variables Rock, Paper, and Scissors.
const myArr = ["Rock", "Paper", "Scissors"];

// Generate random numbers for the player and computer (0-2).
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);

// Create a variable to hold the response message.
let message = "Player: " + myArr[player] + " vs Computer: " + myArr[computer] + " - ";

// Handle player and computer selections and apply game logic.
if (player === computer) {
    message += "It's a tie!";
} else if ((player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)) {
    message += "Player Wins!";
} else {
    message += "Computer Wins!";
}

// Output the result.
console.log(message);
