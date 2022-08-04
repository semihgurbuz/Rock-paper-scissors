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

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter your choice").toLowerCase();
    let message = playRound(playerSelection, computerSelection);
    if (message === "You lose !") {
      computerScore++;
      console.log(message);
    } else if (message === "You win !") {
      playerScore++;
      console.log(message);
    } else if (
      message ===
      "Invalid choice. You lose ! Please enter 'rock','paper' or 'scissors'."
    ) {
      alert(message);
      computerScore++;
    } else {
      console.log(message);
    }
  }
  let score;
  if (playerScore > computerScore) {
    score = `Final score is ${playerScore}-${computerScore}, You Win !`;
  } else if (playerScore < computerScore) {
    score = `Final score is ${playerScore}-${computerScore}, You Lose !`;
  } else {
    score = `Final score is ${playerScore}-${computerScore}, Draw!`;
  }
  return score;
};

alert(game());
