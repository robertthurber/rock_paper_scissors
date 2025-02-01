// creating a function getting the computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
    default:
      console.log("Something went wrong");
  }
  return computerChoice;
}

//creating a function getting the human choice. Prompts users to enter a choice. make sure string is in correct formate
function getHumanChoice() {
  let userChoice = prompt("Choose: Rock, Paper, or Scissors");
  let firstCharUserChoice = userChoice.charAt(0).toUpperCase();
  let restOfString = userChoice.substring(1).toLowerCase();
  let humanSelection = firstCharUserChoice + restOfString;
  return humanSelection;
}

getHumanChoice();

console.log(getHumanChoice());
