
function computerPlay() {
    roll = Math.random();
    if (roll < (1 / 3)) {
        hand = "rock";
    }
    else if (roll >= (1/3) && roll < (2/3)) {
        hand = "paper";
    }
    else if (roll >= (2/3)) {
        hand = "scissors";
    }
    return hand
}

function playerChoice() {
    choice = prompt("Rock paper or scissors").toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
    }
    else {
        console.log("Please pick rock, paper, or scissors");
        return 0
    } 
}

function playRound(playerSelection, cpuSelection) {
    if (playerSelection == cpuSelection) {
        return "draw"
    }
    else if ((playerSelection == "rock" && cpuSelection == "paper") || (playerSelection == "paper" && cpuSelection == "scissors") 
                        || (playerSelection == "scissors"  && cpuSelection == "rock")) {
             return "los"
             }
    else if ((playerSelection == "rock" && cpuSelection == "scissors" )|| (playerSelection == "paper" && cpuSelection == "rock") 
                        || (playerSelection == "scissors"  && cpuSelection == "paper")) {
             return "win"
             }
        
        
}

function playFive() {
    for (let i = 0; i < 5;) {
        let player = playerChoice();
        let computer = computerPlay();
        console.log(`You chose ${player}!`);
        console.log(`The computer chose ${computer}!`);
        let outcome = playRound(player, computer);
        
        if (outcome == "win" ){
            console.log(`You win, ${player} beats ${computer}.`);
            ++i
        }
        else if (outcome == "lose") {
            console.log(`You lose, ${computer} beats ${player}.`);
            ++i
        }
        else {
            console.log("It's a draw, play again.")
        }
    
     }
}

const chooseHandPlease = document.querySelector(".choice");
chooseHandPlease.addEventListener("click", () => {
    alert("I should do the lesson proeprly :)")
})