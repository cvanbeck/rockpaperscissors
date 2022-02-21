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
        console.log("It's a draw")
        return "draw"
    }
    else if (playerSelection == "rock") {
        if (cpuSelection == "paper") {
            console.log(`You lose, ${cpuSelection} beats ${playerSelection}. `);
            return "loss"
        }
        else if (cpuSelection == "scissors") {
            console.log(`You win, ${playerSelection} beats ${cpuSelection}. `);
            return "win"
        }
    }

    else if (playerSelection == "paper") {
        if (cpuSelection == "scissors") {
            console.log(`You lose, ${cpuSelection} beats ${playerSelection}. `);
            return "loss"
        }
        else if (cpuSelection == "rock") {
            console.log(`You win, ${playerSelection} beats ${cpuSelection}. `);
            return "win"
        }
    }

    else if (playerSelection == "scissors") {
        if (cpuSelection == "rock") {
            console.log(`You lose, ${cpuSelection} beats ${playerSelection}. `);
            return "loss"
        }
        else if (cpuSelection == "paper") {
            console.log(`You win, ${playerSelection} beats ${cpuSelection}. `);
            return "win"
        }
    }
}

function playFive() {
    for (let i = 0; i < 5; i++) {
        let player = playerChoice();
        let computer = computerPlay();
        console.log(`You chose ${player}!`);
        console.log(`The computer chose ${computer}!`);
        playRound(player, computer);
        
     }
}
