// Playing in UI
const btnNewGame = document.querySelector('.btn--new');

let computerScores = 0;
let playerScores = 0;

const newGame = function () {
  playerScores = 0;
  computerScores = 0;

  // Update the scores
  document.getElementById('player--scores').innerHTML = playerScores;
  document.getElementById('computer--scores').innerHTML = computerScores;

  // Clear the results
  document.getElementById('result').innerHTML = '';
};

btnNewGame.addEventListener('click', newGame);

const playGame = function (playerSelection) {
  const choices = ['rock', 'paper', 'scissor'];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];

  let result = '';
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissor') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissor' && computerSelection === 'paper')
  ) {
    result = 'You win!';
    playerScores++;
  } else {
    result = 'Computer wins!';
    computerScores++;
  }

  //Display scores
  document.getElementById('player--scores').innerHTML = playerScores;
  document.getElementById('computer--scores').innerHTML = computerScores;

  // // Display the results
  document.getElementById(
    'result'
  ).innerHTML = `Player chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;

  // Condition for 5 rounds
  if (playerScores === 5 || computerScores === 5) {
    if (playerScores > computerScores) {
      window.prompt('Congratulations! You won the game!');
    } else if (playerScores <computerScores) {
      window.prompt('Oops! You lost the game.');
    } else {
      window.prompt("It's a tie! The game ended in a draw.");
    }

    newGame();
  }
};

/////////////////////////////// Playing in Console /////////////////
/*
// Function to get the computer's choice
const getcomputerSelection = function () {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//  Single round
const playRound = function (playerSelection, computerSelection) {
  playerSelection =
    playerSelection.toLowerCase() || playerSelection.toUpperCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'paper' && computerSelection === 'Rock') ||
    (playerSelection === 'scissors' && computerSelection === 'Paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
};

// 5 rounds
const game = function () {
  let playerScores = 0;
  let computerScores = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Enter your choice (Rock, Paper, or Scissors):'
    );
    const computerSelection = getcomputerSelection();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('Win')) {
      playerScores++;
    } else if (result.includes('Lose')) {
      computerScores++;
    }
  }

  if (playerScores > computerScores) {
    console.log('Congratulations! You won the game!');
  } else if (playerScores < computerScores) {
    console.log('Oops! You lost the game.');
  } else {
    console.log("It's a tie! The game ended in a draw.");
  }
};

game();
*/