function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

// function getHumanChoice() {
 
//   userInput === userInput.toLowerCase();
//   if (
//     userInput === "rock" ||
//     userInput === "paper" ||
//     userInput === "scissor"
//   ) {
//     return userInput;
//   } else {
//     alert("Invalid Choice, please type rock, paper or scissor");
//     return getHumanChoice();
//   }
// }

let gameCount = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
  button.addEventListener('click', function(event){
    let computerChoice = getComputerChoice();
    let tempResult = playRound(event.target.id, computerChoice);
    console.log(tempResult);
    gameCount++;
    if(gameCount == 5){
      console.log(`Final Scores: Human ${humanScore}, Computer ${computerScore}`)
    }
    
  })
})


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "its a draw, computer chose " + computerChoice;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "you Lose, computer chose paper";
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore += 1;
    return "you Lose, computer chose scissor";
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore += 1;
    return "you Lose, computer chose rock";
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore += 1;
    return "you Win, computer chose scissor";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "you Win, computer chose rock";
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore += 1;
    return "you Win, computer chose paper";
  }
}

// function playGame() {
  
//     // const result = playRound(getHumanChoice(), getComputerChoice());
//     // console.log(result); // Display each round result
  
//   console.log(`Final Scores: Human ${humanScore}, Computer ${computerScore}`);
// }
// playGame();
