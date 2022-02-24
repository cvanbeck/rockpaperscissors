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
        ++gamesLost
        return "lose"
    }
    else if ((player == "rock" && cpuSelection == "scissors") || (player == "paper" && cpuSelection == "rock")
        || (player == "scissors" && cpuSelection == "paper")) {
        console.log("win")
        ++gamesWon
        return "win"
    }
}

let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

const battleTex = document.querySelector(".battletext")

const chooseRock = document.querySelector("#rock");

chooseRock.addEventListener("click", () => {
    let playerChoice = "rock";
    let result = playRound(playerChoice);
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
    winChecker();

})

const choosePaper = document.querySelector("#paper");
choosePaper.addEventListener("click", () => {
    let playerChoice = "paper";
    playRound(playerChoice);
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
    winChecker();
})

const chooseScissors = document.querySelector("#scissors");
chooseScissors.addEventListener("click", () => {
    let playerChoice = "scissors";
    playRound(playerChoice);
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
    winChecker();
})

function winChecker() {
    if (gamesWon == 3) {
        console.log("Congrats! You beat the computer!")
        gamesLost = 0;
        gamesWon = 0
    }
    else if (gamesLost == 3) {
        console.log("Bad luck! You lost to a robot")
        gamesLost = 0;
        gamesWon = 0
    }
}



const player1 = document.querySelector(".playerNoScore1")
const player2 = document.querySelector(".playerNoScore2")
const player3 = document.querySelector(".playerNoScore3") 

const cpu1 = document.querySelector(".cpuNoScore1")
const cpu2 = document.querySelector(".cpuNoScore2")
const cpu3 = document.querySelector(".cpuNoScore3") 

function givePlayerScoreboard() {
    if (gamesWon == 1) {
        player1.classList.add("playerScore")
    }
    else if (gamesWon == 2) {
        player2.classList.add("playerScore")
    }
    else if (gamesWon == 3) {
        player3.classList.add("playerScore")
    }
}

function giveCpuScoreboard() {
    if (gamesLost == 1) {
        cpu1.classList.add("playerScore")
    }
    else if (gamesLost == 2) {
        cpu2.classList.add("playerScore")
    }
    else if (gamesLost == 3) {
        cpu3.classList.add("playerScore")
    }
}

function giveScoreboard() {
    givePlayerScoreboard();
    giveCpuScoreboard();
}

function clearScoreboard() {
    if (gamesLost == 3 || gamesWon == 3) {
        player1.classList.remove("playerScore");
        player2.classList.remove("playerScore");
        player3.classList.remove("playerScore");
        cpu1.classList.remove("playerScore");
        cpu2.classList.remove("playerScore");
        cpu3.classList.remove("playerScore");
        console.log("hello world")
    } 
}