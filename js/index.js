const answerButton = document.querySelector('[data-js="card-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

//Show the answer
answerButton.addEventListener('click', () => {
    cardAnswer.classList.toggle('show');
})

//Change the button message
answerButton.addEventListener('click', () => {
    answerButton.textContent = answerButton.textContent === 'Show Answer' ? 'Hide Answer' : 'Show Answer';
})