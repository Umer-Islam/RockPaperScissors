const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(choice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (choice === computerChoice) {
    result = "Draw";
  } else {
    switch (choice) {
      case "rock":
        result = computerChoice === "scissors" ? "you win" : "you lose";
        break;
      case "paper":
        result = computerChoice === "rock" ? "you win" : "you lose";
        break;

      case "scissors":
      result = computerChoice === "paper" ? "you win" : "you lose";
      break;

    }
  }

  player.textContent = `Player: ${choice}`;
  computer.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = `${result}`;

  switch (result) {
    case "you win":
      document.getElementById("playerScoreDisplay").style.color = 'green'
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "you lose":
      document.getElementById("computerScoreDisplay").style.color = 'red'
      
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  if(result ==='you win'){
    resultDisplay.style.color= 'green'
  }else if(result ==='you lose'){
    resultDisplay.style.color= 'red'}
    else{
      resultDisplay.style.color= 'black'
    }
}
