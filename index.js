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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);
    if (result === "draw") {
    } else if (result === "win") {
      humanScore++;
    } else {
      computerScore++;
    }
  }
  if (humanScore > computerScore) {
    alert("You won! Congrats!");
  } else if (humanScore < computerScore) {
    alert("You lost!");
  } else {
    alert("It's a draw!");
  }
}

playGame();
