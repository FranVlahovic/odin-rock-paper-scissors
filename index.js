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
    let userChoice = prompt("Enter Rock, Paper or Scissors: ")

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
