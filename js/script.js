function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "rock"){
        return "Tie!";
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats rock";
    }
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats scissors"
    }
    if(playerSelection === "paper" && computerSelection === "paper"){
        return "Tie!"
    }
    if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beat paper";
    }
    if(playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats rock"
    }
    if(playerSelection === "scissors" && computerSelection === "scissors"){
        return "Tie!";
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats scissors";
    }
    if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beat paper"
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice!");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();