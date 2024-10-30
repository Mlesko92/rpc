const divBlock = document.createElement("div");
const gameResultsBlock = document.createElement("span");
const totalResultsHuman = document.createElement("span");
const totalResultsComputer = document.createElement("span");

const scissorsButton = document.createElement("button");
scissorsButton.style.cssText =
  "margin: 6px; padding: 12px 6px; background-color: lightblue";

const paperButton = document.createElement("button");
paperButton.style.cssText =
  "margin: 6px; padding: 12px 6px; background-color: lightblue";

const rockButton = document.createElement("button");
rockButton.style.cssText =
  "margin: 6px; padding: 12px 6px; background-color: lightblue";

const body = document.querySelector("body");

let humanScore = 0;
let computerScore = 0;
let roundCounter = 1;

divBlock.appendChild(scissorsButton);
scissorsButton.textContent = "Scissors";

divBlock.appendChild(paperButton);
paperButton.textContent = "Paper";

divBlock.appendChild(rockButton);
rockButton.textContent = "Rock";

body.appendChild(divBlock);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target.textContent;
    const launchGame = playGame(clickedButton);
    gameResultsBlock.textContent = launchGame;
    gameResultsBlock.style.cssText = "font-weight: bold;";

    body.appendChild(gameResultsBlock);
    totalResultsHuman.textContent = ` Human: ${humanScore}; `;
    totalResultsHuman.style.cssText = "background-color: lightyellow";
    totalResultsComputer.textContent = `Computer: ${computerScore};`;
    totalResultsComputer.style.cssText = "background-color: lightgrey";

    body.appendChild(totalResultsHuman);
    body.appendChild(totalResultsComputer);

    if (humanScore > 4) {
      alert("You won!");
      humanScore = 0;
      computerScore = 0;
      roundCounter = 0;
      const results = document.querySelectorAll(".computer-choice")
      results.forEach(el => el.remove())
    } else if (computerScore > 4) {
      alert("You lost!");
      humanScore = 0;
      computerScore = 0;
      roundCounter = 1;
      const results = document.querySelectorAll(".computer-choice")
      results.forEach(el => el.remove())
    }
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
}

function getHumanChoice() {
  const humanChoice = prompt("What is your choice?");
  switch (humanChoice) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
    default:
      alert("Could not recognize your choice!");
  }
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return 1;
  } else {
    return 2;
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const calculateWinner = getWinner(humanChoice, computerChoice);
  if (calculateWinner === 0) {
    console.log("It's a tie!");
    return "draw";
  } else if (calculateWinner === 1) {
    console.log(`${humanChoice} beats ${computerChoice}! You won!`);
    return "win";
  } else {
    console.log(`${humanChoice} cannot beat ${computerChoice}! You lost!`);
    return "lose";
  }
}

function playGame(playerSelection) {
  const computerSelection = getComputerChoice();
  const divComputerChoice = document.createElement("div");
  divComputerChoice.className = "computer-choice";
  divComputerChoice.textContent = `Round ${roundCounter}. Computer threw - ${computerSelection}`;
  body.appendChild(divComputerChoice);
  const result = playRound(playerSelection, computerSelection);
  if (result === "draw") {
    humanScore++;
    computerScore++;
  } else if (result === "win") {
    humanScore++;
  } else {
    computerScore++;
  }
  roundCounter++;

  if (humanScore > computerScore) {
    console.log([humanScore, computerScore]);
    return "You won! Congrats!";
  } else if (humanScore < computerScore) {
    console.log([humanScore, computerScore]);
    return "You lost!";
  } else {
    console.log([humanScore, computerScore]);
    return "It's a draw!";
  }
}
