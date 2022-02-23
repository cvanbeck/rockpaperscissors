function computerPlay() {
    roll = Math.random();
    if (roll < (1 / 3)) {
        hand = "rock";
    }
    else if (roll >= (1 / 3) && roll < (2 / 3)) {
        hand = "paper";
    }
    else if (roll >= (2 / 3)) {
        hand = "scissors";
    }
    return hand
}

function playRound(player) {
    cpuSelection = computerPlay();
    console.log(cpuSelection)
    if (player == cpuSelection) {
        console.log("draw");
        return "draw"
    }
    else if ((player == "rock" && cpuSelection == "paper") || (player == "paper" && cpuSelection == "scissors")
        || (player == "scissors" && cpuSelection == "rock")) {
        console.log("lose");
        ++gamesPlayed
        return "lose"
    }
    else if ((player == "rock" && cpuSelection == "scissors") || (player == "paper" && cpuSelection == "rock")
        || (player == "scissors" && cpuSelection == "paper")) {
        console.log("win")
        ++gamesPlayed
        return "win"
    }
}



let gamesPlayed = 0;

const chooseRock = document.querySelector("#rock");
chooseRock.addEventListener("click", () => {
    let playerChoice = "rock";
    playRound(playerChoice)
    console.log(gamesPlayed);
    winChecker();

})

const choosePaper = document.querySelector("#paper");
choosePaper.addEventListener("click", () => {
    let playerChoice = "paper";
    playRound(playerChoice)
    ++gamesPlayed;
})

const chooseScissors = document.querySelector("#scissors");
chooseScissors.addEventListener("click", () => {
    let playerChoice = "scissors";
    playRound(playerChoice);
    ++gamesPlayed;
})

function winChecker() {
    if (gamesPlayed % 5 == 0) {
        console.log("You win!!!!!!")
    }
}