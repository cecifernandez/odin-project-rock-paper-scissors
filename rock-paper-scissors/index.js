const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors)") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "tie") {
    return "It's a tie";
  } else if (result == "player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function getPlayerChoice() {
  let validInput = false;

  while ((validInput = false)) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceCase = choice.toLowerCase();
    if (options.includes(choiceCase)) {
      validInput = true;
      return choiceCase;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    if (checkWinner(playerSelection, computerSelection) == "player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "computer") {
      scoreComputer++;
    }
  }
  if (scorePlayer > scoreComputer) {
    console.log("Player won");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer won");
  } else {
    console.log("it's a tie");
  }
}

game();
