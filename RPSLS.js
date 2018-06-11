/**
 * Represents a player
 */
function Player() {
    this.choice = null;
}


var RPSLS = {
    /**
     * Represents the choices
     */
    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4,
    },

    // Variable to store the score
    // score[0] = wins, score[1] = ties, score[2] = losses
    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1,
    }

    player: new Player(),
    computer: new Player()
}

document.getElementById('play').disabled = true;

// Stores the player's choice, then call's the function for storing the computer's choice
storePlayerChoice: function (choice) {
    this.player.choice = choice;
    console.log("My choice = " + this.player.choice);
    this.storeComputerChoice();
}

// Generate the computer's random choice
storeComputerChoice: function () {
    // Generate computer's random choice
    this.computer.choice = Math.floor(Math.random() * 5);
}

// This is the function for playing the game
playGame: function () {
    // Here is the game ruleset algorithm
    if (this.player.choice == this.computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.ROCK && (this.computer.choice == choice.SCISSORS || this.computer.choice == choices.LIZARD)) {
        // Rock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (this.player.choice == choices.PAPER && (this.computer.choice == choices.ROCK || this.computer.choice == choices.SPOCK)) {
        // Paper beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (this.player.choice == choices.SCISSORS && (this.computer.choice == choices.PAPER || this.computer.choice == choices.LIZARD)) {
        // Scissors beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (this.player.choice == choices.SPOCK && (this.computer.choice == choices.SCISSORS || this.computer.choice == choices.ROCK)) {
        // 3 is lizard
        ++score.wins
        displayGameResult("win")
    } else if (this.player.choice === choices.LIZARD && (this.computer.choice == choices.SPOCK || this.computer.choice == choices.PAPER)) {
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")
    }
}

//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "You went " + choices[player.choice] + " and your opponent went " + choices[computer.choice] + ".";
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

    this.updateScoreBoard();
}

// Function for displaying the score
function updateScoreBoard() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("losses").textContent = score.losses;
    document.getElementById("ties").textContent = score.ties;
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
