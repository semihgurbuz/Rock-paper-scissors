const getComputerChoice = () => {
  let array = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  let result;
  if (playerSelection === computerSelection) {
    result = "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You lose !";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You win !";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You win !";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You lose !";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You lose !";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You win !";
  } else {
    result =
      "Invalid choice. Please refresh the page and enter 'rock','paper' or 'scissors'.";
  }
  return result;
};

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  getMessage();
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  getMessage();
});

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  getMessage();
});

const scoreKeeper = () => {
  let score;
  if (playerScore === 5) {
    score = `Final score is ${playerScore}-${computerScore}, You Won ! Please refresh the page to page to start again.`;
    document.querySelector(".final-result").textContent = score;
  } else if (computerScore === 5) {
    score = `Final score is ${playerScore}-${computerScore}, You Lost ! Please refresh the page to page to start again.`;
    document.querySelector(".final-result").textContent = score;
  }
};

const getMessage = () => {
  let gameResult = document.querySelector(".results");

  let message = playRound("paper", getComputerChoice());

  if (playerScore < 5 && computerScore < 5) {
    gameResult.textContent = message;
  } else {
    gameResult.textContent = "";
  }

  if (message === "You lose !" && computerScore < 5 && playerScore != 5) {
    computerScore++;
  } else if (message === "You win !" && playerScore < 5 && computerScore != 5) {
    playerScore++;
  } else {
    console.log(message);
  }

  document.querySelector(
    ".player-score"
  ).textContent = `Your score: ${playerScore}`;
  document.querySelector(
    ".computer-score"
  ).textContent = `Computer score ${computerScore}`;
  scoreKeeper();
};

// const game = () => {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (i = 0; i < 5; i++) {
//     let computerSelection = getComputerChoice();
//     let playerSelection = prompt("Enter your choice").toLowerCase();
//     let message = playRound(playerSelection, computerSelection);
//     if (message === "You lose !") {
//       computerScore++;
//       console.log(message);
//     } else if (message === "You win !") {
//       playerScore++;
//       console.log(message);
//     } else if (
//       message ===
//       "Invalid choice. You lose ! Please enter 'rock','paper' or 'scissors'."
//     ) {
//       alert(message);
//       computerScore++;
//     } else {
//       console.log(message);
//     }
//   }
//   let score;
//   if (playerScore > computerScore) {
//     score = `Final score is ${playerScore}-${computerScore}, You Win !`;
//   } else if (playerScore < computerScore) {
//     score = `Final score is ${playerScore}-${computerScore}, You Lose !`;
//   } else {
//     score = `Final score is ${playerScore}-${computerScore}, Draw!`;
//   }
//   return score;
// };

// alert(game());
