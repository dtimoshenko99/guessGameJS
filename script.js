'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;
const scoreText = document.querySelector('.score');
const numberBox = document.querySelector('.number');
const bodyTag = document.querySelector('body');
const guessBox = document.querySelector('.guess');
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
// AGAIN button function
document.querySelector('.again').addEventListener('click', function () {
  // reassign number value to get new number
  number = Math.trunc(Math.random() * 20) + 1;
  // set Score value and text
  score = 20;
  scoreText.textContent = 20;
  // set background color to defailt and stop displaying number
  bodyTag.style.backgroundColor = '#222';
  numberBox.style.width = '15rem';
  numberBox.textContent = '?';
  // set guess box value to empty
  guessBox.value = '';
  // set message to initial value
  displayMessage('Start guessing...');
});

// CHECK button function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessBox.value);

  // Check if score is greater than 1 -> if not then end the game
  if (score > 1) {
    // No input check
    if (!guess) {
      // Display message and lower the score and show it
      displayMessage('Please enter the number!');
      score--;
      scoreText.textContent = score;
    } // When player wins
    else if (number === guess) {
      // Display message + background color + show nunber
      displayMessage('Correct!');
      bodyTag.style.backgroundColor = 'green';
      numberBox.style.width = '30rem';
      numberBox.textContent = number;

      // If score is higher than previously scored highscore -> update highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      // If guess was wrong
    } else if (guess !== number) {
      // Display message depending on if the number is greater or smaller than the guess
      // Update score
      displayMessage(
        guess > number ? 'Guess is greater!' : 'Guess is smaller!'
      );
      score--;
      scoreText.textContent = score;
      // if guess is outside the limits -> display message and update score
      if (guess > 20 || guess < 1) {
        displayMessage('Number must be between 1 and 20');
        score--;
        scoreText.textContent = score;
      }
    }
  }
  // User lost
  else {
    document.querySelector('.score').textContent = 0;
    displayMessage('You lost the game!');
    bodyTag.style.backgroundColor = 'red';
  }
});
