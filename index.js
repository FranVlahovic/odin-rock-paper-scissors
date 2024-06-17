let humanScore = 0;
let computerScore = 0;


function getComputerChoice (){
    const pcChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (pcChoice) {
        case 1:
            return "rock";

        case 2:
            return "paper";
        
        case 3:
            return "scissors"

    }
}
function getHumanChoice (){
    let userChoice = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();

    if (userChoice === "rock" || "Rock") {
        return "rock";
    }
    else if (userChoice === "paper" || "Paper") {
        return "paper";
    }
    else if (userChoice === "scissors" || "Scissors") {
        return "scissors";
    }
}
function playRound(userChoice, pcChoice) {
  if (userChoice === "rock" && pcChoice === "rock"){
    console.log("It's a tie!");
  }
  else if (userChoice === "rock" && pcChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock.");
  }
  else if (userChoice === "rock" && pcChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats Scissors.");
  }
  //
  else if (userChoice === "paper" && pcChoice === "paper"){
    console.log("It's a tie!");
  }
  else if (userChoice === "paper" && pcChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats Paper.");
  }
  else if (userChoice === "paper" && pcChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats Rock.");
  }
  //
  else if (userChoice === "scissors" && pcChoice === "scissors"){
    console.log("It's a tie!");
  }
  else if (userChoice === "scissors" && pcChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors.");
  }
  else if (userChoice === "scissors" && pcChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats Paper.");
  }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
