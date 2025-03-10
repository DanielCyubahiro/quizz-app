const answerButton = document.querySelector('[data-js="card-button"]');
const answerCard = document.querySelector('[data-js="card-answer"]');


// answerButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         cardAnswer.classList.toggle('show');
//         button.textContent = button.textContent === 'Show Answer' ? 'Hide Answer' : 'Show Answer';
//
//     })
// })

answerButton.addEventListener('click', () => {
    answerCard.classList.toggle('show');
    answerButton.textContent = answerButton.textContent === 'Show Answer' ? 'Hide Answer' : 'Show Answer';

})