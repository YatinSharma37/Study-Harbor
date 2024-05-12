let randomNum;
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  randomNum = Math.random();
  if (randomNum <= 0.33) {
    computerSelection = "ROCK";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    computerSelection = "PAPER";
  } else {
    computerSelection = "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return "It's a tie!, try again";
  } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
    playerScore++;
    return "You won! PAPER beats ROCK";
  } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    computerScore++;
    return "You lost! ROCK beats SCISSORS";
  } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    computerScore++;
    return "You lost! PAPER beats ROCK";
  } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
    playerScore++;
    return "You won! SCISSORS beats PAPER";
  } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    computerScore++;
    return "You lost! SCISSORS beats PAPER";
  } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
    playerScore++;
    return "You won! ROCK beats SCISSORS";
  } else {
    alert("invalid input");
    return "invalid input, try again";
  }
}

function updateResult(result) {
  if (playerScore < 5 && computerScore < 5) {
    output.style["background-color"] = "rgb(18, 18, 18)";
    output.style["height"] = "20vh";
    output.style["width"] = "80%";
    output.style["margin-left"] = "7.5%";
    output.style["color"] = "rgb(240, 240, 70)";
    output.style["padding"] = "1em";
    output.innerHTML =
      result +
      "<br>" +
      "Your score: " +
      playerScore +
      "<br>" +
      "Computer score: " +
      computerScore;
  } else if (
    playerScore == 5 &&
    output.innerHTML != "You lost the game, Better luck next time"
  ) {
    output.innerHTML = "Congratulations! You won the game";
  } else if (
    computerScore == 5 &&
    output.innerHTML != "Congratulations! You won the game"
  ) {
    output.innerHTML = "You lost the game, Better luck next time";
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const output = document.querySelector(".result");
rock.addEventListener("click", () => {
  playerSelection = "ROCK";
  getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateResult(result);
});

paper.addEventListener("click", () => {
  playerSelection = "PAPER";
  getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateResult(result);
});

scissors.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateResult(result);
});
