const answerButton = document.querySelector('[data-js="card-button"]');
const answerCard = document.querySelector('[data-js="card-answer"]');


answerButton.addEventListener('click', () => {
    answerCard.classList.toggle('show');
    answerButton.textContent = answerButton.textContent === 'Show Answer' ? 'Hide Answer' : 'Show Answer';

})