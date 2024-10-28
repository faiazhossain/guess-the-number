'use strict';
const x = function () {
  console.log(23);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === 10) {
    document.querySelector('.message').textContent =
      '🎉 Congrats you guessed it right!';
  } else {
    document.querySelector('.message').textContent = 'Try Again!';
  }
});
