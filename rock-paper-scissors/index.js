const options = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// function getPlayerChoice() {
//   let validInput = false;

//   while ((validInput = false)) {
//     const choice = prompt("Rock Paper Scissors");
//     if (choice == null) {
//       continue;
//     }
//     const choiceCase = choice.toLowerCase();
//     if (options.includes(choiceCase)) {
//       validInput = true;
//       return choiceCase;
//     }
//   }
// }

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

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  let gameWinner = "";

  // for (let i = 0; i < 5; i++) {
  //   const playerSelection = "rock";
  //   const computerSelection = getComputerChoice();

  //   // console.log(playRound(playerSelection, computerSelection));

  //   if (checkWinner(playerSelection, computerSelection) == "player") {
  //     scorePlayer++;
  //   } else if (checkWinner(playerSelection, computerSelection) == "computer") {
  //     scoreComputer++;
  //   }
  // }
  // if (scorePlayer > scoreComputer) {
  //   console.log("Player won");
  // } else if (scorePlayer < scoreComputer) {
  //   console.log("Computer won");
  // } else {
  //   console.log("it's a tie");
  // }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.className;
      const computerSelection = getComputerChoice();
      battleWinText.textContent = playRound(playerSelection, computerSelection);
      playerWinText.textContent = "Player score: " + scorePlayer;
      computerWinText.textContent = "Computer score: " + scoreComputer;
      endGame();
    });
  });

  function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie") {
      return "It's a tie";
    } else if (result == "player") {
      scorePlayer++;
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      scoreComputer++;
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  function endGame() {
    if (scorePlayer == 5) {
      gameWinner = "You win!";
      gameWinText.textContent = gameWinner;

      //disable buttons
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
      document.getElementById("3").disabled = true;

      //replay button DOM
      const playAgainBtn = document.createElement("button");
      playAgainBtn.textContent = "Play Again";
      resultDOM.appendChild(playAgainBtn);

      //reload page
      playAgainBtn.addEventListener("clock", () => {
        location.reload();
      });
    } else if (scoreComputer == 5) {
      gameWinner = "Computer wins!";
      gameWinText.textContent = gameWinner;

      //disable buttons
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
      document.getElementById("3").disabled = true;

      //replay button DOM
      const playAgainBtn = document.createElement("button");
      playAgainBtn.textContent = "Play Again";
      resultDOM.appendChild(playAgainBtn);

      //reload page
      playAgainBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  }

  // DOM manipulation
  const container = document.querySelector("#container");
  const resultDOM = document.createElement("div");
  resultDOM.style.marginTop = "20px";
  container.appendChild(resultDOM);

  //player win DOM
  const playerWinText = document.createElement("p");
  playerWinText.style.color = "blue";
  playerWinText.textContent = "Player score: " + scorePlayer;
  resultDOM.appendChild(playerWinText);

  // computer win DOM
  const computerWinText = document.createElement("p");
  computerWinText.style.color = "blue";
  computerWinText.textContent = "Computer score: " + scoreComputer;
  resultDOM.appendChild(computerWinText);

  // battle win DOM
  const battleWinText = document.createElement("p");
  battleWinText.style.color = "black";
  resultDOM.appendChild(battleWinText);

  // game win DOM
  const gameWinText = document.createElement("p");
  gameWinText.style.color = "orange";
  gameWinText.textContent = gameWinner;
  resultDOM.appendChild(gameWinText);
}

game();
