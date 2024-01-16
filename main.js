
// This function makes a random choice.
let getComputerChoice = () => {
  let choose = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * 3);
  return choose[choice];
};
// below variables are declared for use in functions later
let computerSelection = getComputerChoice();
let playerSelection = prompt('ROCK,Paper,or Scissors..... DECIDE')
playerSelection = playerSelection.toLowerCase();
// just for testing.
console.log({ computerSelection });
console.log({ playerSelection });

// This function takes choice of user and computer and decides who won or is it a draw
function round (playerSelection, computerSelection) {
   
    if (computerSelection !== playerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      return playerSelection === "rock" ? "you won" : "Computer wins";
    }
     else if (
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      return playerSelection === "scissors" ? "you won" : "Computer wins";
    } else if (
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      return playerSelection === "paper" ? "you won" : "Computer wins";
    }
  }else{
    console.log('draw')
    return `Draw`
  }
};
//playing a round
console.log("result of the round: ", round(playerSelection,computerSelection));
