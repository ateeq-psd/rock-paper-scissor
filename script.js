function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        return 'rock';
    }
    else if (randomNumber === 2){
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function getHumanChoice(){
    let userInput = prompt('Rock, Paper or Scissor?');
    userInput === userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput ===  'scissor'){
        return userInput;
    }else {
        alert('Invalid Choice, please type rock, paper or scissor');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return 'its a draw';
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper'){
        return 'you Lose, computer chose paper';
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissor'){
        return 'you Lose, computer chose scissor';
    }
    else if (humanChoice === 'scissor' && computerChoice === 'rock'){
        return 'you Lose, computer chose scissor';
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor'){
        return 'you Win, computer chose scissor';
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
        return 'you Win, computer chose rock';
    }
    else if (humanChoice === 'scissor' && computerChoice === 'paper'){
        return 'you Win, computer chose paper';
    }
}

let result = playRound(getComputerChoice(),getHumanChoice());

console.log(result);





