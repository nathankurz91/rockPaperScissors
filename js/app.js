let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallWordUser = "user".fontsize(3).sub();
const smallWordComp = "comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const rand = Math.floor(Math.random() * 3);
    const finalChoice = choices[rand];
    return finalChoice;
}

function convertToWord(letter) {
    if (letter === "r") {
        return "Rock";
    } else if (letter === "p") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(user) + smallWordUser + " beats " + convertToWord(computer) + smallWordComp + ". YOU WIN!!!";
}

function lose(user, computer) {
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = convertToWord(user) + smallWordUser + " does not beat " + convertToWord(computer) + smallWordComp + ". You Lose...";
}

function draw(user, computer) {
    result_div.innerHTML = convertToWord(user) + smallWordUser + " ties " + convertToWord(computer) + smallWordComp + ". It's a draw."
}

function game(userChoice) {
    console.log("You chose " + userChoice);
    const compChoice = getComputerChoice();
    console.log("Computer chose " + compChoice);

    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();
