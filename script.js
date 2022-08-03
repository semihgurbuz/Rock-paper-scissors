// create a -message- variable
// create a new function using message variable to 


const getComputerChoice = () => {
  let array = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

let playerSelection= prompt("Enter your choice").toLowerCase();
let computerSelection= getComputerChoice();

const playRound= (playerSelection,computerSelection) {
if (playerSelection===computerSelection){
    return "Draw!";
} else if(playerSelection==="rock" && computerSelection==="paper") {
    return "You lose !";
} else if (playerSelection==="rock" && computerSelection==="scissors"){
    return "You win !";
} else if(playerSelection==="paper" && computerSelection==="scissors"){
    return "You win !";
} else if(playerSelection==="paper" && computerSelection==="rock"){
    return "You lose !";
} else if(playerSelection==="scissors" && computerSelection==="rock"){
    return "You lose !";
} else if(playerSelection==="scissors" && computerSelection==="paper"){
    return "You win !";
}
}
