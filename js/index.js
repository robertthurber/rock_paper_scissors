//creating variables
let humanScore = 0;
let computerScore = 0;

// creating a function getting the computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "Rock";
      console.log("Computer Selected Rock");
      break;
    case 1:
      computerChoice = "Paper";
      console.log("Computer Selected Paper");
      break;
    case 2:
      computerChoice = "Scissors";
      console.log(" Computer Selected Scissors");
      break;
    default:
      console.log("Something went wrong");
  }
  return computerChoice;
}

//creating a function getting the human choice. Prompts users to enter a choice. make sure string is in correct formate
function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper, or Scissors");
  //here we are just taking what the user enters and converting it to the style that i need for checking, not making sure the user enters correct thing
  let firstCharUserChoice = userChoice.charAt(0).toUpperCase();
  let restOfString = userChoice.substring(1).toLowerCase();
  let humanSelection = firstCharUserChoice + restOfString;
  return humanSelection;
}

// creating a function that will determine the winner and add to the score

function playRound(humanChoice, computerChoice) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  if (humanSelection == "Rock" && computerSelection == "Rock") {
    console.log("It's a Tie");
  } else if (humanSelection == "Rock" && computerSelection == "Paper") {
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (humanSelection == "Rock" && computerSelection == "Scissors") {
    console.log("You Wins!");
    humanScore += 1;
  } else if (humanSelection == "Paper" && computerSelection == "Paper") {
    console.log("It's a Tie");
  } else if (humanSelection == "Paper" && computerSelection == "Rock") {
    console.log("You Win!");
    humanScore += 1;
  } else if (humanSelection == "Paper" && computerSelection == "Scissors") {
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (humanSelection == "Scissors" && computerSelection == "Scissors") {
    console.log("It's a Tie");
  } else if (humanSelection == "Scissors" && computerSelection == "Rock") {
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You Win!");
    humanScore += 1;
  } else {
    console.log("Something went wrong");
  }
}
function playGame() {
  let i = 0;
  while (i <= 5) {
    playRound();
    console.log("Computer score is: " + computerScore);
    console.log("Human score is: " + humanScore);
    i++;
  }
}

playGame();
