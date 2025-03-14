const newQuestion = document.querySelector('[data-js="new-question"]');
const newAnswer = document.querySelector('[data-js="new-answer"]');
const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (newQuestion.value.length && newAnswer.value.length) {

    const section = document.createElement('section');
    section.classList.add('card');

    const questionParagraph = document.createElement('p');
    questionParagraph.classList.add('card__question');
    questionParagraph.textContent = newQuestion.value;

    const button = document.createElement('button');
    button.classList.add('button', 'card__button');
    button.setAttribute('data-js', 'card-button');
    button.textContent = 'Show Answer';

    const answerParagraph = document.createElement('p');
    answerParagraph.classList.add('card__answer');
    answerParagraph.setAttribute('data-js', 'card-answer');
    answerParagraph.textContent = newAnswer.value;

    const icon = document.createElement('i');
    icon.classList.add('card__icon', 'icon--active');

    section.appendChild(questionParagraph);
    section.appendChild(button);
    section.appendChild(answerParagraph);
    section.appendChild(icon);

    form.insertAdjacentElement('afterend', section);

    //Clear the inputs for a new question
    newQuestion.value = '';
    newAnswer.value = '';
  }

});
