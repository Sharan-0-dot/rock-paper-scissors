let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const drawGame = () => {
     msg.innerText = "Game was Draw, Play again";
     msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `You win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore++;
        compScorePara.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = getComputerChoice();
    if(userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})