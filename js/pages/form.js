const newQuestion = document.querySelector('[data-js="new-question"]');
const newAnswer = document.querySelector('[data-js="new-answer"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Create card
  if (newQuestion.value.length && newAnswer.value.length) {
    form.insertAdjacentHTML('afterend',
        `<section class="card">
      <p class="card__question">
        ${newQuestion.value}
      </p>
      <button class="button card__button" data-js="card-button">Show Answer</button>
      <p class="card__answer" data-js="card-answer">
        ${newAnswer.value}
      </p>
      <i data-js="card-bookmark" class="card__icon icon--active" data-lucide="bookmark"></i>
    </section>`);
  }

  //Clear the inputs for a new question
  newQuestion.innerHTML = '';
  newAnswer.innerHTML = '';
});
