function getComputerChoice() {
    const pcChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (pcChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");
    
    if (userChoice === "rock" && computerChoice === "rock") {
        resultsDiv.textContent = "It's a tie!";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultsDiv.textContent = "You lose! Paper beats Rock.";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultsDiv.textContent = "You win! Rock beats Scissors.";
    } else if (userChoice === "paper" && computerChoice === "paper") {
        resultsDiv.textContent = "It's a tie!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultsDiv.textContent = "You lose! Scissors beats Paper.";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultsDiv.textContent = "You win! Paper beats Rock.";
    } else if (userChoice === "scissors" && computerChoice === "scissors") {
        resultsDiv.textContent = "It's a tie!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultsDiv.textContent = "You lose! Rock beats Scissors.";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultsDiv.textContent = "You win! Scissors beats Paper.";
    } else {
        resultsDiv.textContent = "Invalid input. Try again!";
    }
    
    scoreDiv.textContent= `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultsDiv.textContent= "Congratulations! You won!";
        } else {
            resultsDiv.textContent= "Game over. You lost!";
        }
        humanScore = 0;
        computerScore = 0;
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
