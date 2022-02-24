function computerPlay() {
    roll = Math.random();
    if (roll < (1 / 3)) {
        hand = "rock";
        console.log("rock")
    }
    else if (roll >= (1 / 3) && roll < (2 / 3)) {
        hand = "paper";
        console.log("paper")
    }
    else if (roll >= (2 / 3)) {
        hand = "scissors";
        console.log("scissors")
    }
    return hand
}

function playRound(player, cpu) {
    /* cpuSelection = computerPlay();
     console.log(cpuSelection) */
    if (player == cpu) {
        console.log("draw");
        return "draw"
    }
    else if ((player == "rock" && cpu == "paper") || (player == "paper" && cpu == "scissors")
        || (player == "scissors" && cpu == "rock")) {
        console.log("lose");
        ++gamesLost
        return "lose"
    }
    else if ((player == "rock" && cpu == "scissors") || (player == "paper" && cpu == "rock")
        || (player == "scissors" && cpu == "paper")) {
        console.log("win")
        ++gamesWon
        return "win"
    }
}

let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;

const chooseRock = document.querySelector("#rock");

chooseRock.addEventListener("click", () => {
    let playerChoice = "rock";
    let cpuSelection = computerPlay();
    let result = playRound(playerChoice, cpuSelection);
    displayHand(playerChoice, cpuSelection);
    changeBattleText(result, playerChoice, cpuSelection)
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
     /* winChecker(); */
})
chooseRock.addEventListener("mouseover", () => {
    playerHand.textContent = "ROCK?";
    cpuHand.textContent = " ";
    clearScoreboard();


});


const choosePaper = document.querySelector("#paper");
choosePaper.addEventListener("click", () => {
    let playerChoice = "paper";
    let cpuSelection = computerPlay();
    let result = playRound(playerChoice, cpuSelection);
    displayHand(playerChoice, cpuSelection);
    changeBattleText(result, playerChoice, cpuSelection)
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
     /* winChecker(); */
})
choosePaper.addEventListener("mouseover", () => {
    playerHand.textContent = "PAPER?";
    cpuHand.textContent = " "
    clearScoreboard()

});


const chooseScissors = document.querySelector("#scissors");
chooseScissors.addEventListener("click", () => {
    let playerChoice = "scissors";
    let cpuSelection = computerPlay();
    let result = playRound(playerChoice, cpuSelection);
    displayHand(playerChoice, cpuSelection);
    changeBattleText(result, playerChoice, cpuSelection)
    console.log("won: " + gamesWon)
    console.log("lost: " + gamesLost)
    giveScoreboard()
    /* winChecker(); */

})
chooseScissors.addEventListener("mouseover", () => {
    playerHand.textContent = "SCISSORS?";
    cpuHand.textContent = " "
    clearScoreboard()

});


/* function winChecker() {
    if (gamesWon == 3) {
        battleText.textContent = "CONGRATULATIONS! YOU HAVE WON"
        playerHand.textContent = " "
        cpuHand.textContent = " "
    }
    else if (gamesLost == 3) {
        battleText.textContent = "you really just lost to a robot?"
        playerHand.textContent = " "
        cpuHand.textContent = " "
    }
} */



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
        battleText.textContent = "ROCK PAPER OR SCISSORS?"
        player1.classList.remove("playerScore");
        player2.classList.remove("playerScore");
        player3.classList.remove("playerScore");
        cpu1.classList.remove("playerScore");
        cpu2.classList.remove("playerScore");
        cpu3.classList.remove("playerScore");
        console.log("hello world")
        gamesLost = 0;
        gamesWon = 0;
        
    }
}

const playerHand = document.querySelector(".field-player")
const cpuHand = document.querySelector(".field-cpu")
function displayHand(playerchoice, cpuchoice) {
    playerHand.textContent = `YOU CHOSE: ${playerchoice.toUpperCase()}`
    cpuHand.textContent = `CPU CHOSE: ${cpuchoice.toUpperCase()}`
}

const battleText = document.querySelector(".actual-field")
function changeBattleText(result, playerHand, cpuHand) {
    if (result == "win") {
        battleText.textContent = ""
        battleText.textContent = `YOU WIN! ${playerHand.toUpperCase()} BEATS ${cpuHand.toUpperCase()}!`
    }
    else if (result == "lose") {
        battleText.textContent = " "
        battleText.textContent = `UNLUCKY! ${cpuHand.toUpperCase()} BEATS ${playerHand.toUpperCase()}`
    }
    else if (result == "draw") {
        battleText.textContent = " "
        battleText.textContent = "IT'S A DRAW, PLAY AGAIN."
    }
}