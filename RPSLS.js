// Stores the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors
var playerChoice;
var computerChoice;

// Stores the lables for the choices
var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses

var score = [0, 0, 0];
document.getElementById('play').disabled = true;
// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    document.getElementById('play').disabled = false;
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// Generate computer's random choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

// This is the function for playing the game
function playGame() {
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        updateScore(1);
        displayGameResult("tie")
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 3)) {
        // Rock beats scissors - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 4)) {
        // Paper beats scissors - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 3)) {
        // Scissors beats paper - a win!
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice == 3 && (computerChoice == 3 || computerChoice == 2)) {
        // 3 is lizard
        updateScore(0);
        displayGameResult("win")
    } else if (playerChoice === 4 && (computerChoice == 2 || computerChoice == 0)) {
        updateScore(0);
        displayGameResult("win")
    } else {
        // All other combinations are losses
        updateScore(2);
        displayGameResult("lose")
        score[1] = 0;
    }
}

//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "You went " + choices[playerChoice] + " and your opponent went " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WON THE GAME!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " You lost to a computer congrats. You are doomed to try again...";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " You have another shot to win. Choose wisely.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}

// Updates the score
function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

// Function for displaying the score
function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1] + " Ties";
}

// The button elements
var rock = document.getElementById("Rock");
var paper = document.getElementById("Paper");
var scissors = document.getElementById("Scissors");
var lizard = document.getElementById("Lizard");
var spock = document.getElementById("Spock");
var playButton = document.getElementById("play");

// Add the event handlers
rock.addEventListener('click', () => {
    storePlayerChoice(0)
});
paper.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissors.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizard.addEventListener('click', () => {
    storePlayerChoice(3)
});
spock.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
