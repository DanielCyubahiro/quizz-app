const answerButton = document.querySelector('[data-js="card-button"]');
const answer = document.querySelector('[data-js="card-answer"]');
const bookmarkIcon = document.querySelector('[data-js="card-bookmark"]');

answerButton.addEventListener('click', () => {
  answer.classList.toggle('show');
  answerButton.textContent = answerButton.textContent === 'Show Answer'
      ? 'Hide Answer'
      : 'Show Answer';
});

bookmarkIcon.addEventListener('click', () => {
  bookmarkIcon.classList.toggle('icon--active');
});

